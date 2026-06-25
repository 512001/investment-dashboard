
function filterTable(){
let input=document.getElementById('search').value.toLowerCase();
let rows=document.querySelectorAll('table tbody tr');
rows.forEach(r=>{
r.style.display=r.innerText.toLowerCase().includes(input)?'':'none';
});
}
