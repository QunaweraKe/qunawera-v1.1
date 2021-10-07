import { createSlice } from '@reduxjs/toolkit';

// Local
import api, { descriptor } from '../api';
import { route,APP_NAME  } from '../constants';

import { setProfileData, setProfileUser } from './profile';
import {
  setErrors,
  setLoading,
  setToast,
  unsetLoading,
} from './ui';

const NAMESPACE = 'user';

//
// Keys
//
export const key = {
  createContactUs:'createContactUs',
  createUser: 'createUser',
  editAvatar: 'editAvatar',
  editProfile: 'editProfile',
  editUser: 'editUser',
  follow: (userId) => `follow_${userId}`,
  login: 'login',
  logout: 'logout',
  removeaccount: 'removeaccount',
  removeImage:'removeImage',
};

//
// Slice
//
const initialState = {};

const userSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    setFollow: (state, { payload }) => { state.following.push(payload); },
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
    setUser: (state, { payload }) => payload,
    unsetFollow: (state, { payload }) => {
      state.following = state.following.filter((k) => k !== payload);
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  setFollow,
  setProfile,
  setUser,
  unsetFollow,
} = actions;
export default reducer;

//
// Actions
//
const logout = () => ({ type: `${NAMESPACE}/logout` });


//
// Selectors
//
export const selectFollowing = (state, userId) => (
  state.user.following.includes(userId));

export const selectUser = (state) => state.user;

//
// Side effects
//
export const createUser = (payload) => async (dispatch) => {
  const thisKey = key.createUser;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    const data = await api(descriptor.createUser(payload));
    dispatch(setUser(data));
    dispatch(setToast('Thanks for joining us'));
  } catch (error) {
    if (error.response) {
      dispatch(setErrors(NAMESPACE, thisKey, error.response.data));
    }
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};
export const createContactUs = (payload) => async (dispatch) => {
  const thisKey = key.createContactUs;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.createContactUs(payload));
    window.location = route.contactUs;   
    dispatch(setToast('Submitted'));
    
  } catch (error) {
    dispatch(setToast('Error occurred during submission', 'error'));
    if (error.response) {
      dispatch(setErrors(NAMESPACE, thisKey, error.response.data));
      // For IndexLoginForm. Redirect them to the login page if their
      // credentials are incorrect.
      if (history) {
        history.push(route.contactUs);
      }
    }
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const editPassword = (payload) => async (dispatch) => {
  const thisKey = key.editPassword;
  const formData = {
    current_password: payload.currentPassword,
    password: payload.password,
    password2: payload.password2,
  };
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.editPassword(formData));
    dispatch(setToast('Password updated'));
    window.location = route.login;
  } catch (error) {
    if (error.response) {
      dispatch(setErrors(NAMESPACE, thisKey, error.response.data));
    }
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const editProfile = (payload, slug) => async (dispatch) => {
  const thisKey = key.editProfile;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    const data = await api(descriptor.editProfile(payload));
    dispatch(setProfile(data));
    dispatch(setProfileData({ data, slug }));
    dispatch(setToast('Updated.'));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const editUser = (payload) => async (dispatch) => {
  const thisKey = key.editUser;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    const data = await api(descriptor.editUser(payload));
    dispatch(setUser(data));
    dispatch(setToast('Account Details Updated'));
  } catch (error) {
    if (error.response) {
      dispatch(setErrors(NAMESPACE, thisKey, error.response.data));
    }
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const follow = (slug, userId) => async (dispatch) => {
  const thisKey = key.follow(userId);
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.createFollow(slug));
    dispatch(setFollow(userId));
    dispatch(setToast('Following...'));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const loginUser = (payload, history) => async (dispatch) => {
  const thisKey = key.login;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    const data = await api(descriptor.loginUser(payload));
    dispatch(setUser(data));
    const data2 = await api(descriptor.getUser(slug));
    dispatch(setProfileUser(data2));
    dispatch(setToast(`Welcome back to ${APP_NAME} ${profileUser.display_name}`));
  } catch (error) {
    if (error.response) {
      dispatch(setErrors(NAMESPACE, thisKey, error.response.data));
      // For IndexLoginForm. Redirect them to the login page if their
      // credentials are incorrect.
      if (history) {
        history.push(route.login);
      }
    }
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};

export const logoutUser = () => async (dispatch) => {
  const thisKey = key.logout;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.logoutUser);
    dispatch(logout());
    dispatch(setToast('You have been logged out,Bye! '));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};
export const removeAccount = () => async (dispatch) => {
  const thisKey = key.removeaccount;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.removeAccount);
    dispatch(logout());
    dispatch(setToast('Your account has been deleted'));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};
export const removeImage = () => async (dispatch) => {
  const thisKey = key.removeImage;
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.removeImage);
    dispatch(setToast('Removed'));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};
export const unfollow = (slug, userId) => async (dispatch) => {
  const thisKey = key.follow(userId);
  try {
    dispatch(setLoading(NAMESPACE, thisKey));
    await api(descriptor.removeFollow(slug));
    dispatch(unsetFollow(userId));
  } catch (error) {
    dispatch(setToast('Something went wrong', 'error'));
    console.error(error);
  } finally {
    dispatch(unsetLoading(NAMESPACE, thisKey));
  }
};
