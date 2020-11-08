import React, { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import './style.module.scss';

type Item = Pick<ComponentPropsWithoutRef<'dl'>, 'key'> & {
  description: ComponentPropsWithoutRef<'dd'>['children'];
  term: ComponentPropsWithoutRef<'dt'>['children'];
};

export type DefinitionListProps = {
  items: Item[];
};

const DefinitionList: FC<DefinitionListProps> = ({ items }) => {
  const children = useMemo<ComponentPropsWithoutRef<'dl'>['children']>(() => items.map(({ description, key, term }) => (
    <div key={key}>
      <dt styleName="term">{term}</dt>
      <dd styleName="description">{description}</dd>
    </div>
  )), [items]);

  return (
    <dl styleName="list">
      {children}
    </dl>
  );
};

export default DefinitionList;
