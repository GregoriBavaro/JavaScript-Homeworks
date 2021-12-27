

function automatedTellerMachine(balance, amount = prompt('Enter your amount please 😄')) {
    const total = `You have withdrawn ${amount} euros 💶, now your balance is ${balance - amount} euros 💶.`;
    if(amount > 500) {
        console.log("Non-sufficient funds 🤕")
    } else if (amount < 500) {
        console.log(total);
    }
    return total
}


const yourBalance = automatedTellerMachine(500, );
