
import './App.scss';
import Home from './comp/Home';
import Calendar1 from './comp/Calendar1'
<<<<<<< HEAD
import {Link,HashRouter,Route,Routes} from 'react-router-dom';
=======
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
>>>>>>> 38d5d8c6c7369c4da4beb1b6a2b2f39b508ccbe7
function App() {
  return (



<<<<<<< HEAD
    <HashRouter>
=======
    <BrowserRouter>
>>>>>>> 38d5d8c6c7369c4da4beb1b6a2b2f39b508ccbe7
      <main>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/calendar1'element={<Calendar1/>}/>
      </Routes>
      
      </main>
<<<<<<< HEAD
    </HashRouter>
=======
    </BrowserRouter>
>>>>>>> 38d5d8c6c7369c4da4beb1b6a2b2f39b508ccbe7
  );
}

export default App;
