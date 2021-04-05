import axios from 'axios';
import {GET_DETAILS_SUCCESS, GET_DETAILS_FAIL} from './types';

export const getDetails = (guid: any) => (dispatch: any) => {
  if (guid) {
    dispatch({
      type: GET_DETAILS_SUCCESS,
      payload: {
        status: 1,
        message:
          'Your One-Time PIN (OTP) was sent to your mobile number, please enter within 5 minutes',
        result: {
          membershipNo: '01-010932',
          accountNo: '3624',
          pinId: '2EBA95C07EAA03BC7FA4B56634900999',
          delaySec: 16,
        },
      },
    });
  } else {
    dispatch({
      type: GET_DETAILS_FAIL,
      payload: {
        status: 0,
        message: 'Invalid request parameters',
      },
    });
  }
};
