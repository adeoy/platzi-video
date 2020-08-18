import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/containers/Home.scss';

const Home = ({ myList, trends, originals, searchResults }) => {
  return (
    <>
      <Header />
      <Search isHome />

      {searchResults.length > 0 && (
        <Categories title='Resultados de la búsqueda'>
          <Carousel>
            {searchResults.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

Home.propTypes = {
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
  searchResults: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, null)(Home);
