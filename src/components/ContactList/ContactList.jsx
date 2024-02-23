import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.item);
  console.log(contacts);
  const filter = useSelector((state) => state.filters.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.listContacts}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          userId={contact.id}
          contact={contact.name}
          phonenumber={contact.number}
          onDelete={(contacts, actions) => {
            dispatch(deleteContacts(contacts));
          }}
        ></Contact>
      ))}
    </ul>
  );
}
