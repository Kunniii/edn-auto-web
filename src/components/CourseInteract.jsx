import { Fragment } from 'react';
import * as courseInteraction from '../utils/courseInteraction';
import Actions from './Actions';
import CourseInfo from './CourseInfo';

export default function CourseInteract(props) {
  let course = courseInteraction.load();
  return (
    <Fragment>
      <h1>Course Interact for {course.externalcode}</h1>
      <CourseInfo />
      <Actions />
      <button onClick={courseInteraction.leave}>Go back</button>
    </Fragment>
  );
}