/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 25 ;
const ticket = 800 ;
if(age < 10){
    console.log('free')
}
else if((age >=20) && (age <= 30)){
    // 50% Discount
    const discount = ticket * 50 / 100 ;
    const payamount = ticket - discount ;
    console.log(payamount)
}
else if (age >= 60) {
    // 15% Discount
    const discount = ticket * 15 / 100 ;
    const payamount = ticket - discount ;
    console.log(payamount)
}
else{
    console.log(ticket)
}