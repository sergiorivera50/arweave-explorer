import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Navbar from './components/Navbar'
import NetworkInfoCard from './components/NetworkInfoCard'

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
      console.log(response)
      setNetworkInfo(response)
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
      </header>
    </div>
  );
}

export default App;
