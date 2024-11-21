import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wrench, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1920&q=80"
            alt="Moderne Terrassenüberdachung"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ihr Experte für Sonnenschutz & Terrassendächer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Maßgeschneiderte Lösungen für mehr Lebensqualität im Außenbereich
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#beratung"
                className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                Kostenlose Beratung
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#produkte"
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Produkte entdecken
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">10 Jahre Garantie</h3>
              <p className="text-gray-600">
                Wir stehen für Qualität und geben Ihnen eine umfassende Garantie auf unsere Produkte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professionelle Montage</h3>
              <p className="text-gray-600">
                Unsere geschulten Experten sorgen für eine fachgerechte Installation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24h Reparatur-Service</h3>
              <p className="text-gray-600">
                Bei Notfällen sind wir rund um die Uhr für Sie erreichbar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Beste Bewertungen</h3>
              <p className="text-gray-600">
                Über 1.000 zufriedene Kunden sprechen für unsere Qualität.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Produkte</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere vielfältige Auswahl an hochwertigen Sonnenschutzlösungen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Markisen',
                image: 'https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?auto=format&fit=crop&w=800&q=80',
                description: 'Hochwertige Markisen für Ihre Terrasse',
              },
              {
                title: 'Terrassendächer',
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
                description: 'Elegante Überdachungen für mehr Wohnkomfort',
              },
              {
                title: 'Rollläden',
                image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80',
                description: 'Moderne Rollläden für optimalen Schutz',
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href={`/produkte/${product.title.toLowerCase()}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;