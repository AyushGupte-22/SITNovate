// // // // // // import React, { useContext } from 'react'
// // // // // // import './Main.css'
// // // // // // import Sidebar from '../Sidebar/Sidebar'
// // // // // // import { assets } from '../../assets/assets'
// // // // // // import { Context } from '../../context/Context'

// // // // // // const Main = () => {

// // // // // //   const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

// // // // // //   return (
// // // // // //     <div className='main'>
// // // // // //         <div className="nav">
// // // // // //             <p>Gemini</p>
// // // // // //             <img src={assets.user_icon} alt=""/>
// // // // // //         </div>

// // // // // //         <div className="main-container">

// // // // // //         {!showResult
// // // // // //         ?<>
// // // // // //         <div className="greet">
// // // // // //               <p><span>Hello, User.</span></p>  
// // // // // //               <p>How can I help you today?</p>
// // // // // //             </div>
// // // // // //             <div className="cards">
// // // // // //                 <div className="card">
// // // // // //                <p>Suggest beautiful places to see on an upcoming road trips</p> 
// // // // // //                <img src={assets.compass_icon} alt="" />
// // // // // //                </div>

// // // // // //                <div className="card">
// // // // // //                <p>Briefly summarize this concept: urban planning</p> 
// // // // // //                <img src={assets.bulb_icon} alt="" />
// // // // // //                </div>

// // // // // //                <div className="card">
// // // // // //                <p>Brainstorm team bonding activities for our work retreat</p> 
// // // // // //                <img src={assets.message_icon} alt="" />
// // // // // //                </div>

// // // // // //                <div className="card">
// // // // // //                <p>Improve the readability of the following code</p> 
// // // // // //                <img src={assets.code_icon} alt="" />
// // // // // //                </div>
// // // // // //             </div>
// // // // // //         </>
// // // // // //         :<div className='result'>
// // // // // //           <div className="result-title">
// // // // // //             <img src={assets.user_icon} alt="" />
// // // // // //             <p>{recentPrompt}</p>
// // // // // //           </div>
// // // // // //           <div className="result-data">
// // // // // //             <img src={assets.gemini_icon} alt="" />
// // // // // //             {loading
// // // // // //             ?<div className="loader">
// // // // // //               <hr />
// // // // // //               <hr />
// // // // // //               <hr />
// // // // // //             </div>
// // // // // //           :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
// // // // // //           }
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         }

            
// // // // // // <div className="main-bottom"> 
// // // // // //   <div className="search-box"> 
// // // // // //     <input 
// // // // // //       onChange={(e) => setInput(e.target.value)} 
// // // // // //       value={input} 
// // // // // //       type="text" 
// // // // // //       placeholder="Enter a prompt here" 
// // // // // //     /> 
// // // // // //     <div> 
// // // // // //       <img src={assets.gallery_icon} alt="" /> 
// // // // // //       <img src={assets.mic_icon} alt="" /> 
// // // // // //       {input.trim() ? (
// // // // // //         <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// // // // // //       ) : null}
// // // // // //     </div> 
// // // // // //   </div> 
// // // // // //   <p className="bottom-info"> 
// // // // // //     Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
// // // // // //   </p> 
// // // // // // </div>

// // // // // //         </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Main;




// // // // // import React, { useContext } from 'react'
// // // // // import './Main.css'
// // // // // import Sidebar from '../Sidebar/Sidebar'
// // // // // import { assets } from '../../assets/assets'
// // // // // import { Context } from '../../context/Context'

// // // // // const Main = () => {
// // // // //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

// // // // //   // Function to handle key press
// // // // //   const handleKeyDown = (event) => {
// // // // //     if (event.key === 'Enter') {
// // // // //       onSent(); // Call the existing function when Enter is pressed
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className='main'>
// // // // //       <div className="nav">
// // // // //         <p>Gemini</p>
// // // // //         <img src={assets.user_icon} alt="" />
// // // // //       </div>

