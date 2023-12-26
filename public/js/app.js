let DataBase = [
    {
        name: `zakaria`,
        email: `zakaria@gmail.com`,
        age: 18,
        password: `0000`,
        password_confirmed: `0000`,
    }
];

let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
let specialNumbers = /\d/
let specialAtmark = /[@]/


// //todo promt full name with test
// let Fullname = prompt(`enter your full name`).trim().split(` `);
// for (let i = 0; i < Fullname.length; i++) {
//     Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
// }
// let FullnameWithOutSpaces = Fullname.join(``);
// let FullnameWithSpaces = Fullname.join(` `);


// while (FullnameWithOutSpaces.length < 5 || specialChars.test(FullnameWithOutSpaces) || specialNumbers.test(FullnameWithOutSpaces)) {
//     if (FullnameWithOutSpaces.length < 5) {
//         alert(`your name must contain at least 5 letters`);
//     } else if (specialChars.test(FullnameWithOutSpaces)) {
//         alert(`we can't accept a name with special char`);
//     }else if(specialNumbers.test(FullnameWithOutSpaces)){
//         alert(`we can't accept a name with numbers`);
//     }
//     Fullname = prompt(`enter your full name`).trim().split(` `);
//     for (let i = 0; i < Fullname.length; i++) {
//         Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
//     }
//     FullnameWithOutSpaces = Fullname.join(``);
//     FullnameWithSpaces = Fullname.join(` `);
// }
// console.log(FullnameWithSpaces);



//! promt email with test
// let email = prompt(`enter your email`).trim().toLowerCase().split(` `).join(``);

// while (!specialAtmark.test(email) || email.length < 10) {
//     if (!specialAtmark.test(email)) {
//         alert(`your email must contain atmark (@)`)
//     } else if (email.length < 10) {
//         alert(`your email must contain at least 10 letters`);
//     }
//     email = prompt(`enter your email again`).trim().toLowerCase().split(` `).join(``);
// }

// for (let i = 0; i < DataBase.length; i++) {
//     let element = DataBase[i];
//     while (email == element.email) {
//         alert(" the email should be unique");
//         email = prompt(`enter your email again`).trim().toLowerCase().split(` `).join(``);
//     }
// }

// console.log(email);

//^ promt email with test
// let Age = prompt(`enter your age`).trim();
// while (Age.length == 0 || !specialNumbers.test(Age) || (Age > 100 || Age < 18)) {
//     if (Age.length == 0) {
//         alert(`you can't leave your age empty`);
//     } else if (!specialNumbers.test(Age)) {
//         alert(`you can't enter a string please enter a number`)
//     } else if (Age > 100 || Age < 18) {
//         if (Age > 100) {
//             alert(`rak mati`)
//             break;
//         }else if(Age < 18){
//             alert(`rak ba9i sghir`)
//             break;
//         }
//     }
//     Age = prompt(`enter your age again`).trim();
// }
// console.log(Age)

//* promt email with test
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

console.log(Password)


