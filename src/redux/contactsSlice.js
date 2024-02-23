import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     dispatch(fetchContactsPending());
//     const response = await axios.get(
//       "https://65d8667dc96fbb24c1bb6f49.mockapi.io/contacts"
//     );
//     dispatch(fetchContactsSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

// const addContact = () => {};

// const deleteContact = () => {};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
    // filters: {
    //   name: "",
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
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

// reducers: {
//     fetchContactsPending(state) {
//       state.loading = true;
//     },
//     fetchContactsSuccess(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.items = [...action.payload];
//     },
//     fetchContactsError(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
