const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

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

    // [condição pro mario encostar no cano e acabar o jogo]
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 52) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }

}, 10);

document.addEventListener('keydown', jump);