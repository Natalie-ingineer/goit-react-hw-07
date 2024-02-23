import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchContactsPending());
    const response = await axios.get(
      "https://65d8667dc96fbb24c1bb6f49.mockapi.io/contacts"
    );
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
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
    fetchContactsPending(state) {
      state.loading = true;
    },
    fetchContactsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.items = [...action.payload];
    },
    fetchContactsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
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
