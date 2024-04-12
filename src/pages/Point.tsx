import React, { useState } from 'react';
import './Point.css';

const Point = ({ id, label, handleConnection }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (selected) {
      // Если точка уже выбрана, снимаем выделение
      setSelected(false);
    } else {
      // Если точка не выбрана, устанавливаем выделение и вызываем обработчик соединения
      setSelected(true);
      handleConnection(id, label);
    }
  };

  return (
    <div className={`point ${selected ? 'selected' : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
}

export default Point;
