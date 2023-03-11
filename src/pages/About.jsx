import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product</p>
      </div>
      <Link to='/'>Back to home </Link>
    </Card>
  );
}

export default About;
