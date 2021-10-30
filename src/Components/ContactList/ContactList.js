import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";
const ContactList = ({ contacts, onClick }) => (
  <ul className={styles.list_section}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.list_element}>
        <span>{name}: </span>
        <span>{number} </span>
        <button
          className={styles.list_button}
          type="button"
          onClick={() => {
            onClick(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
