import { useContext } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MiPerfil = () => {
  const { usuarios } = useContext(UsuariosContext);

  return (
    <div className="mi-perfil">
      <h1>Perfil de {usuarios?.nombre}</h1>
      <h5>Nombre: {usuarios?.nombre}</h5>
      <h5>Apellido: {usuarios?.apellido}</h5>
      <h5>Email: {usuarios?.email}</h5>
      <div className="titulo-usuario">
        <h1>Perfil de Usuario</h1>
        <hr />
        <div className="info">
          <div className="buttons">
            <Link to="/mis-publicaciones">
              <Button variant="btn btn-outline-light w-100">Mis Publicaciones</Button>
            </Link>
            <Link to="/publicar">
              <Button variant="btn btn-outline-light w-100">Publicar productos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfil;
