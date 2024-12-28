 import { createContext, useContext,useEffect,useState,useRef } from "react";
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
    const [lastwinner,setlastwinner] = useState('2')
    const [player,setplayer] = useState(lastwinner)
    const [board,setboard] = useState(ref)
    const [start,setstart] = useState(false)
    const [open, setOpen] = useState(false);
    const[movesound,setmovesound] = useState(true)
    const[capturesound,setcapturesound] = useState(true)
    const[backgroundsound,setbackgroundsound] = useState(true)
    const [selectedimage,setselectimage] = useState(null)
    const fileInputref = useRef(null)
    const handleclick = ()=>{
     fileInputref.current.click()
    }
    const handlechange = (event)=>{
      const files  = event.target.files
      if (files.length>0) 
        {
          const url = URL.createObjectURL(files[0])
          setselectimage(url)
        }
      }

    const [formdata,setformdata] = useState({'username':'','firstname':'','lastname':'','email':'',})
    const updateform = (field,value)=>{
    //console.log(field,value)
    setformdata((olddata)=>{
        var temp = {...olddata}
        temp[field] = value
        return temp
    })
}
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
    return <gamecontext.Provider value={{player,setplayer,board,setboard,reset,start,setstart,movesound,setmovesound,capturesound,setcapturesound,backgroundsound,setbackgroundsound,setlastwinner,open,setOpen,selectedimage,handleclick, handlechange,fileInputref,formdata,updateform}}>
        {children}
    </gamecontext.Provider>
 }

 export const userefcontext = ()=> useContext(gamecontext);