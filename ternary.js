// challenge 2
if (num % 3 == 0 || num % 5 == 0)
{
    console.log("This number is divisible by 3 or 5")
}
else
{
    console.log("This number is not divisible by 3 or 5")
}

let num = 45;
console.log(num % 3 == 0 || num % 5 == 0 ? "This number is divisible by 3 or 5": "This number is not divisible by 3 or 5")


const correctPin = (pin) => {
    if (pin == 1234)
    {
        return true;
    }
    else 
    {
        return false;  
    }
}

const correctPin = (pin) => {
    console.log(pin == 1234 ? true : false)
} 
correctPin(1234)