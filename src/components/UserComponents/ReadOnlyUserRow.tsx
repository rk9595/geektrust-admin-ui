import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '@/pages';

type ReadOnlyUserRowProps = {
  user: User;
  handleEditClick: (event: MouseEvent<HTMLButtonElement>, user: User) => void;
  handleDeleteClick: (userId: number) => void;
  selectRow: (userId: number) => void;
};

const ReadOnlyUserRow: React.FC<ReadOnlyUserRowProps> = ({
  user,
  handleEditClick,
  handleDeleteClick,
  selectRow,
}) => {
  const [useBackground, setBackground] = useState<number | null>(null);
  const selectUser = (userId: number) => {
    if (useBackground !== userId) {
      setBackground(userId);
    } else {
      setBackground(null);
    }
  };
  return (
    <tr
      key={user.id}
      onChange={() => selectUser(user.id)}
      className={
        useBackground === user.id || user.selected ? 'selected-row' : ''
      }
    >
      <td>
        <input
          type="checkbox"
          onChange={() => selectRow(user.id)}
          checked={user.selected}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, user)}>
          <img className="svg editBtn" src="/edit.svg" alt="Edit" />
        </button>
        <button id="trash-icon" onClick={() => handleDeleteClick(user.id)}>
          <img className="svg delBtn" src="/trash.svg" alt="Delete" />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyUserRow;
