import { Card, Row, Col, Alert } from 'react-bootstrap'

const NFTExplorerCard = ({ manifest, manifestURI }) => {
    return (
      <>
        <Card>
          <Card.Header as="h2">
            NFT Explorer
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Row>
                <Alert variant="light">
                  The following data has been fetched from a manifest JSON file stored in the arweave at <a href={manifestURI} target="_blank">{manifestURI}</a> and it returned the following contents. Currently the image comes from outside the permaweb and is not stored in the arweave (it is fetched from the <code>nft.uri</code> property).
                </Alert>
              </Row>
              <Row>
                <Col>
                  <div className="text-center">
                    <img src={manifest.nft.uri} style={{maxWidth: "300px", maxHeight: "300px", width: "auto", height: "auto"}}/>
                  </div>
                </Col>
                <Col>
                  <pre style={{backgroundColor: "whiteSmoke"}}>
                    {JSON.stringify(manifest, null, 2)}
                  </pre>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
}

export default NFTExplorerCard
