let DataBase = [
    {
        name: `youness`,
        email: `youness@gmail.com`,
        age: 20,
        password: `!@youness`,
        password_confirmed: `!@youness`,
        amount: 400,
    },
    {
        name: `zakaria`,
        email: `zakaria@gmail.com`,
        age: 18,
        password: `!@zakaria`,
        password_confirmed: `!@zakaria`,
        amount: 1000,
    },
];

let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
let specialNumbers = /\d/
let specialAtmark = /[@]/




function singUp() {
    // //todo promt full name with test
    let namee = prompt(`enter your full name`);
    let Fullname = namee.trim().split(` `);
    for (let i = 0; i < Fullname.length; i++) {
        Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
    }
    let FullnameWithOutSpaces = Fullname.join(``);
    let FullnameWithSpaces = Fullname.join(` `);


    while (FullnameWithOutSpaces.length < 5 || specialChars.test(FullnameWithOutSpaces) || specialNumbers.test(FullnameWithOutSpaces)) {
        if (FullnameWithOutSpaces.length < 5) {
            alert(`your name must contain at least 5 letters`);
        } else if (specialChars.test(FullnameWithOutSpaces)) {
            alert(`we can't accept a name with special char`);
        } else if (specialNumbers.test(FullnameWithOutSpaces)) {
            alert(`we can't accept a name with numbers`);
        }
        Fullname = prompt(`enter your full name`).trim().split(` `);
        for (let i = 0; i < Fullname.length; i++) {
            Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
        }
        FullnameWithOutSpaces = Fullname.join(``);
        FullnameWithSpaces = Fullname.join(` `);
    }



    //! promt email with test
    let email = prompt(`enter your email`).trim().toLowerCase().split(` `).join(``);

    while (!specialAtmark.test(email) || email.length < 10) {
        if (!specialAtmark.test(email)) {
            alert(`your email must contain atmark (@)`)
        } else if (email.length < 10) {
            alert(`your email must contain at least 10 letters`);
        }
        email = prompt(`enter your email again`).trim().toLowerCase().split(` `).join(``);
    }

    for (let i = 0; i < DataBase.length; i++) {
        let element = DataBase[i];
        while (email == element.email) {
            alert(" the email should be unique");
            email = prompt(`enter your email again`).trim().toLowerCase().split(` `).join(``);
        }
    }

    console.log(email);

    //^ promt email with test
    let Age = prompt(`enter your age`).trim();
    while (Age.length == 0 || !specialNumbers.test(Age) || (Age > 100 || Age < 18)) {
        if (Age.length == 0) {
            alert(`you can't leave your age empty`);
        } else if (!specialNumbers.test(Age)) {
            alert(`you can't enter a string please enter a number`)
        } else if (Age > 100 || Age < 18) {
            if (Age > 100) {
                alert(`rak mati`)
                break;
            } else if (Age < 18) {
                alert(`rak ba9i sghir`)
                break;
            }
        }
        Age = prompt(`enter your age again`).trim();
    }
    console.log(Age)

    //* promt Password with test
    let Password = prompt(`enter your password`).trim().split(` `).join(``);

    while (Password.length < 7 || !specialAtmark.test(Password)) {
        if (Password.length < 7) {
            alert(`your password must contain at least 7 characters`);
            Password = prompt(`enter your password again`).trim().split(` `).join(``);
        } if (!specialAtmark.test(Password)) {
            alert(`Require at least one special character`)
            Password = prompt(`enter your password again`).trim().split(` `).join(``);
        }
    }


    //* promt Password confirmed with test
    let Password_confirmed = prompt(`enter your password again to confirme it`);
    if (Password_confirmed != Password) {
        alert(`thats not the same pass that you enter at the begining`);
    }

    class Persone {
        constructor(name, email, age, password, password_confirmed, amount) {
            this.name = name;
            this.email = email;
            this.age = age;
            this.password = password;
            this.password_confirmed = password_confirmed;
            this.amount = amount;
        }
    }
    let person = new Persone(namee, email, Age, Password, Password_confirmed, 500);
    DataBase.push(person);
}

function logIn() {
    let emailToLogin = prompt(`enter your email to login`);
    let passwordToLogin = prompt(`enter your password to login`);

    for (let i = 0; i < DataBase.length; i++) {

        let element = DataBase[i];

        if (element.email == emailToLogin) {
            if (element.password == passwordToLogin) {
                alert(`you are on your account`)
                alert(`${element.name} your current amount is ${element.amount}dh`)
                services(element)
            } else {
                alert(`your password is wrong`)
            }
        } else {
            alert(`your email is wrong`)
        }
    }
}



function changePassword() {
    let emailToChagePassword = prompt(`enter your email to change your password`);
    DataBase.forEach(element => {
        if (element.email == emailToChagePassword) {
            let newPassword = prompt(`please enter the new password`);
            let newPasswordConfirmed = prompt(`confirme your password`);
            if (newPassword == newPasswordConfirmed) {
                element.password = newPasswordConfirmed;
            } else {
                alert(`thats not the same pass that you enter at the begining`);
                AskingTheUser()
            }
        } else {
            alert(`that email not exesting`);
            AskingTheUser()
        }
    });
}



function AskingTheUser() {
    let firstQuestion = prompt(`you want to sign up, log in, or change the password.`)
    while (firstQuestion != `sign up` || firstQuestion != `log in` || firstQuestion != `change the password`) {
        if (firstQuestion == `sign up`) {
            singUp();
            break;
        } else if (firstQuestion == `log in`) {
            logIn();
            break;
        } else if (firstQuestion == `change the password`) {
            changePassword();
            break;
        }
        alert(`${firstQuestion} is not accepted`);
        firstQuestion = prompt(`please choose between sign up, log in, or change the password`)
    }
}


function services(user) {
    let servicesQuestion = prompt(`you want to log out, withdraw money, deposit money, tak a loan , invest, or history.`)

    while (servicesQuestion != `log out` || servicesQuestion != `withdraw money` || servicesQuestion != `deposit money` || servicesQuestion != `tak a loan` || servicesQuestion != `invest` || servicesQuestion != `history`) {
        if (servicesQuestion == `log out`) {
            AskingTheUser()
            break;
        } else if (servicesQuestion == `withdraw money`) {
            withdrawMoney(user)
            break;
        } else if (servicesQuestion == `deposit money`) {
            break;
        } else if (servicesQuestion == `tak a loan`) {
            break;
        } else if (servicesQuestion == `invest`) {
            break;
        } else if (servicesQuestion == `history`) {
            break;
        }
        alert(`${servicesQuestion} is not an option`)
        servicesQuestion = prompt(`please choose between  log out, withdraw money, deposit money, tak a loan , invest, or history.`)

    }
}

function withdrawMoney(user) {
    let withdrawQuestion = parseInt(prompt(`how much money you want to withdraw`))
    if (withdrawQuestion <= user.amount) {
        user.amount -= withdrawQuestion
        console.log(user.amount)
    }else{
        console.log(`you don't have this money to withdraw`)
    }
}


AskingTheUser()
