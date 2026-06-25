
function calcSIP(){
let p=parseFloat(document.getElementById('sip').value)||0;
let r=(parseFloat(document.getElementById('rate').value)||0)/1200;
let n=(parseFloat(document.getElementById('years').value)||0)*12;
let fv=p*((Math.pow(1+r,n)-1)/r)*(1+r);
document.getElementById('result').innerText='Estimated Corpus: ₹'+fv.toFixed(0);
}
