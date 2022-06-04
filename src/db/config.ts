import { Sequelize } from 'sequelize-typescript'
import { Todos } from '../models/todos'
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'todos',
})

db.addModels([Todos])

export default db
