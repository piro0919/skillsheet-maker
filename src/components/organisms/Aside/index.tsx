import Heading1 from 'components/atoms/Heading1';
import DefinitionList, { DefinitionListProps } from 'components/molecules/DefinitionList';
import UnorderedList, { UnorderedListProps } from 'components/molecules/UnorderedList';
import React, { FC, useMemo } from 'react';
import './style.module.scss';

export type AsideProps = {
  age: number;
  background: string;
  furigana: string;
  name: string;
  qualifications: string[];
  stations: string[];
};

const Aside: FC<AsideProps> = ({
  age, background, furigana, name, qualifications, stations,
}) => {
  const qualificationItems = useMemo<UnorderedListProps['items']>(() => qualifications.map((children) => ({
    children,
    key: children,
  })), [qualifications]);
  const stationItems = useMemo<UnorderedListProps['items']>(() => stations.map((children) => ({
    children,
    key: children,
  })), [stations]);
  const items = useMemo<DefinitionListProps['items']>(() => [
    {
      description: `${age}歳`,
      term: '年齢',
    },
    {
      description: '男性',
      term: '性別',
    },
    {
      description: (
        <UnorderedList items={qualificationItems} />
      ),
      term: '資格',
    },
    {
      description: background,
      term: '学歴',
    },
    {
      description: '即時〜',
      term: '稼働',
    }, {
      description: <UnorderedList items={stationItems} />,
      term: '最寄り駅',
    },
  ].map(({ description, term }) => ({
    description,
    key: term,
    term,
  })), [age, background, qualificationItems, stationItems]);

  return (
    <aside styleName="aside">
      <Heading1>
        <ruby>
          {name}
          <rt>
            {furigana}
          </rt>
        </ruby>
      </Heading1>
      <div styleName="definition-list-wrapper">
        <DefinitionList items={items} />
      </div>
    </aside>
  );
};

export default Aside;
