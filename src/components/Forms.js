import React, {Component } from 'react';
import Form from './Form'

class Forms extends Component{  

  render(){
    const {filters} = this.props;
    const filterList = filters.map(
      ({stHolder, id}) => (
        <Form stHolder={stHolder} key={id} />
      )
    )

    return(
      <div className="forms">
        {filterList}
      </div>
    )
  }
}

export default Forms;