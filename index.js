const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')
require('dotenv').config()


const app = express()

app.use(express.json());
app.use(cookieParser())



app.use(cors({
    origin: 'https://fresh-front-end.vercel.app', // Replace with your frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', router)

app.options('/api/category-product', cors());



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

