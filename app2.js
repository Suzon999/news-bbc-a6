const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
        .catch(error => displayCatagory(error))
}

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
        .then(data => displayCategoryDetails(data.data))
        .catch(error => displayCategoryDetails(error))
}

const displayCategoryDetails = details => {

    // console.log(details)
    const newsBodyContainer = document.getElementById('news-body');
    newsBodyContainer.innerHTML = ''
    details.forEach(detail => {
        console.log(detail);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
                <div class="card mb-3 p-4" >
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${detail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h4 class="card-title">${detail.title}</h4>
                    <p class="card-text my-3">${detail.details.slice(0, 400)}</p>
                    <div class="row">
                    <div class="col-md-4 d-flex  justify-content-between">
                        <img class="w-25 rounded-circle me-3" src="${detail.author.img}" alt="">
                        <div>
                        <h6>${detail.author.name ? detail.author.name : 'NO Name Found'}</h6>
                        <p> ${detail.author.published_date ? detail.author.published_date : 'NO Date Found'}</p>
                         </div>
                       
                    </div>
                    <div class="col-md-4">
                        <p></p>
                        <h4> ${detail.total_view} M</h4>
                    </div>
                    <div class="col-md-4">
                        <h4 class='btn btn-primary'>Details</h4>
                    </div>
                   
               
                </div>
            </div>
                `;
        newsBodyContainer.appendChild(cardDiv);

    })
    // spinner(false)
}
// spenir showing 
// document.getElementById("").innerHTML = addEventListener("click", function () {
//     // start loder 
//     spinner(true)

// })
// // spinner function 
// const spinner = isLoading => {
//     const loderSection = document.getElementById("loading");
//     if (isLoading === true) {
//         loderSection.classList.remove("d-none");
//     }
//     else {
//         loderSection.classList.add("d-none");
//     }
// }




loadCategoryDetails();
loadCatagory();



