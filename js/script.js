jQuery(document).ready(function(o){o(".grid").isotope({itemSelector:".grid-item",layoutMode:"fitRows"}),o(".nav a").click(function(t){t.preventDefault();var e=o(this).attr("href");console.log(e),o("html, body").animate({scrollTop:o(e).offset().top},700)}),o(".more-info").click(function(t){t.preventDefault();var e=o(this).attr("href");console.log(e),o("html, body").animate({scrollTop:o(e).offset().top},700)})});