(function() {
    const config = { attributes: false, childList: true, subtree: true }
    const PIZZA_SIZE = '100px'
    const PIZZA_TRANSFORM = '50px'

    const pizzaSpinner = getPizzaSpinner()
    const observer = new MutationObserver(callback)
    const loading = document.getElementById('loading')
    const targetNode = document.body

    // Initialization block

    if (loading) {
        loading.parentNode.replaceChild(pizzaSpinner, loading)
    }

    observer.observe(targetNode, config)

    // Functions block

    function callback (mutationsList, observer) {
        const loaderSpinner = mutationsList
            .find(mutation =>
                mutation.type === 'childList'
                && typeof mutation.target.className === 'string'
                && mutation.target.className.includes('utils-loader-spinning'))

        if (loaderSpinner) {
            observer.disconnect()
            loaderSpinner.target.parentNode.replaceChild(pizzaSpinner, loaderSpinner.target)
        }
    }

    function getPizzaSpinner () {
        const newEl = document.createElement('img')
        newEl.style.width = PIZZA_SIZE
        newEl.style.height = PIZZA_SIZE
        newEl.style.marginLeft = 0
        newEl.style.marginTop = 0
        newEl.style.transformOrigin = `${PIZZA_TRANSFORM} ${PIZZA_TRANSFORM}`
        newEl.style.animation = 'loader-spin 2s infinite linear'
        newEl.classList.add('utils-loader-spinning')
        newEl.classList.add('utils-loader-content')
        newEl.src = chrome.runtime.getURL('images/pizza128.png')
        return newEl
    }
}())
