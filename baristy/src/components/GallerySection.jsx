import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GallerySection = () => {
  return (
    <section className="bg-white text-primary px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Ambiance et lieu
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src="/gal1.jpg" className="rounded-lg shadow" />
          <img src="/gal2.jpg" className="rounded-lg shadow" />
          <img src="/gal3.jpg" className="rounded-lg shadow" />
          <img src="/gal4.jpg" className="rounded-lg shadow" />
        </div>
        <Link
          to="/gallery"
          className="text-accent font-medium underline hover:opacity-80"
        >
          Voir toute la galerie →
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
