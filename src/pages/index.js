'use client'
import Piece from "./piece";
import King from "./king";
import { detect_captures, move, possibilities, remaining_pieces, reset } from "./functions";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Merienda } from 'next/font/google'
import { userefcontext } from "./context";
import SimpleDialogDemo from "./dialog";

const merienda = Merienda({subsets:['latin']})

var message = ''

export default function Home() {
const {setOpen, player,setplayer,board,setboard,start,setstart,reset,movesound,setmovesound,capturesound,lastwinner,setlastwinner} = userefcontext()

var ref = board
const [pos,setpos] = useState(['',[]])
const [seconds,setseconds]= useState(10)
const updateseconds = ()=>{
  setseconds(seconds-1)
}


useEffect(() => {
 if (!start) return;
  const intervalId = setInterval(() => {
    
      if (seconds > 0) 
      {
        return updateseconds();
      } 

      else 
      {
        setplayer(player === '1' ? '2' : '1'); // Functional update
        setseconds(10) // Reset seconds to 10
      }
   
  }, 1000);

  return () => clearInterval(intervalId);
}, [player,seconds,start])


const [score,setscore] = useState({'player1':0,'player2':0})

const updatescore = (newscore)=>{
  setscore( (oldscore)=>{
    var temp_score = {...oldscore}
    if (newscore [0]>0 && newscore [2] == 0)
      {
        temp_score['player1']+=1
      }
      
    else if (newscore [0]==0 && newscore [2] >0)
    {
      temp_score['player2']+=1
    }

    return temp_score
  })
}
const change_pos =(newpos)=>{ setpos(newpos) }

  return (
    <div> 
      <SimpleDialogDemo info= {message}></SimpleDialogDemo>   
 
    <div className="infos">
       <div className="player">
          <Image className="avatar" src={"/player1.jpg"} height={50} width={50} style={{borderColor: player == '1' ? 'yellow':'transparent',borderWidth:'5px'}} alt={"player1"}/>  
          <div id="er" className={merienda.className}>player 1</div>
       </div>
      
      <div className={merienda.className} style={{alignItems: 'center',fontSize:'25px'}}>{score['player1']}:{score['player2']}</div>
       <div className="player">
          <Image className="avatar" src={"/player2.jpg"} height={50} width={50} style={{borderColor: player == '2'? 'yellow' :'transparent',borderWidth:'5px'}} alt={"player1"}/>  
          <div className={merienda.className}>player 2</div>
       </div>
   </div>

   <div className="main">

   { start && <div className={merienda.className} style={{width:"100%",alignItems:'center',display:'flex',flexDirection:'row',justifyContent: player == '1' ? 'flex-start':'end',marginLeft:player == '1'? "20px":0, marginRight:player == '2'? "20px":0}}> <span className={merienda.className} style={{marginRight:'2px', fontSize:'30px',fontWeight:'bold', color:seconds>4 ? 'black':'red'}}> {seconds}</span> seconds left</div>}
   { !start && <button className={merienda.className} onClick={()=>{//change_pos(possibilities(ref,'1 3'))
     
   setstart(true)

      
    }}>Start game</button>
  }
      <div className="grid">
     { 
      [1,2,3,4,5,6,7,8].map((i)=>{
        var temp = []
        var back_color = 'black'
         if (i%2==0) back_color = back_color =='white' ? 'black':'white'
        
        for (let a = 0; a<8 ;a++)
        {
          if (ref[i-1][a]!='*')
          {  
            if (ref[i-1][a][0]!='k' ) temp.push(<div  onClick={()=>{ 
             //check if the game has startet yet
              var ii = document.getElementById('p0 2')

             //if (start)
              {//if it is your turn
              if (ref[i-1][a] == player)  change_pos(possibilities(ref,`${i-1} ${a}`))
              else alert('It is not turn yet')
              }

           // else alert ('Start the game first')
            // console.log(start)
            }} key={`c${i} ${a}`} className="cell" style={{backgroundColor:pos[1].includes (`${i-1} ${a}`) ? 'yellow': back_color}}> <Piece id={`p${i-1} ${a}`}  color={ref[i-1][a] =='1' ? 'red':'white'}></Piece>  </div>)

            else temp.push(<div onClick={()=>{ 
              if (start)
              {
              if (ref[i-1][a][1] == player)   change_pos(possibilities(ref,`${i-1} ${a}`))
              else alert('It is not turn yet')
              }

              else alert ('Start the game first')
            }} key={a} className="cell" style={{backgroundColor: pos[1].includes (`${i-1} ${a}`) ? 'yellow': back_color}}> <King color={ref[i-1][a][1] =='1' ? 'red':'white'}></King>  </div>)
           
           }

           else 
           {
            temp.push(<div onClick={()=>
              {
              change_pos(['',[]])
              if (pos[1].includes(`${i-1} ${a}`))
              { 
                var did_captures = detect_captures(ref,pos[0]).length>0
                move(pos[0],`${i-1} ${a}`,ref,movesound,capturesound).then((status)=>{
                //console.log(typeof(status))
                if (typeof(status) == 'string') 
                {
                  setOpen(true)
                  message = status
                }

                else 
                {
                  var new_captures = detect_captures(ref,`${i-1} ${a}`)

                  if ( new_captures.length>0 && did_captures ) 
                    {
                      var new_possibilities = possibilities(ref,`${i-1} ${a}`)
                      change_pos(new_possibilities)
                    }

                  else
                  { var tempref= [...ref]
                    
                    if (ref[i-1] [a].length !=2 && ((i-1 == 0 && ref[i-1][a]=='1') || (i-1 == 7 && ref[i-1][a]=='2') ))
                      {
                        ref[i-1] [a] = 'k'+ref[i-1][a]
                        
                      }
                      setplayer( player == '1' ? '2' :'1' )
                      var result = remaining_pieces(ref)
                      
                      if (result [2] == '0' || result[0] == '0')
                      {
                        var winner = result[2] != '0'? '2': '1'
                        message = `player ${winner} won`
                       // currentplayer = '1'
                    
                        updatescore(result)
               
                        setOpen(true)
                        setTimeout(() => 
                        {

                          setlastwinner(winner)
                          setOpen(false)
                          reset()
                          
                        }, 2000);
                       
                      }
                       
                      else if (result== '1 1') 
                        { 
                         message = 'draw'
                         setOpen(true)
                          setTimeout(() => 
                            {
                             setOpen(false)
                             reset()
                            }, 2000);
                        }
                      
                      else 
                      { 
                        setseconds(10)    
                      }
                  
                   }
                }
                 
                })

                
              }
           
            }
            } key={`c${i} ${a}`} className="cell" style={{backgroundColor: pos[1].includes (`${i-1} ${a}`) ? 'yellow': back_color}}>  </div>)

           }
          back_color = back_color =='white' ? 'black':'white'
        }
      
      return <div key={`row ${i}`} className="row"> {temp}  </div>
      })
     }
      
    </div>
    
    
    </div>
    </div>
  );
}




