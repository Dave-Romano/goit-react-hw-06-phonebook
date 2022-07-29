import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const INIT_STATE = localStorage.contacts
  ? JSON.parse(localStorage.getItem("contacts"))
  : [];

const createContact = (state, { payload }) => {
  if (
    state.find((el) => el.name === payload.name || el.number === payload.number)
  )
    return state;
  const contacts = [...state, payload];
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return contacts;
};
const removeContact = (state, { payload }) => {
  const contacts = state.filter((el) => el.id !== payload);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return contacts;
};

export const contactsReducer = createReducer(INIT_STATE, {
  [actions.create]: createContact,
  [actions.remove]: removeContact,
});
