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

// load catagory data load -------------------------------------------------------
const loadCategoryDetails = (id) => {
    document.getElementById("spinner").style.display = "block";
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => displayCategoryDetails(data.data))
        .catch(error => displayCategoryDetails(error))
}
// display catagory --------------------------------------------------------------=
const displayCategoryDetails = details => {
    document.getElementById("spinner").style.display = "none";

    // length chack -----------------------------------------------------------------
    if (details.length > 0) {
        const totallength = details.length;
        const inputfildText = document.getElementById('input-id');
        inputfildText.innerText = 'Total' + ' ' + '[' + ' ' + totallength + ' ' + ']' + ' Update';
    } else if (details.length <= 0) {

        const totallength = details.length;
        const inputfildText = document.getElementById('input-id');
        inputfildText.innerText = 'Total ' + ' ' + 'Not Update ';


    }
    // console.log(details)
    const newsBodyContainer = document.getElementById('news-body');
    newsBodyContainer.innerHTML = ''
    details.forEach(detail => {
        // console.log(detail._id);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
                <div class="card mb-3 p-4" >
                <div class="row g-0">
                    <div class="col-md-3 d-flex justify-content-center">
                    <img src="${detail.thumbnail_url}" class="img-fluid rounded-start mx-auto  " alt="...">
                    </div>
                <div class="col-md-9">
                    <div class="card-body">
                    <h4 class="card-title">${detail.title}</h4>
                    <p class="card-text my-4">${detail.details.slice(0, 450) + '.........'}</p>
                    <div class="row d-flex ">
                    <div class="col-lg-4  d-flex">
                        <img class="w-25 rounded-circle me-3" src="${detail.author.img}" alt="">
                        <div>
                        <h6>${detail.author.name ? detail.author.name : 'NO Name Found'}</h6>
                        <p> ${detail.author.published_date ? detail.author.published_date : 'NO Date Found'}</p>
                    
                       </div>
                        
                    </div>

                    <div class="col-md-3 d-flex ">
                                          <h5 class=' me-1 class= "py-2"' ><i class="fa-regular fa-eye"></i></h5>
                                         <h5 >${detail.total_view ? detail.total_view : 'NO views'}   M</h5>
                                 </div>
                    
                    <div class="col-lg-3 d-flex">
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-regular fa-star"></i></h5>
                    <h5><i class="fa-regular fa-star"></i></h5>
                    </div>

                    <div class="col-lg-2">
                    <button type="button" onclick="viewClickDetails('${detail._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    more view</button>
                    </div>
                   
               
                </div>
            </div>
                `;
        newsBodyContainer.appendChild(cardDiv);

    })

}

// news details data load --------------------------------------------------

loadCategoryDetails();
loadCatagory();


// <==========================modal section js code ==========================>
const viewClickDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => viewClickDetailsDisplay(data))
        .catch(error => viewClickDetailsDisplay(error))

}

const viewClickDetailsDisplay = details => {

    console.log(details)
    const modal = document.getElementById('exampleModalLabel');
    modal.innerHTML = ''

    try {
        const creatediv = document.createElement('div');

        creatediv.innerHTML = `
                            <div class="row">
                                 <div class="col-lg-12">
                                         <img class="w-100"  src="${details.data[0].image_url}" alt="" >
                                         <h3 class="card-text my-3">${details.data[0].title}</h3>
                                         <p>${details.data[0].details.slice(0, 250) + ' ' + 'more.....'}</p>
                                         <h5 h5 > ${details.data[0].author.published_date}</h5 >
                                         <div class= "d-flex align-items-center justify-content-center ">
                                           <div class = "mx-auto">
                                           <img class="w-25 rounded-circle my-2 d-block"  src="${details.data[0].author.img}" alt="" >
                                           <p class = 'text '>${details.data[0].author.name ? details.data[0].author.name : 'No author Name!'}</p>
                                           </div>
                                         </div>
                                         <div class="col-md-3 d-flex ">
                                          <h5 class='mx-2 class= "py-2"' ><i class="fa-regular fa-eye"></i></h5>
                                         <h5 > ${details.data[0].total_view ? details.data[0].total_view : 'not view'} M</h5>
                                 </div>
                             </div>
                             </div>
     `;
        modal.appendChild(creatediv);

    } catch (err) {
        // console.log(err)
    }

}

viewClickDetailsDisplay()
viewClickDetails();


