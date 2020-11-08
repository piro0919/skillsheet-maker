import Heading1 from 'components/atoms/Heading1';
import useWindowSize from 'hooks/useWindowSize';
import React, { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import './style.module.scss';

const Top: FC = () => {
  const { windowHeight } = useWindowSize();
  const style = useMemo<ComponentPropsWithoutRef<'div'>['style']>(() => ({
    height: windowHeight,
  }), [windowHeight]);

  return (
    <div style={style} styleName="wrapper">
      <div>
        <Heading1>
          オンラインスキルシートメーカー
        </Heading1>
      </div>
    </div>
  );
};

export default Top;
