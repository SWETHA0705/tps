import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const url = 'http://localhost:5000/tokens'; // Update the URL to your API endpoint
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer your_token_here', // Replace with a valid token
    };

    const payload = JSON.stringify({
     
        // Your JSON payload here
    });

    const response = http.post(url, payload, { headers });

    check(response, {
        'Status is 200': (r) => r.status === 200,
    });
}

