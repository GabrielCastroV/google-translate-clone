import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage } = useStore()
  return (
    <Container fluid>
        <h1>Google <span style={{ color: '#0fb8cb' }}>Translate</span></h1>

        <Row>
          <Col>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}/>
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
              <ArrowsIcon></ArrowsIcon>
            </Button>
          </Col>
          <Col>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
          </Col>
        </Row>
    </Container>
  )
}

export default App
