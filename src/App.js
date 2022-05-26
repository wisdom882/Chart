
import './App.css';
import {BarChart, Bar, XAxis} from "recharts"

function App() {

  const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
  return (
    <div>
      <div className="top-bar">
        <div className="balance">
            <p>My Balance</p>
            <h3>$921.48</h3>
        </div>
        <div></div>
      </div>
      <div className="main-bar">
        <h2>Spending - Last 7 Days</h2>
        <BarChart width={600} height={250} data={data}>
            <XAxis dataKey="day" />
            <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      <div className='bottom'>
        <div className='first-half'>
        <p>Total this month</p>
            <h1>$478.33</h1>
        </div>
        <div className='second-half'>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
            
      </div>
      </div>
     
    </div>
  );
}

export default App;
