import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addFavorite, removeFavorite } from '../actions';
import getCookie from '../utils/getCookie';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { userMovieId, _id, id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    const userId = getCookie('id');
    props.addFavorite({
      userId,
      movieId: _id,
      movie: {
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
      }
    });
  };

  const handleDelFavorite = () => {
    props.removeFavorite({userMovieId, id});
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {!isList ? (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={handleDelFavorite}
            />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {year}
          {' '}
          {contentRating}
          {' '}
          {duration}
          {' '}
          minutos
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  _id: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  isList: PropTypes.bool,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
};

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
