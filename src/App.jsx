import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TemplateDetail from './components/TemplateDetail'
import AiDocs from './components/AiDocs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template/:id" element={<TemplateDetail />} />
        <Route path="/ai" element={<AiDocs />} />
      </Routes>
    </BrowserRouter>
  )
}
