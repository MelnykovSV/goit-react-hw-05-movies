import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

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
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
