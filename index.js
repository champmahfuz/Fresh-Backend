const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')
require('dotenv').config()


const app = express()

app.use(express.json());
app.use(cookieParser())
// app.use(cors({
//     origin: ['https://fresh-front-end.vercel.app/'], // Replace with your frontend URL
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
//     allowedHeaders: ['Content-Type', 'Authorization'] // Adjust headers as necessary
// }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://fresh-front-end.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
fetch('https://fresh-backend-kappa.vercel.app/api/category-product', {
    mode: 'no-cors'
})
    .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Since response is opaque, you won't be able to read the body
        console.log('Request completed successfully, but response is opaque.');
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });

app.use('/api', router)

// app.options('/api/category-product', cors());

const PORT = 8080 || process.env.PORT

connectDB()

app.listen(PORT, () => {
    console.log('Connected to DB');
    console.log("Server is running")
    // console.log("Server is running " + PORT)
})




app.get('/', (req, res) => {
    res.send('Hello Brand New E-Commerce Server');
});

