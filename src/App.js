import { Link,Routes,Route } from "react-router-dom";
import Bmicalculator from "./Bmicalculator";
import Home from "./Home";


function App()
{
 return(
 <div className="App">
     <nav className="Home">
         <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Bmicalculatorpage">Bmicalculator</Link></li>
         </ul>
      </nav>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/bmicalculatorpage" element={<Bmicalculator />} />
       
     </Routes>
  </div>
 );
}


export default App;
