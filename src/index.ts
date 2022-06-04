import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import { json, urlencoded } from 'body-parser'
import todoRoutes from './routes/todos'
import db from './db/config'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/todos', todoRoutes)

db.sync()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
