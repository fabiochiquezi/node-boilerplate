import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

export const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_DB
})

database.connect((err) => {
  if (err) throw err
  console.log('MySql connected...')
})
