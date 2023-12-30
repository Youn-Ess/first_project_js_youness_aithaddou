class Database {
    static users = []
}

class Person {
    constructor(fullname, email, age, password, amount) {
        this.fullname = fullname;
        this.email = email;
        this.age = age;
        this.password = password;
        this.amount = amount || Math.floor(Math.random() * (20000 - 1000)) + 1000;
        this.loan = 0
        this.invest = 0
        this.history = []

        // Database.users.push(this)
    }
}
new Person(`ahmed`, `ahmed@gmail.com`, 20, `1234`, 1000);

class Char {
    static specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    static numbers = /\d/;
    static Alphabetic = /[a-zA-Z]/;

}

function today() {
    const now = new Date()
    const formattedDate = `${now.getUTCFullYear()}-${(now.getUTCMonth() + 1)}-${now.getUTCDate()} ${now.getUTCHours()}:${now.getUTCMinutes()}`
    return formattedDate
}


function signUp() {
    function get_fullName() {
        let fullName = prompt(`enter your name`);
        // test if the full name is empty
        if (!fullName) {
            alert(`you can't leave your name empty`);
            return get_fullName()
        }
        //Do not save the Name if it contains numbers, "@", or similar special characters.
        if (Char.specialChars.test(fullName)) {
            alert(`you can't use those special characters (${Char.specialChars}) on your name`)
            return get_fullName()
        }
        if (Char.numbers.test(fullName)) {
            alert(`you can't use numbers on your name`);
            return get_fullName()
        }
        // remove the leading or trailing spaces
        // After each space, the first letter should remain capitalized.
        //Check that all other characters are in lowercase.
        let newName = fullName.trim().split(` `).map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(` `);
        // Do not save the Name if it has less than 5 characters (excluding spaces).
        if (newName.split(` `).join(``).length < 5) {
            alert(`you name is to short please enter a name that have more than 5 charracters`);
            return get_fullName()
        }
        return newName
    }
    const fullName = get_fullName();

    function getEmail() {
        let email = prompt(`enter your email`);
        // test if the full name is empty
        if (!email) {
            alert(`you can't leave your email empty`);
            return getEmail()
        }
        // Check for leading or trailing spaces.
        // Convert all letters to lowercase.
        email = email.trim().toLowerCase()
        // Do not save the Email if it has spaces in the middle.
        if (email.includes(` `)) {
            alert(`your email can't contain spaces`);
            return getEmail()
        }

        // Do not save the Email if it contain more that one "@" symbol.
        if (email.split(``).filter(char => char == `@`).length > 1) {
            alert(`you can't put two atmarks at your email`);
            return getEmail()
        }
        // Do not save the Email if it does not contain exactly one "@" symbol.
        if (!email.includes(`@`)) {
            alert(`your email munst contain @ character`);
            return getEmail()
        }
        // Do not save the Email if it has fewer than 10 characters (excluding spaces).
        if (email.split(`@`)[1].length == 0) {
            alert(`your email munst end with some thing like gmail.com`);
            return getEmail()
        }
        // Do not save the Email if it does not contain exactly one "." symbol.
        if (!email.split(`@`)[1].includes(`.`)) {
            alert(`your email munst containe a . after the atmark`);
            return getEmail()
        }
        if (email.split(`@`)[0].length < 5) {
            alert(`your email munst contain 5 characters or more before atmark`);
            return getEmail()
        }

        // Ensure the email is unique.
        for (const user of Database.users) {
            if (email == user.email) {
                alert(`this email all ready used ! try another one`);
                return getAge()
            }
        }
        return email
    }
    const email = getEmail()

    function getAge() {
        let age = prompt(`enter your age`);
        // test if the age is empty
        if (!age) {
            alert(`you can't leave your age empty`);
            return getAge()
        }
        // Check for leading, trailing, or middle spaces.
        age = age.trim();
        // Verify that only digits are entered.
        if (Char.Alphabetic.test(age) || Char.specialChars.test(age)) {
            alert(`invalide input please enter your age`);
            return getAge()
        }
        // Do not save the Age if it has 0 characters, or if it has 3 characters or more.
        if (age == `0` || age.length > 2) {
            alert(`invalide input please enter your age (can't put 0 or 100)`);
            return getAge();
        }
        return age;
    }
    const age = getAge()

    function getPassword() {
        let password = prompt(`enter your password`);
        // test if the password is empty
        if (!password) {
            alert(`you can't leave your password empty`);
            return getPassword()
        }
        // Check for leading or trailing spaces.
        password = password.trim();
        // Do not save the Password if it has spaces in the middle.
        if (password.includes(` `)) {
            alert(`your password can't contain spaces`)
        }
        // Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
        if (!Char.specialChars.test(password)) {
            alert(`you must put some special characters on your password`)
            return getPassword()
        }
        // Require at least 7 characters to confirm the password.
        if (password.length < 7) {
            alert(`you password is to short please enter a password that have more than 7 charracters`)
            return getPassword();
        }
        // # confirm the password
        let confirmPassword = prompt(`confirme your password`)
        if (confirmPassword != password) {
            alert(`password not match try again`);
            return getPassword()
        }
        return confirmPassword
    }
    const password = getPassword()

    let person = new Person(fullName, email, age, password);
    Database.users.push(person)
    main()

}

