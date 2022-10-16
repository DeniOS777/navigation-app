import { Navigator } from 'components/Navigator/Navigator';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navigator />
      <Outlet />
      <footer>Copyright by students</footer>
    </div>
  );
};
