import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { AiOutlineLoading, AiOutlineExclamationCircle } from 'react-icons/ai'

import Navbar from './components/Navbar'
import NetworkInfoCard from './components/NetworkInfoCard'
import NFTExplorerCard from './components/NFTExplorerCard'
import NotificationToast from './components/NotificationToast'

import { NetworkStatus } from './constants/NetworkStatus'

import { useState, useEffect } from 'react'

function App() {
  const defaultNetworkInfo = {
    network: "null",
    version: "null",
    release: "null",
    peers: "null",
    blocks: "null",
    height: "null",
    node_state_latency: "null",
    queue_length: "null"
  }

  const defaultManifest = {
    nft: {
      type: "null",
      author: "null",
      uri: "null"
    }
  }

  const [manifestURI, setManifestURI] = useState("https://l4nescmg6zzlt3fghjxvyfonobgeyid65znkpvg2ioz6ydpgkelq.arweave.net/XxpJCYb2crnspjpvXBXNcExMIH7uWqfU2kOz7A3mURc")

  const [manifest, setManifest] = useState(defaultManifest)

  const [networkInfo, setNetworkInfo] = useState(defaultNetworkInfo)

  const [networkStatus, setNetworkStatus] = useState(NetworkStatus.FETCHING)

  const [host, setHost] = useState('arweave.net')
  const [protocol, setProtocol] = useState('https')

  const [showChangeNetwork, setShowChangeNetwork] = useState(false)

  const showChangeNetworkOpen = () => setShowChangeNetwork(true)
  const showChangeNetworkClose = () => setShowChangeNetwork(false)

  // Fetch Network Info
  const fetchNetworkInfo = async () => {
    const url = protocol + '://' + host + '/info'
    console.log('Fetching from ' + url)
    try {
      const response = await fetch(url)
      return [await response.json(), null]
    } catch (error) {
      return [null, error]
    }
  }

  // Load Network Info to state
  const loadNetworkInfo = async () => {
    setNetworkStatus(NetworkStatus.FETCHING)
    const [response, error] = await fetchNetworkInfo()
    if (error) {
      setNetworkStatus(NetworkStatus.ERROR)
      console.log("error fetching")
    } else {
      setNetworkStatus(NetworkStatus.SUCCESS)
      console.log("arweave: ", response)
      setNetworkInfo(response)
    }
  }

  const fetchManifest = async () => {
    console.log('Fetching manifest from ' + manifestURI)
    try {
      const response = await fetch(manifestURI)
      return [await response.json(), null]
    } catch (error) {
      return [null, error]
    }
  }
  
  const loadManifest = async () => {
    const [response, error] = await fetchManifest()
    if (error) {
      setManifest("Error fetching manifest.")
    } else {
      setManifest(response)
      console.log("manifest: ", response)
    }
  }

  const updateNetworkConfiguration = (newHost, newProtocol) => {
    setHost(newHost)
    setProtocol(newProtocol)
  }

  // Load Network Info on host or protocol update
  useEffect(() => {
    loadNetworkInfo()
  }, [host, protocol])

  useEffect(() => {
    if (networkStatus === NetworkStatus.SUCCESS) loadManifest()
  }, [networkStatus])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Container className="mb-3">
          <NetworkInfoCard 
            host={host}
            protocol={protocol}
            networkInfo={networkInfo}
            showChangeNetwork={showChangeNetwork}
            showChangeNetworkOpen={showChangeNetworkOpen}
            showChangeNetworkClose={showChangeNetworkClose}
            updateNetworkConfiguration={updateNetworkConfiguration}
            networkStatus={networkStatus}
          />
        </Container>
        {networkStatus === NetworkStatus.SUCCESS && (
          <>
            <Container>
              <NFTExplorerCard manifest={manifest} manifestURI={manifestURI}/>
            </Container>
          </>
        )}

        {networkStatus === NetworkStatus.FETCHING && (
          <NotificationToast 
            bg='light'
            title='Fetching data'
            icon={(<AiOutlineLoading className="icon-spin"/>)}
          />
        )}

        {networkStatus === NetworkStatus.ERROR && (
          <NotificationToast 
            bg='danger'
            title='Connection failed'
            icon={(<AiOutlineExclamationCircle />)}
          />
        )}
      </header>
    </div>
  );
}

export default App;
