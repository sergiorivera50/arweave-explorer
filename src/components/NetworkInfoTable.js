import { Table, Button, Placeholder } from 'react-bootstrap'
import { NetworkStatus } from '../constants/NetworkStatus'

const NetworkInfoTable = ({ networkInfo, networkStatus }) => {

    return (
        <>
          <Table hover className="align-middle">
            <thead>
              <tr>
                <th>network</th>
                <th>version</th>
                <th>release</th>
                <th>peers</th>
                <th>blocks</th>
                <th>height</th>
                <th>node_state_latency</th>
                <th>queue_length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {networkStatus === NetworkStatus.FETCHING ? (
                  <>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                    <td><Placeholder as="p" animation="glow"><Placeholder className="w-100"/></Placeholder></td>
                  </>
                ) : (
                  <>
                    <td>{networkInfo.network}</td>
                    <td>{networkInfo.version}</td>
                    <td>{networkInfo.release}</td>
                    <td>{networkInfo.peers}</td>
                    <td>{networkInfo.blocks}</td>
                    <td>{networkInfo.height}</td>
                    <td>{networkInfo.node_state_latency}</td>
                    <td>{networkInfo.queue_length}</td>
                  </>
                )}
              </tr>
            </tbody>
          </Table>
        </>
    )
}

export default NetworkInfoTable
