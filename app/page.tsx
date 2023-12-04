'use client'
import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputs, setOutputs] = useState<string[]>([]);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add any processing logic here if needed
    setOutputs([...outputs, "You: " + inputText]);
    setInputText('');
    setProcessing(true);
    setTimeout(fakeProcessing, Math.floor(Math.random() * 1000) + 500);
  };

  const fakeProcessing = () => {
    setOutputs([...outputs, "CatGPT: " + "meow meow meow"]);
    setProcessing(false);
  }

  return (
    <main className="flex min-h-screen flex-row p-8 gap-3">
      <div>
        <h1 className="text-6xl font-bold">Cat GPT</h1>
        <p className="text-2xl">The best large language meowdel.</p>
      </div>
      <div className="w-full">
        <form className="h-full" onSubmit={handleSubmit}>
          <div tabIndex={0} className="h-[91%]">
            {outputs.map((output, index) => (
              <p key={index}>{output}</p>
            ))}
          </div>
          <div tabIndex={1} className="rounded-2xl outline outline-2 outline-white">
            <input
              className="outline-none transparent h-[3.562em] w-[94%] p-3 "
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="text-xl rounded-lg text-black items-center mt-3 ml-4 w-[1.75em] h-[1.75em] text-center" 
              disabled={processing} 
              type="submit"
              style={{ backgroundColor: processing ? '#808080' : '#ffffff' }}
            >{processing ? "⏸" : "↑"}</button>
          </div>
        </form>
      </div>
    </main>
  );
}
