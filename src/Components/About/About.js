import { Row, Col, Container } from 'react-bootstrap';

import style from './About.module.css';

function About() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h3 className={`${style.ColorWhite} ${style.top} `}>Virtua</h3>
            <p className={style.FontAbout}>
              <div className={`${style.FontAboutTeks} `}>
                Virtua is blockchain platform that allows users to manage and
                trade virtual assets securely. This include virtual currencies,
                in-game items, digital collectibles, virtual real estate.
                Provide a decentralized marketplace and ensure transparent
                ownership and provenance of these assets.
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
