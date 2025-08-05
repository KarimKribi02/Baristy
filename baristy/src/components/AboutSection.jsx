import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white text-primary px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Notre concept
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg opacity-80"
        >
          Chez <span className="text-accent font-semibold">Baristy</span>, nous
          marions l’ambiance marocaine traditionnelle à une touche moderne et urbaine.
          Nos plats sont soigneusement présentés sur des plateaux en bois dans un décor chic.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
