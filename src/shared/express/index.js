import express from 'express'
import routes from '../../modules'

export default () => {
  const app = express()

  app.use(cors());
  app.use(json());

  app.use('/api', routes)
  return app
}
