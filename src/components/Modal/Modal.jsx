import React from 'react';
import {
  useLocation,
  useParams,
  useSearchParams,
  Link,
} from 'react-router-dom';

export const Modal = () => {
  // const { id } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const largeImage = location.state?.images?.find(
    image => Number(image.id) === Number(id)
  );

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to={location.state.location}>
        <img src={largeImage?.largeImageURL} alt={largeImage?.tags} />
      </Link>
    </div>
  );
};
