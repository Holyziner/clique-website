#!/usr/bin/env python3
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os

async def debug_quotes():
    # Connect to MongoDB
    MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
    client = AsyncIOMotorClient(MONGO_URL)
    database = client.clique_db
    quotes_collection = database.quotes
    
    print("🔍 Debugging quotes collection...")
    
    # Get all documents
    quotes = await quotes_collection.find().to_list(100)
    print(f"Found {len(quotes)} documents in quotes collection")
    
    for i, quote in enumerate(quotes):
        print(f"\n--- Document {i+1} ---")
        print(f"ID: {quote.get('id', 'Missing')}")
        print(f"Name: {quote.get('name', 'Missing')}")
        print(f"Email: {quote.get('email', 'Missing')}")
        print(f"WhatsApp: {quote.get('whatsapp', 'Missing')}")
        print(f"Product: {quote.get('product', 'Missing')}")
        print(f"Quantity: {quote.get('quantity', 'Missing')}")
        print(f"Message: {quote.get('message', 'N/A')}")
        print(f"Keys: {list(quote.keys())}")
        
        # Check if this is a contact message (has message field but no whatsapp/product/quantity)
        if 'message' in quote and ('whatsapp' not in quote or 'product' not in quote or 'quantity' not in quote):
            print("⚠️  This looks like a contact message in quotes collection!")
            
            # Move to contact_messages collection
            contact_collection = database.contact_messages
            contact_doc = {
                'id': quote.get('id'),
                'name': quote.get('name'),
                'email': quote.get('email'),
                'message': quote.get('message'),
                'created_at': quote.get('created_at')
            }
            await contact_collection.insert_one(contact_doc)
            print("✅ Moved to contact_messages collection")
            
            # Remove from quotes collection
            await quotes_collection.delete_one({'_id': quote['_id']})
            print("✅ Removed from quotes collection")

if __name__ == "__main__":
    asyncio.run(debug_quotes())