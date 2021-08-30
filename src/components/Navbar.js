import { Navbar as BootstrapNavbar, Container, Row } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <BootstrapNavbar bg="dark" variant="dark" className="mb-3">
                <Container>
                    <BootstrapNavbar.Brand href="#">
                    🌍 Arweave Explorer
                    </BootstrapNavbar.Brand>
                    <Row><div className="text-muted">Created by Sergio Rivera with <FaHeart /></div></Row>
                </Container>
            </BootstrapNavbar>
        </div>
    )
}

export default Navbar
