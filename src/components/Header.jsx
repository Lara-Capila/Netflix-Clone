import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import '../styles/header.css';

export default function Header() {
  const [backgroundBlack, setBackgroundBlack] = useState(false);

  useEffect(() => {
    const listenerScroll = () => {
      if (window.scrollY > 10) {
        setBackgroundBlack(true);
      } else {
        setBackgroundBlack(false);
      }
    };

    window.addEventListener('scroll', listenerScroll);
    return () => {
      window.removeEventListener('scroll', listenerScroll);
    };
  }, []);

  return (
    <header className={ backgroundBlack ? 'background--black' : '' }>
      <section className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix logo" />
        </a>
      </section>
      <section className="header--user">
        <a href="/">
          <img src="https://occ-0-4484-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71" alt="logo usuário" />
        </a>
      </section>
    </header>
  );
}
