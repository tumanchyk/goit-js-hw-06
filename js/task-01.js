const categoriesEl = document.querySelectorAll('li.item')
const categoryList = Array.from(categoriesEl)

const getCategoryInfo = (arr)=>{
    //variant-1
    return arr.map(category => {
    const titleEl = category.querySelector('h2')
    const listEl = category.querySelectorAll('li')
    console.log({Category: `${titleEl.textContent}`, Elements: listEl.length})
   })

    //variant-2
    // for(const category of arr){
    // const titleEl = category.querySelector('h2')
    // const listEl = category.querySelectorAll('li')
    // console.log({Category: `${titleEl.textContent}`, Elements: listEl.length})     
    // }
}
getCategoryInfo(categoryList)


const quantityOfCategories = categoriesEl.length
console.log('Number of categories:', quantityOfCategories)
