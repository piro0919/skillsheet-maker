import Heading2, { Heading2Props } from 'components/atoms/Heading2';
import React, { FC } from 'react';
import './style.module.scss';

export type ArticleProps = {
  heading: Heading2Props['children']
};

const Article: FC<ArticleProps> = ({ children, heading }) => (
  <article styleName="article">
    <Heading2>
      {heading}
    </Heading2>
    <div>
      {children}
    </div>
  </article>
);

export default Article;
