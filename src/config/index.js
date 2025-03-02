import dotenv from 'dotenv';
dotenv.config();

// retorna erro para variáveis de ambiente obrigatórias não definidas
const requireEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

export default {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    JWT_SECRET: requireEnv('JWT_SECRET'),
    MONGO_URI: requireEnv('MONGO_URI')
}
