let boards = [
  {
    imgUrl: '/img/board.png',
    title: 'Board 1',
    desc: 'Board 1 description',
    stars: 3,
    price: 350
  },
  {
    imgUrl: '/img/thumb1.png',
    title: 'Board 2',
    desc: 'Board 2 description',
    stars: 2,
    price: 250
  },
  {
    imgUrl: '/img/thumb2.png',
    title: 'Board 2',
    desc: 'Board 2 description',
    stars: 2,
    price: 250
  },
  {
    imgUrl: '/img/thumb3.png',
    title: 'Board 2',
    desc: 'Board 2 description',
    stars: 2,
    price: 250
  },
  {
    imgUrl: '/img/thumb4.png',
    title: 'Board 2',
    desc: 'Board 2 description',
    stars: 2,
    price: 250
  }
];

let starsHTML = (starsCount) => {
  return (
    `<span class="fa fa-star checked" data-rating="1"></span>
    <span class="fa fa-star checked" data-rating="2"></span>
    <span class="fa fa-star checked" data-rating="3"></span>
    <span class="fa fa-star checked" data-rating="4"></span>
    <span class="fa fa-star-o" data-rating="5"></span>
  `);
}

// We use `` to interpolate string
let boardHTML = (board) => {
  return (
  `<div class="row justify-content-center boards" style="margin-bottom: 350px; "> 
    <div class="col-md-4 col-sm-6"  style="background-color:#fff; height: 100%">        
      <img src="${board.imgUrl}" class="img-responsive" alt="Boards" width="300px" height="409px" style= "margin-left:-15px;"> 
    </div>	
    
    <div class="col-md-4 col-sm-6" style="background-color:#fff;">  
      <h5>JR Surfboards The Donny Stoker <br /> Yellow/Green Rail Fade</h5>

      <div style="color: grey;">
        <div class="star-rating">
          ${starsHTML(board.stars)}
        </div>
        
        <br>
        
        <p>${board.desc}</p>
        
        <h4 class="price">$499.99</h4>
        
        <button class="buy-now">BUY NOW</button>
      </div>
    </div>	
  </div>
  `);
}

window.onload = () => {
  document.getElementById('boards').onclick = () => {
    let boardsPageHTML = '<div id="boardsPage">';
    boardsPageHTML += '<div class="container">';
    
    boards.forEach((board) => {
      boardsPageHTML += boardHTML(board);
    });
    boardsPageHTML += '</div></div>';
    
    document.querySelector('#componentMount').innerHTML = boardsPageHTML;
  };
};