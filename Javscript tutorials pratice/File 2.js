let age = [3,7,9,12,17,19,24,29,50];
let op = age.find
((a)=> {
    return a > 18;
}
)
//console.log(op);

const ages = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}
//console.log(ages)

/*const numberss = [1,-1,2,3];
const sum = numberss.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},0);
console.log(sum);*/

/*const number = [175,50,25];
let sum = number.reduce((accumulator,currentValue) => {return accumulator + currentValue;
},2);
console.log(sum);*/

/*let names = ['charlie', 'suzi', 'ryan', 'suzin', 'suzi'];
names.splice(1,1,'jerry');
console.log(names);*/

/*let named = ["php", "java", "php", "python", "java", "ruby"];
function removeDuplicates(array){
    return array.filter((element,index) => array.indexOf(element) === index);
}
console.log(removeDuplicates(named));*/
let input = [2,3,4,5,6];
let resultant = [
    for (const i of input){
        resultant.push(i*i)
    }
]
console.log (resultant);






