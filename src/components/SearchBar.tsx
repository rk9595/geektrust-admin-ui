import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  searchUsers: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchUsers }) => {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
      </div>
      <input
        placeholder="Search by name, email or role"
        onChange={searchUsers}
      />
    </div>
  );
};

export default SearchBar;
