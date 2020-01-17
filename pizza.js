(function() {
    const config = { attributes: false, childList: true, subtree: true }
<<<<<<< HEAD
    const PIZZA_SIZE = '100px'
    const PIZZA_TRANSFORM = '50px'

    const pizzaSpinner = getPizzaSpinner()
=======
    const PIZZA_SIZE = '50px'
    const PIZZA_TRANSFORM = '25px'

    const pizzaSpinner = getPizzaSpinner("")
    const pizzaSpinner2 = getPizzaSpinner("loader-spin 1s infinite linear")
>>>>>>> donut mayhem
    const observer = new MutationObserver(callback)
    const loading = document.getElementById('loading')
    const targetNode = document.body

    // Initialization block

    if (loading) {
<<<<<<< HEAD
        loading.parentNode.replaceChild(pizzaSpinner, loading)
=======
       loading.parentNode.replaceChild(pizzaSpinner, loading)
>>>>>>> donut mayhem
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
<<<<<<< HEAD
            loaderSpinner.target.parentNode.replaceChild(pizzaSpinner, loaderSpinner.target)
        }
    }

    function getPizzaSpinner () {
=======
            loaderSpinner.target.parentNode.replaceChild(pizzaSpinner2, loaderSpinner.target)
        }
    }

    function getPizzaSpinner (styleAnimation) {
>>>>>>> donut mayhem
        const newEl = document.createElement('img')
        newEl.style.width = PIZZA_SIZE
        newEl.style.height = PIZZA_SIZE
        newEl.style.marginLeft = 0
        newEl.style.marginTop = 0
        newEl.style.transformOrigin = `${PIZZA_TRANSFORM} ${PIZZA_TRANSFORM}`
<<<<<<< HEAD
        newEl.style.animation = 'loader-spin 2s infinite linear'
        newEl.classList.add('utils-loader-spinning')
        newEl.classList.add('utils-loader-content')
        newEl.src = chrome.runtime.getURL('images/pizza128.png')
=======
        newEl.style.animation = styleAnimation
        newEl.classList.add('utils-loader-spinning')
        newEl.classList.add('utils-loader-content')
        newEl.src = chrome.runtime.getURL('images/donut128.png')
>>>>>>> donut mayhem
        return newEl
    }
}())
