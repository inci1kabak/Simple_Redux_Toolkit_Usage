
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import './index.css';



function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value)



  return (
    <>
      <div className='write'>{value}</div>
      <div className='buton'>
        <button onClick={() => dispatch(increment())}>ARTTIR</button>
        <button onClick={() => dispatch(decrement())}>AZALT</button>
      </div>



    </>

  )
}

export default App