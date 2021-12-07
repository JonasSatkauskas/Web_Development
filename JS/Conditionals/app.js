// // console.log("Before")
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random);
// }
// // console.log("After")


// let dayOfWeek = prompt('Enter a day of a week').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log('I LOVE SATURDAYS')
// } else if (dayOfWeek === 'friday') {
//     console.log('FRIDAYS ARE VERY NICE')
// } else if (dayOfWeek === 'tuesday') {
//     console.log('meh')
// } else if (dayOfWeek === 'wednesday') {
//     console.log('meh')
// } else if (dayOfWeek === 'thursday') {
//     console.log('meh')
// } else {
//     console.log('Comes from else')
// }


// const age = 4;

// if (age < 5) {
//     console.log('You are a baby. You can go for free')
// } else if (age < 10) {
//     console.log('You are a child. You pay $10')
// } else if (age < 65) {
//     console.log('You are an adult. You pay $20')
// } else {
//     console.log('You are a senior. You pay $10')
// }


const password = prompt('Enter a new password')

if (password.length >= 6) {
    // Check if there is a space
    if (password.indexOf(' ') === -1) {
        console.log('Valid password')
    } else {
        console.log('Password cannot contain spaces')
    }

} else {
    console.log('PASSWORD TOO SHORT! MUST BE 6+ CHARS')
}