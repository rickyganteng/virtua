import { Container } from 'react-bootstrap';

import FaqGeneral from './FAQSComponent/FAQGeneral.js';
import style from './Faqs.module.css';
function Portofolio() {
  return (
    <>
      <Container className={`${style.Container} pb-5 pt-3`} fluid>
        <h1 className={`${style.Title} text-center mb-2`}>
          BEST OFFER UTILITY FOR LAUNCHING !
        </h1>

        <div>
          <FaqGeneral />
        </div>
      </Container>
    </>
  );
}

export default Portofolio;
