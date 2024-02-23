import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguage } = useStore()
  return (
    <Container fluid>
        <h1>Google <span style={{ color: '#0fb8cb' }}>Translate</span></h1>

        <Row>
          <Col>
            <h2>From</h2>
            {fromLanguage}
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
              <ArrowsIcon></ArrowsIcon>
            </Button>
          </Col>
          <Col>
            <h2>To</h2>
            {toLanguage}
          </Col>
        </Row>
    </Container>
  )
}

export default App
