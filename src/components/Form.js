import React, {Component} from 'react'; 
import './Form.css'

class Form extends Component{
  render(){
    const {stHolder} = this.props;
    return(
      <input className="input-filter" placeholder={stHolder} />
    )
  }
}

export default Form;