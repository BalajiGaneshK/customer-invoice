
export interface customerDetails
{
    ID: number;
    name: string;
    discount: number;   //in Percentage


}

export default class customer implements customerDetails{

    ID: number;
    name: string;
    discount: number;

    constructor(customerObj:customerDetails)
    { 
        this.ID = customerObj.ID;
        this.name = customerObj.name;
        this.discount = customerObj.discount;
    }

    getID(): number { return this.ID; }

    getName(): string { return this.name; }

    getDiscount(): number { return this.discount; }

    setDiscount(discount: number) { this.discount = discount; }
    
    toString() {

        console.log(this.name, this.ID);
    }



    

}