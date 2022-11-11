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
  window.location.reload();
}

export function chooseAction() {

}

export function courseSelected() {
  let c = localStorage.getItem("selectedCourse");
  return c ? true : false
}
