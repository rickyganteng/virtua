import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import style from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Faqs from '../../Components/Portofolio/Faqs';
import Experience from '../../Components/RoadmapPage/RoadmapPage';
import Tokenomics from '../../Components/Tokenomics/Tokenomics';
import Footer from '../../Components/Footer/Footer';
class Home extends Component {
  componentDidMount() {
    AOS.init({ duration: 500 });
  }
  render() {
    return (
      <>
        <Container className={`${style.Container}`} fluid>
          <Navbar />
          <div data-aos='fade-down-right' id='about'>
            <About />
          </div>
          <div className={style.Margintop} id='whychooseus' data-aos='zoom-in'>
            <WhyChooseUs />
          </div>
          <div className={style.Margintop} id='roadmap' data-aos='zoom-in'>
            <Experience />
          </div>
          <div className={style.Margintop} id='tokenomics' data-aos='zoom-in'>
            <Tokenomics />
          </div>
          <div className={style.Margintop} id='faqs' data-aos='zoom-in'>
            <Faqs />
          </div>
          {/* {Svg} */}
          <div className='mt-5 mb-3'>
            <Footer />
          </div>
        </Container>
      </>
    );
  }
}
export default Home;
