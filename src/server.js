import http from 'http'
import expressConfig from './shared/express'
import config from './config'

import connectDB from './config/db';

const app = expressConfig();
const server = http.createServer(app)

// Connect to MongoDB
connectDB();

// Import routes
// import authRoutes from './routes/authRoutes';
// import userRoutes from './routes/userRoutes';
// import companyRoutes from './routes/companyRoutes';
// import serviceRoutes from './routes/serviceRoutes';
// import appointmentRoutes from './routes/appointmentsRoutes';

// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/companies', companyRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/appointments', appointmentRoutes);

// Start the server
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
