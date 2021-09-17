import logo from './logo.svg';
import './App.css';
import Postlist from './components/Postlist';
import { PostForm } from './components/PostForm';


function App() {

  return (
    <div className="App">
      {/* <Postlist/> */}
      <PostForm/>
    </div>
  ); 
}

export default App;
