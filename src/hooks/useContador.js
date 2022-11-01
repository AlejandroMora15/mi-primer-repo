import { useState } from "react"

export const useContador = (initialState) => {
  const [valor, setValor] = useState(initialState) //Sirve para disparar estados
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
    setValor(initialState)
  }

  return {
    valor, 
    modificarEstado,
    reset
  }
}