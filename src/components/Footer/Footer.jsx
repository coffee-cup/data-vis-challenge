import React from 'react';
import Container from 'components/Container/Container.jsx';
import 'components/Footer/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <small>Messy code on <a href="https://github.com/coffee-cup/data-vis-challenge">Github</a></small>
      </Container>
    </footer>
  );
}

export default Footer;
