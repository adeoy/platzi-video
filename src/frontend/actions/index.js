import axios from 'axios';

export const actions = {
  setFavorite: 'SET_FAVORITE',
  delFavorite: 'DEL_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  findVideo: 'FIND_VIDEO',

  setError: 'SET_ERROR',
};

export const setFavorite = payload => ({
  type: actions.setFavorite,
  payload,
});

export const delFavorite = payload => ({
  type: actions.delFavorite,
  payload,
});

export const loginRequest = payload => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = payload => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = payload => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = payload => ({
  type: actions.getVideoSource,
  payload,
});

export const findVideo = payload => ({
  type: actions.findVideo,
  payload,
});

export const setError = payload => ({
  type: actions.setError,
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password, rememberMe }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
      data: {
        rememberMe
      }
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const addFavorite = ({ userId, movieId, movie }) => {
  return (dispatch) => {
    axios({
      url: '/user-movies',
      method: 'post',
      data: {
        userId,
        movieId,
      },
    })
      .then((resp) => {
        const { data } = resp;
        dispatch(setFavorite({ ...movie, userMovieId: data.data }));
      })
      .catch(err => dispatch(setError(err)));
  };
};


export const removeFavorite = ({ userMovieId, id }) => {
  return (dispatch) => {
    axios({
      url: `/user-movies/${userMovieId}`,
      method: 'delete',
    })
      .then(() => {
        dispatch(delFavorite(id));
      })
      .catch(err => dispatch(setError(err)));
  };
};
