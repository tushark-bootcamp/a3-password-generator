var btnGenPwd = document.querySelector("#btn-gen-pwd");
var taPword = document.querySelector("#ta-pwd-input");
var pwdLength = 0;
var isUpperReqd = true;
var isLowerReqd = true;
var isNumReqd = true;
var isSpclCharReqd = true;
//var pwdCriteria = [length, upper];

function getPreferredLength() {
    var passwdLength = prompt("Enter the length of your password; it should not be less than 8 and greater than 128");
    if (Number.isInteger(passwdLength)) {
        if (passwdLength < 8 || passwdLength > 128) {
            passwdLength = prompt("The password cannot be less than 8 and greater than 128; please re-enter");
        }

    } else {
        passwdLength = prompt("The password length should be a valid number; please re-enter the length of the password");
    }
    return passwdLength;
}
function getPasswordLength() {
    var minLength = pwdLength;
    if (isUpperReqd) {
        minLength++;
    }
}

function buildPassword() {

    alert("You will need to provide word of the month which is a minimum " + 0);
    var wordOfTheMonth = prompt("Please give word");




}

btnGenPwd.addEventListener("click", function (event) {
    alert("pwd generated");
});