import React from "react";

const EditableRow = ({
  id,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleSaveClick,
}) => {
  return (
    <tr id={id}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Temperature..."
          name="Temperature"
          value={editFormData.Temperature}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Blood Pressure..."
          name="Blood_Pressure"
          value={editFormData.Blood_Pressure}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Pulse Rate..."
          name="Pulse_Rate"
          value={editFormData.Pulse_Rate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter SPo2..."
          name="SPo2"
          value={editFormData.SPo2}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="button" onClick={() => handleSaveClick(id)}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;