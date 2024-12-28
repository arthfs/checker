import React from 'react'

export default function Rules() {
  return (
    <div className='main2'>
      <div className='container2'> 
      <p className='title'> Rules </p>
      <div className='rules'>
      <div>
      <p className='bullets'> Objective</p>

Capture all of your opponent’s pieces or block them so they cannot make a move.
</div>
<br></br>

<div>
<p className='bullets'> Setup </p>
The game is played on an 8x8 board with alternating light and dark squares.
Each player starts with 12 pieces placed on the dark squares of the first three rows closest to them.
The player with the red pieces moves first.
</div>
<br></br>
<p className='bullets'>Movement</p>
<div className='indent'>


<div>
<p className='bullets'> Normal Moves:</p>
 
    Pieces move diagonally forward to an adjacent empty square.
</div>
<br></br>
<p className='bullets'>Capturing:</p>
    A piece captures an opponent’s piece by jumping over it to an empty square directly on the other side.
    Capturing is mandatory whenever possible.
    Pieces may capture both forward and backward.
    Multiple captures are allowed in a single turn if available.
    <br></br>
    <br></br>
<p className='bullets'>King’s Special Capturing Rule:</p> 
    When a king captures a piece, it must move into the next empty spot following the captured piece.
    If another capture is possible from the new position, the king must continue capturing.
    <br></br> <br></br>
<p className='bullets'>King Pieces</p>

When a piece reaches the opponent’s back row, it becomes a "king."
Kings are marked by stacking a second piece on top of them.
Kings can move and capture both forward and backward diagonally.
</div>
<br></br>
<div>
<p className='bullets'>Turn Rules</p>


Players alternate turns.
If a capture is possible, it must be made.
If multiple captures are available, the player may choose which sequence to execute.
</div>
<br></br>
<div>
<p className='bullets'>Winning the Game</p>    

A player wins by:
    Capturing all of the opponent’s pieces.
    Blocking the opponent so they cannot make any legal moves.
The game ends in a draw if neither player can win.
</div>
      </div>
      </div>
    </div>
  )
}
