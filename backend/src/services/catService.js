const axios = require('axios');

async function getCatImageBuffer() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    return imageResponse.data;
  } catch (error) {
    console.error('Error fetching cat image:', error); // 백엔드에서 오류 로그 출력
    throw new Error('Failed to fetch cat image');
  }
}

module.exports = { getCatImageBuffer };
