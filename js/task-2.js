function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray); // Об'єднуємо два масиви
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength); // Повертаємо копію масиву з довжиною maxLength
    }
    return newArray; // Повертаємо весь новий масив, якщо його довжина не перевищує maxLength
}