import customer from "./customer";
import { customerDetails } from "./customer";


let discountOptions = [5, 10, 15, 20];
let customerId=1001;

function generateCustomerId() :number {
    
    return customerId++;

}

function generateDiscount(): number {
    let discount= discountOptions[Math.floor(Math.random() * discountOptions.length)]
    console.log(discount);
    return discount;
}

function pushNewCustomer(custObj)
{
    console.log(custObj.ID);
    localStorage.setItem(JSON.stringify(custObj.ID), JSON.stringify(custObj));
    console.log(localStorage);
}

function displaySignUpSuccessMessage(custObj) {
    
    console.log("SignUp success.You've got a discount of", custObj.discount);
    //Displaying sign up success message in a Modal

    let signUpModal= <HTMLInputElement>document.getElementById("exampleModal");
    signUpModal.innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`;
/*
    let modalDiv = document.createElement("div");
    modalDiv.setAttribute("class", "modal-dialog modal-dialog-centered");
    modalDiv.setAttribute("id", "signUpSuccessModal");
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.setAttribute("aria-labelledby", "signUpModalTitle");
    modalDiv.setAttribute("aria-hidden", "true");
    document.body.appendChild(modalDiv);

    let modalDialog = document.createElement("div");
    modalDiv.append(modalDialog);
    modalDialog.setAttribute("class", "modal-dialog");

    let modalContent = document.createElement("div");
    modalDiv.append(modalContent);

    let modalHeader = document.createElement("div");
    modalContent.append(modalHeader);

    let modalTitle = document.createElement("h5");
    modalTitle.setAttribute("class", "modal-title");
    modalTitle.setAttribute("id", "signUpModalTitle");
    modalTitle.innerHTML = "Sign Up Success";
    modalHeader.append(modalTitle);

    let modalBtnClose = document.createElement("button");
    modalBtnClose.setAttribute("type", "button");
    modalBtnClose.setAttribute("class", "btn-close");
    modalBtnClose.setAttribute("data-bs-dismiss", "modal-dialog");
    modalBtnClose.setAttribute("aria-label", "Close");
    modalHeader.append(modalBtnClose);

    let modalBody = document.createElement("div");
    
    modalContent.append(modalBody);

    let modalFooter = document.createElement("div");
    modalContent.append(modalFooter);



    */   

     /*window.location.href = "index.html";*/
}

export default function getCustomerName() {
    
    console.log("enter signup-page.ts 22");
    let inputCustomerName;
    let signUpBtn = document.getElementById("sign-up-submit-button");
    
        signUpBtn.addEventListener("click", () => {
        console.log("enter signup-page.ts");
        inputCustomerName = (<HTMLInputElement>document.getElementById("customerName2")).value;
        console.log(inputCustomerName);

        let custObj: customerDetails = { ID: generateCustomerId(), name: inputCustomerName, discount: generateDiscount() };
            pushNewCustomer(custObj);
            displaySignUpSuccessMessage(custObj);
    }
    )  

}





