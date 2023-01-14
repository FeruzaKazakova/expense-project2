import React from 'react';

export const Container = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};