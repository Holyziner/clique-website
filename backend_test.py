import requests
import sys
from datetime import datetime
import json

class CliqueAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print("Response: (non-JSON)")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"Error: {json.dumps(error_data, indent=2)}")
                except:
                    print(f"Error: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_check(self):
        """Test health check endpoint"""
        return self.run_test("Health Check", "GET", "api/health", 200)

    def test_root_endpoint(self):
        """Test root endpoint"""
        return self.run_test("Root Endpoint", "GET", "", 200)

    def test_submit_quote_request(self):
        """Test quote request submission"""
        quote_data = {
            "name": "John Doe",
            "email": "john@example.com",
            "whatsapp": "+234 801 234 5678",
            "product": "LED Trucks for advertising",
            "quantity": "50 units"
        }
        success, response = self.run_test(
            "Submit Quote Request",
            "POST",
            "api/quotes",
            201,
            data=quote_data
        )
        return success, response.get('id') if success else None

    def test_get_quotes(self):
        """Test retrieving quotes"""
        return self.run_test("Get Quotes", "GET", "api/quotes", 200)

    def test_get_testimonials(self):
        """Test retrieving testimonials"""
        return self.run_test("Get Testimonials", "GET", "api/testimonials", 200)

    def test_create_testimonial(self):
        """Test creating a testimonial"""
        testimonial_data = {
            "client_name": "Jane Smith",
            "company": "ABC Corp",
            "country": "Nigeria",
            "quote": "Excellent service and quality products!",
            "rating": 5
        }
        return self.run_test(
            "Create Testimonial",
            "POST",
            "api/testimonials",
            201,
            data=testimonial_data
        )

    def test_get_faq(self):
        """Test retrieving FAQs"""
        return self.run_test("Get FAQ", "GET", "api/faq", 200)

    def test_create_faq(self):
        """Test creating an FAQ"""
        faq_data = {
            "question": "What is your delivery time?",
            "answer": "We deliver within 2-4 weeks depending on the product.",
            "order": 1
        }
        return self.run_test(
            "Create FAQ",
            "POST",
            "api/faq",
            201,
            data=faq_data
        )

    def test_submit_contact_message(self):
        """Test contact message submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test contact message for the Clique procurement website."
        }
        return self.run_test(
            "Submit Contact Message",
            "POST",
            "api/contact",
            201,
            data=contact_data
        )

    def test_invalid_quote_request(self):
        """Test quote request with invalid data"""
        invalid_data = {
            "name": "A",  # Too short
            "email": "invalid-email",  # Invalid email
            "whatsapp": "123",  # Too short
            "product": "LED",  # Too short
            "quantity": ""  # Empty
        }
        success, _ = self.run_test(
            "Invalid Quote Request",
            "POST",
            "api/quotes",
            422,  # Validation error
            data=invalid_data
        )
        return success

def main():
    print("🚀 Starting Clique API Backend Tests")
    print("=" * 50)
    
    # Setup
    tester = CliqueAPITester("http://localhost:8001")
    
    # Run basic connectivity tests
    print("\n📡 CONNECTIVITY TESTS")
    tester.test_root_endpoint()
    tester.test_health_check()
    
    # Test quote functionality
    print("\n💼 QUOTE FUNCTIONALITY TESTS")
    quote_success, quote_id = tester.test_submit_quote_request()
    tester.test_get_quotes()
    tester.test_invalid_quote_request()
    
    # Test testimonials
    print("\n⭐ TESTIMONIALS TESTS")
    tester.test_get_testimonials()
    tester.test_create_testimonial()
    
    # Test FAQ
    print("\n❓ FAQ TESTS")
    tester.test_get_faq()
    tester.test_create_faq()
    
    # Test contact
    print("\n📞 CONTACT TESTS")
    tester.test_submit_contact_message()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 FINAL RESULTS")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())