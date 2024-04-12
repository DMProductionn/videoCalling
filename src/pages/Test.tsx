import React, { useState } from "react";

const Test = () => {
  const xRange = { min: 50, max: 250 }; // диапазон по оси x
  const yRange = { min: 50, max: 150 }; // диапазон по оси y

  const scale = {
    x: 250 / (xRange.max - xRange.min),
    y: 200 / (yRange.max - yRange.min),
  };

  const points = [
    { letter: 'A', x: 100, y: 200 },
    { letter: 'B', x: 150, y: 100 },
    { letter: 'C', x: 200, y: 100 },
    { letter: 'D', x: 250, y: 100 },
    { letter: 'E', x: 300, y: 100 },
    { letter: 'F', x: 250, y: 150 },
    { letter: 'G', x: 200, y: 200 },
    { letter: 'H', x: 150, y: 200 },
    { letter: 'I', x: 100, y: 200 },
    { letter: 'J', x: 150, y: 150 },
  ];
  
  const [connectedPoints, setConnectedPoints] = useState([]);

  const handleConnectPoints = (letters) => {
    const splitLetters = letters.split('').filter(char => char !== ' ');

    if (splitLetters.length > 1) {
      const newConnectedPoints = [];
      
      for (let i = 0; i < splitLetters.length - 1; i++) {
        const startIndex = points.findIndex(point => point.letter === splitLetters[i]);
        const endIndex = points.findIndex(point => point.letter === splitLetters[i + 1]);

        if (startIndex !== -1 && endIndex !== -1) {
          newConnectedPoints.push([startIndex, endIndex]);
        }
      }

      setConnectedPoints(newConnectedPoints);
    }
  };

  return (
    <div className="flex w-full items-center justify-center h-[100vh]">
      <input
        type="text"
        placeholder="Введите буквы"
        onChange={(event) => handleConnectPoints(event.target.value.toUpperCase())}
      />
      <svg width="500" height="500">
        {points.map((point, index) => (
          <g key={index}>
            <circle cx={(point.x - xRange.min) * scale.x} cy={(point.y - yRange.min) * scale.y} r="8" fill="black" />
            <text x={(point.x - xRange.min) * scale.x} y={(point.y - yRange.min) * scale.y + 15} textAnchor="middle" fontSize="12" fill="black">{point.letter}</text>
          </g>
        ))}

        {connectedPoints.map(([start, end], index) => (
          <line
          className="line" /* добавляем класс "line" для применения стиля */
          key={index}
          x1={(points[start].x - xRange.min) * scale.x}
          y1={(points[start].y - yRange.min) * scale.y}
          x2={(points[end].x - xRange.min) * scale.x}
          y2={(points[end].y - yRange.min) * scale.y}
          fill="freeze"
          stroke="black"
        >
          <animate
              attributeName="x2"
              from={(points[start].x - xRange.min) * scale.x}
              to={(points[end].x - xRange.min) * scale.x}
              dur="0.5s"
              fill="freeze"
            />
            <animate
              attributeName="y2"
              from={(points[start].y - yRange.min) * scale.y}
              to={(points[end].y - yRange.min) * scale.y}
              dur="0.5s"
              fill="freeze"
            />
        </line> 
        ))}
      </svg>
    </div>
  );
}

export default Test;
