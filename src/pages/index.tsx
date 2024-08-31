// src/pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';


const HomePage: React.FC = () => (
  <Layout>
<h2 className="text-2xl font-semibold mb-4">Bienvenido a mi portafolio</h2>
    <p className="text-lg mb-6">Aquí puedes encontrar mis proyectos y más información sobre mí.</p>
    <Button onClick={() => alert('¡Hola!')}>¡Contáctame!</Button>  </Layout>
);

export default HomePage;
