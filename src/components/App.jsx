// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>App</div>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </>
  );
}