// // // // //       <div className="main-container">
// // // // //         {!showResult ? (
// // // // //           <>
// // // // //             <div className="greet">
// // // // //               <p><span>Hello, User.</span></p>
// // // // //               <p>How can I help you today?</p>
// // // // //             </div>
// // // // //             <div className="cards">
// // // // //               <div className="card">
// // // // //                 <p>Suggest beautiful places to see on an upcoming road trips</p>
// // // // //                 <img src={assets.compass_icon} alt="" />
// // // // //               </div>
// // // // //               <div className="card">
// // // // //                 <p>Briefly summarize this concept: urban planning</p>
// // // // //                 <img src={assets.bulb_icon} alt="" />
// // // // //               </div>
// // // // //               <div className="card">
// // // // //                 <p>Brainstorm team bonding activities for our work retreat</p>
// // // // //                 <img src={assets.message_icon} alt="" />
// // // // //               </div>
// // // // //               <div className="card">
// // // // //                 <p>Improve the readability of the following code</p>
// // // // //                 <img src={assets.code_icon} alt="" />
// // // // //               </div>
// // // // //             </div>
// // // // //           </>
// // // // //         ) : (
// // // // //           <div className='result'>
// // // // //             <div className="result-title">
// // // // //               <img src={assets.user_icon} alt="" />
// // // // //               <p>{recentPrompt}</p>
// // // // //             </div>
// // // // //             <div className="result-data">
// // // // //               <img src={assets.gemini_icon} alt="" />
// // // // //               {loading ? (
// // // // //                 <div className="loader">
// // // // //                   <hr />
// // // // //                   <hr />
// // // // //                   <hr />
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="main-bottom">
// // // // //           <div className="search-box">
// // // // //             <input
// // // // //               onChange={(e) => setInput(e.target.value)}
// // // // //               value={input}
// // // // //               type="text"
// // // // //               placeholder="Enter a prompt here"
// // // // //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// // // // //             />
// // // // //             <div>
// // // // //               <img src={assets.gallery_icon} alt="" />
// // // // //               <img src={assets.mic_icon} alt="" />
// // // // //               {input.trim() ? (
// // // // //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// // // // //               ) : null}
// // // // //             </div>
// // // // //           </div>
// // // // //           <p className="bottom-info">
// // // // //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Main;




// // // // import React, { useContext, useState } from 'react';
// // // // import './Main.css';
// // // // import Sidebar from '../Sidebar/Sidebar';
// // // // import { assets } from '../../assets/assets';
// // // // import { Context } from '../../context/Context';

// // // // const Main = () => {
// // // //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// // // //   const [isListening, setIsListening] = useState(false);

// // // //   // Function to handle key press
// // // //   const handleKeyDown = (event) => {
// // // //     if (event.key === 'Enter') {
// // // //       onSent(); // Call the existing function when Enter is pressed
// // // //     }
// // // //   };

// // // //   // Voice Recognition Function
// // // //   const startListening = () => {
// // // //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// // // //     if (!SpeechRecognition) {
// // // //       alert("Your browser doesn't support speech recognition.");
// // // //       return;
// // // //     }

// // // //     const recognition = new SpeechRecognition();
// // // //     recognition.lang = 'en-US'; // Set language
// // // //     recognition.interimResults = false;
// // // //     recognition.maxAlternatives = 1;

// // // //     recognition.onstart = () => {
// // // //       setIsListening(true);
// // // //     };

// // // //     recognition.onresult = (event) => {
// // // //       const transcript = event.results[0][0].transcript;
// // // //       setInput(transcript);
// // // //     };

// // // //     recognition.onerror = (event) => {
// // // //       console.error('Speech recognition error:', event.error);
// // // //       setIsListening(false);
// // // //     };

// // // //     recognition.onend = () => {
// // // //       setIsListening(false);
// // // //     };

// // // //     recognition.start();
// // // //   };

// // // //   return (
// // // //     <div className='main'>
// // // //       <div className="nav">
// // // //         <p>Gemini</p>
// // // //         <img src={assets.user_icon} alt="" />
// // // //       </div>

