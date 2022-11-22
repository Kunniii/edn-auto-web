export function enter(course) {
  localStorage.setItem("selectedCourse", JSON.stringify(course));
  window.location.reload();
}

export function load() {
  let c = localStorage.getItem("selectedCourse");
  c = JSON.parse(c);
  return c;
}

export function leave() {
  localStorage.removeItem("selectedCourse");
  localStorage.removeItem("activities");
  window.location.reload();
}

export function chooseAction() {

}

export function courseSelected() {
  let c = localStorage.getItem("selectedCourse");
  return c ? true : false
}

export function processSessions(data) {
  let activities = []
  for (let session of data.data.sessions) {
    for (let section of session.sections) {
      for (let activity of section.activities) {
        let newAttr = {
          isIndieGraded: false,
          isGroupGraded: false,
          isVoted: false,
          isAnswered: false,
          sessionId: session.sessionId,
          sectionId: section.id
        }
        activity = {...activity, ...newAttr}
        activities.push(activity);
      }
    }
  }
  localStorage.setItem("activities",JSON.stringify(activities));
}