function takeANumber(deli) {
    let position = 1;
    console.log(`Welcome, You are number ${position} in line.`);
    position++;
}

function nowServing(deli) {
    if (deli.length === 0) {
        console.log("There is nobody waiting to be served!");
    } else {
        console.log(`Now serving ${deli[0]}`);
        deli.shift();
    } 
}

function currentLine(deli) {
    if (deli.length === 0) {
        console.log("The line is currently empty.");
    } else {
        let msg = '';
        for (let i = 0; i < deli.length; i++) {
            msg += `${i+1}. ${deli[i]}, `;
        }
        console.log(`The line is currently: ${msg}`);
    }
}