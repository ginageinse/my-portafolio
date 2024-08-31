// src/components/Layout.tsx
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
  }

  
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <header className="bg-pink-300 text-white p-4 shadow-md">
      <h1 className="text-3xl font-bold">Mi Portafolio</h1>
    </header>
    <main className="flex-grow p-6">
      {children}
    </main>
    <footer className="bg-pink-300 text-white p-4 text-center shadow-md">
      <p>© 2024 Mi Portafolio</p>
    </footer>
  </div>
);

export default Layout;
