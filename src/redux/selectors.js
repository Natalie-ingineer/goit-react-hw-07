import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts.items;
console.log(selectContacts);

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filterContact) => {
    console.log(contacts);
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  }
);
console.log(selectVisibleContacts);
