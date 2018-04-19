import React, { Component } from 'react';
import Draggable from 'react-draggable';

const imageArray = [
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Butcher's_Block.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Heavy_Swing.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Maim.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Overpower.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Skull_Sunder.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Storm's_Path.png`,
  `https://s3-us-west-2.amazonaws.com/reactff14icons/Tomahawk.png`,
]
const warriorIcons = imageArray.map((image, index) => {
  return (
    <li style={{listStyle: 'none'}}>
      <Draggable
        axis="both"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}>
      <img 
        style={{
        width: '5rem', 
        height: '5rem'}} 
        key={index} 
        src={image} 
      />
      </Draggable>
    </li>
  )
});
class App extends Component {
  render() {
    return (
        <div style={{width: '5rem'}}>
          <div>drag me</div>
        {warriorIcons}
        </div>
    );
  }
}

export default App;