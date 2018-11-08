import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACT,
  DISPLAY_CONTACTS
} from '../../constants';

const initialState = {
  contacts: []
};

const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            ...action.payload
          }
        ]
      };

    default:
      return state;
  }
};

export default phoneBookReducer;
