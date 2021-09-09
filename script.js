window.onload=function(){



    //Inputs

    var bill = document.getElementById('bill');
    var people = document.getElementById('people');
    var btns = document.getElementsByClassName('btns');
    var inpTip = document.getElementById('inp-tip-field');

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
            var tipAmount = document.getElementById('final-tip');
            var totalPerson = document.getElementById('final-total');
            let billArea = document.getElementById('intBillBorder');
            let billVisibility = document.getElementById('verific-id');
            let peopleVisibility = document.getElementById('verific-id-2');
            let peopleBorder = document.getElementById('people-border');
            var tip = this.id;
            tip = parseInt(tip);
            var valor = parseInt(bill.value);
            var total = valor * (tip/100);


            if(bill.value == ''){
                billArea.style.border = '1px solid #FF0000'
                billVisibility.style.display = 'block'
            }else if(people.value == ''){
                billArea.style.border = 'none'
                billVisibility.style.display = 'none'
                peopleBorder.style.border = '1px solid #FF0000'
                peopleVisibility.style.display = 'block'
            } 
            else{
                billArea.style.border = 'none'
                billVisibility.style.display = 'none'
                peopleBorder.style.border = 'none'
                peopleVisibility.style.display = 'none'
                tipAmount.innerHTML = "$" + (total/parseInt(people.value)).toFixed(2)
                totalPerson.innerHTML = "$" + (valor/parseInt(people.value)+total/parseInt(people.value)).toFixed(2)
                console.log(people.value)
                console.log(bill.value)
                console.log(tipAmount.innerHTML)
                console.log(parseFloat(total))
            }
        })
    }





    inpTip.addEventListener("change", function(){
        var tipAmount = document.getElementById('final-tip');
        var totalPerson = document.getElementById('final-total');
        let billArea = document.getElementById('intBillBorder');
        let billVisibility = document.getElementById('verific-id');
        let peopleVisibility = document.getElementById('verific-id-2');
        let peopleBorder = document.getElementById('people-border');
        var value = inpTip.value;
        var valorFinal = parseInt(bill.value) * (value/100);
        console.log(valorFinal)


        if(bill.value == ''){
            billArea.style.border = '1px solid #FF0000'
            billVisibility.style.display = 'block'
        }else if(people.value == ''){
            billArea.style.border = 'none'
            billVisibility.style.display = 'none'
            peopleBorder.style.border = '1px solid #FF0000'
            peopleVisibility.style.display = 'block'
        } 
        else{
            billArea.style.border = 'none'
            billVisibility.style.display = 'none'
            peopleBorder.style.border = 'none'
            peopleVisibility.style.display = 'none'
            tipAmount.innerHTML = "$" + (valorFinal/parseInt(people.value)).toFixed(2)
            totalPerson.innerHTML = "$" + (bill.value/parseInt(people.value)+valorFinal/parseInt(people.value)).toFixed(2)
            console.log(people.value)
            console.log(bill.value)
            console.log(tipAmount.innerHTML)
            console.log(parseFloat(total))
        }
    })




    bill.addEventListener('click', borderOnInt);
    people.addEventListener('click', borderOffInt);
    people.addEventListener('click', borderOnP);



    





}