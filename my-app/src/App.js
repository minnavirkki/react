import './App.css';
import Footer from "./Footer";
import Main from "./Main";
import Main_router from "./Main_router";
import { BrowserRouter as Router } from 'react-router-dom';

const App =() => {
  return (
    <Router>   
        <Main_router />
        <Main />
        <Footer />
    </Router>
  );
}

export default App;
