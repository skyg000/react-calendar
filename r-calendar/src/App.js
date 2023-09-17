
import './App.scss';
import Home from './comp/Home';
import Calendar1 from './comp/Calendar1'
import {Link,HashRouter,Route,Routes} from 'react-router-dom';
function App() {
  


  
  return (



    <HashRouter>
      <main>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/calendar1'element={<Calendar1/>}/>
      </Routes>
      
      </main>
    </HashRouter>
  );
}

export default App;
