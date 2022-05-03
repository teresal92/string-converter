# string-converter
Code snippet for Lyft Software Engineering Apprenticeship application.

## Summary
- Accepts a POST request to the route “/test”, which accepts one argument “string_to_cut”
- Returns a JSON object with the key “return_string” and a string containing every third letter from the original string

## Getting Started
1. Git clone central repo and navigate into `/server` directory
```
cd server
```

2. Install dependencies
```
npm install
```

3. Run server
```
npm run start
```

4. The application will be running on [http://localhost:3000](http://localhost:3000);

5. To test out the functionality, run the following in a new terminal. Replace `"iamyourlyftdriver"` with desired string. 
```
curl -X POST http://localhost:3001/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```
