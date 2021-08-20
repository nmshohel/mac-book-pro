
document.getElementById('memory-8gb').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('memeory-cost');
    memoryCostInput.innerText=0;

    // get total price 
    const totalPriceInput=document.getElementById('total-price');
    const totalPriceInputText=totalPriceInput.innerText;
    const totalPriceInputAmount=parseInt(totalPriceInputText);

    // get memory cost
    const memoryCostInputText=memoryCostInput.innerText;
    const memoryCostInputTextAmount=parseInt(memoryCostInputText);

    // update totalPrice
    const totalPrice=memoryCostInputTextAmount+totalPriceInputAmount;
    totalPriceInput.innerText=totalPrice;

    


})
document.getElementById('memory-16gb').addEventListener('click', function(){

    const MemoryCostInput=document.getElementById('memeory-cost');
    const MemoryCostInputText=MemoryCostInput.innerText;
    const MemoryCostInputTextAmount=parseInt(MemoryCostInputText)
    MemoryCostInput.innerText=MemoryCostInputTextAmount+180;

    const productTotal=document.getElementById(product+'-total');
    productTotal.innerText= parseInt(productNumber)*price;
    // calculate toal
    calculateTotal();

    // // update totalPrice
    const totalPriceInput=document.getElementById('total-price');
    const totalPrice=memoryCostInputTextAmount+totalPriceInputAmount;
    totalPriceInput.innerText=totalPrice;




    // set memory cost 
    // const memoryCostInput=document.getElementById('memeory-cost');
    // memoryCostInput.innerText=180;

    // // get total price 
    // const totalPriceInput=document.getElementById('total-price');
    // const totalPriceInputText=totalPriceInput.innerText;
    // const totalPriceInputAmount=parseInt(totalPriceInputText);

    // // get memory cost
    // const memoryCostInputText=memoryCostInput.innerText;
    // const memoryCostInputTextAmount=parseInt(memoryCostInputText);

    // // update totalPrice
    // const totalPrice=memoryCostInputTextAmount+totalPriceInputAmount;
    // totalPriceInput.innerText=totalPrice;
    
    
    

    // update total price
    // const totalPriceInput=document.getElementById('total-price');
    // const totalPriceInputText=totalPriceInput.innerText;
    // const totalPriceInputAmount=parseInt(totalPriceInputText);
    // const totalPriceInputAmountFinal=totalPriceInputAmount+180;
    // totalPriceInput.innerText=totalPriceInputAmountFinal;


    // update total price
    // const totalPriceInput=document.getElementById('total-price').innerText;
    // console.log(totalPriceInput)
    
    // totalPrice=totalPrice+180;
    // totalPriceInput.innerText=totalPrice;
    
    
})
document.getElementById('storage-256gb').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('storage-cost');
    memoryCostInput.innerText=0;
    
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('storage-cost');
    memoryCostInput.innerText=100;
    
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('storage-cost');
    memoryCostInput.innerText=180;
    
})
document.getElementById('delivery-free').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('delivery-cost');
    memoryCostInput.innerText=0;
    
})
document.getElementById('delivery-charge').addEventListener('click', function(){
    const memoryCostInput=document.getElementById('delivery-cost');
    memoryCostInput.innerText=20;
    
})