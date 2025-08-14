let index = 0
const left = document.getElementById('arrow-left');
const right = document.getElementById('arrow-right');
const state4 = document.getElementById('state-1-1');
const state3 = document.getElementById('state-1-2');
const state2 = document.getElementById('state-1-3');
const state1 = document.getElementById('state-1-4');
const bar = document.getElementById('navigation');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const home = document.getElementById('home');
const credits = document.getElementById('credits');
const button6 = document.getElementById('button-6');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const navi = document.getElementById('horizontal');
const r = new rive.Rive({
    src: 'Rive.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
    stateMachines: 'Button',
    fit: rive.Fit.cover,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      const inputs = r.stateMachineInputs('Button');
      const back = inputs.find(i => i.name === 'Back');
      const next = inputs.find(i => i.name === 'Next');
      const trigger1 = inputs.find(i => i.name === 'Trigger 1');
      const trigger2 = inputs.find(i => i.name === 'Trigger 2');
      const trigger3 = inputs.find(i => i.name === 'Trigger 3');
      const trigger4 = inputs.find(i => i.name === 'Trigger 4');
      left.onclick = (e) => {
        e.preventDefault();
        back.fire()
        if (index===0) {
          index=3,
          bar.scrollTo({
            left: 322.45*index,
            behavior: 'smooth'
          });
        } else {
          index = index - 1,
          bar.scrollTo({
            left: 322.45*index,
            behavior: 'smooth'
          });
        }
      }
      right.onclick = (e) => {
        e.preventDefault();
        next.fire()
        if (index===3) {
          index=0,
          bar.scrollTo({
            left: 322.45*index,
            behavior: 'smooth'
          });
        } else {
          index = index + 1,
          bar.scrollTo({
            left: 322.45*index,
            behavior: 'smooth'
          });
        }
      }      
      state1.onclick = (e) => {
        e.preventDefault();
        trigger1.fire()
        index = 0
        bar.scrollTo({
          left: 322.45*index,
          behavior: 'smooth'
        });
      }
      state2.onclick = (e) => {
        e.preventDefault();
        trigger2.fire()
        index = 1
        bar.scrollTo({
          left: 322.45*index,
          behavior: 'smooth'
        });
        
      }
      state3.onclick = (e) => {
        e.preventDefault();
        trigger3.fire()
        index = 2
        bar.scrollTo({
          left: 322.45*index,
          behavior: 'smooth'
        });
      }
      state4.onclick = (e) => {
        e.preventDefault();
        trigger4.fire()
        index = 3
        bar.scrollTo({
          left: 322.45*index,
          behavior: 'smooth'
        });
      }
    },
});

window.onload = () => {
  bar.scrollTo({
    left: 322.45 * index
  });
};

button1.onclick = function () {
  navi.scrollTo({ top: 1950, behavior: 'smooth' });
};

button2.onclick = function () {
  navi.scrollTo({ top: 2950, behavior: 'smooth' });
};

card1.onclick = function () {
  navi.scrollTo({ top: 2950, behavior: 'smooth' });
};

card2.onclick = function () {
  navi.scrollTo({ top: 3450, behavior: 'smooth' });
};

card3.onclick = function () {
  navi.scrollTo({ top: 4000, behavior: 'smooth' });
};

card4.onclick = function () {
  navi.scrollTo({ top: 4500, behavior: 'smooth' });
};

credits.onclick = function () {
  navi.scrollTo({ top: 0, left: 2000 });
};

home.onclick = function () {
  navi.scrollTo({ top: 0, left: 0 });
};

button6.onclick = function () {
  navi.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video-1");

  // Tự động phát/tạm dừng khi cuộn
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && video.paused && !video.clicked) {
          video.play();
        } else if (!entry.isIntersecting && !video.clicked) {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(video);

  // Xử lý click để phát/tạm dừng
  video.clicked = false;
  video.addEventListener("click", function () {
    if (video.paused) {
      video.clicked = true;
      video.play();
    } else {
      video.clicked = false;
      video.pause();
    }
  });
});