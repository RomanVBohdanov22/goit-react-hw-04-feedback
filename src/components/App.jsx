import Statistics from './statistics';
import FeedbackOptions from './feedbackoptions';
import Notification from './notification';
import Section from './section';
import { useState } from 'react';

const appStyles = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 28,
  gap: '18px',
  color: '#010101',
};

/*
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
*/
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div
      style={appStyles}
    >
      <Section title="Please leave feedback">

      </Section>
      React homework goit-react-hw-04-feedback
      <Section title="Statistics">

        
      </Section>
    </div>
  );
};
