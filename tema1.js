//Tema 3.1.6
	//...............................................................................ex 1

    let n = 105;
    function isEven(n){
        if(n%2===0){
        return true;
        }
        else{
        return false;
        }
    }
    console.log(isEven(n));

    //sau 
  let m=10;
    function checkEven(m){
        return (m%2===0);
    }
    
checkEven(m) ? console.log("true") : console.log("false");
        
//...............................................................................ex 2

function tellFortune(a,b,c,d){
      console.log("Vei fi o " +  d + " in " + c + ",casatorita cu " + b + " si vei avea " + a +" copii");
}

console.log(tellFortune(2,'Andrei','Bucuresti','programatoare'));

//...............................................................................ex 3		
    let day = 3;
    let dayName;

    switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
    }

    console.log(dayName); 

    //.....................................................................

    //Tema 3.2.7 

    //.....................................................................ex 1
    let x = 10;
    for(let i=0; i<=x; i++){
        if(i%2==0){
            console.log(i);
        }
    }
    //.....................................................................ex 2
    let numbers = [1, 2, 3, -5, 7];
    let sum = 0;
        for(let i=0; i<numbers.length; i++){
            sum += numbers[i];
        }
        console.log(sum);
    //.....................................................................ex 3

    let normalArray = [1, -5, 20, -34, 16, 29, 36, -4];

    normalArray.reverse();
    console.log(normalArray);
    //......................................................................ex 4

    let sir = "Sa vedem cate vocale avem";
    function getVowels(sir){
        nrVoc= sir.match(/[aeiou]/gi);
            return nrVoc === null ? 0 : nrVoc.length;
        }
    console.log("Numaru de vocale este " + getVowels(sir));


    // cel mai basic
// let sir = 'Sa vedem cate vocale avem';
// let vocale = ["a","e","i","o","u"]
// function numarVocale(sir) {


//   let count = 0
//    for(let i = 0 ; i <= sir.length-1 ; i++) {
//        for(let j = 0; j<= vocale.length; j++ ) {
//            if(sir[i] == vocale[j]){
//                count ++
//            }
//        }
//    }
//    return count
// }

// Exemplu de apelare a funcției
// numarVocale(sir) 


// mai ok 

// function numarVocale(șir) {
 // Definim o variabilă pentru a contoriza numărul de vocale
//  let numar = 0;

 // Convertim șirul la litere mici pentru a face comparările mai simple
//  șir = șir.toLowerCase();

 // Iterăm prin fiecare caracter din șir
//  for (let i = 0; i < șir.length; i++) {
//    const caracter = șir[i];

   // Verificăm dacă caracterul este o vocală
//    if (caracter === 'a'  caracter === 'e'  caracter === 'i'  caracter === 'o'  caracter === 'u') {
//      numar++;
//    }

// best 


// let sir = 'Sa vedem cate vocale avem';
// function getVowels(sir) {
//  nrVoc = sir.match(/[aeiou]/gi);
//  return nrVoc === null ? 0 : nrVoc.length;
// }
// console.log('Numaru de vocale este ' + getVowels(sir));



