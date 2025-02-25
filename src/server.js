const express = require('express');
const cors = require('cors');

require('dotenv').config();

const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import routes
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const appointmentRoutes = require('./routes/appointmentsRoutes');

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/appointments', appointmentRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
