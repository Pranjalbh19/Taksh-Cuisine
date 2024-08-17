import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Ntfound from './Pages/Ntfound'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu.jsx';


function App( {children}) {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path = "/Home" element = {<Home/>}/>
<Route path = "/about" element = {<About/>}/>
<Route path = "/Contact" element = {<Contact/>}/>
<Route path = "/menu" element = {<Menu/>}/>
<Route path = "*" element = {<Ntfound/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
