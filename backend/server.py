from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
from typing import Optional, List
import uuid

# Initialize FastAPI app
app = FastAPI(title="Clique Procurement API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URL)
database = client.clique_db

# Collections
quotes_collection = database.quotes
testimonials_collection = database.testimonials
faq_collection = database.faq

# Pydantic models
class QuoteRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    whatsapp: str = Field(..., min_length=10, max_length=20)
    product: str = Field(..., min_length=5, max_length=200)
    quantity: str = Field(..., min_length=1, max_length=100)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"

class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    company: str
    country: str
    quote: str
    rating: int = Field(..., ge=1, le=5)
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    order: int = 0
    is_active: bool = True

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)
    created_at: datetime = Field(default_factory=datetime.utcnow)

# API Routes
@app.get("/")
async def root():
    return {"message": "Clique Procurement API is running"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# Quote requests
@app.post("/api/quotes", status_code=status.HTTP_201_CREATED)
async def submit_quote_request(quote: QuoteRequest):
    try:
        quote_dict = quote.dict()
        result = await quotes_collection.insert_one(quote_dict)
        if result.inserted_id:
            return {"message": "Quote request submitted successfully", "id": quote.id}
        else:
            raise HTTPException(status_code=500, detail="Failed to submit quote request")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.get("/api/quotes", response_model=List[QuoteRequest])
async def get_quotes(skip: int = 0, limit: int = 50):
    try:
        quotes = await quotes_collection.find().skip(skip).limit(limit).to_list(limit)
        return quotes
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

# Contact messages
@app.post("/api/contact", status_code=status.HTTP_201_CREATED)
async def submit_contact_message(message: ContactMessage):
    try:
        message_dict = message.dict()
        result = await quotes_collection.insert_one(message_dict)
        if result.inserted_id:
            return {"message": "Contact message sent successfully", "id": message.id}
        else:
            raise HTTPException(status_code=500, detail="Failed to send message")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

# Testimonials
@app.get("/api/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    try:
        testimonials = await testimonials_collection.find({"is_active": True}).to_list(100)
        return testimonials
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.post("/api/testimonials", status_code=status.HTTP_201_CREATED)
async def create_testimonial(testimonial: Testimonial):
    try:
        testimonial_dict = testimonial.dict()
        result = await testimonials_collection.insert_one(testimonial_dict)
        if result.inserted_id:
            return {"message": "Testimonial created successfully", "id": testimonial.id}
        else:
            raise HTTPException(status_code=500, detail="Failed to create testimonial")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

# FAQ
@app.get("/api/faq", response_model=List[FAQ])
async def get_faq():
    try:
        faqs = await faq_collection.find({"is_active": True}).sort("order", 1).to_list(100)
        return faqs
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.post("/api/faq", status_code=status.HTTP_201_CREATED)
async def create_faq(faq: FAQ):
    try:
        faq_dict = faq.dict()
        result = await faq_collection.insert_one(faq_dict)
        if result.inserted_id:
            return {"message": "FAQ created successfully", "id": faq.id}
        else:
            raise HTTPException(status_code=500, detail="Failed to create FAQ")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)