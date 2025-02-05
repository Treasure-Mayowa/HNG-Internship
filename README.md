# Number Classification API
This is a simple api that returns a fun facts and information on numbers

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
    - GET /api/classify-number/
#### Request/Response Format
Request
    Method: GET
    URL: http://localhost:3000/
Response
- Status: 200 OK
- Body:
    ```json
    {
        "number": 1,
        "is_prime": false,
        "is_perfect": false,
        "properties": [
            "odd"
        ],
        "digit_sum": 1,
        "fun_fact": "1 is the number of Gods in monotheism."
    }
License
This project is licensed under the MIT License.