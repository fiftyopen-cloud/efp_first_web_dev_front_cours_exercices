let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(cats => {
        console.log('nombre de chats', cats.length, 'chats', cats);

        for (let i=0; i < cats.length; ++i) {
            const cat = cats[i];
            const cat_img = document.createElement('img');
            cat_img.setAttribute('src', cat.url);
            cat_img.setAttribute('alt', cat.id);
            cat_img.setAttribute('width', '200px');
            cat_img.setAttribute('height', '200px');
            gallery.appendChild(cat_img);
        }
    });
});

