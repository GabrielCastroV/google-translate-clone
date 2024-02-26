import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App () {
  const { fromLanguage, toLanguage, fromText, result, interchangeLanguage, setFromLanguage, setToLanguage, setFromText, setResult, loading } = useStore()
  return (
    <Container fluid>
        <h1 style={{ marginBottom: '70px' }}>Google <span style={{ color: '#0fb8cb' }}>Translate</span></h1>

        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}/>
              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
            </Stack>
          </Col>
          <Col xs='auto'>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
              <ArrowsIcon></ArrowsIcon>
            </Button>
          </Col>
          <Col>
            <Stack gap={2}>
              <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />
            </Stack>
          </Col>
        </Row>
    </Container>
  )
}

export default App
