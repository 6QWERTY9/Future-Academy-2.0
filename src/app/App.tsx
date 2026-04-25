import { Header } from "@shared/components/Header"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header theme='dark'/>
    </BrowserRouter>
  )
}

export default App
