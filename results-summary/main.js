let data = "data.json"

fetch(data).then(response => {
    if (response.ok) {
        return response.json()
    }
    throw new Error("Error with fetching")
}).then(data => {
    let total = 0
    let max = 0
    for (let obj of data) {
        let category = obj.category.toLowerCase()
        let score = obj.score
        total += score
        max++

        let doc = document.querySelector(`.${category}`).querySelector(".score").querySelector(".s")
        doc.innerHTML = score
    }
    let resulttotal = document.querySelector(".resultnumber")
    resulttotal.innerHTML = Math.floor(total/max)
}).catch(error => {
    throw new Error(error)
})