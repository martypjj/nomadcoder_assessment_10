const clock=document.getElementById("clock");

function setClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,"0");
    const mm = String(now.getMinutes()).padStart(2,"0");
    const ss = String(now.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hh} : ${mm} : ${ss}`;
    //console.log(hh.padStart(2, "0"), mm.padStart(2, "0"), ss.padStart(2, "0"));
}

setClock();
setInterval(setClock, 1000);
 