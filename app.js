import express from 'express'
import cors from 'cors'

const PORT = 1111

const app = express()

app.use(cors())
app.use(express.json())

const overlandingtouren = []

app.post('/api/overlandingtouren', (req,res) => {
  const Trip = req.body
  // console.log(Trip);
  overlandingtouren.push(Trip);
  res.end()
})

app.get('/api/overlandingtouren', (_, res) => {
  res.json(overlandingtouren)
})

app.listen(PORT, () => console.log("Hier sitze ich in meinem fleiße", PORT))