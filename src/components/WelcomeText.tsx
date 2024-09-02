import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

const WelcomeText: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsShrunk(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        isShrunk
          ? 'flex-col-reverse md:flex-row justify-between items-center h-[33rem] w-full'
          : 'flex-col justify-center items-center h-screen w-screen'
      } flex`}
    >
      <div
        className={`${
          isShrunk ? 'flex flex-col items-end w-2/3 pr-8' : 'text-center w-full'
        } transition-all duration-1000 ease-in-out`}
      >
        <h1 className={`text-3xl ${isShrunk ? 'text-3xl text-dark-gray' : 'text-6xl text-dark-gray'}`}>
          {isShrunk ? 'Gina Galleguillos' : 'Bienvenido a mi portafolio frontend'}
        </h1>
        {!isShrunk && (
          <img
            src="/presentation.gif"
            alt="Sticker animado"
            className="absolute mt-36 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem]"
          />
        )}
        {isShrunk && (
          <div className="mt-4">
            <Button
              href="/files/my-resume.pdf"
              download
            >
              Descarga mi CV
            </Button>
          </div>
        )}
      </div>
      {isShrunk && (
        <div className="relative w-1/3 h-[33rem] overflow-hidden">
          <img
            src="/my-self.png"
            alt="Mi foto"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default WelcomeText;
