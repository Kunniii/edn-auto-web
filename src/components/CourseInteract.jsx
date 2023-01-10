import { Fragment } from 'react';
import * as courseInteraction from '../utils/courseInteraction';
import CourseInfo from './CourseInfo';

export default function CourseInteract(props) {
  let course = courseInteraction.load();
  return (
    <Fragment>
      <h1 className='text-center font-bold text-2xl'> - {course.externalcode} - </h1>
      <hr className='w-[80vw] mx-auto mt-2 pb-5' />
      <CourseInfo />
    </Fragment>
  );
}