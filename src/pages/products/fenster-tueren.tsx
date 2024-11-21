import React from 'react';
import { motion } from 'framer-motion';

const FensterTueren = () => {
  const products = [
    {
      title: 'Haustüren & Eingangstüren',
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
      description: 'Hochwertige Haustüren für einen repräsentativen Eingangsbereich. Wir bieten eine große Auswahl an Designs, Materialien und Sicherheitsausstattungen.',
    },
    {
      title: 'Fensterbau',
      image: 'https://images.unsplash.com/photo-1604514813560-1e4f5726db65?auto=format&fit=crop&w=800&q=80',
      description: 'Maßgefertigte Fenster in verschiedenen Ausführungen. Von klassischen Holzfenstern bis hin zu modernen Kunststoff- und Aluminiumfenstern.',
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
          <h1 className="text-4xl font-bold mb-4">Fenster & Türen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Qualität und Design für Ihr Zuhause. Entdecken Sie unsere vielfältige Auswahl an Fenstern und Türen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="w-full h-64 object-cover"
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

export default FensterTueren;