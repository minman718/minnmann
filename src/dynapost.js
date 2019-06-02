"use strict";
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(data);
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
          <img src={"img/" + props.data.img} alt="Image" />
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
