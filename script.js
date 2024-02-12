const heart = document.getElementById('heart');
const greeting = document.getElementById('greeting');
const column = document.getElementById('column');

let firstClick = true;

heart.addEventListener('click', () => {
  if (firstClick) {
    greeting.classList.toggle('hidden');
    greeting.style.animation = 'op 2s ease-out';
    greeting.style.height = '500px';
    column.style.background = '#ffffff';
    column.style.boxShadow = '20px 20px 50px #ffcccc';
    greeting.style.paddingBottom = '100px';
	greeting.style.display = 'flex';
	greeting.style.flexDirection = 'column';
	greeting.style.alignItems = 'center';
  } else {
    // Відміна дій, що відбуваються при другому кліку
	greeting.style.transition = 'all 3s ease-out'
    greeting.classList.add('hidden');
    greeting.style.animation = 'op 3s ease-out reverse'; // зміна напрямку анімації на протилежний
    greeting.style.height = '0';
    column.style.background = 'initial';
    column.style.boxShadow = 'initial';	
    greeting.style.paddingBottom = 'initial';
	greeting.style.display = 'flex';
	greeting.style.flexDirection = 'column';
	
  }
  firstClick = !firstClick; // Зміна стану на протилежний
});

heart.addEventListener('mouseover', () => {
  heart.style.animation = 'beat 1.5s ease infinite alternate';
});

heart.addEventListener('mouseout', () => {
  heart.style.animation = '';
});

function createHeart() {
  const heartContainer = document.getElementById('heart-container');
  const heart = document.createElement('div');
  heart.classList.add('heart-new');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heartContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 12000); // час життя сердечка в мілісекундах
}

setInterval(createHeart, 600); // додавання сердечок кожну секунду

function createDot() {
  const dotContainer = document.getElementById('dot-container');
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.left = Math.random() * window.innerWidth + 'px';
  dot.style.position = 'absolute';
  dot.style.opacity = '1';
  dot.style.height = '5px';
  dot.style.width = '5px';
  dot.style.background = '#ffffff';
  dot.style.animation = 'float 10s linear infinite';
  dotContainer.appendChild(dot);
  setTimeout(() => {
    dot.remove();
  }, 10000); // час життя точок в мілісекундах
}

setInterval(createDot, 500); // додавання точок кожну 0.5 секунди