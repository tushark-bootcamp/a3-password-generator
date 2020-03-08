var btnGenPwd = document.querySelector("#btn-gen-pwd");
var taPword = document.querySelector("#ta-pwd-input");
var pwdLength = 0;
var isUpperReqd = true;
var isLowerReqd = true;
var isNumReqd = true;
var isSpclCharReqd = true;
//var pwdCriteria = [length, upper];

// Function to get the prefered length from the user with all validations.
// If the length does not have a valid value, the caller of this function will call this method 
//iteratively until a correct length is entered by the user
function getPreferredLength(lengthPromptCount) {
    var passwdLength = 0;
    console.log("Start getPreferredLength");
    var lastAttempt = false;
    if (lengthPromptCount <= 3) {
        if (lengthPromptCount == 3) {
            alert("This is your last attempt to set the right password length else it will be set to 8");
            lastAttempt = true;
        }
        passwdLength = prompt("Enter the length of your password; it should not be less than 8 and greater than 128");
        if (isNaN(passwdLength)) {
            if (!lastAttempt) {
                alert("The password length should be a valid number; please re-enter the length of the password");
            } else {
                alert("The password length is not a valid number");
            }
            passwdLength = 0;
        } else if (passwdLength < 8 || passwdLength > 128) {
            if (!lastAttempt) {
                alert("The password length cannot be less than 8 and greater than 128; please re-enter");
            } else {
                alert("The password length is not between 8 and 128.");
            }
            passwdLength = 0;
        } else {
            pwdLength = parseInt(passwdLength);
        }
    } else { //if (lengthPromptCount > 3) 
        alert("Setting the length to 8 for now as maximum attempts to set correct value has been exceeded !!");
        passwdLength = 8;
        pwdLength = 8;
    }
    console.log("End of getPreferredLength");
    return parseInt(passwdLength);
}

//This function sets the preferred length by iteratively calling the getPreferredLength() with all validations
function setPreferredLength() {
    var lengthPromptCount = 0
    while (getPreferredLength(lengthPromptCount) == 0) {
        lengthPromptCount++;
        continue;
    }
    alert("Password lengths is set to " + pwdLength);
}

function getPasswordCriteria() {
    setPreferredLength();
    //var maskPwdCriteria = 'aA#!';
    //var maskPwdCriteriaArr = ['a', 'A', '#', '!'];
    var maskPwdCriteriaArr = [];
    var maskPwdCriteria = "";
    isUpperReqd = confirm("Should the password have atleast one upper case character");
    if (!isUpperReqd) {
        alert("Since the upper case character is not prefered, the lower case characters will be used by default");
        isLowerReqd = true;
        // Upper case is not required
        //maskPwdCriteria = 'a#!';
        maskPwdCriteriaArr.push('a');
    } else {
        // if the upper case was set to yes, then ask for lower case requirement
        isLowerReqd = confirm("Should the password have atleast one lower case character");
        if (!isLowerReqd) {
            // Upper required but lower not required
            maskPwdCriteriaArr.push('A');
        } else {
            // Both upper and lower are required
            maskPwdCriteriaArr.push('a');
            maskPwdCriteriaArr.push('A');
        }
    }
    isNumReqd = confirm("Should the password have atleast one number");
    if (isNumReqd) {
        maskPwdCriteriaArr.push('#');
    }
    isSpclCharReqd = confirm("Should the password have a special character");
    if (isSpclCharReqd) {
        maskPwdCriteriaArr.push('!');
    }
    maskPwdCriteria = maskPwdCriteriaArr.toString();
    alert("maskPwdCriteria: " + maskPwdCriteria);
    return maskPwdCriteria;
}

function buildPassword() {
    var mask = getPasswordCriteria();
    var password = randomString(pwdLength, mask);
    alert("The password is: " + password);
    return password;
}

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    alert("mask in randomString is: " + mask);
    var result = '';
    for (var i = 0; i < length; i++) {
        var maskIndex = Math.floor(Math.random() * mask.length);
        alert("maskedIndex: " + maskIndex);
        result += mask[maskIndex];
    }
    return result;
}

function randomString2(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    alert("mask in randomString is: " + mask);
    var result = '';
    for (var i = 0; i < length; i++) {
        var maskIndex = Math.floor(Math.random() * mask.length);
        alert("maskedIndex: " + maskIndex);
        result += mask[maskIndex];
    }
    return result;
}

btnGenPwd.addEventListener("click", function (event) {
    event.preventDefault();
    var password = buildPassword();
    taPword.textContent = password;
});