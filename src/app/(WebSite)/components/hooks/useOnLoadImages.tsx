'use client';

import {useEffect, useState} from 'react';

const useOnLoadImages = (imageUrls: string[]) => {
  const [_, setLoadedImageCount] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length == 0) {
      setAllImagesLoaded(true);
    }

    imageUrls.forEach((imgUrl) => {
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => {
        setLoadedImageCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount === imageUrls.length) {
            setAllImagesLoaded(true);
          }
          return newCount;
        });
      };
    });
  }, []);

  return allImagesLoaded;
};

export default useOnLoadImages;
