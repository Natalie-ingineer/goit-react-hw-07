import { createSlice } from "@reduxjs/toolkit";

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
    addContacts: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    deleteContacts: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
