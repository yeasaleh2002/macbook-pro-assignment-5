
// best price part
 
const bestPrice = document.getElementById('best-price');

bestPrice.addEventListener('click', function(){
    bestPrice.innerText = '1299';

   updateTotal();
    
})




// extra memory part

const eightGbMemory = document.getElementById("eight-gb-memory");
const sixteenaGbMemory = document.getElementById("sixteen-gb-memory");
const extraMemory = document.getElementById('extra-memory');


eightGbMemory.addEventListener('click', function(){
    extraMemory.innerText = '0';

    updateTotal();
 
});

sixteenaGbMemory.addEventListener('click', function(){
    extraMemory.innerText = '180';

    updateTotal();
    
});



// extra-storage part

const twoHundradFifttySixGbStroage = document.getElementById("twoHundradFifttySix-gb-stroage");
const fiveHundradtwelveGbStroage = document.getElementById("fiveHundradtwelve-gb-stroage");
const oneTbStroage = document.getElementById("one-tb-stroage");
const extraStorage = document.getElementById('extra-storage');


twoHundradFifttySixGbStroage.addEventListener('click', function(){
    extraStorage.innerText = '0';

    updateTotal();
 
});

fiveHundradtwelveGbStroage.addEventListener('click', function(){
    extraStorage.innerText = '100';

    updateTotal();
    
});


oneTbStroage.addEventListener('click', function(){
    extraStorage.innerText = '180';

    updateTotal();
    
});


 
// delivery charge part

const freeDelivery = document.getElementById("free-delivery");
const chargableDelivery = document.getElementById("chargable-delivery");
const deliveryCharge = document.getElementById('delivery-charge');


freeDelivery.addEventListener('click', function(){
    deliveryCharge.innerText = '0';

    updateTotal();
 
});

chargableDelivery.addEventListener('click', function(){
    deliveryCharge.innerText = '20';

    updateTotal();
    
}); 



// total part 

const total = document.getElementById('total-price');



function updateTotal() {
    const bestPriceCharge = parseInt(bestPrice.innerText);
    const extraMemoryCharge = parseInt(extraMemory.innerText);
    const extraStorageCharge = parseInt(extraStorage.innerText);
    const choosedeliveryCharge = parseInt(deliveryCharge.innerText);
    const grandTotal = bestPriceCharge + extraMemoryCharge + extraStorageCharge + choosedeliveryCharge ;

    total.innerText = grandTotal;
}