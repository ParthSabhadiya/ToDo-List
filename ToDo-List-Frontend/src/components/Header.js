import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container className="justify-content-center">
                    <Navbar.Brand style={{color:'white',fontWeight: 500}}>Your Todo List</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
