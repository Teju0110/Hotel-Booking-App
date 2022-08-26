import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Hotel from "./Pages/Hotel";
import List from './Pages/List';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path="/hotels/search" element={<Hotel/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
