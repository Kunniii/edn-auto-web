export function enter(course) {
  localStorage.setItem("selectedCourse", JSON.stringify(course));
  window.location.reload();
}

export function load() {
  let c = localStorage.getItem("selectedCourse");
  c = JSON.parse(c);
  return c;
}

export function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("selectedSlot");
  localStorage.removeItem("selectedCourse");
  localStorage.removeItem("activities");
  window.location.reload();
}

export function leave() {
  if (slotSelected()) {
    localStorage.removeItem("selectedSlot");
  } else {
    localStorage.removeItem("selectedCourse");
    localStorage.removeItem("activities");
  }
  window.location.reload();
}

export function chooseAction() {}

export function courseSelected() {
  let c = localStorage.getItem("selectedCourse");
  return c ? true : false;
}

export function slotSelected() {
  let s = localStorage.getItem("selectedSlot");
  return s ? true : false;
}

export function selectSlot(data) {
  localStorage.setItem("selectedSlot", JSON.stringify(data));
  window.location.reload();
}

export function processSessions(data) {
  let my_session = {};
  for (let session of data.data.sessions) {
    my_session[session.group] = { id: session.sessionId, questions: [] };
    for (let section of session.sections) {
      let activities = [];
      for (let activity of section.activities) {
        let newAttr = {
          isIndieGraded: false,
          isGroupGraded: false,
          isVoted: false,
          isAnswered: false,
          sectionId: section.id,
        };
        activity = { ...activity, ...newAttr };
        activities.push(activity);
      }
      my_session[session.group].questions = activities;
    }
  }
  localStorage.setItem("sessions", JSON.stringify(my_session));
}
