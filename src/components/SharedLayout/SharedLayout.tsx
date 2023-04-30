import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import { Watch } from 'react-loader-spinner';

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
        <Suspense
          fallback={
            <Watch
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
