import React from 'react';

const Header = ({ films }) => {
  return (
    <form onSubmit={films}>
      <input type="text" name="query" placeholder="Введите название фильма" />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default Header;