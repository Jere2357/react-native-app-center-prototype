import { GET_DETAILS_SUCCESS, GET_DETAILS_FAIL } from './types';

interface MemberState {
  status: number;
  message: string;
  result: {
    membershipNo: string;
    accountNo: string;
    pinId: string;
    delaySec: number;
  };
}

const initialState: MemberState = {
  status: 0,
  message: '',
  result: {
    membershipNo: '',
    accountNo: '',
    pinId: '',
    delaySec: 0,
  },
};

const dashboardReducer = (state = initialState, action: any): MemberState => {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      console.log('GET_DETAILS_SUCCESS');
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        result: {
          membershipNo: action.payload.result.membershipNo,
          accountNo: action.payload.result.accountNo,
          pinId: action.payload.result.pinId,
          delaySec: action.payload.result.delaySec,
        },
      };
    case GET_DETAILS_FAIL:
      console.log('GET_DETAILS_FAIL');
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        result: {
          membershipNo: '',
          accountNo: '',
          pinId: '',
          delaySec: 0,
        },
      };
    default:
      return state;
  }
};

export default dashboardReducer;
