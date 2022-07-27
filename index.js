const timing = document.querySelector('#timing');
timing.innerHTML = changeTime(0);

const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const resetar = document.querySelector('#resetar');

let segundos = 0;
let timer;
let rodando = false;

function changeTime(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'gmt',
    });
}

function timerCount(){
    if (!rodando){
    timer = setInterval(() => {
        segundos++;
        timing.innerHTML = changeTime(segundos)
    }, 1000);
    rodando = true;
}
}

iniciar.addEventListener('click', ()=>{
    timerCount();
    timing.style.color = '#000000'
});

pausar.addEventListener('click', () => {
    rodando = false;
    clearInterval(timer);
    iniciar.addEventListener('click', timerCount)
    if (segundos !== 0) {
        timing.style.color = '#e6e6e6'
    }
})

resetar.addEventListener('click', () => {
    rodando = false;
    clearInterval(timer);
    segundos = 0;
    timing.innerHTML = changeTime(0);
    timing.style.color = '#000000'
    iniciar.addEventListener('click', timerCount);
})