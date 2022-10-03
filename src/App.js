import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {HomePage} from './Pages/homepage/homepage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
