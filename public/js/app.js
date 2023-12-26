let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
let specialNumbers = /\d/


//todo promt full name with test

let Fullname = prompt(`enter your full name`).trim().split(` `);
for (let i = 0; i < Fullname.length; i++) {
    Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
}
let FullnameWithOutSpaces = Fullname.join(``);
let FullnameWithSpaces = Fullname.join(` `);




while (FullnameWithOutSpaces.length < 5 || specialChars.test(FullnameWithOutSpaces) || specialNumbers.test(FullnameWithOutSpaces)) {
    if (FullnameWithOutSpaces.length < 5) {
        alert(`your name must contain at least 5 char`);
    } else if (specialChars.test(FullnameWithOutSpaces)) {
        alert(`we can't accept a name with special char`);
    }else if(specialNumbers.test(FullnameWithOutSpaces)){
        alert(`we can't accept a name with numbers`);
    }
    Fullname = prompt(`enter your full name`).trim().split(` `);
    for (let i = 0; i < Fullname.length; i++) {
        Fullname[i] = Fullname[i][0].toUpperCase() + Fullname[i].slice(1).toLowerCase();
    }
    FullnameWithOutSpaces = Fullname.join(``);
    FullnameWithSpaces = Fullname.join(` `);
}
console.log(FullnameWithSpaces);







