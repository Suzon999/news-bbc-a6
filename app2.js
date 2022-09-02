const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
        .catch(error => displayCatagory(error))
}
loadCatagory();
const displayCatagory = categories => {
    // console.log(categories);
    const categoryContainer = document.getElementById("load-catagorious");
    categories.forEach(category => {
        // console.log(category)
        const categoryDiv = document.createElement('li');
        categoryDiv.classList.add('flex-items');
        categoryDiv.innerHTML = `
        <a onclick="loadCategoryDetails('${category.category_id}')" class="nav-link">${category.category_name}</a>
    `;
        categoryContainer.appendChild(categoryDiv);
    })
}


const loadCategoryDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => console.log(data.data))
        .catch(error => console.log(error))
}
loadCategoryDetails();

// const displayCategoryDetails = details => {
//     const newsBodyContainer = document.getElementById('news-body');
//     console.log(details)
//     details.forEach(detail => {
//         console.log(detail);
//         const cardDiv = document.createElement('div');
//         cardDiv.innerHTML = `
//         <div class="card mb-3" >
//         <div class="row g-0">
//             <div class="col-md-4">
//             <img src="${detail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//             </div>
//         <div class="col-md-8">
//             <div class="card-body">
//             <h5 class="card-title">${detail.title}</h5>
//             <p class="card-text">${detail.details}</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         </div>
//     </div>
//         `;
//         newsBodyContainer.appendChild(cardDiv);

//     })
// }





