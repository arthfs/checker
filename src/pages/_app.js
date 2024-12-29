import "@/styles/globals.css";
import MenuListComposition from "./menu";
import { GameContext, userefcontext } from "./context";
import { useEffect } from "react";

function Backgroundaudio  (){
  const {backgroundsound} = userefcontext()
  useEffect(()=>{
  
    const  audio = new Audio('/song.mp3')
    if (backgroundsound) 
      {
      audio.play()
      audio.volume= 0.1
      audio.onended = ()=>{audio.play()}
      return () => {
        audio.pause(); // Stop the audio when the component unmounts
        audio.currentTime = 0; // Reset the audio to the beginning
      };
      }
   
   },[backgroundsound])
  return null
}

export default function App({ Component, pageProps }) {

  return (
  <GameContext> {
    <>
      <MenuListComposition/> 
     
      <Component   {...pageProps}  />  
        <div className="footer"> © 2024 Checker Game. Designed and developed by Arthur. All rights reserved.  </div>
    </>
                }
  </GameContext>);
}
// <Backgroundaudio/>