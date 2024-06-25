import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);

      }, 10);
    }
    else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running])
  return (
    <div className='max-w-[400px] mx-auto min-h-screen flex flex-col gap-7  '>
      <h1 className='text-center font-bold text-5xl p-4 uppercase text-[#802d07] mt-5'>Stop Watch</h1>
      <div className='flex items-center justify-center text-3xl mt-5'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='flex justify-between items-center mt-10'>
        {
          running ?
            (
              <button className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-lg border-2 border-green-200' onClick={() => setRunning(false)}>Stop</button>
            ) :
            (
              <button className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-lg border-2 border-green-200' onClick={() => setRunning(true)}>Start</button>
            )
        }
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-lg border-2 border-green-200' onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
