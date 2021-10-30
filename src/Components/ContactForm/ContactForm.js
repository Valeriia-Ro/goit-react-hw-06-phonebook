import { useState } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import React from "react";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_section}>
      <label className={styles.form_label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          className={styles.form_input}
        />
      </label>
      <label className={styles.form_label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          className={styles.form_input}
        ></input>
      </label>

      <button type="submit" className={styles.form_button}>
        Add contact
      </button>
    </form>
  );
};

const mapDisparchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDisparchToProps)(ContactForm);