// // // //       <div className="main-container">
// // // //         {!showResult ? (
// // // //           <>
// // // //             <div className="greet">
// // // //               <p><span>Hello, User.</span></p>
// // // //               <p>How can I help you today?</p>
// // // //             </div>
// // // //             <div className="cards">
// // // //               <div className="card">
// // // //                 <p>Suggest beautiful places to see on an upcoming road trip</p>
// // // //                 <img src={assets.compass_icon} alt="" />
// // // //               </div>
// // // //               <div className="card">
// // // //                 <p>Briefly summarize this concept: urban planning</p>
// // // //                 <img src={assets.bulb_icon} alt="" />
// // // //               </div>
// // // //               <div className="card">
// // // //                 <p>Brainstorm team bonding activities for our work retreat</p>
// // // //                 <img src={assets.message_icon} alt="" />
// // // //               </div>
// // // //               <div className="card">
// // // //                 <p>Improve the readability of the following code</p>
// // // //                 <img src={assets.code_icon} alt="" />
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ) : (
// // // //           <div className='result'>
// // // //             <div className="result-title">
// // // //               <img src={assets.user_icon} alt="" />
// // // //               <p>{recentPrompt}</p>
// // // //             </div>
// // // //             <div className="result-data">
// // // //               <img src={assets.gemini_icon} alt="" />
// // // //               {loading ? (
// // // //                 <div className="loader">
// // // //                   <hr />
// // // //                   <hr />
// // // //                   <hr />
// // // //                 </div>
// // // //               ) : (
// // // //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         <div className="main-bottom">
// // // //           <div className="search-box">
// // // //             <input
// // // //               onChange={(e) => setInput(e.target.value)}
// // // //               value={input}
// // // //               type="text"
// // // //               placeholder="Enter a prompt here"
// // // //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// // // //             />
// // // //             <div>
// // // //               <img src={assets.gallery_icon} alt="" />
// // // //               <img 
// // // //                 src={assets.mic_icon} 
// // // //                 alt="mic" 
// // // //                 onClick={startListening} 
// // // //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// // // //               />
// // // //               {input.trim() ? (
// // // //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// // // //               ) : null}
// // // //             </div>
// // // //           </div>
// // // //           <p className="bottom-info">
// // // //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Main;



// // import React, { useContext, useState } from 'react';
// // import './Main.css';
// // import Sidebar from '../Sidebar/Sidebar';
// // import { assets } from '../../assets/assets';
// // import { Context } from '../../context/Context';

// // const Main = () => {
// //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// //   const [isListening, setIsListening] = useState(false);

// //   // Function to handle key press
// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       onSent(); // Call the existing function when Enter is pressed
// //     }
// //   };

// //   // Voice Recognition Function
// //   const startListening = () => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) {
// //       alert("Your browser doesn't support speech recognition.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;
// //     recognition.maxAlternatives = 1;

// //     recognition.onstart = () => {
// //       setIsListening(true);
// //     };

// //     recognition.onresult = (event) => {
// //       const transcript = event.results[0][0].transcript;
// //       setInput(transcript);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error('Speech recognition error:', event.error);
// //       setIsListening(false);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //     };

// //     recognition.start();
// //   };

// //   return (
// //     <div className='main'>
// //       <div className="nav">
// //         <p>Gemini</p>
// //         <img src={assets.user_icon} alt="" />
// //       </div>

// //       <div className="main-container">
// //         {!showResult ? (
// //           <>
// //             <div className="greet">
// //               <p><span>Hello, User.</span></p>
// //               <p>How can I help you today?</p>
// //             </div>
// //             <div className="cards">
// //               <div className="card">
// //                 <p>Suggest beautiful places to see on an upcoming road trips</p>
// //                 <img src={assets.compass_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Briefly summarize this concept: urban planning</p>
// //                 <img src={assets.bulb_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Brainstorm team bonding activities for our work retreat</p>
// //                 <img src={assets.message_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Improve the readability of the following code</p>
// //                 <img src={assets.code_icon} alt="" />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className='result'>
// //             <div className="result-title">
// //               <img src={assets.user_icon} alt="" />
// //               <p>{recentPrompt}</p>
// //             </div>
// //             <div className="result-data">
// //               <img src={assets.gemini_icon} alt="" />
// //               {loading ? (
// //                 <div className="loader">
// //                   <hr />
// //                   <hr />
// //                   <hr />
// //                 </div>
// //               ) : (
// //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt here"
// //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// //             />
// //             <div>
// //               <img src={assets.gallery_icon} alt="" />
// //               <img 
// //                 src={assets.mic_icon} 
// //                 alt="mic" 
// //                 onClick={startListening} 
// //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// //               />
// //               {input.trim() ? (
// //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //               ) : null}
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;



// // import React, { useContext, useState } from 'react';
// // import './Main.css';
// // import Sidebar from '../Sidebar/Sidebar';
// // import { assets } from '../../assets/assets';
// // import { Context } from '../../context/Context';

// // const Main = () => {
// //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// //   const [isListening, setIsListening] = useState(false);

// //   // Function to handle key press
// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       onSent(); // Call the existing function when Enter is pressed
// //     }
// //   };

// //   // Voice Recognition Function
// //   const startListening = () => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) {
// //       alert("Your browser doesn't support speech recognition.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;

// //     recognition.onstart = () => {
// //       setIsListening(true);
// //     };

// //     recognition.onresult = (event) => {
// //       setInput(event.results[0][0].transcript);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error('Speech recognition error:', event.error);
// //       setIsListening(false);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //     };

// //     recognition.start();
// //   };

// //   // Text-to-Speech Function
// //   const speakText = (text) => {
// //     const speech = new SpeechSynthesisUtterance(text);
// //     speech.lang = 'en-US';
// //     window.speechSynthesis.speak(speech);
// //   };

// //   // File Upload and Analysis Function
// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setInput(e.target.result); // Set file content as input prompt
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   return (
// //     <div className='main'>
// //       <div className="nav">
// //         <p>Gemini</p>
// //         <img src={assets.user_icon} alt="" />
// //       </div>

// //       <div className="main-container">
// //         {!showResult ? (
// //           <>
// //             <div className="greet">
// //               <p><span>Hello, User.</span></p>
// //               <p>How can I help you today?</p>
// //             </div>
// //             <div className="cards">
// //               <div className="card">
// //                 <p>Suggest beautiful places to see on an upcoming road trips</p>
// //                 <img src={assets.compass_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Briefly summarize this concept: urban planning</p>
// //                 <img src={assets.bulb_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Brainstorm team bonding activities for our work retreat</p>
// //                 <img src={assets.message_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Improve the readability of the following code</p>
// //                 <img src={assets.code_icon} alt="" />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className='result'>
// //             <div className="result-title">
// //               <img src={assets.user_icon} alt="" />
// //               <p>{recentPrompt}</p>
// //             </div>
// //             <div className="result-data">
// //               <img src={assets.gemini_icon} alt="" />
// //               {loading ? (
// //                 <div className="loader">
// //                   <hr />
// //                   <hr />
// //                   <hr />
// //                 </div>
// //               ) : (
// //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// //               )}
// //               {!loading && <button onClick={() => speakText(resultData)}>🔊 Read Aloud</button>}
// //             </div>
// //           </div>
// //         )}

// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt here"
// //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// //             />
// //             <div>
// //               <input
// //                 type="file"
// //                 accept=".txt,.json,.csv"
// //                 style={{ display: 'none' }}
// //                 id="file-upload"
// //                 onChange={handleFileChange}
// //               />
// //               <label htmlFor="file-upload">
// //                 <img src={assets.gallery_icon} alt="upload" style={{ cursor: 'pointer' }} />
// //               </label>
// //               <img 
// //                 src={assets.mic_icon} 
// //                 alt="mic" 
// //                 onClick={startListening} 
// //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// //               />
// //               {input.trim() ? (
// //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //               ) : null}
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;




// // import React, { useContext, useState } from 'react';
// // import './Main.css';
// // import Sidebar from '../Sidebar/Sidebar';
// // import { assets } from '../../assets/assets';
// // import { Context } from '../../context/Context';

// // const Main = () => {
// //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// //   const [isListening, setIsListening] = useState(false);

// //   // Function to handle key press
// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       onSent(); // Call the existing function when Enter is pressed
// //     }
// //   };

// //   // Voice Recognition Function
// //   const startListening = () => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) {
// //       alert("Your browser doesn't support speech recognition.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;

// //     recognition.onstart = () => {
// //       setIsListening(true);
// //     };

// //     recognition.onresult = (event) => {
// //       setInput(event.results[0][0].transcript);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error('Speech recognition error:', event.error);
// //       setIsListening(false);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //     };

// //     recognition.start();
// //   };

// //   // Text-to-Speech Function
// //   const speakText = (text) => {
// //     const speech = new SpeechSynthesisUtterance(text);
// //     speech.lang = 'en-US';
// //     window.speechSynthesis.speak(speech);
// //   };

// //   // File Upload and Analysis Function
// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setInput(e.target.result); // Set file content as input prompt
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   return (
// //     <div className='main'>
// //       <div className="nav">
// //         <p>DEVO</p>
// //         <img src={assets.user_icon} alt="" />
// //       </div>

// //       <div className="main-container">
// //         {!showResult ? (
// //           <>
// //             <div className="greet">
// //               <p><span>Hello, User.</span></p>
// //               <p>How can I help you today?</p>
// //             </div>
// //             <div className="cards">
// //               <div className="card">
// //                 <p>Suggest beautiful places to see on an upcoming road trips</p>
// //                 <img src={assets.compass_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Briefly summarize this concept: urban planning</p>
// //                 <img src={assets.bulb_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Brainstorm team bonding activities for our work retreat</p>
// //                 <img src={assets.message_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Improve the readability of the following code</p>
// //                 <img src={assets.code_icon} alt="" />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className='result'>
// //             <div className="result-title">
// //               <img src={assets.user_icon} alt="" />
// //               <p>{recentPrompt}</p>
// //             </div>
// //             <div className="result-data">
// //               <img src={assets.Chat} alt="" />
// //               {loading ? (
// //                 <div className="loader">
// //                   <hr />
// //                   <hr />
// //                   <hr />
// //                 </div>
// //               ) : (
// //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// //               )}
// //               {!loading && <img src = {assets.read_loud_icon} alt="Read Aloud" className="read-aloud-icon" style={{ cursor: 'pointer' }} onClick={() => speakText(resultData)} />}
// //             </div>
// //           </div>
// //         )}

// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt here"
// //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// //             />
// //             <div>
// //               <input
// //                 type="file"
// //                 accept=".txt,.json,.csv"
// //                 style={{ display: 'none' }}
// //                 id="file-upload"
// //                 onChange={handleFileChange}
// //               />
// //               <label htmlFor="file-upload">
// //                 <img src={assets.gallery_icon} alt="upload" style={{ cursor: 'pointer' }} />
// //               </label>
// //               <img 
// //                 src={assets.mic_icon} 
// //                 alt="mic" 
// //                 onClick={startListening} 
// //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// //               />
// //               {input.trim() ? (
// //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //               ) : null}
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;





// // import React, { useContext, useState, useEffect } from 'react';
// // import './Main.css';
// // import Sidebar from '../Sidebar/Sidebar';
// // import { assets } from '../../assets/assets';
// // import { Context } from '../../context/Context';

// // const Main = () => {
// //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// //   const [isListening, setIsListening] = useState(false);
// //   const [isSpeaking, setIsSpeaking] = useState(false);

// //   useEffect(() => {
// //     if (showResult && resultData && recentPrompt.trim()) {
// //       speakText(resultData);
// //     }
// //   }, [showResult, resultData, recentPrompt]);

// //   // Function to handle key press
// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       onSent(); // Call the existing function when Enter is pressed
// //     }
// //   };

// //   // Voice Recognition Function
// //   const startListening = () => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) {
// //       alert("Your browser doesn't support speech recognition.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;

// //     recognition.onstart = () => {
// //       setIsListening(true);
// //     };

// //     recognition.onresult = (event) => {
// //       setInput(event.results[0][0].transcript);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error('Speech recognition error:', event.error);
// //       setIsListening(false);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //     };

// //     recognition.start();
// //   };

// //   // Text-to-Speech Function
// //   const speakText = (text) => {
// //     if (isSpeaking) {
// //       window.speechSynthesis.cancel();
// //       setIsSpeaking(false);
// //       return;
// //     }

// //     const speech = new SpeechSynthesisUtterance(text);
// //     speech.lang = 'en-US';
// //     speech.onstart = () => setIsSpeaking(true);
// //     speech.onend = () => setIsSpeaking(false);
// //     window.speechSynthesis.speak(speech);
// //   };

// //   // File Upload and Analysis Function
// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setInput(e.target.result); // Set file content as input prompt
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   return (
// //     <div className='main'>
// //       <div className="nav">
// //         <p>Gemini</p>
// //         <img src={assets.user_icon} alt="" />
// //       </div>

// //       <div className="main-container">
// //         {!showResult ? (
// //           <>
// //             <div className="greet">
// //               <p><span>Hello, User.</span></p>
// //               <p>How can I help you today?</p>
// //             </div>
// //             <div className="cards">
// //               <div className="card">
// //                 <p>Suggest beautiful places to see on an upcoming road trip</p>
// //                 <img src={assets.compass_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Briefly summarize this concept: urban planning</p>
// //                 <img src={assets.bulb_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Brainstorm team bonding activities for our work retreat</p>
// //                 <img src={assets.message_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Improve the readability of the following code</p>
// //                 <img src={assets.code_icon} alt="" />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className='result'>
// //             <div className="result-title">
// //               <img src={assets.user_icon} alt="" />
// //               <p>{recentPrompt}</p>
// //             </div>
// //             <div className="result-data">
// //               <img src={assets.gemini_icon} alt="" />
// //               {loading ? (
// //                 <div className="loader">
// //                   <hr />
// //                   <hr />
// //                   <hr />
// //                 </div>
// //               ) : (
// //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// //               )}
// //               {!loading && (
// //                 <img 
// //                   src="/mnt/data/image.png" 
// //                   alt="Read Aloud" 
// //                   style={{ cursor: 'pointer' }} 
// //                   onClick={() => speakText(resultData)}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt here"
// //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// //             />
// //             <div>
// //               <input
// //                 type="file"
// //                 accept=".txt,.json,.csv"
// //                 style={{ display: 'none' }}
// //                 id="file-upload"
// //                 onChange={handleFileChange}
// //               />
// //               <label htmlFor="file-upload">
// //                 <img src={assets.gallery_icon} alt="upload" style={{ cursor: 'pointer' }} />
// //               </label>
// //               <img 
// //                 src={assets.mic_icon} 
// //                 alt="mic" 
// //                 onClick={startListening} 
// //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// //               />
// //               {input.trim() ? (
// //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //               ) : null}
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;



// // import React, { useContext, useState, useEffect } from 'react';
// // import './Main.css';
// // import Sidebar from '../Sidebar/Sidebar';
// // import { assets } from '../../assets/assets';
// // import { Context } from '../../context/Context';

// // const Main = () => {
// //   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
// //   const [isListening, setIsListening] = useState(false);
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [speechInstance, setSpeechInstance] = useState(null);

// //   useEffect(() => {
// //     if (showResult && resultData && recentPrompt.trim()) {
// //       speakText(resultData);
// //     }
// //   }, [showResult, resultData, recentPrompt]);

// //   // Function to handle key press
// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       onSent(); // Call the existing function when Enter is pressed
// //     }
// //   };

// //   // Voice Recognition Function
// //   const startListening = () => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) {
// //       alert("Your browser doesn't support speech recognition.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = 'en-US';
// //     recognition.interimResults = false;

// //     recognition.onstart = () => {
// //       setIsListening(true);
// //     };

// //     recognition.onresult = (event) => {
// //       setInput(event.results[0][0].transcript);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error('Speech recognition error:', event.error);
// //       setIsListening(false);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //     };

// //     recognition.start();
// //   };

// //   // Text-to-Speech Function
// //   const speakText = (text) => {
// //     if (speechInstance) {
// //       speechInstance.onend = null;
// //       window.speechSynthesis.cancel();
// //       setIsSpeaking(false);
// //       setSpeechInstance(null);
// //       return;
// //     }

// //     const speech = new SpeechSynthesisUtterance(text);
// //     speech.lang = 'en-US';
// //     speech.onstart = () => setIsSpeaking(true);
// //     speech.onend = () => {
// //       setIsSpeaking(false);
// //       setSpeechInstance(null);
// //     };
// //     window.speechSynthesis.speak(speech);
// //     setSpeechInstance(speech);
// //   };

// //   // File Upload and Analysis Function
// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setInput(e.target.result); // Set file content as input prompt
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   return (
// //     <div className='main'>
// //       <div className="nav">
// //         <p>DEVO</p>
// //         <img src={assets.user_icon} alt="" />
// //       </div>

// //       <div className="main-container">
// //         {!showResult ? (
// //           <>
// //             <div className="greet">
// //               <p><span>Hello, User.</span></p>
// //               <p>How can I help you today?</p>
// //             </div>
// //             <div className="cards">
// //               <div className="card">
// //                 <p>Suggest beautiful places to see on an upcoming road trip</p>
// //                 <img src={assets.compass_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Briefly summarize this concept: urban planning</p>
// //                 <img src={assets.bulb_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Brainstorm team bonding activities for our work retreat</p>
// //                 <img src={assets.message_icon} alt="" />
// //               </div>
// //               <div className="card">
// //                 <p>Improve the readability of the following code</p>
// //                 <img src={assets.code_icon} alt="" />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className='result'>
// //             <div className="result-title">
// //               <img src={assets.user_icon} alt="" />
// //               <p>{recentPrompt}</p>
// //             </div>
// //             <div className="result-data">
// //               <img src={assets.Chatn} alt="" />
// //               {loading ? (
// //                 <div className="loader">
// //                   <hr />
// //                   <hr />
// //                   <hr />
// //                 </div>
// //               ) : (
// //                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
// //               )}
// //               {!loading && (
// //                 <img 
// //                 src={assets.read_loud_icon} 
// //                 alt="Read Aloud" 
// //                 className="read-aloud-icon" 
// //                   style={{ cursor: 'pointer' }} 
// //                   onClick={() => speakText(resultData)}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt here"
// //               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
// //             />
// //             <div>
// //               <input
// //                 type="file"
// //                 accept=".txt,.json,.csv"
// //                 style={{ display: 'none' }}
// //                 id="file-upload"
// //                 onChange={handleFileChange}
// //               />
// //               <label htmlFor="file-upload">
// //                 <img src={assets.gallery_icon} alt="upload" style={{ cursor: 'pointer' }} />
// //               </label>
// //               <img 
// //                 src={assets.mic_icon} 
// //                 alt="mic" 
// //                 onClick={startListening} 
// //                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
// //               />
// //               {input.trim() ? (
// //                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //               ) : null}
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;


// import React, { useContext, useState, useEffect } from 'react';
// import './Main.css';
// import Sidebar from '../Sidebar/Sidebar';
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';

// const Main = () => {
//   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
//   const [isListening, setIsListening] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [speechInstance, setSpeechInstance] = useState(null);

//   useEffect(() => {
//     if (showResult && resultData && recentPrompt.trim()) {
//       speakText(resultData);
//     }
//   }, [showResult, resultData, recentPrompt]);

//   // Function to handle key press
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       onSent(); // Call the existing function when Enter is pressed
//     }
//   };

//   // Voice Recognition Function
//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Your browser doesn't support speech recognition.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech recognition error:', event.error);
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.start();
//   };

//   // Text-to-Speech Function
//   const speakText = (text) => {
//     if (speechInstance) {
//       speechInstance.onend = null;
//       window.speechSynthesis.cancel();
//       setIsSpeaking(false);
//       setSpeechInstance(null);
//       return;
//     }

//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = 'en-US';
//     speech.onstart = () => setIsSpeaking(true);
//     speech.onend = () => {
//       setIsSpeaking(false);
//       setSpeechInstance(null);
//     };
//     window.speechSynthesis.speak(speech);
//     setSpeechInstance(speech);
//   };

//   return (
//     <div className='main'>
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>

//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p><span>Hello, User.</span></p>
//               <p>How can I help you today?</p>
//             </div>
//             <div className="cards">
//               <div className="card">
//                 <p>Suggest beautiful places to see on an upcoming road trip</p>
//                 <img src={assets.compass_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Briefly summarize this concept: urban planning</p>
//                 <img src={assets.bulb_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Brainstorm team bonding activities for our work retreat</p>
//                 <img src={assets.message_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>Improve the readability of the following code</p>
//                 <img src={assets.code_icon} alt="" />
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className='result'>
//             <div className="result-title">
//               <img src={assets.user_icon} alt="" />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="" />
//               {loading ? (
//                 <div className="loader">
//                   <hr />
//                   <hr />
//                   <hr />
//                 </div>
//               ) : (
//                 <p dangerouslySetInnerHTML={{ __html: resultData }} />
//               )}
//               {!loading && (
//                 <img 
//                   src="/mnt/data/image.png" 
//                   alt="Read Aloud" 
//                   style={{ cursor: 'pointer' }} 
//                   onClick={() => speakText(resultData)}
//                 />
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt here"
//               onKeyDown={handleKeyDown} // Calls onSent() when Enter is pressed
//             />
//             <div>
//               <img 
//                 src={assets.mic_icon} 
//                 alt="mic" 
//                 onClick={startListening} 
//                 style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
//               />
//               {input.trim() ? (
//                 <img onClick={() => onSent()} src={assets.send_icon} alt="" />
//               ) : null}
//             </div>
//           </div>
//           <p className="bottom-info">
//             Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
import React, { useContext, useState, useEffect } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  useEffect(() => {
    if (showResult && resultData && recentPrompt.trim()) {
      speakText(resultData);
    }
  }, [showResult, resultData, recentPrompt]);

  // Function to handle key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSent();
    }
  };

  // Voice Recognition Function
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => setInput(event.results[0][0].transcript);
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  // Text-to-Speech Function
  const speakText = (text) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    if (showResult && resultData) {
      speakText(resultData);
    }
  }, [showResult, resultData]);

  return (
    <div className='main'>
      <div className="nav">
        <p>DEVO</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, User.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card"><p>Suggest beautiful places to see on an upcoming road trip</p><img src={assets.compass_icon} alt="" /></div>
              <div className="card"><p>Briefly summarize this concept: urban planning</p><img src={assets.bulb_icon} alt="" /></div>
              <div className="card"><p>Brainstorm team bonding activities for our work retreat</p><img src={assets.message_icon} alt="" /></div>
              <div className="card"><p>Improve the readability of the following code</p><img src={assets.code_icon} alt="" /></div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.Chat} alt="" />
              {loading ? (
                <div className="loader"><hr /><hr /><hr /></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={handleKeyDown}
            />
            <div>
              <img 
                src={assets.mic_icon} 
                alt="mic" 
                onClick={startListening} 
                style={{ cursor: 'pointer', opacity: isListening ? 0.5 : 1 }} 
              />
              {input.trim() ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
