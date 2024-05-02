'use client'
import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'c') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    < div className='outer-container'>
    <div className=" inner-container bg-black p-8 rounded-2xl">
      {/* output start */}
      <div className="bg-black text-white text-8xl m-20" >{display || '0'}</div>
      {/* output end */}

      {/* calculate button */}
      <div className=" h-100 e-70 bg-black grid grid-cols-4 gap-4 items-center">
        <button onClick={() => handleClick('c')} className=" px-6 py-3 rounded-full border-medium text-3xl bg-iwhitish text-black m-10px p-8px">
          C
        </button>
        <button onClick={() => handleClick('+/-')} className=" px-6 py-3 rounded-full border-medium text-3xl bg-iwhitish text-black m-10px p-8px">
          +/-
        </button>
        <button onClick={() => handleClick('%')} className=" px-6 py-3 rounded-full border-medium text-3xl bg-iwhitish text-black m-10px p-8px">
          %
        </button>
        <button onClick={() => handleClick('/')} className="px-6 py-3 rounded-full border-medium text-3xl text-white bg-iorange m-10px p-8px">
          ÷
        </button>
        <button onClick={() => handleClick('7')} className="px-6 py-3 rounded-full border-medium text-3xl text-white bg-igrey m-10px p-8px">
          7
        </button>
        <button onClick={() => handleClick('8')} className="px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px">
          8
        </button>
        <button onClick={() => handleClick('9')} className=" px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px">
          9
        </button>
        <button onClick={() => handleClick('*')} className=" px-6 py-3 rounded-full border-medium text-3xl text-white  bg-iorange m-10px p-8px">
          X
        </button>
        <button onClick={() => handleClick('4')} className=" px-6 py-3 rounded-full border-medium text-3xl text-white bg-igrey  m-10px p-8px">
          4
        </button>
        <button onClick={() => handleClick('5')} className="px-6 py-3 rounded-full border-medium text-3xl text-white bg-igrey m-10px p-8px">
          5
        </button>
        <button onClick={() => handleClick('6')} className="px-6 py-3 rounded-full border-medium text-3xl text-white bg-igrey m-10px p-8px">
          6
        </button>
        <button onClick={() => handleClick('-')} className=" px-6 py-3 rounded-full border-medium text-3xl text-white bg-iorange  m-10px p-8px">
          -
        </button>
        <button onClick={() => handleClick('1')} className="px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey  m-10px p-8px">
          1
        </button>
        <button onClick={() => handleClick('2')} className="px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey  m-10px p-8px">
          2
        </button>
        <button onClick={() => handleClick('3')} className="px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey  m-10px p-8px">
          3
        </button>
        <button onClick={() => handleClick('+')} className="px-6 py-3 rounded-full border-medium text-3xl text-white   bg-iorange m-10px p-8px">
          +
        </button>
        <button onClick={() => handleClick('0')} className="px-6 py-3 rounded-full border-medium text-3xl text-white   bg-igrey m-10px p-8px">
          0
        </button>
        <button onClick={() => handleClick('.')} className=" px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey  m-10px p-8px">
          .
        </button>
        <button onClick={() => handleClick('=')} className="px-6 py-3 rounded-full border-medium text-3xl text-white   bg-iorange  m-10px p-8px">
          =
        </button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;

