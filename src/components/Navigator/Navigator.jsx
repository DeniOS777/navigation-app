import { AuthContext } from 'components/AuthContext/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <header>
      <nav style={{ display: 'flex', gap: '50px' }}>
        <Link to="/">HomePage</Link>
        {user ? (
          <>
            <Link to="gallery">GalleryPage</Link>
            <button onClick={() => setUser(null)} type="button">
              Log out
            </button>
          </>
        ) : (
          <Link to="auth">AuthPage</Link>
        )}
      </nav>
    </header>
  );
};
