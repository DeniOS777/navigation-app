import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?key=25243201-da43b78e8715fb1cc3094e420&q=yellow+flowers&image_type=photo'
    )
      .then(res => res.json())
      .then(({ hits }) => setImages(hits));
  }, []);

  return (
    <>
      <ul
        style={{
          display: 'flex',
          gap: '15px',
          width: '100vw',
          flexWrap: 'wrap',
        }}
      >
        {images.map(image => (
          <li key={image.id}>
            <Link to={`modal?id=${image.id}`} state={{ images, location }}>
              {/* <Link to={`${image.id}/modal`} state={{ images, location }}> */}
              <img width="300" src={image.webformatURL} alt={image.text} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
