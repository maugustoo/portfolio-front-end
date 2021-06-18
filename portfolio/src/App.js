import './App.css';

import Content from './pages/Content'

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Content />
      </Router>
    </div>
  );
}

export default App;
