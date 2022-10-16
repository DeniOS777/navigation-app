import { AuthContext } from 'components/AuthContext/AuthContext';
import { Layout } from 'components/Layout/Layout';
import { Modal } from 'components/Modal/Modal';
import { AuthPage } from 'pages/AuthPage';
import { GalleryPage } from 'pages/GalleryPage';
import { HomePage } from 'pages/HomePage';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

export const Router = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();

  useEffect(() => {
    navigation(user ? 'gallery' : 'authPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="gallery" element={<GalleryPage />}>
            <Route path="modal" element={<Modal />} />
            {/* <Route path=":id/modal" element={<Modal />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
