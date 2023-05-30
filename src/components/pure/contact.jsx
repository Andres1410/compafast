import PropTypes from "prop-types";
import { Contacts } from "../../models/contacts.class";

const ContactComponent = ({ contacts }) => {
  return (
    <div>
      <h2>Nombre: {contacts.name}</h2>
      <h3>Apellido: {contacts.apellido}</h3>
      <h4>email: {contacts.email}</h4>
      <h5>Descend: {contacts.descend}</h5>
      <h6>
        This user is:{" "}
        {contacts.user ? "Contacto En Línea" : "Contacto No Disponible"}
      </h6>
    </div>
  );
};

ContactComponent.propTypes = {
  contacts: PropTypes.instanceOf(Contacts),
};

export default ContactComponent;
