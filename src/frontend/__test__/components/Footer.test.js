import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('It should render', () => {
    expect(footer.length).toEqual(1);
  });

  test('It should have 3 links', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  test('Snapshot', () => {
    const footer1 = create(<Footer />);
    expect(footer1.toJSON()).toMatchSnapshot();
  });

  test('It should has class footer', () => {
    const footer2 = shallow(<Footer />);
    const elem = footer2.find('footer');
    expect(elem.hasClass('footer')).toBe(true);
  })

});
