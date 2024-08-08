import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import IndexPage from "./pages/IndexPage.jsx"
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/data" element={<>hello</>} />
         </Routes>
      </BrowserRouter>
   );
}
export default App