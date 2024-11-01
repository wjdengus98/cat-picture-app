import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    async function fetchCatImage() {
      try {
        const response = await axios.get('/cat', { responseType: 'blob' }); // 이미지를 blob으로 요청
        const imageUrl = URL.createObjectURL(response.data);
        setCatImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching cat image:', error);
      }
    }

    fetchCatImage();
  }, []);

  return (
    <div>
      <h1>Random Cat Picture</h1>
      {catImageUrl ? (
        <img src={catImageUrl} alt="A random cat" style={{ width: '300px', height: '300px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
