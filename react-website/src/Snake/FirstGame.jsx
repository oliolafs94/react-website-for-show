import React from 'react'

function FirstGame(props) {
  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='FirstGame' style={{ fontSize: props.width / 15 }}>
        <div id='FirstGameText'>START A GAME!</div>
        <div id='PressSpaceText'>Press Space to start</div>
      </div>
    </div>
  )
}

export default FirstGame