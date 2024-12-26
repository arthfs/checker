import { userefcontext } from "./context"


export const detect_captures = function(ref,source)
{
  var sol = []
  var i = parseInt(source[0]), j=  parseInt(source[2])
  var a = i-1, b =j-1
  var deleted_i =a ,deleted_j = b
  var temp = []
  var sol = []
  var has_capture = false

  if (ref[i][j] == '1' || ref[i][j] == '2'  )
    { 
      //regular capture
      
    try {
      if (ref[i-1][j-1].replace('k','')!= ref[i][j] && ref[i-1][j-1] !='*'  && ref[i-2][j-2] =='*' ) 
        {
          sol.push (`${i-2} ${j-2}`) 
          has_capture = true
        }
      }
    catch(e){}
  
     try
     {
      if (ref[i-1][j+1].replace('k','')!= ref[i][j] && ref[i-1][j+1] !='*'  && ref[i-2][j+2] =='*' ) 
        {
          sol.push (`${i-2} ${j+2}`) 
          has_capture = true
        }
    }
     catch(e){}
  
    try
    { 
      if (ref[i+1][j-1].replace('k','')!= ref[i][j] && ref[i+1][j-1] !='*'  && ref[i+2][j-2] =='*' ) 
        {
          sol.push (`${i+2} ${j-2}`)
          has_capture = true
        }
    }
    catch(e){}
  
     try
     {
      if (ref[i+1][j+1].replace('k','')!= ref[i][j] && ref[i+1][j+1] !='*'  && ref[i+2][j+2] =='*' ) 
        {
          sol.push (`${i+2} ${j+2}`) 
          has_capture = true
        }
    }
     catch(e){}
     return sol
  }

  else 
  {
  //north west
  try
  {
   while  (a>0 && b>0 && ref[a][b]=='*') 
   {
    a-=1
    b-=1
   }

  if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*'  ) 
  { 
    a-=1
    b-=1

        if (ref[a][b]=='*')  temp.push(`${a} ${b}`)
    }
  }
  catch(e)
  {}

  // north east
  try 
  {
      a = i-1,b=j+1
      while  (a>0 && b<7 && ref[a][b]=='*') 
        {
         a-=1
         b+=1
        }

      if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*' ) 
      {
        a-=1
        b+=1 
      
        if (ref[a][b]=='*')  temp.push(`${a} ${b}`)
  
      }
  }
  catch(e) 
  {

  }

  //south west
  try 
  {
      a = i+1,b=j-1
      while  (a<7 && b>0 && ref[a][b]=='*') 
        {
         a+=1
         b-=1
        }

      if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*' ) 
      {
        a+=1
        b-=1 
      
        if (ref[a][b]=='*')  temp.push(`${a} ${b}`)
  
      }
  }
  catch(e) 
  {

  }


  //south east
  try 
  {
      a = i+1,b=j+1
      while  (a<7 && b<7 && ref[a][b]=='*') 
        {
         a+=1
         b+=1
        }
      if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*' ) 
      {
        a+=1
        b+=1 
      
        if (ref[a][b]=='*')  temp.push(`${a} ${b}`)
  
      }
  }
  catch(e) 
  {

  }
  return temp
  }

  
}

export const possibilities = function(ref,coordinate) 
{
  var sol = [];
  var i = parseInt(coordinate[0]), j =  parseInt(coordinate[2])

  if (ref[i][j] == '1' || ref[i][j] == '2'  )
  { var has_capture = detect_captures(ref,coordinate)
    //regular capture

    if (has_capture.length!=0) sol = [...has_capture]

    //player 1
    
    else
  {
    if (ref[i][j] =='1' ) 
      { 
          try
            { 
              if (ref[i-1][j-1] == '*') sol.push(`${i-1} ${j-1}`)
            }
          catch(e)
          {
            
          }

          try
            {
              if (ref[i-1][j+1] == '*') sol.push(`${i-1} ${j+1}`)
            }
          catch(e)
          {
            
          }
        
      }

      //player 2
      else 
      {
        try
            { 
              if (ref[i+1][j-1] == '*') sol.push(`${i+1} ${j-1}`)
            }
          catch(e)
          {
            
          }

          try
            {
              if (ref[i+1][j+1] == '*') sol.push(`${i+1} ${j+1}`)
            }
          catch(e)
          {
            
          }
      }
      
  
    }

  }
  
  else if (ref[i][j][0] =='k' ) 
  { 
    var king_capture = detect_captures(ref,coordinate)
      
      //************************************************************ */
       // north west

    if (king_capture.length == 0 )
    {

     try
     {
       var a = i-1,b=j-1
       while (a >=0 && b>=0)
       {
           if (ref[a][b]!='*')  break  
           sol.push(`${a} ${b}`)
           a-=1
           b-=1
       }
         
     }
     catch(e)
     {}

    try
    {
    if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*'  ) 
    { 
      a-=1
      b-=1
      while (a >=0 && b>=0)
      {
          if (ref[a][b]!='*')  break  
          sol.push(`${a} ${b}`)
          a-=1
          b-=1
      }
        
      }
    }
    catch(e)
    {}

    //north east
    try
    {
      var a = i-1,b=j+1
      while (a >=0 && b>=0)
      {
          if (ref[a][b]!='*')  break  
          sol.push(`${a} ${b}`)
          a-=1
          b+=1
      }
        
    }
    catch(e)
    {}


    try 
      {
          if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*' ) 
          {
            a-=1
            b+=1 
            while (a >=0 && b<=7)
                {
                    if (ref[a][b]!='*')  break  
                    sol.push(`${a} ${b}`)
                    a-=1
                    b+=1
                }
          }
      }
      catch(e) 
      {

      }

      //south west
      try
      {
        var a = i+1,b=j-1
        while (a >=0 && b>=0)
        {
            if (ref[a][b]!='*')  break  
            sol.push(`${a} ${b}`)
            a+=1
            b-=1
        }
          
      }
      catch(e)
      {}

      try
      {
      if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*') 
        {
            a+=1
            b-=1 
            while (a <=7 && b>=0)
                {
                    if (ref[a][b]!='*')  break  
                    sol.push(`${a} ${b}`)
                    a+=1
                    b-=1
                }
        }
      }
      catch(e)
      {

      }

      //south east
      try
      {
        var a = i+1,b=j+1
        while (a >=0 && b>=0)
        {
            if (ref[a][b]!='*')  break  
            sol.push(`${a} ${b}`)
            a+=1
            b+=1
        }
          
      }
      catch(e)
      {}

      try
      {
      if (ref[a][b].replace('k','')!= ref[i][j][1] && ref[a][b] !='*' ) 
        {
          a+=1
          b+=1
          while (a <=7 && b>=0)
            {
                if (ref[a][b]!='*')  break  
                sol.push(`${a} ${b}`)
                a+=1
                b+=1
            }
        }
      }
      catch(e)
      {

      }
    }
    else sol = [...king_capture]
      
    }

    return [`${i} ${j}`,sol]
  }

