window.onload=function(){



    //Inputs

    var bill = document.getElementById('bill');
    var people = document.getElementById('people');
    var btns = document.getElementsByClassName('btns');
    console.log(btns)

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


    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            var tipAmount = document.getElementById('final-tip')
            var totalPerson = document.getElementById('final-total')
            var tip = this.id;
            tip = parseInt(tip);
            var valor = parseInt(bill.value);
            var total = valor * (tip/100);
            tipAmount.innerHTML = "$" + (total/parseInt(people.value)).toFixed(2)
            totalPerson.innerHTML = "$" + (valor/parseInt(people.value)+total/parseInt(people.value)).toFixed(2)
            console.log(people.value)
            console.log(tipAmount.innerHTML)
            console.log(parseFloat(total))
        })
    }

    bill.addEventListener('click', borderOnInt);
    people.addEventListener('click', borderOffInt);
    people.addEventListener('click', borderOnP);


    





}