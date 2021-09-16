import { Navbar as BootstrapNavbar, Container, Row } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <BootstrapNavbar bg="dark" variant="dark" className="mb-3">
                <Container>
                    <BootstrapNavbar.Brand href="https://github.com/sergiorivera50/arweave-explorer" target="_blank">
                    🌍 Arweave Explorer
                    </BootstrapNavbar.Brand>
                    <Row><div className="text-muted">Created by <a style={{ textDecoration: "none" }}href="https://github.com/sergiorivera50" class="link-light" target="_blank">Sergio Rivera</a> with <FaHeart color="darkred"/></div></Row>
                </Container>
            </BootstrapNavbar>
        </div>
    )
}

export default Navbar
