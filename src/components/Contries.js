import React, {Component} from 'react';

const ContryItem = (contryObj) => {

  return (
    <tr>
      <td>{contryObj.contry}</td>
      <td>{contryObj.capital}</td>
      <td>{contryObj.region}</td>
      <td>{contryObj.subregion}</td>
      <td>{contryObj.latitude}</td>
      <td>{contryObj.longtitude}</td>
    </tr>

  )
}

class Contries extends Component{
  render(){
    const { contries } = this.props;
    console.log( contries );
    const contriList = contries.map(
      contry => (
        <ContryItem contryObj={contry} />
      )
    )
    return(
      <table>
        <th>
          <td>Contry</td>
          <td>Capital</td>
          <td>Region</td>
          <td>Subregion</td>
          <td>Latitude</td>
          <td>Longitude</td>
        </th>
        {contriList}
      </table>      
    )
  }
}


export default Contries;




