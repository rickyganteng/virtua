import { Container, Image } from 'react-bootstrap';
import LogoTokenomics from '../Assets/tokenomic.png';
import style from './Tokenomics.module.css';
function Tokenomics() {
  return (
    <>
      <Container className={`${style.Container} pb-5 pt-3`} fluid>
        <h1 className='text-center mb-1'>TOKENOMICS</h1>

        <div className='d-flex justify-content-center pt-5'>
          <Image src={LogoTokenomics} />
        </div>
        <div className='fw-bold'>
          <div className='d-flex justify-content-center '>Smart Contract :</div>
          <div className='d-flex justify-content-center '>
            0x71ff5D545cb6B3fD31Ca7b451279c2b34E80253D
          </div>
          <div className='d-flex justify-content-center pt-5'>
            TOTAL SUPPLY : 1.000.000.000
          </div>
          <div className='d-flex justify-content-center '>
            TAX B/S : 8% / 8%
          </div>
          <div className='d-flex justify-content-center '>
            Max wallet 1%, chain bsc, decimal 9
          </div>
          <div className='d-flex justify-content-center '>
            Tax distribution is 7 to marketing wallet 1 to LP 1 to team
          </div>
        </div>
      </Container>
    </>
  );
}

export default Tokenomics;
