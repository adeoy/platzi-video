import { setFavorite, loginRequest, actions } from '../../actions';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  test('setFavorite', () => {
    const payload = movieMock;
    const expectedAction = {
      type: actions.setFavorite,
      payload,
    };

    expect(setFavorite(payload)).toEqual(expectedAction);
  });

  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: 'test1234',
    };
    const expectedAction = {
      type: actions.loginRequest,
      payload,
    };

    expect(loginRequest(payload)).toEqual(expectedAction);
  })
});
