import React from 'react';
import RootLayout from '../../components/Layouts/RootLayout';

const HomePage = () => {

  return (
    <h1>This is Index Page</h1>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
      <RootLayout>
        {page}
      </RootLayout>
  )
}