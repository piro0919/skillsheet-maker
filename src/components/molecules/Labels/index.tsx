import Label, { LabelProps } from 'components/atoms/Label';
import React, {
  ComponentPropsWithoutRef, FC, useMemo,
} from 'react';
import './style.module.scss';

export type Item = Pick<ComponentPropsWithoutRef<'div'>, 'key'> & Pick<LabelProps, 'children'>;

export type LabelsProps = {
  items: Item[];
};

const Labels: FC<LabelsProps> = ({ items }) => {
  const children = useMemo<ComponentPropsWithoutRef<'div'>['children']>(() => items.map(({ children: itemChildren, key }) => (
    <div key={key} styleName="label-wrapper">
      <Label>
        {itemChildren}
      </Label>
    </div>
  )), [items]);

  return (
    <div styleName="wrapper">
      {children}
    </div>
  );
};

export default Labels;
