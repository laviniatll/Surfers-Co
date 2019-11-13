let mainPageName = 'mainPage';

let loadPartial = (componentName) => {
  fetch('components/' + componentName + '.html').then(result => result.text()).then((textResult) => {
    // Remove selected class from all the top buttons
    document.querySelectorAll('#top-buttons > li').forEach((listItem) => {
      listItem.classList.remove('selected');
    });
  
    // Add selected class to the clicked button, if it's not the main page
    if (componentName !== mainPageName) {
      document.getElementById(componentName).classList.add('selected');
    }
    
    // Load component data
    // document.getElementById("componentMount").innerHTML = textResult;
    document.querySelector('#componentMount').innerHTML = textResult;
  });
};

let boards = [
  {
    imgUrl: 'img/boards.jpg',
    title: 'Board title',
    stars: 3,
    desc: 'This is the best board',
    price: 350
  }, 
  {
    imgUrl: 'img/boards2.jpg',
    title: 'Board title 2',
    stars: 2,
    desc: 'This is not the best board',
    price: 250
  }
];

window.onload = () => {
  // Initialize with the main page
  loadPartial(mainPageName);
}