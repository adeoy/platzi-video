import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header />
    <h1> No encontrado </h1>
    <Link to='/'>Volver al home</Link>
  </>
);

export default NotFound;
