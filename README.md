# A Simple API
This is a simple api that returns a response to a get request

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Treasure-Mayowa/HNG-Internship.git
   cd HNG-Internship 

2. Install dependencies:
    ```sh
    npm install

3. Rename the .env.sample file in the root directory to .env and add the following values to the environment variables:
    ```env
    PORT=3000
    HOSTNAME=localhost

4. Start the server:
    ```sh
    node index.js

Running the Project Locally
After starting the server, you can access it at http://localhost:3000.

## API Documentation

#### Endpoint URL
    - GET /
#### Request/Response Format
Request
    Method: GET
    URL: http://localhost:3000/
Response
    Status: 200 OK
    Body 
    ```json
    {
        "email": "treasuremayowa07@gmail.com",
        "timestamp": "2025-01-30T09:30:00Z"",
        "github": "https://github.com/Treasure-Mayowa/HNG-Internship"
    }

[HNG Internship](https://hng.tech/hire/python-developers)

License
This project is licensed under the MIT License.