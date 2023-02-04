const request = new XMLHttpRequest();
request.addEventListener("load", postsEventHandler);
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
const container = document.querySelector("#container");

function postsEventHandler() {
  const posts = JSON.parse(request.responseText);
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  const lists = posts.map((post) => {
    const li = document.createElement("li");
    li.style = `
      border: 1px solid #ddd;
      background-color: #eee;
      padding: 10px;
      margin-top: 10px;
    `;
    const title = document.createElement("h1");
    title.style.fontSize = "14px";
    const content = document.createElement("p");
    content.style = `
      font-size: 12px;
      color: #666;
    `;
    title.append(post.title);
    content.append(post.body);
    li.setAttribute("id", `list-${post.id}`);
    li.append(title, content);
    return li;
  });
  lists.forEach((list) => {
    ul.append(list);
  });
  container.append(ul);
}
