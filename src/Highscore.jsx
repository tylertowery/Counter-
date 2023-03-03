import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Highscore ({ highscore, setHighscoreDisplay }) {
  const handleExit = (event) => {
    setHighscoreDisplay(false);
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <i onClick={handleExit} className="exit fa-solid fa-circle-xmark" />
        <h2>Leaderboards</h2>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={100}
            height={300}
            data={highscore}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='score' fill='#1c3738' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}