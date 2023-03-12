import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/shared/Card';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path='/about' element={<About />} />
            </Routes>
            <AboutIconLink />
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
