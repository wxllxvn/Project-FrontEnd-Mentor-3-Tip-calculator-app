window.onload=function(){



    //Inputs

    const bill = document.getElementById('bill');
    const people = document.getElementById('people');

    function borderOnInt(){
        var inpBill = document.getElementById('intBillBorder');
        var peopleB = document.getElementById('people-border')
        inpBill.classList.add('border-cyan')
        peopleB.classList.remove('border-cyan')
    };


    function borderOffInt(){
        var inpBill = document.getElementById('intBillBorder');
        inpBill.classList.remove('border-cyan')
    };

    function borderOnP(){
        var peopleB = document.getElementById('people-border');
        peopleB.classList.add('border-cyan')
    };


    function borderOffP(){
        var inpBill = document.getElementById('intBillBorder');
        inpBill.classList.remove('border-cyan')
    };


    function selectTip(){
        console.log(event.target.id);
    };

    bill.addEventListener('click', borderOnInt);
    people.addEventListener('click', borderOffInt)

    people.addEventListener('click', borderOnP)


    





}