import { ContactListStyled } from "./ContactListStyled";
import { useSelector, useDispatch } from "react-redux";
import { contactsActions } from "../../redux/contacts";
import { contactsSelectors } from "../../redux/contacts";

const ContactList = () => {
  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);

  const dispatch = useDispatch();

  const handleContactDelete = (id) => {
    dispatch(contactsActions.remove(id));
  };

  return (
    <ContactListStyled className="Contact">
      <label>Contact list:</label>
      <ul className="Contact__list">
        {visibleContacts.map((contact) => (
          <li key={contact.id} className="Contact__item">
            <p className="Contact__text">
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className="Contact__button"
              onClick={() => handleContactDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListStyled>
  );
};

export default ContactList;
