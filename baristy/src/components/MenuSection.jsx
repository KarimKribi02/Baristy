import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Sandwish Poulet",
    img: "/menu1.jpg",
  },
  {
    name: "Avocado Toast",
    img: "/menu2.jpg",
  },
  {
    name: "Café Spécial",
    img: "/menu3.jpg",
  },
];

const MenuSection = () => {
  return (
    <section className="bg-primary text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Découvrez quelques saveurs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-primary rounded-xl overflow-hidden shadow"
            >
              <img src={item.img} alt={item.name} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
