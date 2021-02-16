import customer from "./customer";
import { customerDetails } from "./customer";

export interface invoiceDetails
{
    ID: number;
    amount: number;

}

export default class invoice extends customer 
{ 
    ID: number;
    customer: customer;
    amount: number;

    constructor(cust:customer,invoiceObj:invoiceDetails )
    {
        super(cust);

        this.ID = invoiceObj.ID;
        this.amount = invoiceObj.amount;
        this.customer = cust;
    }

    getCustomer = () => {
        
        return this.customer;
    }

    setCustomer = (cust:customer) => {
        
        this.customer = cust;
    }

    getAmount(): number {

        return this.amount;
    }

    setAmount(amt: number) {
        
        this.amount = amt;
    }

    getCustomerName(): string {
        
        return this.customer.getName();
    }

    getAmountAfterDiscount(): number {
        
        let amountAfterDiscount = (100 - this.customer.discount )* (this.amount) / 100;
        return amountAfterDiscount;
    }

}