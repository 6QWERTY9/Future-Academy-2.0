import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header theme='light'/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
