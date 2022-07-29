import { ContactListStyled } from "./ContactListStyled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

import { useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";

const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleContactDelete = (id) => {
    dispatch(actions.remove(id));
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
