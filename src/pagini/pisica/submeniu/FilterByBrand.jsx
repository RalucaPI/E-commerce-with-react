import React from 'react';

export const FilterByBrand = ({ brands, onFilter }) => {
  return (
    <div>
      <label htmlFor="Brand">Filtrează după brand:</label>
      <select id="Brand" onChange={onFilter}>
        <option value="">Toate brandurile</option>
        {brands.map((Brand) => (
          <option key={Brand} value={Brand}>
            {Brand}
          </option>
        ))}
      </select>
    </div>
  );
};
