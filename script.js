// best price part start
 
const bestPrice = document.getElementById('best-price');

bestPrice.addEventListener('click', function(){
    bestPrice.innerText = '1299';

   updateTotal();  
})
// best price part end


// extra memory part start

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
// extra memory part end


// extra-storage part start

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
// extra-storage part end

 
// delivery charge part start

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
// delivery charge part end


// total part  start

const total = document.getElementById('total-price');

// final price function
 const finalPrice = document.getElementById('final-price');

function updateTotal() {
    const bestPriceCharge = parseInt(bestPrice.innerText);
    const extraMemoryCharge = parseInt(extraMemory.innerText);
    const extraStorageCharge = parseInt(extraStorage.innerText);
    const choosedeliveryCharge = parseInt(deliveryCharge.innerText);
    const grandTotal = bestPriceCharge + extraMemoryCharge + extraStorageCharge + choosedeliveryCharge ;

    total.innerText = grandTotal;

    // final price function
     finalPrice.innerText = grandTotal;  
}
// total part  end



//discount calculation part start 


document.getElementById('apply-button').addEventListener('click', function(){
   
    const input = document.getElementById('promo-input');
    const inputText = input.value;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;

    const finalPrice = document.getElementById('final-price');
    if(inputText == "stevekaku") {
        finalPrice.innerText = totalPriceText - (totalPriceText * .2);
    }
    input.value = "";
}) 

//discount calculation part end