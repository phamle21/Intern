$(document).ready( () => {
    var i=0 
    $('.list-item-testimonials').eq(i).addClass("show")

    var listLength = $('.list-item-testimonials').length

        // btn-up
    $('#testimonials-up').on('click', () =>{
        if( (i-1)<0 ){
            i = listLength-1
        }else{
            i--
        }
        // $('.list-item-testimonials').removeClass("show")
        // $('.list-item-testimonials').eq(i).addClass("show")
        $('.list-item-testimonials').css({"min-width":$('.wrap-testimonials').width()})
        $('.wrap-testimonials').css({"min-height":$('.wrap-testimonials').height()})
        $('.list-item-testimonials').css({"display":"none"})
        $('.list-item-testimonials').eq(i).toggle("show")

    })

        // btn-down
    $('#testimonials-down').on('click', () =>{
        if( i+1 >=listLength ){
            i = 0
        }else{
            i++
        }

        // $('.list-item-testimonials').removeClass("show")
        // $('.list-item-testimonials').eq(i).addClass("show")
        $('.list-item-testimonials').css({"min-width":$('.wrap-testimonials').width()})
        $('.wrap-testimonials').css({"min-height":$('.wrap-testimonials').height()})
        $('.list-item-testimonials').css({"display":"none"})
        $('.list-item-testimonials').eq(i).toggle("show")

    })


    $('.icon-mess-subscribe').css({
        "margin-left":$('#subscribe').width(),
        "margin-top": -$('.icon-mess-subscribe').height()
    })
})


