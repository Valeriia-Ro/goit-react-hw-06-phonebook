import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onFilter}
        className={styles.filter_input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
