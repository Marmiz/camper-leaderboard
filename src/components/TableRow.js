import React, { Component } from 'react';

class TableRow extends Component {


  render() {
    const createTableRow = function(camper) {
      return (
        <tr key={camper.username}>
          <td><img src={camper.img} className="profilePic" role="presentation" /></td>
          <td>{camper.username}</td>
          <td>{camper.alltime}</td>
          <td>{camper.recent}</td>
        </tr>
      )
    }

    return (
          <tbody>
            {this.props.data.map(createTableRow)}
          </tbody>
    )
  }


}

export default TableRow
