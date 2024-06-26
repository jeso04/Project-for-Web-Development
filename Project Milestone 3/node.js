const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Here is where applications will be pass to

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html'); // 'index.html' will be sent upon the 'get' request
});

app.post('/submit-form', (req, res) => {
    const Name = req.body.Name; //Will be used to access form data
    // Valid name will be added here
    res.send('Your name is Jesse Brand');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Tells to run on the local host
});