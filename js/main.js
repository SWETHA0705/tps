

import http from 'k6/http';
import { sleep } from 'k6';
export const options ={
  vus : 100,
  iterations : 10000
}
export default function () {
  // Send an HTTP GET request to your Go server
  const response = http.post('http://localhost:5000/api'); // Update the URL

 
  if (response.status !== 200) {
    console.error(`Request failed with status code: ${response.status}`);
  }

  // Sleep for 1 second (adjust as needed)
 // sleep(1);
}
