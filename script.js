document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const fullArticle = document.querySelector('.full-article');
    const articleContent = document.querySelector('.article-content');
    const backButton = document.querySelector('.back-button');

    const showCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    showCards();
    window.addEventListener('scroll', showCards);

    document.querySelectorAll('.read-more').forEach((button, index) => {
        button.addEventListener('click', () => {
            const article = cards[index].querySelector('.full-content').innerHTML;
            articleContent.innerHTML = article;
            document.querySelector('.cards').classList.add('hidden');
            fullArticle.classList.add('show');
        });
    });

    backButton.addEventListener('click', () => {
        document.querySelector('.cards').classList.remove('hidden');
        fullArticle.classList.remove('show');
    });
});
