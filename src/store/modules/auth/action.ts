import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADING,
  CONNECTION_SUCCESS,
} from './types';

interface PayloadProps {
  username: string;
  password: string;
}

export const loginUser = ({username, password}: PayloadProps) => (
  dispatch: Function,
) => {
  dispatch({type: USER_LOADING});

  if (username && password) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        status: 1,
        message:
          'Your One-Time PIN (OTP) was sent to your mobile number, please enter within 5 minutes',
        result: {
          guid: 'b4575230-209c-11ea-b598-e5977aed7f91',
          mobileNumber: '3624',
          pinId: '2EBA95C07EAA03BC7FA4B56634900999',
          delaySec: 16,
        },
      },
    });
  } else {
    dispatch({
      type: LOGIN_FAIL,
      payload: {
        status: 0,
        message: 'Inavalid login credentials',
      },
    });
  }
};

export const registerUser = (userData: object) => (dispatch: Function) => {
  dispatch({type: USER_LOADING});

  if (userData) {
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        status: 1,
        message:
          'Your One-Time PIN (OTP) was sent to your mobile number, please enter within 5 minutes',
        result: {
          guid: 'b4575230-209c-11ea-b598-e5977aed7f91',
          mobileNumber: '3624',
          pinId: '2EBA95C07EAA03BC7FA4B56634900999',
          delaySec: 16,
        },
      },
    });
  } else {
    dispatch({
      type: SIGNUP_FAIL,
      payload: {
        status: 0,
        message: 'Inavalid request parameters',
      },
    });
  }
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({
    type: LOGOUT_SUCCESS,
    payload: {
      status: 1,
      message: 'You have been successfully logged out',
    },
  });
};

export const connected = (isConnected: boolean) => (dispatch: any) => {
  dispatch({
    type: CONNECTION_SUCCESS,
    payload: isConnected,
  });
};
