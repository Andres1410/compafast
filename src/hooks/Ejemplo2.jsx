/**
 * Ejemplo de uso de :
 * - uso de:
 * - use state()
 * - useRef()
 * - useEffect()
 * */

// works as expected
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //creacion de 2 contadores diferentes:
  //cada uno es de un estado diferente:

  const [Contador1, setContador1] = useState(0);
  const [Contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con use Ref:
  //con el elemento de DOM del componente (vista html)

  const miRef = useRef();

  function incrementar1() {
    setContador1(Contador1 + 1);
  }

  function incrementar2() {
    setContador2(Contador2 + 1);
  }

  /**
   * Trabajando con UseEffect
   * */

  /**
   * ? caso 1: Ejecutar siempre un snipet de codigo:
   * Cada vez que haya un cambio dentro del UseEffect();
   * */

  //   useEffect(() => {
  //     console.log("Cambio el estado del ComponenteW");
  //     console.log("Mostrando referencia al el elemento del DOM:");
  //     console.log(miRef);
  //   });

  /**
   *? caso 2: Ejecutar solo cuando cambie contador 1:
   * cada ves que haya un cambio en contador 1,se ejecuta lo que diga
   * En caso de que cambie contado2, no habra ejecucion
   **/

  useEffect(() => {
    console.log("Cambio el estado del Contador 1");
    console.log("Mostrando referencia al el elemento del DOM:");
    console.log(miRef);
  }, [Contador1, Contador2]);

  return (
    <div>
      <h1>
        *** Ejemplo de useState{}, useRef{}, useEffect{} ***
      </h1>
      <h2>Contador 1: {Contador1}</h2>
      <h2>Contador 2: {Contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador con 1</button>
        <button onClick={incrementar2}>Incrementar contador con 1</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
