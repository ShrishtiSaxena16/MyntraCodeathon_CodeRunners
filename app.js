// app.js
// app.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is running");
    // Your existing code
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('products');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                productContainer.appendChild(productElement);
            });
        });

    // Fetch and render designers
    fetch('/api/designers')
        .then(response => response.json())
        .then(designers => {
            const designerContainer = document.getElementById('designer-list');
            designers.forEach(designer => {
                const designerElement = document.createElement('div');
                designerElement.classList.add('designer');
                designerElement.innerHTML = `
                    <img src="${designer.image}" alt="${designer.name}">
                    <h3>${designer.name}</h3>
                    <p>${designer.bio}</p>
                `;
                designerContainer.appendChild(designerElement);
            });
        });

    // Fetch and render influencers
    fetch('/api/influencers')
        .then(response => response.json())
        .then(influencers => {
            const influencerContainer = document.getElementById('influencer-list');
            influencers.forEach(influencer => {
                const influencerElement = document.createElement('div');
                influencerElement.classList.add('influencer');
                influencerElement.innerHTML = `
                    <img src="${influencer.image}" alt="${influencer.name}">
                    <h3>${influencer.name}</h3>
                    <p>${influencer.bio}</p>
                `;
                influencerContainer.appendChild(influencerElement);
            });
        });
});

