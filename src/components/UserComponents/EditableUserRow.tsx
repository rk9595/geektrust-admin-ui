import React, { useRef, ChangeEvent, MouseEvent } from 'react';
import { User } from '@/pages';

type EditableUserRowProps = {
  user: User;
  saveUser: (
    userId: number,
    nameRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    roleRef: React.RefObject<HTMLInputElement>
  ) => void;
  editFormData: {
    name: string;
    email: string;
    role: string;
  };
  handleEditFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancelClick: () => void;
};

const EditableUserRow: React.FC<EditableUserRowProps> = ({
  user,
  saveUser,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          ref={nameRef}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          ref={emailRef}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a role..."
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
          ref={roleRef}
        />
      </td>

      <td>
        <button
          type="submit"
          onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)}
        >
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableUserRow;
