import React from 'react';
import { motion } from 'framer-motion';

const Terrassendach = () => {
  const products = [
    {
      title: 'Pergola',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Moderne Pergola-Systeme mit flexiblen Beschattungsmöglichkeiten. Ideal für die Gestaltung Ihres Außenbereichs.',
    },
    {
      title: 'Lamellendach',
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
      description: 'Innovative Lamellendächer mit verstellbaren Elementen für optimale Licht- und Klimaregulierung.',
    },
    {
      title: 'Terrassenüberdachung aus Glas',
      image: 'https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?auto=format&fit=crop&w=800&q=80',
      description: 'Elegante Glasüberdachungen für lichtdurchflutete Terrassen. Wettergeschützt bei maximaler Transparenz.',
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
          <h1 className="text-4xl font-bold mb-4">Terrassendach</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erweitern Sie Ihren Wohnraum mit unseren hochwertigen Terrassenüberdachungen.
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

export default Terrassendach;