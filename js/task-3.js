function filterArray(numbers, value) {
    const filteredNumbers = []; // Створюємо порожній масив для підходящих чисел

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]); // Додаємо число до масиву, якщо воно більше за value
        }
    }

    return filteredNumbers; // Повертаємо новий масив з підходящими числами
}