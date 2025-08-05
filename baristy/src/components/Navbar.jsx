import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-accent">Baristy</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent">Accueil</Link>
          <Link to="/menu" className="hover:text-accent">Menu</Link>
          <Link to="/concept" className="hover:text-accent">À propos</Link>
          <Link to="/gallery" className="hover:text-accent">Galerie</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
          <Link to="/faq" className="hover:text-accent">FAQ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
