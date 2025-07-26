for (var i =0; i <= 10; i++ ) {
    setTimeout(() => {
        console.log('loop 1 ',i);}, 10000);
}
// the output will 11 11 11 11 11 11 11 11 11 11 11
for (let i =0; i <= 10; i++ ) {
    setTimeout(() => {
        console.log( 'loop 2',i);
    }, 2000);
}
// the output will 0 1 2 3 4 5 6 7 8 9 10

for (let i =0; i <= 10; i++ ) {
    setTimeout(() => {
        console.log( 'loop 3',i);}, 2000*i);
}
// the output will 0 1 2 3 4 5 6 7 8 9 10 with actual 
// delay

// closure  - the x=2 can still be referred after the finish of y

const y = ()=> {
    let x = 2;
    return ()=> {
        console.log('x = ',x);
    }
}
z = y();
z();

