(function($) {
    $.fn.easySlides = function(c) {
        var d = {
            noImages: 2,
            path: '',
            captions: null,
            links: null,
            linksOpen: 'sameWindow',
            timerInterval: 6000,
            randomise: false
        };
        c = $.extend(d, c);
        var e = 1;
        var f;
        var g;
        var h;
        if (c.randomise === true) {
            f = Math.ceil((c.noImages) * Math.random())
        } else {
            f = 1
        }
        var i = $(this);
        $(i).append('<div class="easy_slides_img1"></div><div class="easy_slides_img2"></div><div class="easy_slides_caption"></div>');
        var j = $('.easy_slides_img1', i);
        var k = $('.easy_slides_img2', i);
        var l = $('.easy_slides_caption', i);
		
        function fi(a) {
            a = typeof(a) != 'undefined' ? a : false;
            if (f > c.noImages) {
                f = 1
            }
            var b = new Image();
            h = c.path + f + '.jpg';
            if (a === true) 
			{
                $(b).load(function() {
                    j.append(b);
                    if (c.links !== null && c.links[f] != '') {
                        cacheImgNumber = f;
                        $('img', j).css('cursor', 'pointer').click(function() {
                            if (c.linksOpen === 'newWindow') {
                                window.open(c.links[cacheImgNumber])
                            } else {
                                window.location.href = c.links[cacheImgNumber]
                            }
                        })
                    }
                    j.fadeIn(function() {
                        if (c.captions !== null) {
                            l.html(c.captions[f]).fadeIn()
                        }
                        f++
                    })
                })
				.error(function() {
                    i.html('<b>Error Loading Image:</b> ' + h)
                })
				.attr('src', h)
				.attr('alt', 'slider images')
            } 
			else 
			{
                $(b).load(function() {
                    if (e == 1) {
                        upperImg = j;
                        lowerImg = k
                    } else {
                        upperImg = k;
                        lowerImg = j
                    }
                    lowerImg.append(b).show();
                    if (c.links !== null && c.links[f] != '') {
                        cacheImgNumber = f;
                        $('img', lowerImg).css('cursor', 'pointer').click(function() {
                            if (c.linksOpen === 'newWindow') {
                                window.open(c.links[cacheImgNumber])
                            } else {
                                window.location.href = c.links[cacheImgNumber]
                            }
                        })
                    }
                    upperImg.fadeOut(function() {
                        upperImg.css('z-index', '1');
                        $('img', upperImg).remove();
                        lowerImg.css('z-index', '2');
                        if (c.captions !== null) {
                            l.fadeOut(function() {
                                $(this).html(c.captions[f]).fadeIn();
                                f++
                            })
                        } else {
                            f++
                        }
                    })
                }).error(function() {
                    clearInterval(g);
                    i.html('<b>Error Loading Image:</b> ' + h)
                }).attr('src', h)
				.attr('alt', 'slider images')
            }
            if (e == 2) {
                e = 1
            } else {
                e = 2
            }
        }
        return this.each(function() {
            fi(true);
            g = setInterval(fi, c.timerInterval)
        })
    }
})(jQuery);