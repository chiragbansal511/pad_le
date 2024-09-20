// Import required modules
import express from 'express';
import clipboardy from 'clipboardy';

// Initialize the express app
const app = express();
const port = 3000;

// Define the '/' route
app.get('/', (req, res) => {
    try {
        // Copy 'Hello, World!' to the clipboard
        clipboardy.writeSync('Hello!');
        
        // Send response back to the client
        res.send('Copied "Hello, World!" to clipboard');
    } catch (err) {
        // Handle any errors
        console.error('Error copying to clipboard:', err);
        res.status(500).send('Error copying to clipboard');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
