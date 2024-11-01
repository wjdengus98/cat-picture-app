const express = require('express');
const cors = require('cors');  // CORS 추가
const path = require('path');
const app = express();
const port = 5000;
const catRoutes = require('./routes/catRoutes');

// Enable CORS for all requests
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Use catRoutes for /cat endpoint
app.use('/cat', catRoutes);

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
