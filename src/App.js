import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import History from './Pages/History';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Catview from './Pages/Catview';

function App() {
  return (
    <div className="App">
  <Header></Header>
  <Routes>
  <Route path='/' element={  <LandingPage></LandingPage>}></Route>
  <Route path='/home' element={   <Home></Home>}></Route>
  <Route path='/watch-history' element={<History></History>}></Route>
  <Route path='/View' element={<Catview></Catview>}></Route>

  </Routes>
  <Footer></Footer>
   </div>
  );
}

export default App;
