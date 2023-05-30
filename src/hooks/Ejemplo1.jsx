/**
 * Ejemplo de uso  del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y , ademas, poder modificarlo
 * Uso de los hooks
 */
// works as expected
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Ejemplo1 = () => {
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "Martin",
    email: "martin@gmail.com",
  };

  /**
   *Queremos que el valorInicial y PERSONAINICIAL sean
   * parte del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente.
   *
   * const [ nombre Variable, funcionParaCambiar] =  useState(valorInicial)
   */
  //Stados:

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  //Metodos:
  /**
   * Funcion para actualizar el estado privado que obtiene el contador:
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevovalor)
    setContador(contador + 1); // Aumenta el contador en 1
  }

  function actualizarPersona() {
    setPersona({
      nombre: "pepe",
      email: "pepe@gmail.com",
    });
  }

  return (
    <div>
      <h1>*** Ejemplo de useState{} ***</h1>
      <h2>Contador:{contador}</h2>
      <h2>Datos de la personas: </h2>
      <h3>Nombre{persona.nombre}</h3>
      <h4>Email:{persona.email}</h4>
      {/* Bloque de botones para actualizar el estado */}
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <br></br>
      <button onClick={actualizarPersona}>Acualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
