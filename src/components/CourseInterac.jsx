import { Fragment } from 'react';
import * as courseInteraction from '../utils/courseInteraction';

export default function CourseInteract(props) {
  let course = courseInteraction.load();
  return (
    <Fragment>
      <h1>Course Interact for {course.externalcode}</h1>
      <button onClick={courseInteraction.leave}>Go back</button>
    </Fragment>
  );
}