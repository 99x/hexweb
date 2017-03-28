var setPage = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        browserHeight = w.innerHeight || e.clientHeight || g.clientHeight;
    $('.hex-overview .main-section').css('height', browserHeight - 80 + 'px');
}

var addClickHandlers = function () {
    $('#approvely').click(function () {
        window.open('https://medium.com/99xtechnology/re-thinking-the-first-use-experience-d979c3bb293d#.lxmjm03ap', '_blank');
    });
    $('#superoffice').click(function () {
        window.open('https://medium.com/99xtechnology/strategizing-revamp-process-to-optimize-ux-d3cecd48acbb#.3pzq7hcu1', '_blank');
    });
    $('#iconGlobal').click(function () {
        window.open('https://medium.com/@janindu93/simplifying-on-site-healthcare-assessments-8d870968e543#.hkai3s8q6', '_blank');
    });
    $('#hatteland').click(function () {
        window.open('https://medium.com/99xtechnology/is-whitespace-so-evil-in-enterprise-applications-6b5a1405e754#.k62zcml6m', '_blank');
    });
    $('.scroll-down-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#serviceSection").offset().top
        }, 500);
    });
 
    $('#servicesLink').click(function () {
        $('html, body').animate({
            scrollTop: $("#serviceSection").offset().top
        }, 500);
    });
    $('#workLink').click(function () {
        $('html, body').animate({
            scrollTop: $("#caseStudiesSection").offset().top
        }, 500);
    });
    $('#eventsLink').click(function () {
        $('html, body').animate({
            scrollTop: $("#eventsSection").offset().top
        }, 500);
    });
    $('#teamLink').click(function () {
        $('html, body').animate({
            scrollTop: $("#meetTheTeamSection").offset().top
        }, 500);
    });
    
    $('#mobileMenuButton').click(function () {
        var mobileButton = $('.mobile-menu-button');
        var mobileMenu = $('.navbar-hex');
        if (mobileMenu.css('display') == 'none') {
            mobileButton.removeClass('open');
            mobileButton.addClass('close');
            mobileMenu.css('display','block');
        }
        else{
            mobileButton.removeClass('close');
            mobileButton.addClass('open');
            mobileMenu.css('display','none');
        }
    });
}

$(document).ready(function () {
    setPage();
    addClickHandlers();
});