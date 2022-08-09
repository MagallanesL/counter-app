import React, {useState}from 'react';
import PropTypes from 'prop-types';


const Counter = ({value = 3}) => {

     const [counter, setCounter] = useState(value);
     

const handleAdd =()=>{
    setCounter (counter +1);
}
const handleReset =()=>{
    setCounter (value);
}
const handleExt =()=>{
    setCounter (counter -1);
}

    return (
        <>
          <h1>CounterApp</h1>
        <h2> { counter } </h2> 

        <button onClick={handleAdd}>+1</button> 
        <button onClick={handleReset}>Reset</button> 
        <button onClick={handleExt}>-1</button> 
        </>
    );
};


Counter.propTypes = {
 value:PropTypes.number
};


export default Counter;

