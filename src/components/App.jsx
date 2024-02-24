import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";

export default function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state) => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Oops, ERROR</p>}
      {items.length > 0 && JSON.stringify(items, null, 2)}

      <ContactForm></ContactForm>
      <SearchBox />
      <ContactList />
    </>
  );
}
