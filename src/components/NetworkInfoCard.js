import { Button, Card, Row, Col } from 'react-bootstrap'
import ChangeNetworkModal from './ChangeNetworkModal'
import NetworkInfoTable from './NetworkInfoTable'
import { NetworkStatus } from '../constants/NetworkStatus'
import { VscDebugDisconnect } from 'react-icons/vsc'

const NetworkInfoCard = ({
  host,
  protocol,
  networkInfo,
  showChangeNetwork,
  showChangeNetworkOpen,
  showChangeNetworkClose,
  updateNetworkConfiguration,
  networkStatus
}) => {
    const buttonOutline = () => {
      switch(networkStatus) {
        case NetworkStatus.FETCHING:
          return 'outline-secondary'
        case NetworkStatus.SUCCESS:
          return 'outline-success'
        case NetworkStatus.ERROR:
          return 'outline-danger'
      }
    }

    return (
        <>
          <Card>
          <Card.Header as="h2">
            <Row className="align-items-center">
              <Col>
                Network Information
              </Col>
              <Col>
                <Button 
                  style={{ float: "right" }}
                  variant={buttonOutline()}
                  onClick={showChangeNetworkOpen}>
                  <samp>{host}</samp>
                </Button>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body>
            <Card.Text>
                {networkStatus !== NetworkStatus.ERROR ? (
                  <NetworkInfoTable 
                    networkInfo={networkInfo}
                    networkStatus={networkStatus}
                  />
                ) : (
                  <>
                    <Row className="mt-4">
                      <VscDebugDisconnect size={40} style={{ color: "grey" }}/>
                      <p class="text-center text-muted"><pre>{protocol}://{host}/info</pre></p>
                    </Row>
                  </>
                )}
            </Card.Text>
          </Card.Body>
        </Card>

        <ChangeNetworkModal 
          showChangeNetwork={showChangeNetwork}
          showChangeNetworkOpen={showChangeNetworkOpen}
          showChangeNetworkClose={showChangeNetworkClose}
          currentHost={host}
          currentProtocol={protocol}
          updateNetworkConfiguration={updateNetworkConfiguration}
        /> 
      </>
    )
}

export default NetworkInfoCard
