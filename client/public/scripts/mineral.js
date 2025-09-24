const renderMineral = async () => {
    const requestedId = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/minerals')
    const data = await response.json()

    const mineralContent = document.getElementById('mineral-content')

    let mineral

    mineral = data.find(mineral => mineral.id === requestedId)

    if (mineral) {
        document.getElementById('image').src = mineral.image
        document.getElementById('name').textContent = mineral.name
        document.getElementById('description').innerHTML = `<i>${mineral.description}</i><br></br>`
        document.getElementById('sellPrice').innerHTML = `<strong>Sell Price</strong>: ${mineral.sellPrice}`
        document.getElementById('location').innerHTML = `<strong>Found in</strong>: ${mineral.location.join(', ')}`
        document.getElementById('usedIn').innerHTML = `<strong>Used in</strong>: ${mineral.usedIn.join('<br>')}`
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Mineral Found. 😥'
        mineralContent.appendChild(message)
    }
}

renderMineral()