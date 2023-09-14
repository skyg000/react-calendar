
import './App.scss';
import Home from './comp/Home';
import Calendar1 from './comp/Calendar1'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (



    <BrowserRouter>
      <main>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/calendar1'element={<Calendar1/>}/>
      </Routes>
      
      </main>
    </BrowserRouter>
  );
}

export default App;
