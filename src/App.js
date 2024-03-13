import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}> </Route>
          <Route path='/homepage' element={<Homepage/>}> </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
