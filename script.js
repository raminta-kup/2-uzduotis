/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn = document.querySelector("#btn__element");
const btnState = document.querySelector("#btn__state");
let clicks = 0;

function countPresses() {
    clicks += 1;
    btnState.innerHTML = clicks;
}

btn.addEventListener("click", countPresses);