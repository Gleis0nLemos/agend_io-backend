import http from 'http'
import expressConfig from './shared/express'
import config from './config'
import connectDB from './shared/mongoose';

// ensure that the server is started only after the connection to the database is established
(async () => {
  const app = expressConfig();
  const server = http.createServer(app)

  try {
    // Connect to MongoDB
    await connectDB(); 

    // Start server
    server.listen(config.PORT, () => {
      console.log(`Server listening on port ${config.PORT}`)
    })
  } catch (error) {
    console.error('Error starting server: ', error)
  }
})()
