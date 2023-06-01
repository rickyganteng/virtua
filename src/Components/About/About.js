import { Row, Col } from 'react-bootstrap';

import style from './About.module.css';

function About() {
  return (
    <>
      <Row md={12}>
        <Col md={8}>
          <p className={style.FontAbout}>
            <div className={`${style.FontAboutTeks} ms-5`}>
              User Wallets: Develop secure digital wallets for users to store
              their virtual assets. These wallets use strong encryption and
              private key management to ensure the safety of the assets.
            </div>
            <br />
            <div className={`${style.FontAboutTeks} `}>
              Asset Tokenization: Create a system where virtual assets are
              represented as unique tokens on the blockchain. Each token should
              have its own digital identity and ownership history, enabling
              transparent tracking and verification.
            </div>
            <br />
            <div className={`${style.FontAboutTeks} ms-5 mt-3`}>
              Decentralized Marketplace: Build a decentralized marketplace where
              users can list, buy, and sell their virtual assets. Implement
              smart contracts to automate the transaction process, ensuring
              secure and transparent exchanges without the need for
              intermediaries.
            </div>
            <br />
            <div className={`${style.FontAboutTeks} `}>
              Ownership and Provenance Tracking: Utilize the blockchain's
              immutable nature to establish transparent ownership records and
              provenance tracking for each virtual asset.
            </div>
            <br />
            <div className={`${style.FontAboutTeks} ms-5 mt-3`}>
              This way, users can easily verify the authenticity, history, and
              ownership chain of any asset.
            </div>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
