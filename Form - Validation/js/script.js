// Validation

//reffering Elements  into the form

const bootcampForm = document.getElementById("bootcamp-form");
const passcode = document.getElementById("user-password");
const MobileNum = document.getElementById("phone");

function ValidationForm()  {
    let pwd = passcode.value;
    let Number = MobileNum.value;

    if (pwd.length <8) {
        alert(" Entered Password Should be 8 Characters..!");
    }
};

if (Number.length < 10) {

    alert(" ReEnter Your Mobile Number");

}

bootcampForm.addEventListener("submit", () =>  {

ValidationForm();
});

bootcampForm.addEventListener("number", () => {
    ValidationForm();
});