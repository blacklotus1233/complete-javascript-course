'use strict';

function calcAge(birthYear){
    const age=2037-birthYear;

    function printAge(){
        const output=`You are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear>=1981 && birthYear<= 1996) 
        {
            var millenial=true; //var variable don't care about blocks(use const or let)
            const str=`Oh, you are a millenial, ${firstName}`;
            console.log(str);
        function add(a,b){
                return a+b;
            }
        }
      //console.log(add(2,3)); //functions are block scoped for strict mode
    }
    printAge();
    console.log(firstName); //first name global scope so it's available in current function scope
    return age;
}

const firstName ='Alex';
calcAge(1995);
//console.log(age); //can't acces to age scope, because we can't acces the child scope

// if we have 2 variables with same name and different scope JS will look first of all in current scope