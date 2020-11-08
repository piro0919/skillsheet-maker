import React, { ComponentPropsWithoutRef, FC } from 'react';
import './style.module.scss';

export type LabelProps = Pick<ComponentPropsWithoutRef<'div'>, 'children'>;

const Label: FC<LabelProps> = ({ children }) => (
  <div styleName="label">
    {children}
  </div>
);

export default Label;
