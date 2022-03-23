function vidu(BIEN) {
    BIEN();
}

function callback() {
    console.log("Hello World!!!");
}
vidu(callback);

console.log("--------------------------");

function taolao1(fct,tl2) {
    tl2();
}

function taolao2(tl2,tl3) {
    tl3();
}
function taolao3(tl3, tl4) {
    tl4();
}
function taolao4(){
    console.log("something");
}
function taolao5() {
    console.log("big");
}
taolao1(taolao2(taolao3(taolao5,taolao4),taolao5),taolao4);