const  kareReBabu=  function karerebabu() {
    console.log('Kare Re Babu! Thik ba?')
}
const Joda = function(a, b) {
    return `la jod dehni: ${a} + ${b} = ${a + b}`;
};
console.log(Joda(2, 3));
const ultaKara = function(a) {
    return `la ulta kar Dehni: ${a} = ${a.split('').reverse().join('')}`;
}
console.log(ultaKara('Babu'));
module.exports = kareReBabu