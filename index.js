const kareReBabu = function karerebabu() {
    console.log('Kare Re Babu! Thik ba?');

    const Joda = function(a, b) {
        return `la jod dehni: ${a} + ${b} = ${a + b}`;
    };

    const ultaKara = function(a) {
        return `la ulta kar Dehni: ${a} = ${a.split('').reverse().join('')}`;
    };

   return {
    Joda: Joda,
    ultaKara : ultaKara
   }
};

// Export both kareReBabu function and Joda function
module.exports = kareReBabu;
