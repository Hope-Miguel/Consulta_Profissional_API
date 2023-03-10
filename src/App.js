import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profissional from './Pages/Pages1/Profissional';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Profissional/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
