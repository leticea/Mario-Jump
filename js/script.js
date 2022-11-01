const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {

    mario.classList.add('jump');

    // [remove a classe do jump para que o pulo possa ser efetuado novamente ao clicar no botão]
    setTimeout(() => {

        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    // [pegando o valor da propriedade do deslocamento esquerdo do cano]
    const pipePosition =  pipe.offsetLeft;
    // [pegando o valor da propriedade bottom]
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudsPosition = clouds.offsetLeft;

    // [condição pro mario encostar no cano e acabar o jogo]
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 54) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '30px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);