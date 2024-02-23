// import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Oops, ERROR</p>}
        {items.lengs > 0 && <ContactList />}
      </div>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </>
  );
}
