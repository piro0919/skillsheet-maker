import React, { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import './style.module.scss';

type Item = Pick<ComponentPropsWithoutRef<'li'>, 'children' | 'key'>;

export type UnorderedListProps = {
  items: Item[];
};

const UnorderedList: FC<UnorderedListProps> = ({ items }) => {
  const children = useMemo<ComponentPropsWithoutRef<'ul'>['children']>(() => items.map(({ children: itemChildren, key }) => (
    <li key={key}>
      {itemChildren}
    </li>
  )), [items]);

  return (
    <ul styleName="list">
      {children}
    </ul>
  );
};

export default UnorderedList;
