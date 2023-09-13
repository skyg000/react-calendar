import background from './background.jpg';
import './App.scss';
import Home from './comp/Home';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <main>
        <img src={background} className='back'/>
        <h1> 일정관리 </h1>
        <Link to="/home" className='login'> 로그인 </Link>
      </main>
      <Routes>
        <Route path='/home'element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
