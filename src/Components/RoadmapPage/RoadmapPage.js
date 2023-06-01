import { Row, Col, Container, Card, Accordion } from 'react-bootstrap';
import React, { useEffect, useContext } from 'react';
import style from './RoadmapPage.module.css';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <div
      className={isCurrentEventKey ? style.ButtonYes : style.ButtonNo}
      // style={{ background: isCurrentEventKey ? '#00a7e6' : 'green' }}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}
function RoadmapPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container className={style.Container} fluid>
        <h1 className={`text-center  ${style.FontJob} pb-5 mt-5`}>ROADMAP</h1>
        <Accordion defaultActiveKey=''>
          <Row>
            <Col>
              <div
                className={`${style.CardAwal} mb-3 row justify-content-center `}
              >
                <Card style={{ width: '30rem' }} className={style.Card}>
                  <Card.Title>
                    <ContextAwareToggle eventKey='0'>
                      <p>Phase 1</p>
                      <p>Community Building and Marketing</p>
                    </ContextAwareToggle>
                  </Card.Title>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <div
                        className={`${style.CardBodyAwal} mb-3 row justify-content-center `}
                      >
                        This phase will involve creating a website and social
                        media presence for Virtua and establishing a marketing
                        campaign to promote the blockchain. The development team
                        will also work to build a community around the project,
                        engaging with early adopters and stakeholders to gather
                        feedback and refine the blockchain platform. The
                        objective of this phase will be to build momentum for
                        the Virtua project and establish it as a leading
                        blockchain platform.
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className={`${style.CardAwal} mb-3 row justify-content-center`}
              >
                <Card style={{ width: '30rem' }} className={style.Card}>
                  <Card.Title>
                    <ContextAwareToggle eventKey='1'>
                      <p>Phase 2</p>
                      <p>Prototyping and Development</p>
                    </ContextAwareToggle>
                  </Card.Title>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      <div
                        className={`${style.CardBodyAwal} mb-3 row justify-content-center`}
                      >
                        Once the Virtua concept has been established, the focus
                        will shift to prototyping and development. This phase
                        will involve building out a minimum viable product (MVP)
                        of the blockchain platform and testing it with early
                        adopters. The development team will work to refine the
                        architecture and functionality of the blockchain,
                        focusing on scalability and usability. The objective of
                        this phase will be to create a functional prototype of
                        the Virtua blockchain that can be tested and refined.
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className={`${style.CardAwal} mb-3 row justify-content-center`}
              >
                <Card style={{ width: '30rem' }} className={style.Card}>
                  <Card.Title>
                    <ContextAwareToggle eventKey='2'>
                      <p>Phase 3</p>
                      <p>Network Development</p>
                    </ContextAwareToggle>
                  </Card.Title>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                      <div
                        className={`${style.CardBodyAwal} mb-3 row justify-content-center`}
                      >
                        Virtua will focus on developing its network and growing
                        its user base. This phase will involve enhancing the
                        blockchain's capabilities and improving its scalability
                        to handle increased transaction volume. The development
                        team will also work to attract more users to the
                        platform and build out the ecosystem around Virtua. This
                        will include partnering with other blockchain projects
                        and developers to create more use cases for Virtua.
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className={`${style.CardAwal} mb-3 row justify-content-center`}
              >
                <Card style={{ width: '30rem' }} className={style.Card}>
                  <Card.Title>
                    <ContextAwareToggle eventKey='3'>
                      <p>Phase 4</p>
                      <p>Launch and Growth</p>
                    </ContextAwareToggle>
                  </Card.Title>
                  <Accordion.Collapse eventKey='3'>
                    <Card.Body>
                      <div
                        className={`${style.CardBodyAwal} mb-3 row justify-content-center`}
                      >
                        The final phase of the Virtua roadmap will focus on
                        launching the blockchain platform and driving growth.
                        This will involve a coordinated launch campaign, focused
                        on attracting users and businesses to the Virtua
                        platform. The development team will work to build out
                        the ecosystem around Virtua, partnering with other
                        blockchain projects and developers to create more use
                        cases for the platform. The objective of this phase will
                        be to establish Virtua as a leading blockchain platform
                        with a growing user base and a vibrant ecosystem of
                        developers and businesses.
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Accordion>
      </Container>
    </>
  );
}

export default RoadmapPage;
