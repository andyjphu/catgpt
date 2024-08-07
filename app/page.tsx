'use client'
import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputs, setOutputs] = useState<string[]>(["CatGPT: Meow!"]);
  const [processing, setProcessing] = useState(false);


  const possibleOutputs = [" *stares blankly*", " *meows*", " *meows*", " *looks away from you*", " *ignores you*", " *tilts head*", " *purrs*", " *hisses*", " *paws at you*", "...", "...", "...", "...", " *runs away*", " *lays down*"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add any processing logic here if needed
    setOutputs([...outputs, "You: " + inputText]);
    setInputText('');
    setProcessing(true);
    setTimeout(fakeProcessing, Math.floor(Math.random() * 1000) + 500);
  };

  const fakeProcessing = (old: String) => {
    let newToken = possibleOutputs[Math.floor(Math.random() * possibleOutputs.length)];
    if (old == null) {
      old = newToken;
    }
    if (newToken == " *runs away*") {
      if (old = " *runs away*") {
        old = "";
      }
      setOutputs([...outputs, "You: " + inputText, "CatGPT: " + old + newToken]);
      setProcessing(false);
      return;
    }
    if (newToken == " *lays down*") {
      possibleOutputs.pop(); //Can't lay down twice, so remove it from the list
      possibleOutputs.pop(); //also no running away while laying down
    }

    setOutputs([...outputs, "You: " + inputText, "CatGPT: " + old]);


    if (Math.random() < 0.77) {  // 75% chance to continue


      setTimeout(fakeProcessing, Math.floor(Math.random() * 1000) + 500, old + newToken);
      return;
    }
    setProcessing(false);
    return;

  }
  return (
    <main className="flex min-h-screen flex-row p-8 gap-3">
      <div tabIndex={3} className="max-md:hidden w-[20%] h-100 flex flex-col align-bottom">
        <h1 className="text-6xl font-bold">Cat GPT</h1>
        <p className="text-xl">The best large language</p>
        <p className="text-xl">meowdel (1.4.1)</p>
        <a className="text-xs underline" href="https://www.linkedin.com/in/andyjphu/">contact me</a>
        <div className="h-full"></div>
      </div>
      <div className="w-[80%] max-md:w-full">
        <form className="h-full" onSubmit={handleSubmit}>
          <div tabIndex={0} className="h-[91%]">
            {outputs.map((output, index) => (
              <p key={index}>{output}</p>
            ))}
          </div>
          <div tabIndex={1} className="flex flex-row rounded-2xl outline outline-2 outline-white p-4">
            
              <input
                className="outline-none transparent p-3 flex-grow"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            <button
              className="text-xl rounded-lg text-black items-center mt-3 ml-4 w-[1.75rem] h-[1.75em] text-center"
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
