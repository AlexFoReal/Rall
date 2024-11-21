import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Sun } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Sonnenschutz Experten</span>
            </div>
            <p className="text-sm">
              Ihr Spezialist für Markisen, Terrassendächer und Sonnenschutzsysteme in Süddeutschland und Mallorca.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>Hauptstraße 123</li>
              <li>72127 Kusterdingen</li>
              <li>Tel: +49 123 456 789</li>
              <li>Email: info@sonnenschutz-experten.de</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kontakt" className="hover:text-blue-500 transition-colors">
                  Kontaktformular
                </Link>
              </li>
              <li>
                <Link to="/termin" className="hover:text-blue-500 transition-colors">
                  Termin vereinbaren
                </Link>
              </li>
              <li>
                <Link to="/angebot" className="hover:text-blue-500 transition-colors">
                  Kostenlos Angebot anfordern
                </Link>
              </li>
              <li>
                <Link to="/reparatur" className="hover:text-blue-500 transition-colors">
                  Reparatur-Eildienst
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Angebote.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link to="/impressum" className="hover:text-blue-500 transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-blue-500 transition-colors">
                Datenschutz
              </Link>
              <Link to="/agb" className="hover:text-blue-500 transition-colors">
                AGB
              </Link>
            </div>
            <div>
              © {new Date().getFullYear()} Sonnenschutz Experten. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;