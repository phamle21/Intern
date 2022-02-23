$(document).ready(() => {
    var i = 0
    $('.list-item-testimonials').eq(i).addClass("show")
    $('.li-testimonials').eq(i).addClass("text-dark fs-1")
    $('.li-testimonials').eq(2).addClass("li-item-none-active")

    var listLength = $('.list-item-testimonials').length

    // btn-up
    $('#testimonials-up').on('click', () => {
        if ((i - 1) < 0) {
            i = listLength - 1
        } else {
            i--
        }

        $('.list-item-testimonials').css({ "min-width": $('.wrap-testimonials').width() })
        $('.wrap-testimonials').css({ "min-height": $('.wrap-testimonials').height() })
        $('.list-item-testimonials').css({ "display": "none" })
        $('.list-item-testimonials').eq(i).toggle("show")

        $('.li-testimonials').removeClass("text-dark")
        $('.li-testimonials').removeClass("li-item-none-active")
        $('.li-testimonials').eq(i).addClass("text-dark")
        if (i == 0) {
            $('.li-testimonials').eq(2).addClass("li-item-none-active")
        }
        if (i == 2) {
            $('.li-testimonials').eq(0).addClass("li-item-none-active")
        }
    })

    // btn-down
    $('#testimonials-down').on('click', () => {
        if (i + 1 >= listLength) {
            i = 0
        } else {
            i++
        }

        $('.list-item-testimonials').css({ "min-width": $('.wrap-testimonials').width() })
        $('.wrap-testimonials').css({ "min-height": $('.wrap-testimonials').height() })
        $('.list-item-testimonials').css({ "display": "none" })
        $('.list-item-testimonials').eq(i).toggle("show")

        $('.li-testimonials').removeClass("text-dark")
        $('.li-testimonials').removeClass("li-item-none-active")
        $('.li-testimonials').eq(i).addClass("text-dark")
        if (i == 0) {
            $('.li-testimonials').eq(2).addClass("li-item-none-active")
        }
        if (i == 2) {
            $('.li-testimonials').eq(0).addClass("li-item-none-active")
        }
    })

    $('.li-testimonials').each((j) => {
        $('.li-testimonials').eq(j).on('click', () => {
            $('.list-item-testimonials').css({ "min-width": $('.wrap-testimonials').width() })
            $('.wrap-testimonials').css({ "min-height": $('.wrap-testimonials').height() })
            $('.list-item-testimonials').css({ "display": "none" })
            $('.list-item-testimonials').eq(j).toggle("show")

            $('.li-testimonials').removeClass("text-dark")
            $('.li-testimonials').removeClass("li-item-none-active")
            $('.li-testimonials').eq(j).addClass("text-dark")
            if (j == 0) {
                $('.li-testimonials').eq(2).addClass("li-item-none-active")
            }
            if (j == 2) {
                $('.li-testimonials').eq(0).addClass("li-item-none-active")
            }
        })
    })
})

//Icon Heart Hover
$('#icon-heart-hover').on('mouseover', () => {
    $('#tooltips-heart').removeClass("d-none")
})
$('#icon-heart-hover').on('mouseout', () => {
    $('#tooltips-heart').addClass("d-none")
})

//Services hover
$('.img-services').each()



