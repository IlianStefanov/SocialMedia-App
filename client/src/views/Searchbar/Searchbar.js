import React, { Component } from 'react'

class Searchbar extends React.Component {
  state = { text: '' };
// constructor(props) {
//     super(props);

//     this.state = {
//         text: '' 
//     };
//     this.submit = this.submit.bind(this);
// }

  onChange = e => {
    this.setState({
      text: e.target.value
    });
    // console.log(this.state.text);
  };

  submit = (e) =>  {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <input type='text' name="text" value={this.state.text} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}

export default Searchbar;