/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 * */
// works as expected
import React, { useState, useContext } from "react";

/**
 * @returns Componente 1
 *Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 * */

const miContexto = React.createContext(null);

const Componente1 = () => {
  //inicializamos un estado vacio que va a rellenarse con los
  // datos del contexto del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1 className="normal-case">El token es: {state}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "1234567",
    sesion: 1,
  };

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "JWT123456789",
      session: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de sessionData*/}
      {/* Ademas si actualiza, los componentes de aqui, tambien lo actualiza */}
      <h1> *** Ejemplo de use State() y de useContext()*** </h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
}
