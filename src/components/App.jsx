import Statistics from './statistics';
import FeedbackOptions from './feedbackoptions';
import Notification from './notification';
import Section from './section';
import { useState, useEffect } from "react";

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

let summ = 0;

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    summ = good+neutral+bad;
    console.log(summ);
  }, [good, neutral, bad]);

  return (
    <div
      style={appStyles}
    >
      <Section title="Please leave feedback">
        <button onClick={() => setGood(good + 1)}>Good: {good}</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral: {neutral}</button>
        <button onClick={() => setBad(bad + 1)}>Bad: {bad}</button>
       </Section>
      React homework goit-react-hw-04-feedback
      <Section title="Statistics">
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>

        { summ ?
          (<p>{good / summ}</p>):(
            <>
                <Notification message="There is no feedback" />
            </>
          )
        }
      </Section>
    </div>
  );
};
