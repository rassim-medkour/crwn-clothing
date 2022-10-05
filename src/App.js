import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {HomePage} from './Pages/homepage/homepage.js';
import {Shop} from './Pages/shop/shop.js'; 
import {Header} from './Components/header/header.js';
import {SigninSignup} from './Pages/signin-signup/signin-signup.js';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/shop' element={<Shop />} ></Route>
        <Route exact path='/signin' element={<SigninSignup />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
