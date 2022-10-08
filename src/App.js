import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import {HomePage} from './Pages/homepage/homepage.js';
import {Shop} from './Pages/shop/shop.js'; 
import {Header} from './Components/header/header.js';
import {SigninSignup} from './Pages/signin-signup/signin-signup.js';
import {auth} from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
function App() {

  const [currentUser, setCurrentUser] = useState(null);
   
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }else{
        setCurrentUser(userAuth);
      }
    })
    return () => {
      unsubscribeFromAuth();
    }
  },[])
  


  return (
    <div className="App">
      <Header currentUser={currentUser}></Header>
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/shop' element={<Shop />} ></Route>
        <Route exact path='/signin' element={<SigninSignup />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
