companies = [
{name: "company 01", category: "retails", start: 1992, end : 2024},
{name: "company 02", category: "finance", start: 1992, end : 2024},
{name: "company 03", category: "wholes Sales", start: 1992, end : 2024},
{name: "company 04", category: "retails", start: 1992, end : 2024},
{name: "company 05", category: "retails", start: 1992, end : 2024},
{name: "company 06", category: "retails", start: 1994, end : 2024},
{name: "company 07", category: "finance", start: 1992, end : 2024},
{name: "company 08", category: "wholes Sales", start: 1992, end : 2024},
{name: "company 09", category: "retails", start: 1990, end : 2006},
{name: "company 10", category: "retails", start: 1991, end : 1997}];
const ages = [33,12,45,77,60,23,7,80,55,67,29,16];

// for (let i =0; i <companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach((company)  => {
    // console.log(company);
// });

// companies.forEach((company) => {
//     if (company.category === "retails") 
//         console.log(company.name, company.end -company.start)});
    

// ages.forEach((age,index)=> {
//     if (index % 2 ){
//         console.log(age);
//         age = age/2;
//         console.log(age);   
//         ages[index]=age;
//     }
// });
// console.log(ages);

// total = 0;
// ages.forEach((age) => {
//     total+=age;
// });
// console.log(total);

// const companyNames = companies.map(company => [company.name, company.end - company.start]);
//     console.log(companyNames);

// const companyNames2 = companies.map(company => `${company.name} [${company.start} ${company.end}]`);
//     console.log(companyNames2);

// const adult =  ages.filter(age=> age > 18);
// console.log(adult)

// const oldWholeSales = companies.filter(company => company.category === "wholes Sales" && company.end - company.start > 10);
// console.log(oldWholeSales)

// let a = [5,8,6,10,9]
// let max_value = (a,b) => a > b ? a : b;
// function max_seq(a) {
//     let result = a[0];
//     for (let element of a) result = max_value(result, element) ;
//     return result;
// } 
// console.log((max_seq)(a));

// let min_value = (a,b) => a < b ? a : b;
// function min_seq(a) {
//     let result = a[0];
//     for (let element of a) result = min_value(result, element) ;
//     return result;
// } 
// console.log((min_seq)(a));

// function reduce(x,fn){
// let result = x[0]
// for (let element of x) result = fn(result, element)
// return result;
// }
// console.log(reduce(a,max_value));
// console.log(reduce(a,min_value));


// let getSum = (total, num) => {
//     return total + Math.round(num);}

// const numbers = [15.5, 2.3, 1.1 , 4.7];
// console.log(numbers.reduce(getSum,0));

let a = 'a'
let b = (x) => {console.log("hello world + "); return x}
console.log(b(a.repeat(8).toUpperCase().repeat(3).substring(2)))