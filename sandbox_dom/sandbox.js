document.addEventListener('click', evenment);

function getTotal(reset = false) {
    let allArticles = document.querySelectorAll('article');
    let total = 0;
    let i = 0;
    while (allArticles.length > i) {
        let article = allArticles[i];
        let strong = article.querySelector('.value');
        
        if (reset) {
            strong.innerText = 0;
        } else {
            total += parseInt(strong.textContent);
        }
        
        ++i;
    }
    
    document.getElementById('total').innerText = total;
}

function evenment(e) {
    if (e.target.classList.contains('btn') || e.target.classList.contains('special')) {
        console.log(e.target);
        let article = e.target.closest('article');
        let strong = article.querySelector('.value');
        strong.innerText = parseInt(strong.textContent) + 1;
        getTotal();
    }

    getTotal(e.target.id === 'reset');
}