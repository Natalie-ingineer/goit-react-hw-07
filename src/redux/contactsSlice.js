import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = () => async () => {
  try {
    const response = await axios.get(
      "https://65d8667dc96fbb24c1bb6f49.mockapi.io/contacts"
    );
  } catch (error) {}
};

const addContact = () => {};

const deleteContact = () => {};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
    filters: {
      name: "",
    },
  },
  reducers: {
    fetchContactsPending() {},
    fetchContactsSuccess() {},
    fetchContactsError() {},
  },
});

export const {
  fetchContactsPending,
  fetchContactsSuccess,
  fetchContactsError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

//  reducers: {
//     addContacts: (state, action) => {
//       state.contacts.items = [...state.contacts.items, action.payload];
//     },
//     deleteContacts: (state, action) => {
//       state.contacts.items = state.contacts.items.filter(
//         (el) => el.id !== action.payload
//       );
//     },
//   },
