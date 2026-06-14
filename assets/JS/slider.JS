const slides = document.querySelectorAll('.slide');
let current = 0;
const switchAt = 3000;

function next() {
  const prev = current;
  current = (current + 1) % slides.length;

  // 次の画像をズームしながら表示
  slides[current].classList.add('active');
  void slides[current].offsetWidth;
  slides[current].classList.add('zoomin');

  // 前の画像はフェードアウトしてから zoomin を外す
  slides[prev].classList.remove('active');
  setTimeout(() => {
    slides[prev].classList.remove('zoomin');
  }, 1000); // CSSのtransition: opacity の秒数に合わせる

  setTimeout(next, switchAt);
}

slides[0].classList.add('active', 'zoomin');
setTimeout(next, switchAt);




