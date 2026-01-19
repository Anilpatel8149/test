// import React, { useState } from 'react';
// import responses from '../Data/Response.json';
// import './Chatbott.css';


// const handleVoiceInput = () => {
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     alert("❌ Speech Recognition is not supported in your browser.");
//     return;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.lang = "en-IN"; // Use "hi-IN" if you want Hindi
//   recognition.interimResults = false;
//   recognition.maxAlternatives = 1;

//   recognition.start();

//   recognition.onresult = (event) => {
//     const voiceText = event.results[0][0].transcript;
//     setInput(voiceText);           // Set input field value
//     handleSend(voiceText);         // Automatically send message
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     alert("Voice error: " + event.error);
//   };
// };






// const handleSend = (customInput) => {
//   const message = customInput !== undefined ? customInput : input;
//   if (!message.trim()) return;

//   const userMsg = { type: 'user', text: message };
//   const botMsg = {
//     type: 'bot',
//     text: getBotReply(message),
//   };

//   setMessages([...messages, userMsg, botMsg]);
//   setInput('');

//   // 🎵 Play song if message contains 'song' or 'gana'
//   if (message.toLowerCase().includes("song") || message.toLowerCase().includes("gana")) {
//     const audio = new Audio("/audio/bhojpuri1.mp3");
//     audio.play();
//   }
// };






// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const getBotReply = (userMessage) => {
//     const msg = userMessage.toLowerCase();
//     const match = responses.find((res) =>
//       res.question.some((q) => msg.includes(q))
//     );
//     return match ? match.answer : "Sorry, I don't understand.";
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMsg = { type: 'user', text: input };
//     const botMsg = {
//       type: 'bot',
//       text: getBotReply(input),
//     };

//     setMessages([...messages, userMsg, botMsg]);
//     setInput('');
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message ${msg.type}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-box">
//         <input
//           type="text"
//           value={input}
//           placeholder="Type a message..."
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button onClick={handleSend}>Send</button>

// <div className="input-box">
//   <input
//     type="text"
//     value={input}
//     placeholder="Type a message..."
//     onChange={(e) => setInput(e.target.value)}
//     onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//   />
//   <button onClick={handleSend}>Send</button>
//   <button onClick={handleVoiceInput}>🎙 Speak</button> {/* 👈 New Button */}
// </div>


//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import responses from '../Data/Response.json';
// import './Chatbott.css';

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const getBotReply = (userMessage) => {
//     const msg = userMessage.toLowerCase();
//     const match = responses.find((res) =>
//       res.question.some((q) => msg.includes(q))
//     );
//     return match ? match.answer : "Sorry, I don't understand.";
//   };

//   const handleSend = (customInput) => {
//     const message = customInput !== undefined ? customInput : input;
//     if (!message.trim()) return;

//     const userMsg = { type: 'user', text: message };
//     const botMsg = {
//       type: 'bot',
//       text: getBotReply(message),
//     };

//     setMessages([...messages, userMsg, botMsg]);
//     setInput('');

//     // 🎵 Play song if message contains 'song' or 'gana'
//     if (message.toLowerCase().includes("song") || message.toLowerCase().includes("gana")) {
//       const audio = new Audio("/audio/bhojpuri1.mp3");
//       audio.play();
//     }
//   };

//   const handleVoiceInput = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("❌ Speech Recognition is not supported in your browser.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN"; // or "hi-IN" for Hindi
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.start();

//     recognition.onresult = (event) => {
//       const voiceText = event.results[0][0].transcript;
//       setInput(voiceText);
//       handleSend(voiceText);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("Voice error: " + event.error);
//     };
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message ${msg.type}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="input-box">
//         <input
//           type="text"
//           value={input}
//           placeholder="Type or speak a message..."
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button onClick={() => handleSend()}>Send</button>
//         <button onClick={handleVoiceInput}>🎙 Speak</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import responses from '../Data/Response.json';
import './Chatbott.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // ✅ Default fallback responses
  const defaultAnswers = [
    "I'm not sure about that. Can you try again?",
    "Sorry, I didn't get that.",
    "Hmm, I don't understand. Ask something else.",
    "Can you rephrase your question?"
  ];

  // ✅ Improved reply logic
  const getBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    for (const res of responses) {
      for (const keyword of res.question) {
        if (msg.includes(keyword)) {
          return res.answer;
        }
      }
    }

    // ❌ No match → return random default reply
    const randomIndex = Math.floor(Math.random() * defaultAnswers.length);
    return defaultAnswers[randomIndex];
  };

  const handleSend = (customInput) => {
    const message = customInput !== undefined ? customInput : input;
    if (!message.trim()) return;

    const userMsg = { type: 'user', text: message };
    const botMsg = {
      type: 'bot',
      text: getBotReply(message),
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput('');

    // 🎵 Play song if 'song' or 'gana' is mentioned
    if (message.toLowerCase().includes("song") || message.toLowerCase().includes("gana")) {
      const audio = new Audio("/audio/bhojpuri1.mp3");
      audio.play();
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("❌ Speech Recognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN"; // Use "hi-IN" for Hindi
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
      handleSend(voiceText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Voice error: " + event.error);
    };
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          value={input}
          placeholder="Type or speak a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={() => handleSend()}>Send</button>
        <button onClick={handleVoiceInput}>🎙 Speak</button>
      </div>
    </div>
  );
}
