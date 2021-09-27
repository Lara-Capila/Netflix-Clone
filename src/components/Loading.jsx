import React from 'react';

import netflixLoading from '../images/netflix_LoadTime.gif';
import '../styles/loading.css';

export default function Loading() {
  return (
    <section className="loading-container">
      <img src={ netflixLoading } alt="loading netflix" />
    </section>
  );
}
