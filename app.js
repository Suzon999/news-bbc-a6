const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
        .catch(error => displayCatagory(error))
}

const displayCatagory = (catagorys) => {
    const catagorysItems = document.getElementById("load-catagorious");
    for (const catagory of catagorys) {
        console.log(catagory)
        const li = document.createElement("li");
        li.classList.add('flex-items')
        li.innerHTML = `<a onclick= " loadCatagoryDetails(${catagory.category_id} ) " href="">${catagory.category_name} </a>`
        catagorysItems.appendChild(li)
    }
}


loadCatagory();