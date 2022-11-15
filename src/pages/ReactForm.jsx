import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';

export const ReactForm = () => {
  const [ texto, setTexto ] = useState('')

  const onTextoChange = e => {
    setTexto(e.target.value)
  }
  const onSubmit = () => {
    console.log(texto)
  }
  return (
    <div style={{padding: 40}}> 
      <TextField 
        variant="filled"
        label="Texto encima del input"
        value={texto}
        onChange={onTextoChange}
        type='text' 
      />
      <div>
        <Button onClick={onSubmit} variant="contained" color="success">Submit</Button>
      </div>
      <h1>Mi texto es: {texto}</h1>
    </div>
  )
}
