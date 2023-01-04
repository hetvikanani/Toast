const createToast = (type, title, text, duration) => {
  //box
  const toastElem = document.createElement("div");
  toastElem.classList.add("toast");
  if (type) {
    toastElem.classList.add(type);
  }

  setTimeout(() => {
    toastElem.classList.add("active");
  }, 1);

  //heading
  const titleElem = document.createElement("p");
  titleElem.classList.add("t-title");
  titleElem.innerHTML = title;
  toastElem.append(titleElem);

  //text
  const textElement = document.createElement("p");
  textElement.classList.add("t-text");
  textElement.innerHTML = text;
  toastElem.append(textElement);

  let toastContainer = document.querySelector(".toast-container");
  toastContainer.appendChild(toastElem);

  //duration
  if (duration > 0) {
    setTimeout(() => {
      toastElem.classList.remove("active");
    }, duration);
  } else if (duration === null) {
    setTimeout(() => {
      toastElem.classList.remove("active");
    }, 5000);
  }
};

createToast(
  "success",
  "success heading",
  "Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy",
  3000
);
createToast("warning", "warning heading", "warning text...", 5000);
createToast("bug", "bug heading", "bug text...", 2000);
createToast("system", "system heading", "system text...", 7000);
