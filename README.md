#User Management System API Documentation
##Introduction
Welcome to the User Management System API documentation. This API provides endpoints to manage worker information in the system.

Base URL
The base URL for all endpoints is http://localhost:3000/api/workers.

##Endpoints
1. Add Worker
Endpoint: POST /api/workers
Request Format:
json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  // Add other fields as needed
}
Response Format:
json
Copy code
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  // Add other fields as needed
}
Description: Adds a new worker to the database.
2. Edit Worker by ID
Endpoint: PUT /api/workers/{id}
Request Format:
json
Copy code
{
  "firstName": "UpdatedFirstName",
  "lastName": "UpdatedLastName",
  "email": "updated.email@example.com",
  // Add other fields as needed
}
Response Format:
json
Copy code
{
  "id": 1,
  "firstName": "UpdatedFirstName",
  "lastName": "UpdatedLastName",
  "email": "updated.email@example.com",
  // Add other fields as needed
}
Description: Edits an existing worker with the specified ID.
Database Model
The MongoDB database model for the "Mitarbeiter" (Worker) collection includes the following fields:

id (unique identifier for each worker)
firstName (First Name)
lastName (Last Name)
email (Email Address)
gebrachtVonLvl1 (Brought by Level 1)
supervisor (Supervisor ID)
lvl2 (Level 2 ID, calculated)
lvl3 (Level 3 ID, calculated)
superprovBerechtigt (Super commission permitted, boolean)
strasse (Street)
ort (Location/City)
iban (International Bank Account Number)
Foreign Keys and Calculations
gebrachtVonLvl1 and supervisor can reference the ID of another worker in the same model. They are optional and can be provided by the API.
lvl2 and lvl3 should be calculated based on the gebrachtVonLvl1 hierarchy.
Business Logic
Implement business logic in the API to handle the calculation of lvl2 and lvl3 during the creation and update of a worker record. Middleware or helper functions may be used as needed.

##Validation
Ensure that all email addresses are unique and valid.

##Error Handling
The API returns meaningful error messages if a user tries to create or edit an entry with invalid data.

##Bonus Features
Authentication: The API is secured with authentication.
Unit Tests: Unit tests are implemented for API endpoints.
