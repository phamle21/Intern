$(document).ready( () => {
    var i=0 
    $('.list-item-testimonials').eq(i).addClass("show")

    var listLength = $('.list-item-testimonials').length

    $('#testimonials-up').on('click', () =>{
        if( (i-1)<0 ){
            i = listLength-1
        }else{
            i--
        }
        // $('.list-item-testimonials').removeClass("show")
        // $('.list-item-testimonials').eq(i).addClass("show")
        $('.list-item-testimonials').css({"min-width":$('.wrap-testimonials').width()})
        $('.list-item-testimonials').css({"display":"none"})
        $('.list-item-testimonials').eq(i).toggle("show")

    })

    $('#testimonials-down').on('click', () =>{
        if( i+1 >=listLength ){
            i = 0
        }else{
            i++
        }
        var pow = 0
        if( pow>-100 ){
            $('.list-item-testimonials').eq(i).css({"background-color":"red"})
            // $('.list-item-testimonials').eq(i).css({"margin-top":pow})
            // pow--
            // alert(pow)
        }

        // $('.list-item-testimonials').removeClass("show")
        // $('.list-item-testimonials').eq(i).addClass("show")
        // $('.list-item-testimonials').css({"min-width":$('.wrap-testimonials').width()})
        // $('.list-item-testimonials').css({"display":"none"})
        // $('.list-item-testimonials').eq(i).toggle("show")

    })
})


