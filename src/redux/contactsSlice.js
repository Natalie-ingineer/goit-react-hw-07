import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      item: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
    },
  },
  reducers: {
    addContacts: (state, action) => {
      state.contacts.item = [...state.contacts.item, action.payload];
    },
    deleteContacts: (state, action) => {
      state.contacts.item = state.contacts.item.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whiteList: ["value"],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
