import React from 'react';

class Block extends React.Component {
   
    //ADD CODE HERE
    constructor(props) {
        super(props);
    }
    
  render() {

  const mystyle = this.props.color;

  return (
    <div>
      <div class = "blockers" style={{backgroundColor: mystyle}}>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </div>
      );
    }
  }


  export default Block;