export const move = function(source,destination,ref,movesound,capturesound) 
{

return new Promise((resolve)=>{
  var quit = false
  var captures = false
  for (let b =0 ;b<8;b++)
  {
    for (let c =0 ; c<8; c++)
    {
      if (detect_captures(ref,`${b} ${c}`).length>0 && ref[source[0]] [source[2]] == ref[b][c])
      { 
        captures = true
        quit = true
        break
      }
      if (quit ) break
    }
  }
  
  var tempref = [...ref]
  if ( //true
    !captures && detect_captures(ref,source).length==0 || (captures && detect_captures(ref,source).length>0  ) 
  )
  

  {
    
  var source_i = parseInt(source[0]), source_j = parseInt(source[2])
  var destination_i = parseInt(destination[0]),destination_j = parseInt(destination[2])
  if ( Math.abs(source_i-destination_i)<2)
  {

    if (movesound)
    {
      var audio = new Audio('/move.mp3')
      audio.currentTime = 0.4
      audio.play()
    }
   
  }

  else 
  { if (capturesound)  new Audio('/captured.mp3').play()
    var deleted_i ,deleted_j ;
    if (ref[source_i][source_j][0] != 'k')
    {

      deleted_i = Math.max(source_i,destination_i)-1
      deleted_j = Math.max(source_j,destination_j)-1
    }
   else if (destination_i < source_i && destination_j< source_j) 
      {
        deleted_i = destination_i+1
        deleted_j = destination_j+1
      } 
    else if (destination_i < source_i && destination_j> source_j)
      {
        deleted_i = destination_i+1
        deleted_j = destination_j-1
      } 
    else if (destination_i > source_i && destination_j<source_j)
    { 
        deleted_i = destination_i-1
        deleted_j = destination_j+1
    }
    else 
    {
      deleted_i = destination_i-1
      deleted_j = destination_j-1
    }
    const style = document.createElement("style");
style.innerHTML = `
  @keyframes rotateInfinite {
    0% {
      transform: rotateX(0deg)   translateX(0vh) translateY(0vh);
    }
    50% {
      transform: rotateX(180deg)   translateX(-63vh) translateY(-63vh);
    }
    100% {
      transform:  rotateX(0deg)  translateX(-100vh) translateY(-100vh);
    }
  }
`;

// Append the animation rules to the document head
document.head.appendChild(style);


var i = document.getElementById(`p${deleted_i} ${deleted_j}`);

// Apply the animation directly to the selected element
i.style.animation = 'rotateInfinite 3000ms ease-in-out forwards';
i.style.position = 'absolute'; // 
   setTimeout(()=>
    { 
      tempref [deleted_i] [deleted_j] = '*'
   },10)

  }

  tempref[destination_i] [destination_j] = ref[source_i][source_j]
  
  tempref[source_i][source_j] ='*'
}

else
{
  //alert('captures are mandatory')
  resolve( 'captures are mandatory')
}

if (deleted_i!=undefined) 
  {  
    setTimeout((x)=>{var new_captures = detect_captures(ref,`${destination_i} ${destination_j}`)

     if (new_captures.length != 0) resolve( tempref)
    else setTimeout(()=>{resolve(tempref)},2700)
  },300)
  }
 else resolve (  tempref)
})
 
}

export const remaining_pieces = function(board)
{
  var player1 = 0, player2 = 0
  for (let i = 0; i<8;i++)
  {
    for (let j = 0 ; j<8; j++) 
    {
      if (board[i][j].replace('k','') == '1') player1+=1
      else if (board[i][j].replace('k','') == '2') player2+=1
    }
  }
  return `${player1} ${player2}`
}




