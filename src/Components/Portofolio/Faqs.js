import { Container, Tabs, Tab } from 'react-bootstrap';

import FaqGeneral from './FAQSComponent/FAQGeneral.js';
import FaqTokens from './FAQSComponent/FAQTokens.js';
import FaqClient from './FAQSComponent/FAQClient.js';
import FaqLegal from './FAQSComponent/FAQLegal.js';
import style from './Faqs.module.css';
function Portofolio() {
  return (
    <>
      <Container className={`${style.Container} pb-5 pt-3`} fluid>
        <h1 className='text-center mb-1'>FAQS</h1>
        <h3 className='text-center mb-5'>Frequently Asked questions</h3>
        <div>
          <Tabs
            defaultActiveKey='GENERAL'
            // id='fill-tab-example'
            className='mb-3'
            fill
          >
            <Tab eventKey='GENERAL' title='GENERAL'>
              <FaqGeneral />
            </Tab>
            <Tab eventKey='TOKENS' title='TOKENS'>
              <FaqTokens />
            </Tab>
            <Tab eventKey='CLIENT' title='CLIENT'>
              <FaqClient />
            </Tab>
            <Tab eventKey='LEGAL' title='LEGAL'>
              <FaqLegal />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default Portofolio;
