import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PictureBackground() {
  const [img, setImg] = useState(null);
  useEffect(() => {
    axios
      .get(
        'http://localhost:3001/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
        {
          headers: {
            Origin: '*',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then(({ data }) => {
        const { url } = data.images.pop();
        const imgUrl = `http://www.bing.com${url}`;
        setImg(imgUrl);
      });
  }, []);
  return <div>{img && <img src={img} />}</div>;
}

export default PictureBackground;
