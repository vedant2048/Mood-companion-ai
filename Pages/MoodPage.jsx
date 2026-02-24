import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function MoodPage() {
  const { Rmood , mood } = useParams();
  const [reason, setReason] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function sendPrompt() {
    setLoading(true);
    setQuote("");
    try {
      const nres = await fetch(
  `/api/quotefor/${encodeURIComponent(reason)}?mood=${mood}`
    );
      const ndata = await nres.json();
      setQuote(ndata.quote);

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message.");
    }
    finally{
      setLoading(false)
    }
}

  async function handleclick() {
    console.log("API Called");
    setLoading(true);
    setQuote("");

    try {
      const res = await fetch(
        `/api/quote?mood=${mood}`
      );

      const data = await res.json();
      setQuote(data.quote);

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen text-white flex flex-col items-center gap-8">

      <h1 className="text-5xl font-bold capitalize p-4 mt-4 hover:text-indigo-500">
        You Feeling {mood}? Let us Know Why!
      </h1>

      <textarea
        placeholder="Type your words"
        className="w-full max-w-3xl h-36 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6 bg-zinc-800"
        value={reason}
        onChange={(e)=> setReason(e.target.value)}
      />
      <button className="border-2 rounded-4xl border-indigo-500 px-4 py-3 text-2xl hover:bg-indigo-600" onClick={sendPrompt}> Send </button>
      <div>
        <h1 className="text-6xl">Or</h1>
      </div>
      <button
        onClick={handleclick}
        className="border-2 border-indigo-500 px-6 py-3 rounded-3xl hover:bg-indigo-600 transition"
      >
        Get Random
      </button>
            {loading && (
        <p className="text-lg text-indigo-400 animate-pulse">
          Generating message...
        </p>
      )}

      {quote && !loading && (
  <div className="w-full max-w-3xl p-4 bg-zinc-800 rounded-xl text-lg text-center">
    {quote}
  </div>
)}
  <button className="text-2xl text-white border-2 rounded-xl border-indigo-500 p-4 hover:bg-sky-800 " onClick={()=>navigate("/")}> Go to Home</button>

    </div>
  );
}

export default MoodPage;

