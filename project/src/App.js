import { Steps, Button, message } from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree'
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <FormOne />,
  },
  {
    title: 'Second',
    content: <FormTwo />,
  },
  {
    title: 'Last',
    content: <FormThree />,
  },
];
const App = () => {
  const [current, setCurrent] = React.useState(0);
  
  const next = () => {
    setCurrent(current + 1);
  };
  
  const prev = () => {
    setCurrent(current - 1);
  };
  
  const onChange = (id) => {
    setCurrent(id);
  }

  return (
    <>
      <Steps current={current} onChange={onChange}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default App;