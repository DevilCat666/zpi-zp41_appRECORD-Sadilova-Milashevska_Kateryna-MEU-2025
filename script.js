document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо всі елементи бокового меню (для всіх лабораторних)
    const navItems = document.querySelectorAll('.sidebar .nav-item');
    // Отримуємо всі секції контенту (для всіх лабораторних)
    const contentSections = document.querySelectorAll('.content-section');

    // Спочатку приховуємо всі секції контенту
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Обробка кліку по кожному елементу меню
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Зняти клас "active" з усіх елементів меню
            navItems.forEach(i => i.classList.remove('active'));

            // Додати клас "active" до поточного елемента
            item.classList.add('active');

            const contentType = item.getAttribute('data-content');

            // Приховуємо всі секції контенту
            contentSections.forEach(section => section.style.display = 'none');

            // Показуємо тільки відповідну секцію
            const activeSection = document.getElementById(contentType);
            if (activeSection) {
                activeSection.style.display = 'block'; // Показуємо активну секцію
            }
        });
    });
});
