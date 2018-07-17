import React from 'react';

function Price({ amount }) {
  return (
    <span className="price">
      {`Price: ${amount}₽`}
    </span>
  );
}

export default Price;
