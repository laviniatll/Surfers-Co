
let loadPartial = (partialName) => {
  fetch(partialName + ".html").then(result => result.text()).then((textResult) => {
    document.write(textResult);
    // get partial div
    // thatDiv.innerHTML = textResult
  });
};