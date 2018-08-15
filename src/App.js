import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // array goes here
    }
  }
  render() {
    return (
      <div>
        <table style={{border:'solid 1px black'}}>
          <thead>
            <tr>
              <td>First Name</td><td>Last Name</td><td>Email</td>
            </tr>
          </thead>
          <tbody>
            {
              // array mapping goes here
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
