"use strict";

var data = [
  {
    img: "giraffe.jpg",
    title: "So calm (Awarded No 1 art of this blog)",
    text:
      "This came to the eyes of Judges and they can't be stopped about how beautiful this image is. Its beauty lies in its simplicity. It is drawn by a child of 11years who aspires to be an artist.",
    date: 2,
    month: "may"
  },
  {
    img: "batman.jpg",
    title: "Batman",
    text: "Batman art",
    date: 10,
    month: "may"
  },
  {
    img: "jungle.jpg",
    title: "Lake View",
    text: "Animals",
    date: 1,
    month: "feb"
  },
  {
    img: "tiger.jpg",
    title: "Tiger",
    text: "Tiger from the britannia biscuit",
    date: 6,
    month: "apr"
  }
];

function Article(props) {
  let i = props.i;
  if ((i + 1) % 2 == 0) {
    return (
      <article class={"post-" + ((i + 1) % 5) + " right-align line"}>
        <div class="s-12 l-6 post-image">
          <img src={"img/" + props.data.img} alt="Fashion 1" />
        </div>
        <div class="s-12 l-5 post-text">
          <h2>{props.data.title}</h2>
          <p>{props.data.text}</p>
        </div>
        <div class="s-12 l-1 post-date">
          <p class="date">{props.data.date}</p>
          <p class="month">{props.data.month}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article class={"post-" + ((i + 1) % 5) + " line"}>
        <div class="s-12 l-6 post-image">
          <img src={"img/" + props.data.img} alt="Fashion 1" />
        </div>
        <div class="s-12 l-5 post-text">
          <h2>{props.data.title}</h2>
          <p>{props.data.text}</p>
        </div>
        <div class="s-12 l-1 post-date">
          <p class="date">{props.data.date}</p>
          <p class="month">{props.data.month}</p>
        </div>
      </article>
    );
  }
}

let html = (
  <div>
    {data.map((value, index) => {
      return <Article data={value} i={index} key={index} />;
    })}
  </div>
);
ReactDOM.render(html, document.getElementById("time-line"));
