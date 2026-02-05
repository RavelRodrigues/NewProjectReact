import * as types from '../types';

const initialState = {
  clickButton: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICK_BUTTON_SUCESS: {
      console.log('Sucesso!');
      const newState = { ...state };
      newState.clickButton = !newState.clickButton;
      return newState;
    }
    case types.CLICK_BUTTON_FAILURE: {
      console.log('Erro!');
      return state;
    }
    case types.CLICK_BUTTON_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
