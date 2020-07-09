$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        title='Ramriddlz',
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav,.logo").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        
        return false;
    });
    
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $('#title').load(newHash + ' #title', '', function(data) {
                            console.log(newHash)
                            if(newHash == 'video.html'){
                                $('body').addClass('video')
                            }else{
                                $('body').removeClass('video')
                            }
                            
                            if(newHash == 'artists.html'){
                                document.getElementsByClassName('artist-image')[0].addEventListener('click',function(){
                                    $('.artist-modal').addClass("active1");
                                    $('.artist-modal-content').addClass('activeContent');
                                    $('.artists-modal-close').click(function(){
                                        $('.artist-modal').removeClass("active1");
                                        $('.artist-modal-content').removeClass('activeContent');
                                    })
                                })
                                document.getElementsByClassName('artist-image')[1].addEventListener('click',function(){
                                    $('.artist-modal-2').addClass("active1");
                                    $('.artist-modal-content-2').addClass('activeContent');
                                    $('.artists-modal-close-2').click(function(){
                                        $('.artist-modal-2').removeClass("active1");
                                        $('.artist-modal-content-2').removeClass('activeContent');
                                    })
                                })
                                document.getElementsByClassName('artist-image')[2].addEventListener('click',function(){
                                    $('.artist-modal-3').addClass("active1");
                                    $('.artist-modal-content-3').addClass('activeContent');
                                    $('.artists-modal-close-3').click(function(){
                                        $('.artist-modal-3').removeClass("active1");
                                        $('.artist-modal-content-3').removeClass('activeContent');
                                    })
                                })
                            }
                            if(newHash == 'https://shop.gottaloveit.co'){
                                window.open('https://shop.gottaloveit.co', '_blank');
                                window.location = '/index.html';
                            }

                            document.title = $(this).text();
                            title = $(this).text();
                            });
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };
        var newURL =  newHash//remove hash
        const state = { 'page_id': 2}
          window.history.pushState(state, title, newURL)
    });
});

    
