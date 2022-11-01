import React, { useState } from "react"

//useState
export const FirstPage = () => {
  const [valor, setValor] = useState(10) //Sirve para disparar estados

  /**
   * "modificarEstado" is a function that takes a number as an argument and returns the maximum of the
   * sum of the current value of "valor" and the number passed as an argument and 0.
   */
  const modificarEstado = (num) => {
    setValor(Math.max(valor + num, 0))
  }

  /**
   * The reset function sets the value of the valor variable to 10.
   */
  const reset = () => {
    setValor(10)
  }

  return (
    <>
      <h1>Contador mejorado</h1>
      <hr />
      <h1>{ valor }</h1>
      <button onClick={() => modificarEstado(-1)}>-1</button>
      <button onClick={() => modificarEstado(+1)}>+1</button>
      <button onClick={reset}>Reset</button>
    </>
  )
} 
// por favor 