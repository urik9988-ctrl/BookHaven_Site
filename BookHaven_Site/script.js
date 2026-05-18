document.addEventListener('DOMContentLoaded', () => {
    console.log("BookHaven Library Loaded.");

    // Пример: Добавление обработчика клика на все карточки
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.dataset.genre;
            console.log(`Clicked on book from genre: ${genre}`);
            // В реальной системе здесь можно вызывать модальное окно или прокручивать к разделу
        });
    });

    // Дополнительная логика может быть добавлена здесь (например, фильтрация по жанрам)
});
