import React from 'react';
import { motion } from 'framer-motion';

const Markisen = () => {
  const products = [
    {
      title: 'Gelenkarmmarkise',
      image: 'https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?auto=format&fit=crop&w=800&q=80',
      description: 'Die klassische Lösung für große Terrassen und Balkone. Unsere Gelenkarmmarkisen bieten optimalen Sonnenschutz und sind in verschiedenen Designs erhältlich.',
    },
    {
      title: 'Kassettenmarkise',
      image: 'https://images.unsplash.com/photo-1625402542803-a73682a75bce?auto=format&fit=crop&w=800&q=80',
      description: 'Die vollständig geschlossene Kassette schützt das Tuch und die Mechanik vor Witterungseinflüssen. Ideal für ganzjährigen Einsatz.',
    },
    {
      title: 'Markisoletten',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Die perfekte Kombination aus Markise und Fallarm. Markisoletten eignen sich besonders für Fenster und ermöglichen eine optimale Licht- und Luftregulierung.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Markisen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere hochwertigen Markisenlösungen für optimalen Sonnenschutz und mehr Komfort im Außenbereich.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markisen;