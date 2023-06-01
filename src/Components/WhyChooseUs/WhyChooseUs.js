import { Row, Col, Container, Card } from 'react-bootstrap';
import style from './WhyChooseUs.module.css';
import LogoWallet from '../Assets/wallet-logo.svg';
import LogoToken from '../Assets/token.svg';
import LogoDecentralized from '../Assets/Decentralized.svg';
import LogoPeople from '../Assets/people.svg';
import LogoSafety from '../Assets/Safety.svg';
import LogoInteroperability from '../Assets/Interoperability.svg';
import LogoUiUx from '../Assets/Ui-Ux.svg';
import LogoComunity from '../Assets/comunity.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
function WhyChooseUs() {
  return (
    <>
      <Container className={style.Container} fluid>
        <Row>
          <Col>
            <h1 className={`text-center mb-5 `}>Why Choose Us</h1>
          </Col>
        </Row>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            2200: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          className='mySwiper'
        >
          <Row>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoWallet}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      <div>
                        Develop secure digital wallets for users to store their
                        virtual assets. These wallets should use strong
                        encryption and private key management to ensure the
                        safety of the assets.
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoToken}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Create a system where virtual assets are represented as
                      unique tokens on the blockchain. Each token should have
                      its own digital identity and ownership history, enabling
                      transparent tracking and verification.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoDecentralized}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Build a decentralized marketplace where users can list,
                      buy, and sell their virtual assets. Implement smart
                      contracts to automate the transaction process, ensuring
                      secure and transparent exchanges without the need for
                      intermediaries.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoPeople}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Utilize the blockchain's immutable nature to establish
                      transparent ownership records and provenance tracking for
                      each virtual asset. This way, users can easily verify the
                      authenticity, history, and ownership chain of any asset.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoSafety}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Implement robust security measures to protect against
                      fraudulent activities such as asset counterfeit,
                      duplication, or unauthorized transfers. Consider
                      integrating mechanisms such as digital signatures,
                      multi-factor authentication, and reputation systems to
                      enhance security and trust.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoInteroperability}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Explore interoperability standards like ERC-721 or
                      ERC-1155 to ensure compatibility with other virtual asset
                      platforms and ecosystems. This allows users to seamlessly
                      transfer assets between different platforms and increases
                      the liquidity of virtual assets.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoUiUx}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Pay attention to the user experience and design an
                      intuitive interface that makes it easy for users to manage
                      their assets, browse the marketplace, and engage in
                      transactions. Provide clear and accessible information
                      about each asset's details, including images,
                      descriptions, and historical data.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <Col sm>
              <SwiperSlide>
                <Card
                  className={`${style.card1} mt-3`}
                  style={{ width: '16rem', height: '25rem' }}
                >
                  <Card.Img
                    style={{ width: '7rem', height: '7rem' }}
                    variant='top'
                    src={LogoComunity}
                    className={style.cardImage}
                  />
                  <Card.Body>
                    <Card.Text>
                      Foster an active community around your Virtua platform.
                      Encourage users to provide feedback, participate in
                      discussions, and contribute to the development of the
                      ecosystem. Consider implementing governance mechanisms
                      that allow token holders to have a say in platform
                      decisions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
          </Row>
        </Swiper>
      </Container>
    </>
  );
}

export default WhyChooseUs;
