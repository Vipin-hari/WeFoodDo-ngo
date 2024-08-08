import React from 'react';
import '../Gallery.css';
const Gallery = () => {
  // Sample gallery images
  const images = [
    'https://img.freepik.com/free-photo/food-day-donation-boxes-being-prepared_23-2148613284.jpg?t=st=1715169385~exp=1715172985~hmac=054049fcd98e41ca2e150cf16dd029e7d2ee924279a36c318230ebe06efe5fba&w=1060',
    'https://img.freepik.com/free-photo/food-day-donation-boxes-being-prepared_23-2148613284.jpg?t=st=1715169385~exp=1715172985~hmac=054049fcd98e41ca2e150cf16dd029e7d2ee924279a36c318230ebe06efe5fba&w=1060',
    'https://img.freepik.com/free-photo/different-people-doing-volunteer-work_23-2149012165.jpg?t=st=1715169110~exp=1715172710~hmac=f674b9240ea43caaa6f9f5dc20e6b8ff102f45757444e7d788b54518819bfd6c&w=1060',
    'https://img.freepik.com/free-photo/volunteers-collecting-food-donations-medium-shot_23-2149182021.jpg?t=st=1715169192~exp=1715172792~hmac=8bf37c6c909d6f2124582477c05692d605e7257bbf74ca7bcf9630690cf82e27&w=1060',
    'https://img.freepik.com/free-photo/close-up-happy-volunteers-with-food_23-2149182017.jpg?t=st=1715233013~exp=1715236613~hmac=a1db3a26435606c0c8815e5c1c7d9698cc8713d7b66c99af5b14de889edf24bc&w=1060'
  
];

  return (
    <div className="gallery">
      <h1 className='h1style ww'>Gallery</h1>
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-item">
            <img src={imageUrl} alt='img' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
