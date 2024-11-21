import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;