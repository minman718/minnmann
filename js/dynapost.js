"use strict";

var data = [{
  img: "giraffe.jpg",
  title: "So calm (Awarded No 1 art of this blog)",
  text: "This came to the eyes of Judges and they can't be stopped about how beautiful this image is. Its beauty lies in its simplicity. It is drawn by a child of 11years who aspires to be an artist.",
  date: 2,
  month: "may"
}];

var html = React.createElement(
  "article",
  { "class": "post-5 right-align line" },
  React.createElement(
    "div",
    { "class": "s-12 l-6 post-image" },
    React.createElement("img", { src: "img/" + data[0].img, alt: "Fashion 1" })
  ),
  React.createElement(
    "div",
    { "class": "s-12 l-5 post-text" },
    React.createElement(
      "h2",
      null,
      data[0].title
    ),
    React.createElement(
      "p",
      null,
      data[0].text
    )
  ),
  React.createElement(
    "div",
    { "class": "s-12 l-1 post-date" },
    React.createElement(
      "p",
      { "class": "date" },
      data[0].date
    ),
    React.createElement(
      "p",
      { "class": "month" },
      data[0].month
    )
  )
);

ReactDOM.render(html, document.getElementById("time-line"));