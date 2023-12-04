'use client'
import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleSubmit = (e : FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    // Add any processing logic here if needed
    setOutputText(outputText + "\n" + inputText);
    setInputText('');
  };

  return (
    <main className="flex min-h-screen flex-row p-8 gap-3">
      <div>
        <h1 className="text-6xl font-bold">Cat GPT</h1>
        <p className="text-2xl">The best large language meowdel.</p>
      </div>
      <div className="w-full">
        <form className="h-full" onSubmit={handleSubmit}>
          <div tabIndex={0} className="h-[95%]">
            {outputText && <p>{outputText}</p>}
          </div>
          <div tabIndex={1} className="rounded-lg outline outline-2 outline-white p-3">
            <input
              className="transparent w-[95%] mr-4 "
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="text-xl bg-white rounded-lg text-black items-cente w-8 h-8 text-center" type="submit">↑</button>
          </div>
        </form>
      </div>
    </main>
  );
}
