import React, { ComponentPropsWithoutRef, FC } from 'react';

export type RoleAndScaleProps = {
  role: ComponentPropsWithoutRef<'div'>['children']
  scale: number
};

const RoleAndScale: FC<RoleAndScaleProps> = ({ role, scale }) => (
  <div>
    {role}
    <br />
    {`チーム：${scale}名`}
  </div>
);

export default RoleAndScale;
