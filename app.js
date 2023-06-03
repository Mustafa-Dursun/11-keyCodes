const birinci = document.querySelector('.key');
const ikinci = document.querySelector('.keyCode');
const ucuncu = document.querySelector('.code');


window.addEventListener('keydown', run);

function run(e) {

    e.key === " " ? birinci.innerText = "Space" : birinci.innerText = e.key;
    
    // if(e.key === " "){
    //     birinci.innerText = "Space"
    // }else{
    //     birinci.innerText = e.key;
    // }

    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);

    ikinci.innerText = e.keyCode;
    ucuncu.innerText = e.code;
}
