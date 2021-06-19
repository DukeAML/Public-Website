import React from 'react';

// type prop: "github", "linkedin", "", etc...

/* must make corresponding css class (e.g. github-icon, mail-icon...)
in app.scss for each new iconb*/

function Icon(props) {
  return (
    <a
      className={`${props.type}-icon button`}
      style={{ float: 'left' }}
      target={props.type === 'mail' ? '' : '_blank'}
      href={props.href}></a>
  );
}

export default Icon;
