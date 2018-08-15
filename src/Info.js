import React from 'react';

const displayList = ({ index, info }) => {
  return(
  <tr>
    <td>{info.first_name}</td>
    <td>{info.last_name}</td>
    <td>{info.email}</td>
  </tr>
  )
}

export default displayList