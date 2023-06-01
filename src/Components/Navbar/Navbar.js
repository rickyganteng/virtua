import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import Logovirtua from '../../Components/Assets/logo virtua.png';
import style from './Navbar.module.css';
function NavbarComp() {
  return (
    <Navbar expand='lg'>
      <Container className={style.container} fluid>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          // className='justify-content-end'
        >
          <Nav>
            <Navbar.Brand href='#home'>
              <Image className={style.myPhoto} src={Logovirtua} alt='Virtua' />
            </Navbar.Brand>
          </Nav>
          <div className='fw-bold'>
            <Nav className='me-auto'>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#whychooseus'>Why Choose Us</Nav.Link>
              <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
              <Nav.Link href='#tokenomics'>Tokenomics</Nav.Link>
              <Nav.Link href='#faqs'>FAQS</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>

        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav className='fw-bold'>
            <Nav.Link
              href='https://t.me/virtua_global'
              target='_blank'
              rel='noreferrer'
            >
              join telegram +
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
