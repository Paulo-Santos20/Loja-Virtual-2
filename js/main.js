let span = document.getElementsByTagName('span_container');
let product = document.getElementsByClassName('product');
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
let mob_view = window.matchMedia("(max-width: 768px)");

if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (l > maxMove) {
    l = 0;
  }
  for (const i of product) {
    i.style.left = '-' + l + '%';
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l < 0) {
    l = maxMove;
  }
  for (const i of product) {
    i.style.left = '-' + l + '%';
  }
};

span[1].onclick = () => {
  right_mover();
};

span[0].onclick = () => {
  left_mover();
};
