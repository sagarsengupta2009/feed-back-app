import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
    <Header />
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
