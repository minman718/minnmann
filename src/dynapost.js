"use strict";

var data = [
  {
    img: "giraffe.jpg",
    title: "So calm (Awarded No 1 art of this blog)",
    text:
      "This came to the eyes of Judges and they can't be stopped about how beautiful this image is. Its beauty lies in its simplicity. It is drawn by a child of 11years who aspires to be an artist.",
    date: 2,
    month: "may"
  }
];

const html = (
  <article class={"post-5 right-align line"}>
    <div class="s-12 l-6 post-image">
      <img src={"img/" + data[0].img} alt="Fashion 1" />
    </div>
    <div class="s-12 l-5 post-text">
      <h2>{data[0].title}</h2>
      <p>{data[0].text}</p>
    </div>
    <div class="s-12 l-1 post-date">
      <p class="date">{data[0].date}</p>
      <p class="month">{data[0].month}</p>
    </div>
  </article>
);

ReactDOM.render(html, document.getElementById("time-line"));
