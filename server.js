const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const barangRoutes = require('./routes/barangRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // <-- KODE BARU, pemanggil web HTML

// Routes
app.use('/api', barangRoutes);

// Jalankan Server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});