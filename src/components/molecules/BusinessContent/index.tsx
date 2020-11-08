import React, { ComponentPropsWithoutRef, FC } from 'react';
import './style.module.scss';

export type BusinessContentProps = {
  heading: ComponentPropsWithoutRef<'h3'>['children']
};

const BusinessContent: FC<BusinessContentProps> = ({ children, heading }) => (
  <div>
    <h3>
      {heading}
    </h3>
    <div styleName="children-wrapper">
      {children}
    </div>
  </div>
);

export default BusinessContent;
