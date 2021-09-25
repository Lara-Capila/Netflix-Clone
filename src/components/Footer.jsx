import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        <section className="phrases author">
          Feito com ❤️ e dedicação por
          { ' ' }
          <a target="_blank" href="https://www.linkedin.com/in/lara-capila/" rel="noreferrer"> Lara Capila</a>
          <br />
        </section>
        <section className="phrases netflix">
          Direitos de imagem reservados a
          { ' ' }
          <a target="_blank" href="https://www.netflix.com/browse" rel="noreferrer"> Netflix</a>
          <br />
        </section>
        <section className="phrases theMovie">
          { ' ' }
          Dados consumidos da
          <a target="_blank" href="https://developers.themoviedb.org/3/getting-started/introduction" rel="noreferrer">
            { ' ' }
            The Movie DB API
          </a>
        </section>

      </p>
    </footer>
  );
}
