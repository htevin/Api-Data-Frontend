const id = localStorage.getItem("id");
let postList = document.querySelector(".post-list");



async function onSearchChange(event){
  const id = event.target.value
  renderPost(id);


}


async function renderPost(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}` );
  const data = await response.json();
  postList.innerHTML = data.map((post) => postHTML(post)).join('')
}


function postHTML(post){
  return `<div class="post">
  <div class="post__title">
    ${post.title}
  </div>
  <p class="post__body">
  ${post.body}
  </p>
</div>`

}

renderPost(id);


