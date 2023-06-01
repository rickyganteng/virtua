import React, { Component } from 'react';
import style from './Footer.module.css';
import { Image, Row, Col } from 'react-bootstrap';
import Logovirtua from '../Assets/logo virtua.png';
import {
  // BsFacebook,
  BsTwitter,
  // BsDiscord,
  BsTelegram,
} from 'react-icons/bs';

class Footer extends Component {
  render() {
    return (
      <div class='text-center pb-3'>
        <Row>
          <Col>
            <Image className={style.myPhoto} src={Logovirtua} alt='Virtua' />
          </Col>
          {/* <Col>
            Link Others
            <Row>
              <Col>
                <li>
                  <a
                    className={style.reSizeIcon}
                    href='https://www.linkedin.com/in/ricky-syahputra-619723154/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    BSC Scan
                  </a>
                </li>
                <li>
                  <a
                    className={style.reSizeIcon}
                    href='https://www.linkedin.com/in/ricky-syahputra-619723154/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Pancakeswap
                  </a>
                </li>
                <li>
                  <a
                    className={style.reSizeIcon}
                    href='https://www.linkedin.com/in/ricky-syahputra-619723154/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Audit
                  </a>
                </li>
              </Col>
            </Row>
          </Col> */}
          <Col>
            Social Media
            {/* <Row>
              <Col>
                <BsFacebook /> Facebook
              </Col>
            </Row> */}
            <Row>
              <Col>
                <BsTwitter />
                <a
                  href='https://twitter.com/virtuabnb?t=Eewe58lvLbf84CKBFVLgrA&s=09'
                  target='_blank'
                  rel='noreferrer'
                >
                  Twitter
                </a>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <BsDiscord /> Discord
              </Col>
            </Row> */}
            <Row>
              <Col>
                <BsTelegram />
                <a
                  href='https://t.me/virtua_global'
                  target='_blank'
                  rel='noreferrer'
                >
                  Telegram
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <h6 className={style.Justify}>@ 2023 Virtua</h6>
      </div>
    );
  }
}

export default Footer;
