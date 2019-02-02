/*---------------------------------------------
Theme:		XCL Default
Author: 	Gigamaster
Package: 	XOOPS Cube Legacy
File:       dashboard.js
Version:	2.3.0
Date:       2019-01-29
URL:        https://xoopscube.github.io/
---------------------------------------------*/

$(function() {

    "use strict";

    var i = function() {
		// Todo - Test Window (scrollbar width?)  < 1174 
        (window.innerWidth > 0 ? window.innerWidth : this.screen.width) < 1174 ? (
            $("body").addClass("side-nav-min"),

            // Side Nav Hide XOOPSCube 
        	$(".logo-xcl-none").hide(),
            $(".slimScrollLeft, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), 
            
            // Side Nav Toogler
            
        // Todo - Attr class to element but not SVG
            $(".head-nav-toggler > svg").attr("data-icon", "mdi:menu-close")) : ($("body").removeClass("side-nav-min"), $(".logo-xcl-none").show());
            
        	var i = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
        	(i -= 70) < 1 && (i = 1), i > 70 && $(".page-wrapper").css("min-height", i + "px");
    };

    $(window).ready(i), 
    $(window).on("resize", i), 
    $(".side-nav-toggler").on("click", function() {
        $("body").hasClass("side-nav-min") ? ($("body").trigger("resize"), 
        $(".slimScrollLeft, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible"), 
        $("body").removeClass("side-nav-min"), 
        $(".logo-xcl-none").show()) : ($("body").trigger("resize"), 
        $(".slimScrollLeft, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), 
        $("body").addClass("side-nav-min"),

        // Todo - Attr class to element but not SVG
		$(".side-nav-toggler > svg").attr("data-icon", "mdi:menu-close"),
        $(".logo-xcl-none").hide());
    }), 
		$(".fix-header .head-nav").stick_in_parent({}),
		
		// Todo - Attr class to element but not SVG
		// Switch svg icon side-nav-show
		$('.head-nav-toggler').click(function(){
    	$(this).next('ul').slideToggle('500');
		$("body").toggleClass("side-nav-show");
    	$(this).find('svg').attr("data-icon","mdi:menu-close")
	}),
		
		
		// Theme Options
		$(".theme-options").click(function() {
        $(".side-nav-right").slideDown(50), 
        $(".side-nav-right").toggleClass("side-right-show");
    }),
		
		// Menu
		$(function() {
        for (var i = window.location, o = $("ul#side-nav-list a").filter(function() {
            return this.href == i;
        }).addClass("active").parent().addClass("active"); ;) {
            if (!o.is("li")) break;
            o = o.parent().addClass("collapsed").parent().addClass("active");
        }
    }), 
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    }), 
    $(function() {
        $('[data-toggle="popover"]').popover();
    }), 
    $(function() {
        $("#side-nav-list").metisMenu();
    }), 

    // Todo - theme slimScroll colors
    $(".slimScrollLeft").slimScroll({
        position: "left",
        size: "5px",
        height: "100%",
        color: "#ABC"
    }), 
    $(".slimScrollRight").slimScroll({
        height: "100%",
        position: "right",
        size: "5px",
        color: "#ABC"
    }); 
});