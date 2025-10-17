const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// Middleware
app.use(express.json())
app.use(express.static('public'))

// Routes
app.post('/save-content', (req, res) => {
    const filePath = path.join(__dirname, 'src', 'content.json')
    fs.writeFile(filePath, JSON.stringify(req.body, null, 2), (err) => {
        if (err) {
            res.status(500).json({ error: 'Error saving file' })
            return
        }
        res.json({ success: true })
    })
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Editor server running on port ${PORT}`)
})
