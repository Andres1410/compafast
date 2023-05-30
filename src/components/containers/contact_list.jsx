import { DESCENDS } from "../../models/descends.enum";
import { Contacts } from "../../models/contacts.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContacts = new Contacts(
    "Andres Felipe",
    "rodriguez",
    "andrescamcho6@gmail.com",
    false,
    DESCENDS.NORMAL
  );

  return (
    <div>
      <div> your contacts:</div>
      {/* Aplicar un for o un Map para renderizar una lista de tareas*/}
      {/* props tarea: */}
      <ContactComponent contacts={defaultContacts}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
