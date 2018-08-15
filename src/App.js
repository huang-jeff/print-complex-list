import React, { Component } from 'react';
import Info from './Info.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [{
        "id": 1,
        "first_name": "Betsy",
        "last_name": "Holleworth",
        "email": "bholleworth0@delicious.com"
      }, {
        "id": 2,
        "first_name": "Noland",
        "last_name": "Neumann",
        "email": "nneumann1@marriott.com"
      }, {
        "id": 3,
        "first_name": "Jori",
        "last_name": "Pauling",
        "email": "jpauling2@networksolutions.com"
      }, {
        "id": 4,
        "first_name": "Farand",
        "last_name": "Jaegar",
        "email": "fjaegar3@naver.com"
      }, {
        "id": 5,
        "first_name": "Row",
        "last_name": "Mucillo",
        "email": "rmucillo4@dyndns.org"
      }, {
        "id": 6,
        "first_name": "Fields",
        "last_name": "Stiffell",
        "email": "fstiffell5@icio.us"
      }, {
        "id": 7,
        "first_name": "Loretta",
        "last_name": "McMaster",
        "email": "lmcmaster6@xinhuanet.com"
      }, {
        "id": 8,
        "first_name": "Fanni",
        "last_name": "Skittreal",
        "email": "fskittreal7@biblegateway.com"
      }, {
        "id": 9,
        "first_name": "Ricardo",
        "last_name": "Leadbeater",
        "email": "rleadbeater8@freewebs.com"
      }, {
        "id": 10,
        "first_name": "Clyde",
        "last_name": "Bottoner",
        "email": "cbottoner9@is.gd"
      }]
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
              this.state.list.map((ele, id) => {
                return <Info key={ id } index={ id } info={ ele }/>
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
