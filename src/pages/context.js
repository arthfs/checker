 import { createContext, useContext,useEffect,useState } from "react";
var ref =[ ['2','*','2','*','2','*','2','*'],
['*','2','*','2','*','2','*','2'],
['2','*','2','*','2','*','2','*'],
['*','*','*','*','','*','*','*'],
['*','*','*','','*','*','*','*'],
['*','1','*','1','*','1','*','1'],
['1','*','1','*','1','*','1','*'],
['*','1','*','1','*','1','*','1']]


ref = [['*','*','*','*','*','*','*','*'],
['*','1','*','*','*','*','*','*'],
['2','*','*','*','*','*','2','*'],
['*','*','*','*','','1','*','*'],
['*','*','*','*','*','*','*','*'],
['*','*','*','*','*','*','*','*'],
['*','*','*','*','*','*','*','*'],
['*','*','*','*','*','*','*','*'],

] 

/*
ref =[ ['2','*','2','*','2','*','2','*'],
['*','2','*','2','*','2','*','2'],
['2','*','2','*','2','*','2','*'],
['*','*','*','*','','*','*','*'],
['*','*','*','','*','*','*','*'],
['*','1','*','1','*','1','*','1'],
['1','*','1','*','1','*','1','*'],
['*','1','*','1','*','1','*','1']]
*/

 const gamecontext = createContext()
 export const GameContext = ({children})=>{
    const [lastwinner,setlastwinner] = useState('1')
    const [player,setplayer] = useState(lastwinner)
    const [board,setboard] = useState(ref)
    const [start,setstart] = useState(false)
    const [open, setOpen] = useState(false);
    const[movesound,setmovesound] = useState(true)
    const[capturesound,setcapturesound] = useState(true)
    const[backgroundsound,setbackgroundsound] = useState(true)

    useEffect(()=>{setplayer(lastwinner)},[lastwinner])
    const reset = function()

    { 
      setplayer(lastwinner)
      setstart(false)
     setboard([ ['2','*','2','*','2','*','2','*'],
        ['*','2','*','2','*','2','*','2'],
        ['2','*','2','*','2','*','2','*'],
        ['*','*','*','*','','*','*','*'],
        ['*','*','*','','*','*','*','*'],
        ['*','1','*','1','*','1','*','1'],
        ['1','*','1','*','1','*','1','*'],
        ['*','1','*','1','*','1','*','1']])
    
    
    }
    return <gamecontext.Provider value={{player,setplayer,board,setboard,reset,start,setstart,movesound,setmovesound,capturesound,setcapturesound,backgroundsound,setbackgroundsound,setlastwinner,open,setOpen}}>
        {children}
    </gamecontext.Provider>
 }

 export const userefcontext = ()=> useContext(gamecontext);