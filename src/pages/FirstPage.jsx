import { useState } from "react"
import { useEffect } from "react"
import { useContador } from "../hooks/useContador"

//useState
// REFACTOR
export const FirstPage = () => {
  const { valor, reset, increaseBy, decreaseBy} = useContador(200, 1, 10)
  const [isPar, setIsPar] = useState(true)
  // useEffect => manejo y disparo de renderizados
  // useCallBack, memo, useId, useContext

  useEffect(() => {
   /*  if(valor % 2 === 0){
      console.log('es par')
    }else{
      console.log('no es par')
    } */
    //Ternario
    console.log(valor % 2 === 0 ? 'es par' : 'no es par')
    setIsPar(valor % 2 === 0)
  }, [valor])

  return (
    <>
      <h1>Contador mejorado</h1>
      <hr />
      <h1>{ valor }</h1>
      <button onClick={decreaseBy}>Restar</button>
      <button onClick={increaseBy}>Suma</button>
      <button onClick={reset}>Reset</button>
      { isPar ?
        <h5>ES PAR</h5>
        : <h5>NO ES PARA</h5>
      }
    </>
  )
} 
// por favor 