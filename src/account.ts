import customer from "./customer";



export default class account extends customer 
{

    ID: number;
    customer: customer;
    balance: number;

    constructor(id:number, cust:customer,bal?:number)
    {
        super(cust);

        this.ID = id;
        this.customer = cust;
        if (bal === undefined)
            this.balance = 0;
        else
            this.balance = bal; 

    }

    getId = (): number => { return this.ID }
    getCustomer = (): customer => { return this.customer }
    getBalance = (): number => { return this.balance; }
    setBalance = (bal: number) => { this.balance = bal; }
    toString = () => { console.log(this.customer.name, this.customer.ID,) }
    
    getCustomerName = (): string => { return this.customer.name };
    deposit = (amt: number) => { this.balance += amt }
    withDraw = (amt: number) =>
    {
        if (this.balance >= amt)
            this.balance -= amt
        
        else
            console.log("Amount withdrawn exceeds current Balance");
    }

}