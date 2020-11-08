import DefinitionList from 'components/molecules/DefinitionList';
import Labels, { LabelsProps } from 'components/molecules/Labels';
import ProjectTable, { ProjectTableProps } from 'components/molecules/ProjectTable';
import UnorderedList, { UnorderedListProps } from 'components/molecules/UnorderedList';
import React, { FC, useMemo } from 'react';
import Article from '../Article';
import './style.module.scss';

export type MainProps = Pick<ProjectTableProps, 'projects'> & {
  businesses: string[];
  fields: string[];
  pr: string;
  skills: string[];
};

const Main: FC<MainProps> = ({
  businesses, fields, pr, projects, skills,
}) => {
  const fieldItems = useMemo<UnorderedListProps['items']>(() => fields.map((children) => ({
    children,
    key: children,
  })), [fields]);
  const businessItems = useMemo<UnorderedListProps['items']>(() => businesses.map((children) => ({
    children,
    key: children,
  })), [businesses]);
  const technologyItems = useMemo<LabelsProps['items']>(() => skills.map((children) => ({
    children,
    key: children,
  })), [skills]);
  const skillItems = useMemo(() => [{
    description: <UnorderedList items={fieldItems} />,
    term: '得意分野',
  }, {
    description: <UnorderedList items={businessItems} />,
    term: '得意業務',
  }, {
    description: <Labels items={technologyItems} />,
    term: '得意技術',
  }].map(({ description, term }) => ({
    description,
    key: term,
    term,
  })), [businessItems, fieldItems, technologyItems]);

  return (
    <main styleName="main">
      <div>
        <Article heading="スキル">
          <DefinitionList items={skillItems} />
        </Article>
      </div>
      <div>
        <Article heading="自己PR">
          <p styleName="pr">
            {pr}
          </p>
        </Article>
      </div>
      <div>
        <Article heading="プロジェクト">
          <ProjectTable projects={projects} />
        </Article>
      </div>
    </main>
  );
};

export default Main;
