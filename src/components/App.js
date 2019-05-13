import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="so cool" age={5} weight="25 lbs" />
    </>
  );
}
