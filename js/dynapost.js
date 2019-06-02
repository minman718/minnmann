"use strict";

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}
shuffle(data);
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
        React.createElement("img", { src: "img/" + props.data.img, alt: "Image" })
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