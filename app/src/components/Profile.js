import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

export default function Profile() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const details= state.data
  return (
    <div className='container'>
      <p>Profile </p> 
      <div>{details.email}</div>
      <Button onClick={() => dispatch({ type: "logout" })}>Logout</Button>
    </div>
  )
}
