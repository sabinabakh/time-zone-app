// Home.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import TimeZone from '../components/TimeZone';

const Home: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [submittedInput, setSubmittedInput] = useState<string>('');

  const handleSubmit = () => {
    setSubmittedInput(userInput);
  };

  return (
    <div>
      <Head>
        <title>Time Zone Information</title>
        <meta name="description" content="Get time zone information" />
      </Head>
      <div className="bg-light1 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-dark2 text-4xl font-bold text-center my-10">Time Zone Information</h1>
        <div className="rounded-0 border-0 text-dark2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter a city"
            className="rounded-0 border-0 px-4 py-3 mr-2 w-64 placeholder-dark2 focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-dark2 text-light1 px-4 py-3 rounded-0 border-0 hover:bg-light2 hover:text-dark2">
            Submit
          </button>
        </div>
        <div className="text-dark2 mt-8 ">
          {submittedInput && <TimeZone q={submittedInput} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
