import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';

import { registerRequest } from '../actions';

import '../assets/styles/containers/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              className='input'
              type='text'
              name='name'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              className='input'
              type='email'
              name='email'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button'>Registrarme</button>
          </form>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
