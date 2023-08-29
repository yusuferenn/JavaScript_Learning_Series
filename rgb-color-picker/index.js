const rn1 = document.getElementById("rn1")
const rn2 = document.getElementById("rn2")
const rn3 = document.getElementById("rn3")

const lb1 = document.getElementById("lb1")
const lb2 = document.getElementById("lb2")
const lb3 = document.getElementById("lb3")


function bg() {
    const r = rn1.value;
    const g = rn2.value;
    const b = rn3.value;

    lb1.innerHTML = r
    lb2.innerHTML = g
    lb3.innerHTML = b

    const rgbColor = `rgb(${r}, ${g}, ${b})`

    document.body.style.backgroundColor = rgbColor
}


function animation(){
    document.body.style.transition = "background-color 0.5s ease"
    bg()
    setTimeout(() => {
        document.body.style.transition = "";
    }, 1000)
}

rn1.addEventListener("input", animation)
rn2.addEventListener("input", animation)
rn3.addEventListener("input", animation)

/*
rn1.addEventListener("input", bg)
rn2.addEventListener("input", bg)
rn3.addEventListener("input", bg)
*/


/*
function updateBackgroundColor() {
    const r = rn1.value;
    const g = rn2.value;
    const b = rn3.value;

    const rgbColor = `rgb(${r},${g},${b})`;

    lb1.innerHTML = r;
    lb2.innerHTML = g;
    lb3.innerHTML = b;

    lb1.style.backgroundColor = rgbColor;
    document.body.style.backgroundColor = rgbColor; // Bu satır ile arka plan rengini değiştiriyoruz
}

rn1.addEventListener('input', updateBackgroundColor);
rn2.addEventListener('input', updateBackgroundColor);
rn3.addEventListener('input', updateBackgroundColor);
*/

/*

    //Kendimece yaptığım 
    rn1.addEventListener('input', e => {                //change yapınca butonu bıraktığın an değeri gösterir. İnput anlık bilgi verilmesini sağlar
    lb1.innerHTML =  e.target.value
    
    } ) 

    rn2.addEventListener("input", e => {
    lb2.innerHTML = e.target.value

    })

    rn3.addEventListener("input", e => {
    lb3.innerHTML = e.target.value

    })


*/
