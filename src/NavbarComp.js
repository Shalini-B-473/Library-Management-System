import lmslogo from './lmslogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComp.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavbarComp() {
    return (
        <>
            <Navbar expand="md">
                <Container fluid style={{backgroundColor : "#ECECEC" , fontSize : "20px"}}>
                    <img src={lmslogo} alt="lms logo" width="40" height="40" className="d-inline-block align-top" />
                    <Navbar.Brand href="#" style={{color : "#1F2833"}}>Library Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3 " style={{color : "#1F2833"}} >
                            <Nav.Link as={Link} to="/" href="#action1" className = "active" style={{color : "#1F2833"}}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/Login" href="#action2" style={{color : "#1F2833"}}>Login</Nav.Link>
                            <Nav.Link as={Link} to="/SignUp" href="#action2" style={{color : "#1F2833"}}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavbarComp;

