let signupBtn = document.getElementById('signup');

let userName = document.querySelector('#username');
let email = document.querySelector('#emailid');
let password = document.querySelector('#password');
let cPassword = document.querySelector('#c-password');


let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");


if (localStorage.getItem("swiggy") == null) {
    localStorage.setItem("swiggy", "[]");
}

data = {};

signupBtn.addEventListener('click', storingData);
function storingData(e) {
    e.preventDefault();

    if (userName.value == "") {
        userName.style.border = "1px solid red";
        error1.style.display = "flex";
    }
    else {
        userName.style.border = "1px solid #dadde1";
        error1.style.display = "none";
    }

    if (email.value == "") {
        email.style.border = "1px solid red";
        error3.style.display = "flex";
    }
    else {
        email.style.border = "1px solid #dadde1";
        error3.style.display = "none";
    }


    if (cPassword.value == "") {
        cPassword.style.border = "1px solid red";
        error2.style.display = "flex";
    }
    else {
        cPassword.style.border = "1px solid #dadde1";
        error2.style.display = "none";
    }


    if (password.value == "") {
        password.style.border = "1px solid red";
        error4.style.display = "flex";
    }
    else {
        password.style.border = "1px solid #dadde1";
        error4.style.display = "none";
    }


    let array = JSON.parse(localStorage.getItem("swiggy"));
    let length = array.length;
    console.log(length)

    user: if (userName.value != "") {
        if (cPassword.value != "") {
            if (email.value != "") {
                for (i = 0; i < length; i++) {
                    if (array[i].username == email.value) {
                        email.style.border = "1px solid red";
                        error3.style.display = "flex";
                        break user;
                    }
                }
                if (cPassword.value == password.value) {
                    data.userName = userName.value;
                    data.cPassword = cPassword.value;
                    data.username = email.value;
                    data.password = password.value;
                    console.log(data)

                    array[length] = data;
                    console.log(array);

                    localStorage.setItem("swiggy", JSON.stringify(array))

                    alert('register successfully');
                    location.href = 'login.html';
                }
            }
        }
    }

};



