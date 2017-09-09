

$(document).ready(onReady());

function onReady() {
    $(".tweets").click(function() {
    })



    
    $('#root').on('mouseenter', ".tweets-container",() => {
        $(".tweets-container").toggleClass("tweets-container-2")
        $(".tweets-container").mouseleave(() => {
            $(".tweets-container-2").toggleClass("tweets-container")
        })
    })
  



}

// function scrollTweets() {
//     console.log('askjfalsjdgf')

//     setInterval(function() {
//         $(".tweets-container").animate({scrollTop: $('.tweets-container')[0].scrollHeight - $('.tweets-container')[0].clientHeight}, 8000);
//     }, 4000)
   
//     return clearInterval(scrollTweets);


//     }
