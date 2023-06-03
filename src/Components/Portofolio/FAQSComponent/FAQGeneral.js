import { Row, Col, Container, Accordion } from 'react-bootstrap';
function FaqGeneral() {
  return (
    <>
      <Container>
        <div className='justify-content-center text-center'>
          <Row>
            <Col>
              <Accordion defaultActiveKey=''>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>DEVELOPERS DOCS</Accordion.Header>
                  <Accordion.Body>
                    Any developer can build on the Virua Chain without
                    limitations, virtua is compatible with Remix, Truffle and
                    all the tools available for the Ethereum Blockchain without
                    any compatibility issues.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>Virtua SWAP</Accordion.Header>
                  <Accordion.Body>
                    We have become heavy users of Potion across our entire team.
                    It has increased our sales team's performance substantially
                    and we are incorporating it into more and more of our
                    routines every week
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>Virtua STAKING</Accordion.Header>
                  <Accordion.Body>
                    We have become heavy users of Potion across our entire team.
                    It has increased our sales team's performance substantially
                    and we are incorporating it into more and more of our
                    routines every week
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>ViRTUA WALLET</Accordion.Header>
                  <Accordion.Body>
                    Send, Received and Keep coins and another tokens in the
                    wallet on Virtua wallet. A well known messaging application
                    all decentralized and secure. U can download for IOS and
                    ANDROID ASAP
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>VIRTUA EXCHANGE</Accordion.Header>
                  <Accordion.Body>
                    Special exchange which has many features including FUTURE
                    features and trades in real time and transparently. And As
                    soon As possible, when the mainnet release, u will find Al
                    system works fine in our exchange
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default FaqGeneral;
