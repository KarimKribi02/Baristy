import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-accent text-primary px-6 py-16 text-center">
      <motion.h2
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Envie d’une pause gourmande ?
      </motion.h2>
      <p className="mb-6 text-lg">Passez nous voir ou réservez par WhatsApp !</p>
      <Link
        to="/contact"
        className="bg-primary text-accent px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition"
      >
        Contactez-nous
      </Link>
    </section>
  );
};

export default CallToAction;
