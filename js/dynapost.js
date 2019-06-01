"use strict";

var data = [{
  img: "giraffe.jpg",
  title: "So calm (Awarded No 1 art of this blog)",
  text: "This came to the eyes of Judges and they can't be stopped about how beautiful this image is. Its beauty lies in its simplicity. It is drawn by a child of 11years who aspires to be an artist.",
  date: 2,
  month: "may"
}, {
  img: "batman.jpg",
  title: "Batman",
  text: "Batman art",
  date: 10,
  month: "may"
}, {
  img: "jungle.jpg",
  title: "Lake View",
  text: "Animals",
  date: 1,
  month: "feb"
}, {
  img: "tiger.jpg",
  title: "Tiger",
  text: "Tiger from the britannia biscuit",
  date: 6,
  month: "apr"
}];

function Article(props) {
  var i = props.i;
  if ((i + 1) % 2 == 0) {
    return React.createElement(
      "article",
      { "class": "post-" + (i + 1) % 5 + " right-align line" },
      React.createElement(
        "div",
        { "class": "s-12 l-6 post-image" },
        React.createElement("img", { src: "img/" + props.data.img, alt: "Fashion 1" })
      ),
      React.createElement(
        "div",
        { "class": "s-12 l-5 post-text" },
        React.createElement(
          "h2",
          null,
          props.data.title
        ),
        React.createElement(
          "p",
          null,
          props.data.text
        )
      ),
      React.createElement(
        "div",
        { "class": "s-12 l-1 post-date" },
        React.createElement(
          "p",
          { "class": "date" },
          props.data.date
        ),
        React.createElement(
          "p",
          { "class": "month" },
          props.data.month
        )
      )
    );
  } else {
    return React.createElement(
      "article",
      { "class": "post-" + (i + 1) % 5 + " line" },
      React.createElement(
        "div",
        { "class": "s-12 l-6 post-image" },
        React.createElement("img", { src: "img/" + props.data.img, alt: "Fashion 1" })
      ),
      React.createElement(
        "div",
        { "class": "s-12 l-5 post-text" },
        React.createElement(
          "h2",
          null,
          props.data.title
        ),
        React.createElement(
          "p",
          null,
          props.data.text
        )
      ),
      React.createElement(
        "div",
        { "class": "s-12 l-1 post-date" },
        React.createElement(
          "p",
          { "class": "date" },
          props.data.date
        ),
        React.createElement(
          "p",
          { "class": "month" },
          props.data.month
        )
      )
    );
  }
}

var html = React.createElement(
  "div",
  null,
  data.map(function (value, index) {
    return React.createElement(Article, { data: value, i: index, key: index });
  })
);
ReactDOM.render(html, document.getElementById("time-line"));