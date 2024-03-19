
function generateOTP(){
    let num=Math.random()*9000
    num=Math.floor(num) + 1000
    return num
}
console.log(`Here is your otp: ${generateOTP()}`);