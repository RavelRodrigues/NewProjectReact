import * as types from '../types';

export function clickButtonRequest() {
  return {
    type: types.CLICK_BUTTON_REQUEST,
  };
}
export function clickButtonSucess() {
  return {
    type: types.CLICK_BUTTON_SUCESS,
  };
}
export function clickButtonFailure() {
  return {
    type: types.CLICK_BUTTON_FAILURE,
  };
}
