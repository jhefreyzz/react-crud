import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACT,
  DISPLAY_CONTACTS
} from '../../constants';

export const add_contact = payload => {
  return { type: ADD_CONTACT, payload };
};
