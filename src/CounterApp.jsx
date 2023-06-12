import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(value);

  const handleReset = () => setCounter(value);
 
  const handleSubtract = () => setCounter(c => c - 1);
  
  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => { // c -> value now of counter
      return c + 1;
    });
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleSubtract }>
        -1
      </button>
      <button onClick={ handleReset }>
        reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};

