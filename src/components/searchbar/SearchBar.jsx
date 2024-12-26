import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="flex items-center rounded-lg w-full mt-5">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by Name"
        className="flex-grow outline-none text-primary_gary bg-white py-4 px-4 rounded-lg placeholder-secondary_gray"
      />
      <button
        onClick={handleSearch}
        className="ml-4 px-4 py-3 rounded-lg bg-transparent border text-gray-400 border-gray-300 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
