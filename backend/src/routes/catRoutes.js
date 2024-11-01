const express = require('express');
const router = express.Router();
const catService = require('../services/catService');

router.get('/', async (req, res) => {
  try {
    const imageBuffer = await catService.getCatImageBuffer();
    res.set('Content-Type', 'image/jpeg'); // 적절한 이미지 콘텐츠 타입 설정
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error in /cat route:', error);
    res.status(500).json({ message: 'Error fetching cat image' });
  }
});

module.exports = router;