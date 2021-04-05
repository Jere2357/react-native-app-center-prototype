import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADING,
  CONNECTION_SUCCESS,
} from './types';

interface AuthState {
  status: Number;
  connected: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  message: String;
  result: {
    guid: String;
    mobileNumber: String;
    pinId: String;
    delaySec: Number;
  };
}

const initialState: AuthState = {
  status: 0,
  connected: false,
  isAuthenticated: false,
  isLoading: false,
  message: '',
  result: {
    guid: '',
    mobileNumber: '',
    pinId: '',
    delaySec: 0,
  },
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        isAuthenticated: true,
        isLoading: false,
        message: action.payload.message,
        result: {
          guid: action.payload.result.guid,
          mobileNumber: action.payload.result.mobileNumber,
          pinId: action.payload.result.pinId,
          delaySec: action.payload.result.delaySec,
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        status: action.payload.status,
        isAuthenticated: false,
        isLoading: false,
        message: action.payload.message,
        result: {
          guid: '',
          mobileNumber: '',
          pinId: '',
          delaySec: 0,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        isAuthenticated: false,
        message: action.payload.message,
        result: {
          guid: '',
          mobileNumber: '',
          pinId: '',
          delaySec: 0,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        isAuthenticated: false,
        isLoading: false,
        message: action.payload.message,
        result: {
          guid: action.payload.result.guid,
          mobileNumber: action.payload.result.mobileNumber,
          pinId: action.payload.result.pinId,
          delaySec: action.payload.result.delaySec,
        },
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        status: action.payload.status,
        isAuthenticated: false,
        isLoading: false,
        message: action.payload.message,
        result: {
          guid: '',
          mobileNumber: '',
          pinId: '',
          delaySec: 0,
        },
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
