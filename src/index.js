 const inputValue = document.querySelector('#inputValue')
 const minusButton = document.querySelector('#minusIcon')
 const plusButton = document.querySelector('#plusIcon')
 const maker = document.querySelector('.maker');
 const taker = document.querySelector('.taker')
 const cal = document.querySelector('.cal')
 
let feeType ;
let feeResult;


 window.onload =()=>{
    inputValue.value = 1
 }

 minusButton.addEventListener('click',()=>{
    inputValue.value--;
 })

 plusButton.addEventListener('click',(e)=>{
    inputValue.value ++;
 })

 inputValue.addEventListener('change',()=>{
    console.log('valueChange')
 })

 maker.addEventListener('click',()=>{
    feeType = 'maker'
 })

 taker.addEventListener('click',()=>{
    feeType = 'taker'
 })


 cal.addEventListener('click',()=>{
    const margin = inputValue.value;
    console.log(margin);
    const fee = feeType === 'maker'? 0.02 : feeType === 'taker' ? 0.04 : '0';
    console.log(feeType,fee)
    feeResult = (fee * margin);

    document.querySelector('.resultValue').innerHTML=feeResult+"%"
 })






