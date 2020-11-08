import React, { FC } from 'react';
import './style.module.scss';

const Heading1: FC = ({ children }) => (
  <h1 styleName="heading1">
    {children}
  </h1>
);

export default Heading1;
