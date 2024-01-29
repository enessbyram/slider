let cars = [
    {
        name: "BMW M2",
        image: "https://ares.shiftdelete.net/2022/09/2023-bmw-m2-fotografi-sizdirildi.jpg",
        link: "https://shiftdelete.net/2023-bmw-m2-fotografi-sizdirildi"
    },
    {
        name: "BMW M3 GTR",
        image: "https://e1.pxfuel.com/desktop-wallpaper/663/232/desktop-wallpaper-awesome-bmw-m3-gtr-for-mobile-bmw-m3-gtr.jpg",
        link: "https://www.pxfuel.com/tr/desktop-wallpaper-notng"
    },
    {
        name: "BMW i",
        image: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/i-series/i5/2023/Navigation/i5-bev.png",
        link: "https://www.bmw.com.tr/tr/all-models/bmw-i.html"
    },
    {
        name: "MERCEDES CLS",
        image: "https://www.mercedes-benz.com.tr/content/turkey/tr/passengercars/models/coupe/c257-22-2/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image.component.damq1.3347597554697.jpg/mercedes-benz-cls-c257-exterior-hotspot-start-3302x1858-11-2022.jpg",
        link: "https://www.mercedes-benz.com.tr/passengercars/models/coupe/cls/overview.html"
    },
    {
        name: "Range Rover",
        image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/range-rover-ev-autocar-render-front-quarter.jpg?itok=-raRsADf",
        link: "https://www.autocar.co.uk/car-news/new-cars/electric-range-rover"
    },
    {
        name: "Renault Clio",
        image: "https://cdn.filomingo.com.tr/images/d0f48578-92da-4ee5-8b60-b2c1b2cd07ea/renault-clio-evolution-1-0-tce-x-tronic-90-bg-22076239880901308.jpg",
        link: "https://www.filomingo.com.tr/yillik-arac-kiralama/renault/clio"
    },
    {
        name: "Opel Corsa",
        image: "https://stellantis3.dam-broadcast.com/medias/domain12808/media107847/2354232-6nhf7kw4lp-whr.jpg",
        link: "https://www.media.stellantis.com/tr-tr/opel/press/yeni-opel-corsa-ekimde-tuerkiye-de"
    },
    {
        name: "Audi A6",
        image: "https://hips.hearstapps.com/hmg-prod/images/2024-audi-a6-109-64761a1aaf416.jpg?crop=0.508xw:0.572xh;0.197xw,0.257xh&resize=768:*",
        link: "https://www.caranddriver.com/audi/a6"
    },
    {
        name: "Seat Leon",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
        link: "https://tr.wikipedia.org/wiki/SEAT_León"
    },
    {
        name: "Hyundai i20",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hyundai_i20_%28BC3%29_IMG_3552.jpg/640px-Hyundai_i20_%28BC3%29_IMG_3552.jpg",
        link: "https://tr.wikipedia.org/wiki/Hyundai_i20"
    }
]

let index = 0
let settings = {
    duration : '2000',
    random: false
}
let interval

const photos = document.getElementById("photos")
const backBtn = document.getElementById("back")
const nextBtn = document.getElementById("next")
const readMore = document.getElementById("read-more")
const carName = document.getElementById("text")

function showSlide(index) {
    photos.setAttribute('src', cars[index].image)
    carName.innerText = cars[index].name
    readMore.setAttribute('href', cars[index].link)
}

init(settings)

nextBtn.addEventListener('click', () => {
    if(index == 9) {
        index = 0
        showSlide(index)
    } else {
        index++
        showSlide(index)
    }
    console.log(index)
})

backBtn.addEventListener('click', () => {
    if(index == 0) {
        index = 9
        showSlide(index)
    } else {
        index--
        showSlide(index)
    }
    console.log(index)
})

document.querySelectorAll(".arrow").forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval)
    })
})

document.querySelectorAll(".arrow").forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        init(settings)
    })
})

function init(settings) {

    interval = setInterval(function() {
        let prev;
        if(settings.random == true) {
            // random index
            do {
                index = Math.floor(Math.random() * cars.length)
            } while (index == prev) {
                prev = index
            }
        } else {
            // artan index üretme
            if (cars.length == index + 1) {
                index = -1
            }
            index++
            showSlide(index)
            console.log(index)
        }
        showSlide(index)
    }, settings.duration)
}

