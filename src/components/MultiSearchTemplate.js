import React from 'react'; 
import './MultiSearchTemplate.css'


const MultiSearchTemplate = ({form, children}) => {
  return(
    <div className="multisearch-template">
      <h1 className="title">Country/Capital Data Multi-Search Service</h1>
      <div className="forms-wrap">        
        {form}
      </div>
      <div className="list-wrap">
        {children}
      </div>
    </div>
  )
}

export default MultiSearchTemplate;