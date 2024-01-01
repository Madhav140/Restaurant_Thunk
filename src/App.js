import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import RestView from './Pages/RestView';
import Footer from './Components/Footer';

function App() {
  return (
<>

<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/rest_view/:id' element={<RestView/>}/>

</Routes>
<Footer/>
</>
  );
}

export default App;
