import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'Markisen',
      image: 'https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?auto=format&fit=crop&w=800&q=80',
      description: 'Hochwertige Markisenlösungen für Ihren Außenbereich',
      href: '/produkte/markisen',
    },
    {
      title: 'Fenster & Türen',
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
      description: 'Moderne Fenster- und Türsysteme für Ihr Zuhause',
      href: '/produkte/fenster-tueren',
    },
    {
      title: 'Terrassendach',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Elegante Überdachungslösungen für Ihre Terrasse',
      href: '/produkte/terrassendach',
    },
    {
      title: 'Rollladen',
      image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80',
      description: 'Innovative Rollladensysteme für optimalen Schutz',
      href: '/produkte/rollladen',
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
          <h1 className="text-4xl font-bold mb-4">Unsere Produktpalette</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MR Rolladen Rall bietet Ihnen hochwertige Lösungen für Sonnenschutz, Sicherheit und Komfort.
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
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to={product.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;