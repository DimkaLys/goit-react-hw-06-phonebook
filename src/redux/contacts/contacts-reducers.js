import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./contacts-actions";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const initialFilter = "";

const contacts = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload.id),
});

const filter = createReducer(initialFilter, {
  [filterContact]: (state, action) => action.payload,
});

export const contactReducer = combineReducers({
  contacts,
  filter,
});
