import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import WelcomeText from '../components/WelcomeText';

const HomePage: React.FC = () => (
  <Layout>
    <WelcomeText />
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-dark-gray">Bienvenido a mi portafolio</h2>
      <p className="text-lg mb-6 text-dark-gray">Aquí puedes encontrar mis proyectos y más información sobre mí.</p>
      <Button onClick={() => window.open('https://wa.me/56989030326?text=Hola,%20me%20interesa%20tu%20perfil', '_blank')}>
        ¡Contáctame!
      </Button>
    </div>
  </Layout>
);

export default HomePage;
