import { Modal, Button } from 'react-bootstrap'
import UpdateConfigurationForm from './UpdateConfigurationForm'

const ChangeNetwork = ({ 
    showChangeNetwork, 
    showChangeNetworkOpen, 
    showChangeNetworkClose,
    currentHost,
    currentProtocol,
    updateNetworkConfiguration
}) => {
    return (
        <>
            <Modal show={showChangeNetwork} onHide={showChangeNetworkClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Configuration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateConfigurationForm 
                        currentHost={currentHost}
                        currentProtocol={currentProtocol}
                        updateNetworkConfiguration={updateNetworkConfiguration}
                        showChangeNetworkClose={showChangeNetworkClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ChangeNetwork
