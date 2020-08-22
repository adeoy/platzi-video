import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { findVideo } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome } = props;
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleFindVideo = (e) => {
    props.findVideo(e.target.value.toLowerCase());
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleFindVideo}
      />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
  findVideo: PropTypes.func,
};

const mapDispatchToProps = {
  findVideo,
};

export default connect(null, mapDispatchToProps)(Search);