function logIn() {
    let emailQuestion = prompt(`enter your email to log in`);
    let passwordQuestion = prompt(`enter your password`);
    let loginPerson = []

    for (let i = 0; i < Database.users.length; i++) {
        let person = Database.users[i];
        if (emailQuestion != person.email) {
            alert(`this email doesn't exist`)
            return logIn()
        } else {

            if (passwordQuestion != person.password) {
                alert(`this password is uncorrect`);
                return logIn()
            } else {
                loginPerson.push(person)
                alert(`you welcome`);
                person.history.push(`${today()} login`)
                return services()
            }

        }
    }

    function services() {
        let servicesQuestion = prompt(`your current amount ${loginPerson[0].amount} choose between those services : log out , withdraw , deposit , take a loan ,invest or display history `)
        function logOut() {
            loginPerson.slice(0, -1)
            loginPerson[0].amount -= loginPerson[0].loan * 0.1
            loginPerson[0].amount += loginPerson[0].invest * 0.2
            loginPerson[0].history.push(`${today()} log out`)

            alert(`have a nice day`)
            main()
        }
        function withdraw() {
            let withdrawQuestion = parseInt(prompt(`your current amount ${loginPerson[0].amount} how much money you want to withdraw it`))
            if (withdrawQuestion > loginPerson[0].amount) {
                alert(`you don't have this amount of ${withdrawQuestion}$ on your account`)
                withdraw()
            } else {
                loginPerson[0].amount -= withdrawQuestion;
                loginPerson[0].history.push(`${today()} withdraw ${withdrawQuestion}`)
            }
            services()
        }
        function deposit() {
            let depositQuestion = parseInt(prompt(`your current amount ${loginPerson[0].amount} how much money you want to deposit on your account`))
            if (depositQuestion > 1000) {
                alert(`${depositQuestion}$ is to mutch you can't deposit more that 1000$`)
                deposit()
            } else {
                loginPerson[0].amount += depositQuestion;
                loginPerson[0].history.push(`${today()} deposit ${depositQuestion}`)

            }
            services()
        }
        function loan() {
            let loanQuestion = parseInt(prompt(`your current amount ${loginPerson[0].amount} how much you money you want to take as a loan `));
            if (loanQuestion > loginPerson[0].amount * 0.2) {
                alert(`you can't take that mutch as a loan you can take just 20% of your amount witch is ${loginPerson[0].amount * 0.2}`)
                loan()
            } else {
                loginPerson[0].amount += loanQuestion;
                loginPerson[0].loan += loanQuestion;
                loginPerson[0].history.push(`${today()} take a loan of ${loanQuestion}`)
            }
            services()
        }
        function invest() {
            let investQuestion = parseInt(prompt(`your current amount is ${loginPerson[0].amount} how much you money you want to put as an invest`));
            if (investQuestion > loginPerson[0].amount) {
                alert(`your current amount is ${loginPerson[0].amount} you don't have ${investQuestion} on your account`)
                invest()
            } else {
                loginPerson[0].amount -= investQuestion
                loginPerson[0].invest += investQuestion
                loginPerson[0].history.push(`${today()} invest  ${investQuestion}`)
            }
            services()
        }
        function history() {
            alert(loginPerson[0].history.join('\r\n'));
            services()
        }


        switch (servicesQuestion) {
            case `log out`:
                logOut()
                break;
            case `withdraw`:
                withdraw()
                break;
            case `deposit`:
                deposit();
                break;
            case `loan`:
                loan();
                break;
            case `invest`:
                invest();
                break;
            case `history`:
                history();
                break;
            default:
                alert(`unvalide input ${servicesQuestion} doesn't match any servie`);
                services()
                break;
        }
    }
}

function changePassword() {
    let emailQuestion = prompt(`enter your email to change your password`);

    for (let i = 0; i < Database.users.length; i++) {
        const person = Database.users[i];
        if (emailQuestion != person.email) {
            alert(`this email doesn't exist`)
            return changePassword()
        } else {
            let changePasswordQuestion = prompt(`enter the new password`);
            let confirmChangePasswordQuestion = prompt(`enter the password again`);
            while (changePasswordQuestion != confirmChangePasswordQuestion) {
                alert(`the password that you give at the first time doesn't match that password`)
                changePasswordQuestion = prompt(`enter the new password`);
                confirmChangePasswordQuestion = prompt(`enter the password again`);
            }
            person.password = confirmChangePasswordQuestion
        }
    }
    main()
}

function main() {
    let mainQuestion = prompt(`signup login or change password`)
    switch (mainQuestion) {
        case `signup`:
            signUp()
            break;
        case `login`:
            logIn()
            break;
        case `change password`:
            changePassword()
            break;
        default:
            alert(`${mainQuestion} doesn't match choises`)
            main()
    }
}

main()

