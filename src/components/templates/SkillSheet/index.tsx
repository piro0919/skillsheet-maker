import Aside, { AsideProps } from 'components/organisms/Aside';
import Main, { MainProps } from 'components/organisms/Main';
import { motion } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import React, {
  ComponentPropsWithoutRef, FC, useCallback, useMemo, useState,
} from 'react';
import './style.module.scss';
import { BsArrowLeftRight } from 'react-icons/bs';

export type SkillSheetProps = Pick<AsideProps, 'age' | 'background' | 'furigana' | 'name' | 'qualifications' | 'stations'> & Pick<MainProps, 'businesses' | 'fields' | 'pr' | 'projects' | 'skills'>;

const SkillSheet: FC<SkillSheetProps> = ({
  age,
  background, businesses, fields, furigana, name, pr, projects, qualifications, skills, stations,
}) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo<ComponentPropsWithoutRef<'button'>['style'] | ComponentPropsWithoutRef<'div'>['style']>(() => ({
    height: windowHeight,
  }), [windowHeight]);
  const [openAside, setOpenAside] = useState(true);
  const handleTap = useCallback(() => {
    setOpenAside((prevOpenAside) => !prevOpenAside);
  }, []);
  const asideWidth = useMemo(() => (openAside ? '240px' : '0px'), [openAside]);

  return (
    <div style={style}>
      <motion.div animate={{ width: asideWidth }} initial={false} styleName="aside-wrapper">
        <div styleName="aside-wrapper2">
          <Aside
            age={age}
            background={background}
            furigana={furigana}
            name={name}
            qualifications={qualifications}
            stations={stations}
          />
        </div>
      </motion.div>
      <motion.button animate={{ marginLeft: asideWidth }} initial={false} onTap={handleTap} style={style} styleName="button">
        <BsArrowLeftRight styleName="icon" />
      </motion.button>
      <motion.div animate={{ marginLeft: asideWidth }} initial={false} styleName="main-wrapper">
        <Main businesses={businesses} fields={fields} pr={pr} projects={projects} skills={skills} />
      </motion.div>
    </div>
  );
};

export default SkillSheet;
