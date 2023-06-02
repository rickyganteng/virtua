import { Container } from 'react-bootstrap';

import FaqGeneral from './FAQSComponent/FAQGeneral.js';
import style from './Faqs.module.css';
function Portofolio() {
  return (
    <>
      <Container className={`${style.Container} pb-5 pt-3`} fluid>
        <h1 className={`${style.Title} text-center mb-1`}>FAQS</h1>
        <h3 className={`${style.Title} text-center mb-3`}>
          Frequently Asked questions
        </h3>
        <div>
          <FaqGeneral />
        </div>
      </Container>
    </>
  );
}

export default Portofolio;
