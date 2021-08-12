import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('Hi there'))

// Run
app.listen(
  parseInt(process.env.PORT),
  process.env.HOST,
  () => 'running on port 3000'
)
