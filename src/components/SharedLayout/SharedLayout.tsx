import React from 'react';

// import { Outlet } from 'react-router';
import { NavLink, Outlet, Routes } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};
