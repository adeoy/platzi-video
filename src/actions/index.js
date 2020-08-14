export const actions = {
  setFavorite: 'SET_FAVORITE',
  delFavorite: 'DEL_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  findVideo: 'FIND_VIDEO',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const delFavorite = (payload) => ({
  type: actions.delFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});

export const findVideo = (payload) => ({
  type: actions.findVideo,
  payload,
});
