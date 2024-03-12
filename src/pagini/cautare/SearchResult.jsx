import React from 'react';

export function SearchResult({ results }) {
  return (
    <div className="search-results">
      {results.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.Nume}</h3>
          <p>{product.Brand}</p>
        </div>
      ))}
    </div>
  );
}

