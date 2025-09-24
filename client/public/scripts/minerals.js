const renderMinerals = async () => {
    const response = await fetch('/minerals')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(mineral => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${mineral.image})`

            const mineralName = document.createElement('h3')
            mineralName.textContent = mineral.name
            bottomContainer.appendChild(mineralName)

            const mineralDescription = document.createElement('p')
            mineralDescription.innerHTML = `<i>${mineral.description}</i><br></br>`
            bottomContainer.appendChild(mineralDescription)

            const mineralSellPrice = document.createElement('p')
            mineralSellPrice.innerHTML = `<strong>Sell Price</strong>: ${mineral.sellPrice}`
            bottomContainer.appendChild(mineralSellPrice)

            const mineralLocation = document.createElement('p')
            mineralLocation.innerHTML = `<strong>Found in</strong>: ${mineral.location.join(', ')}`
            bottomContainer.appendChild(mineralLocation)

            const mineralUsedIn = document.createElement('p')
            mineralUsedIn.innerHTML = `<strong>Used in</strong>: ${mineral.usedIn.join(', ')}`
            bottomContainer.appendChild(mineralUsedIn)

            const link = document.createElement('a')
            link.textContent = 'Learn More'
            link.setAttribute('role', 'button')
            link.href = `/minerals/${mineral.id}`
            link.classList.add('learn-more-btn')
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Minerals Found. 😥'
        mainContent.appendChild(message)
    }
}

renderMinerals()
