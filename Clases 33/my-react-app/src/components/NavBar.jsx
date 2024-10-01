import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/crear" style={styles.link}>Crear Producto</Link>
        </li>
        <li style={styles.li}>
          <Link to="/categorias" style={styles.link}>
            Categorias
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '10px',
    margin: "0px",
    backgroundColor: '#333',
    color: 'white',
  },
  ul: {
    display: 'flex',
    listStyleType: 'none', // Elimina los marcadores de la lista
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Navbar;
