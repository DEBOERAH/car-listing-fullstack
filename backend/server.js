require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');


// mongo connection
connectDB();
const app = express();

app.use(cors());
// app.use(cors(
//     {
//         origin: 'http://localhost:5173'
//     }
// ));

// middleware
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/reviews', reviewRoutes);

// set up the server to listen on a port
const PORT = process.env.PORT || 8172;
app.listen(PORT, () =>
    console.log(`Server started on port http://localhost:${PORT}`)
);


