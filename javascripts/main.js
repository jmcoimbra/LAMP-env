// Code from https://css-tricks.com/automatic-table-of-contents/
var ToC =
  "<h3>Table of Contents</h3>" +
    "<ul>";

var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC += "</ul>";

$(".table-of-contents").prepend(ToC);
