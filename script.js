window.onload=function(){

    const bill = document.getElementById('bill');
    function borderOn(){
        var inpBill = document.getElementById('intBillBorder');
        inpBill.classList.toggle('border-cyan')
    }

    bill.addEventListener('click', borderOn)










}