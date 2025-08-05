import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary text-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bienvenue chez <span className="text-accent">Baristy</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Une expérience café moderne à Agadir, entre tradition marocaine et ambiance chaleureuse. Venez déguster nos plats servis sur bois.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/menu"
              className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:bg-opacity-80 transition"
            >
              Voir le Menu
            </Link>
            <Link
              to="/contact"
              className="border border-accent text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent hover:text-primary transition"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/hero-cafe.png" // 🖼️ Mets une image dans /public
          alt="Café marocain"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
