import "./App.css";

//Tipos de componentes padres:
// import TaskListComponent from "./components/containers/task_list";
// import ContactListComponent from "./components/containers/contact_list";

// Hooks ejemplo:
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";

function App() {
  return (
    <div>
      {/* Greting */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <ContactListComponent></ContactListComponent> */}
      {/* Ejemplos de uso de Hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      <MiComponenteConContexto></MiComponenteConContexto>
    </div>
  );
}

export default App;
