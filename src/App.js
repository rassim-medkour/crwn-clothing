import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {HomePage} from './Pages/homepage/homepage.js';
import {Shop} from './Pages/shop/shop.js'; 
import {Header} from './Components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/shop' element={<Shop />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
