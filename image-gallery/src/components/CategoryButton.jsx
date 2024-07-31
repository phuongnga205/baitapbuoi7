import React from 'react';

const CategoryButton = ({ category, onClick }) => (
  <button onClick={() => onClick(category)}>
    {category}
  </button>
);

export default CategoryButton;
