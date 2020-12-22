import React from 'react';

const MenuItem = ({text, status}) =>{
  return(
    <div>
      <a className={status}>
        {text}
      </a>
    </div>
  )
}

export default MenuItem;