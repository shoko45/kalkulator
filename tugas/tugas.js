const btn = document.querySelector ('#btn-hitung')
const txt_Panjang =document.querySelector('#Panjang')
const Keliling = document.querySelector('.Keliling')
const txt_Lebar = document.querySelector('#Lebar')

btn.addEventListener('click',function(){
let Panjang = parseFloat(txt_Panjang.value)
let Lebar = parseFloat(txt_Lebar.value)
Keliling.innerHTML = Panjang + Lebar + Panjang + Lebar
});