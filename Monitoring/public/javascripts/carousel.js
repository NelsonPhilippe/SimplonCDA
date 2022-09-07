window.addEventListener('load', () => {
    new Carousel(document.querySelector('#wrapper'), {
        slidesVisible: 3
    })
})


class Carousel {

    /**
     * 
     * @param {element}
     * @param {Object} options
     * @param {Object} options.slidesToScroll 
     * @param {Object} options.slidesVisible
     * @param {boolean} options.loop
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: true
        }, options)
        let children = [].slice.call(element.children)

        this.currentItem = 0

        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map((child) => {
            let item = this.createDivWithClass("item_carousel")
            item.appendChild(child)
            this.container.appendChild(item)
            return item;
        })
        this.setStyle()
        this.createNavigation()

        this.moveCallbacks.forEach((cb) => {
            cb(0)
        })
    }

    setStyle(){
        let ratio = this.items.length / this.options.slidesVisible;
        this.container.style.width = (ratio * 100) + 'vw';
        this.container.style.height ='100%';

        this.items.forEach((item) => {
            item.style.width = ((100 / this.options.slidesVisible) + "%")
        })

    }

    createNavigation(){
        let nextButton = this.createButtonWithClass("slider-right")
        let prevButton = this.createButtonWithClass("slider-left")


        this.element.appendChild(nextButton)
        this.element.appendChild(prevButton)

        nextButton.addEventListener('click', () => {
            console.log('next')
            this.goTo(this.currentItem + this.options.slidesToScroll)
        })
        prevButton.addEventListener('click', () => {
            console.log('prev')
            this.goTo(this.currentItem - this.options.slidesToScroll)
        })

        this.onMove((index) => {
            if(index === 0){
                prevButton.classList.add('invisible')
            }else {
                prevButton.classList.remove('invisible')
            }

            if(this.items[this.currentItem + this.options.slidesVisible] === undefined){
                nextButton.classList.add('invisible')
            }else{
                nextButton.classList.remove('invisible')
            }
        })

    }

    onMove(cb){
        this.moveCallbacks.push(cb)
    }

    goTo(index){
        if(index < 0){
            index = this.items.length - this.options.slidesVisible
        } else if(index >= this.items.length){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d('+ translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach((cb) => {
            cb(index)
        })
    }

    createDivWithClass(className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div;
    }

    createButtonWithClass(className){
        let div = document.createElement('button')
        div.setAttribute('class', className)
        return div;
    }
}

