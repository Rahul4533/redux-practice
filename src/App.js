
import './App.css';
import Home from './Components/Home';
import List from './Components/notelist';
import { Provider } from 'react-redux';
import {store} from "../src/Redux/Store/notestore"
function App() {
  return (
    <>
    
    <Provider store={store}>
        <Home />
        
        <List />
        </Provider>
        
        </>
  );
}

export default App;
