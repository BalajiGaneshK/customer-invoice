import customer, { customerDetails } from "./customer";
import invoice, { invoiceDetails } from "./invoice";
import account from "./account";


let custObj: customerDetails = { ID: 1, name: "Balaji", discount: 5 };
let c = new customer(custObj);
console.log("Customer is:",c);

let invoiceObj: invoiceDetails = { ID: 100, amount: 2000 };
let i1 = new invoice(c, invoiceObj);


console.log(i1);

let acc = new account(8001, c);
console.log(acc);

//hello world nowss