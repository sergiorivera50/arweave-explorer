import { Table, Button, Placeholder } from 'react-bootstrap'
import { NetworkStatus } from '../constants/NetworkStatus'

const NetworkInfoTable = ({ networkInfo, networkStatus }) => {

    return (
        <>
          <Table hover className="align-middle">
            <thead>
              <tr>
                <th><samp>network</samp></th>
                <th><samp>version</samp></th>
                <th><samp>release</samp></th>
                <th><samp>peers</samp></th>
                <th><samp>blocks</samp></th>
                <th><samp>height</samp></th>
                <th><samp>queue_length</samp></th>
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
                  </>
                ) : (
                  <>
                    <td><samp>{networkInfo.network}</samp></td>
                    <td><samp>{networkInfo.version}</samp></td>
                    <td><samp>{networkInfo.release}</samp></td>
                    <td><samp>{networkInfo.peers}</samp></td>
                    <td><samp>{networkInfo.blocks}</samp></td>
                    <td><samp>{networkInfo.height}</samp></td>
                    <td><samp>{networkInfo.queue_length}</samp></td>
                  </>
                )}
              </tr>
            </tbody>
          </Table>
        </>
    )
}

export default NetworkInfoTable
