function multiplicative_persistence(number){
    const value = number.toString();
    if (value.length === 1) {
      return 0;
    }
    const multiply = value.split('').reduce((x, y) => x * y, 1);
    return 1 + multiplicative_persistence(multiply);
}
console.log(multiplicative_persistence(39));