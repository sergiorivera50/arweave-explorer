import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const UpdateConfigurationForm = ({ currentHost, currentProtocol, updateNetworkConfiguration, showChangeNetworkClose }) => {
    const [newHost, setNewHost] = useState(currentHost)
    const [newProtocol, setNewProtocol] = useState(currentProtocol)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!newHost) {
            alert('Please add a host')
            return
        }

        console.log(newHost, newProtocol)

        updateNetworkConfiguration(newHost, newProtocol)
        showChangeNetworkClose()
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formHost">
                <Form.Label>Network Host</Form.Label>
                <Form.Control placeholder={currentHost} onChange={(e) => setNewHost(e.target.value)}></Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="formProtocol">
                <Form.Label>Protocol</Form.Label>
                <Form.Select aria-label="formProtocolSelect">
                    <option>Select protocol</option>
                    <option value="http">http</option>
                    <option value="https">https</option>
                </Form.Select>
            </Form.Group> */}
            <Form.Group className="mt-3" style={{ float: "right" }}>
                <Button variant="primary" type="submit">Save Changes</Button>
            </Form.Group>
        </Form>
    )
}

export default UpdateConfigurationForm
