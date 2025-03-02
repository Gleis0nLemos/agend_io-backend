import express, { json } from 'express'
import routes from '../../modules'
import cors from 'cors'

export default () => {
  const app = express()

  app.use(cors());
  app.use(json());

  app.use('/api', routes)
  return app
}
