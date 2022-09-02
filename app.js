const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.data))
        .catch(error => displayCatagory(error))
}

const displayCatagory = (catagorys) => {
    const catagorysItems = document.getElementById("load-catagorious");
    catagorysItems.classList.add('flex-items')
    catagorysItems.innerText = catagorys
}
loadCatagory();