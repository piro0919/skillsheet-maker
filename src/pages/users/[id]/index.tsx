import { getUsers, getUsersId } from 'api';
import BusinessContent from 'components/molecules/BusinessContent';
import Labels from 'components/molecules/Labels';
import RoleAndScale from 'components/molecules/RoleAndScale';
import SkillSheet, { SkillSheetProps } from 'components/templates/SkillSheet';
import dayjs from 'dayjs';
import {
  GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage,
} from 'next';
import React, { useMemo } from 'react';

export type IdProps = InferGetStaticPropsType<typeof getStaticProps>;

const Id: NextPage<IdProps> = ({
  user: {
    background,
    birthday,
    businesses,
    fields, furigana, name, pr, projects: userProjects, qualifications, skills, stations,
  },
}) => {
  const age = useMemo<SkillSheetProps['age']>(() => dayjs().diff(birthday, 'year'), [birthday]);
  const projects = useMemo<SkillSheetProps['projects']>(() => userProjects.map(({
    content, dbs, end, languages, name: userProjectName, role, scale, servers, start,
  }) => {
    const dbItems = dbs.map((children) => ({
      children,
      key: children,
    }));
    const serverOsItems = servers.map((children) => ({
      children,
      key: children,
    }));
    const usedLanguageItems = languages.map((children) => ({
      children,
      key: children,
    }));

    return ({
      businessContent: <BusinessContent heading={userProjectName}>{content}</BusinessContent>,
      db: <Labels items={dbItems} />,
      period: `${dayjs(start).format('YYYY.MM')} 〜 ${dayjs(end).format('YYYY.MM')}`,
      roleAndScale: <RoleAndScale role={role} scale={scale} />,
      serverOs: <Labels items={serverOsItems} />,
      usedLanguage: <Labels items={usedLanguageItems} />,
    });
  }), [userProjects]);

  return (
    <SkillSheet
      age={age}
      background={background}
      businesses={businesses}
      fields={fields}
      furigana={furigana}
      name={name}
      pr={pr}
      projects={projects}
      qualifications={qualifications}
      skills={skills}
      stations={stations}
    />
  );
};

export const getStaticProps: GetStaticProps<{ user: ReturnType<PromiseType<ReturnType<typeof getUsersId>>['data']> }> = async ({ params: { id } }) => {
  const initialUser = {
    background: '',
    birthday: '',
    businesses: [],
    fields: [],
    furigana: '',
    name: '',
    operation: '',
    pr: '',
    projects: [],
    qualifications: [],
    sex: '',
    skills: [],
    stations: [],
  };

  if (typeof id !== 'string') {
    return {
      props: {
        user: initialUser,
      },
    };
  }

  const documentSnapShot = await getUsersId(id);
  const { exists } = documentSnapShot;

  if (!exists) {
    return {
      props: {
        user: initialUser,
      },
    };
  }

  const user = documentSnapShot.data();

  return ({
    props: {
      user,
    },
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { docs } = await getUsers();
  const paths = docs.map(({ id }) => ({ params: { id } }));

  return {
    fallback: true,
    paths,
  };
};

export default Id;
