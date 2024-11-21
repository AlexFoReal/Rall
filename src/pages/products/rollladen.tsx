import React from 'react';
import { motion } from 'framer-motion';

const Rollladen = () => {
  const products = [
    {
      title: 'Raffstore',
      image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80',
      description: 'Moderne Raffstores für präzise Lichtsteuerung und optimalen Sonnenschutz. Ideal für Büro- und Wohnräume.',
    },
    {
      title: 'Jalousien',
      image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=800&q=80',
      description: 'Klassische Jalousien in verschiedenen Ausführungen. Flexibel einstellbar für perfekte Lichtverhältnisse.',
    },
    {
      title: 'Außenjalousie',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
      description: 'Robuste Außenjalousien für effektiven Sonnenschutz und erhöhte Energieeffizienz.',
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
          <h1 className="text-4xl font-bold mb-4">Rollladen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältigen Rollladensysteme für optimalen Sonnen- und Sichtschutz.
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

export default Rollladen;