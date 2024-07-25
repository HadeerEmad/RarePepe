$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
    });
});


$(function() {

    $('.back-top').fadeOut();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    // WINDOW HEIGHT

    windowHeight();
    $(window).resize(function() {
        windowHeight();
    });


    // SMOOTH SCROLL

    $('.smooth-a').click(function() {
        /*if($(window).width() > 991) {
            let attrId = $(this).attr('href');
            let index = $('.main section[id="'+ attrId +'"]').index();
            $(".main").moveTo(index+1);
        }else {*/
        let attrId = '#' + $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(attrId).offset().top
        }, 1000);
        // }
        return false;
    });


    // MENU TOGGLE
    $('.mirror').click(function() {
        $('.navbar-collapse').removeClass('show');
    });


    // PAGE SCROLL

    // if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    /*if(navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i)) {
        $('body').css({'overflow-y': 'auto'});
    }else {
        $(".main").onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: false,
            updateURL: true,
            loop: false,
            keyboard: true,
            responsiveFallback: 992,
            direction: "vertical",
            afterMove: function(index) {
                if($(window).width() > 991) {
                    if ($('#home').hasClass('active')) {
                        $('.back-top').fadeOut();
                    } else {
                        $('.back-top').fadeIn();
                    }
                }
            }
        });
    }*/

    /*if($(window).width() > 991) {
        if ($('#home').hasClass('active')) {
            $('.back-top').fadeOut();
        } else {
            $('.back-top').fadeIn();
        }
    }*/

    // ACCORDION
    $('.accordion-body').slideUp(0);
    $('li.active .accordion-body').slideDown(0);

    $('.accordion li > a').click(function(event) {
        event.preventDefault();
        $('.accordion li').removeClass('active');
        $('li:not(.active) .accordion-body').slideUp('slow');
        if ($(this).parent().find('.accordion-body').css('display') == 'none') {
            $(this).parent().addClass('active');
            $(this).parent().find('.accordion-body').slideDown('slow');
        } else {
            $(this).parent().removeClass('active');
            $(this).parent().find('.accordion-body').slideUp('slow');
        }
    });


    // COUNTDOWN
    countDown(1602491400);

    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            items: 1
        });
    }


    // PICK POOL BUTTON
    /*$('.goToPool').click(function(event) {
        let queryString = "?" + $(this).attr('data-name');
        window.location.href = "rpepeblu.html" + queryString;
    });*/

    $('#connectWallet').click(function(e) {
        e.preventDefault();
        // alert('You connect wallet');
        metamaskIntegration().then(x => {
            getNetwork();
        });
    });

    $('[data-toggle="tooltip"]').tooltip();

});

function windowHeight() {
    if ($(window).width() > 985) {
        $('.win-height').css({ 'min-height': $(window).height() });
    } else {
        $('.win-height').css({ 'height': 'auto' });
        $('.win-height.min-height').css({ 'min-height': $(window).height() });
    }
    $('.part-1 .main-image').css({ 'width': $('.part-2 .main-image').width() });
    $('.part-3 .main-image').css({ 'width': $('.part-2 .main-image').width() });
}

function countDown(dateVal) {
    $('.countdown').each(function() {
        let thisCount = $(this);

        let x = setInterval(function() {

            let distance = parseInt(dateVal) - new Date().getTime() / 1000;

            let days = Math.floor(distance / (3600 * 24));
            let hours = Math.floor(distance % (3600 * 24) / 3600);
            let minutes = Math.floor(distance % 3600 / 60);
            let seconds = Math.floor(distance % 60);

            if (days > 0)
                thisCount.find('.counter-holder .day').html(days);
            else
                thisCount.find('.counter-holder .day').html('0');
            if (hours > 0)
                thisCount.find('.counter-holder .hours').html(hours);
            else
                thisCount.find('.counter-holder .hours').html('0');
            if (minutes > 0)
                thisCount.find('.counter-holder .minutes').html(minutes);
            else
                thisCount.find('.counter-holder .minutes').html('0');
            if (seconds > 0)
                thisCount.find('.counter-holder .seconds').html(seconds);
            else
                thisCount.find('.counter-holder .seconds').html('0');

            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
    });
}

async function metamaskIntegration() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {} else {
        alert("The File APIs are not fully supported in this browser.");
    }

    //Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            //Request account access
            //if needed
            metaMask = false;
            ethereum.enable().then(metaMask = true);
        } catch (error) {
            metaMask = false;
            alert('Connect to metamask');
            //User denied account access...
        }
    }
    //Legacy dapp browsers...
    else if (window.web3) {
        metaMask = true;
        window.web3 = new Web3(web3.currentProvider);
    }
    //Non - dapp browsers...
    else {
        metaMask = false;
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    if (metaMask) {
        $('#account').removeClass('d-none');
    } else {

    }

    window.ethereum.on('accountsChanged', function(_accounts) {
        // Time to reload your interface with accounts[0]!
        // window.location.reload(true);
    });

    await web3.eth.getAccounts(function(error, result) {
        if (!error) {
            accounts = result;
        } else
            console.error(error);
    });
}

async function getNetwork() {
    var net = await web3.eth.net.getNetworkType();
    if (net != "ropsten") {
        $('#connectWallet').html('Switch to Ropsten Network');
    } else {
        $('#connectWallet').html(accounts[0].substring(0, 6) + '...' + accounts[0].substring(36, 42));
    }
}