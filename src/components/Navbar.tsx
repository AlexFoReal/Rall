import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      name: 'Produkte',
      submenu: [
        { name: 'Markisen', href: '/produkte/markisen' },
        { name: 'Terrassendach', href: '/produkte/terrassendach' },
        { name: 'Garagentore', href: '/produkte/garagentore' },
        { name: 'Rollladen', href: '/produkte/rollladen' },
        { name: 'Fenster & Türen', href: '/produkte/fenster-tueren' },
      ],
    },
    {
      name: 'Dienstleistungen',
      submenu: [
        { name: 'Serviceangebot', href: '/dienstleistungen/service' },
        { name: 'Reparatur-Eildienst', href: '/dienstleistungen/reparatur' },
      ],
    },
    {
      name: 'Standorte',
      submenu: [
        { name: 'Kusterdingen', href: '/standorte/kusterdingen' },
        { name: 'Böblingen', href: '/standorte/boeblingen' },
        { name: 'Mallorca', href: '/standorte/mallorca' },
      ],
    },
    {
      name: 'Über uns',
      submenu: [
        { name: 'Jobs & Karriere', href: '/ueber-uns/jobs' },
        { name: 'Unternehmen & Leitbild', href: '/ueber-uns/unternehmen' },
        { name: 'Montagevideos', href: '/ueber-uns/videos' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+49123456789" className="flex items-center hover:text-blue-600">
              <Phone className="w-4 h-4 mr-1" />
              +49 123 456 789
            </a>
            <a href="mailto:info@sonnenschutz-experten.de" className="flex items-center hover:text-blue-600">
              <Mail className="w-4 h-4 mr-1" />
              info@sonnenschutz-experten.de
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Termin vereinbaren
            </button>
          </div>
        </div>
        
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Sonnenschutz Experten</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button className="text-gray-700 hover:text-blue-600 transition-colors">
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  {item.submenu ? (
                    <>
                      <div className="font-medium text-gray-900 mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block font-medium text-gray-900 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;