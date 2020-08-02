import React, { useRef, useEffect, useState } from 'react';

let canvas: any;
let ctx;

const onMouseDown = (event: MouseEvent) => {};

const onMouseMove = (event: MouseEvent) => {};

const onMouseUp = (event: MouseEvent) => {};

function App() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [ballCount, setBallCount] = useState(1);

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, []);

  return (
    <div className='App'>
      <div>
        <div>
          점수: <span className='value'>{score}</span>
        </div>
        <div>
          최고 점수: <span className='value'>{highScore}</span>
        </div>
        <div>
          Ball: <span className='value'>{ballCount}</span>
        </div>
      </div>
      <canvas ref={canvasRef} id='canvas' width='450' height='450'></canvas>
    </div>
  );
}

export default App;
