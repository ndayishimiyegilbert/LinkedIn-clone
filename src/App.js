import logo from './logo.svg';
import Header  from './components/header';
import Right from './components/right';
import Feed from './components/feed';
import Left from './components/left'
import "./App.css";
// import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App bg-[#adadad1e]  h-[auto]  ">
     {/* ____________header_______ */}
     <Header className=""/>
     <div className='flex'>

     <Right/>

     <Feed/>
      <Left/>
     </div>
    </div>
  );
}

export default App;
