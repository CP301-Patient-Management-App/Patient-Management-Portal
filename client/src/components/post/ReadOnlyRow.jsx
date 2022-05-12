import React from "react";

const ReadOnlyRow = ({ id, contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr id={id}>
      <td>{contact.Temperature}</td>
      <td>{contact.Blood_Pressure}</td>
      <td>{contact.Pulse_Rate}</td>
      <td>{contact.SPo2}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact, id)}
        >
          Edit
        </button>
        {/* <button type="button" onClick={() => handleDeleteClick(id)}>
          Delete
        </button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;