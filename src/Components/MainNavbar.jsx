//bootstarp
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//images
import ot from "../assets/Images/logo.png"

//icons 
import { FaPhoneAlt } from "react-icons/fa";

export default function MainNavbar() {
    return (
        <>
            <Navbar expand="lg">
                <Container className='align-items-center'>
                    <Navbar.Brand href="#home"><img src={ot} alt="" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">О нас</Nav.Link>
                            <Nav.Link href="#link">Услуги и цены</Nav.Link>
                            <Nav.Link href="#link">Фотоальбом</Nav.Link>
                            <Nav.Link href="#link">Контакты</Nav.Link>
                            <Nav.Link href="totel: +998771232904"  ><FaPhoneAlt className='icons' />+998 77 123 29 04</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
