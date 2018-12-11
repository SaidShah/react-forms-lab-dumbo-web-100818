import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ' '
    };

  }


  letterCounter = event =>{
    this.setState={
      content:event.target.value

    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" onChange={event=>this.setState({content: event.target.value})} value={this.state.value}/>
        {this.props.maxChars-this.state.content.length}
      </div>
    );
  }
}

export default TwitterMessage;
