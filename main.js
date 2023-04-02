const postsList = document.querySelector('.post-list');
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

let output = ''
// const url = 'http://localhost:3000/films'
const renderPosts = (posts) => {
  posts.forEach(post => {
        // console.log(post);
        output += ` <div class="card mt-4 col-md-6 bg-ligt">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.id}</p>
                    <img class="card-img" src="${post.poster}">
                    <p class="card-text">${post.description}</p>

                    <h6 class="card-subtitle mb-2 text-muted">${post.showtime}</h6>
                      <p class="card-text">${post.capacity} Available tickets</p>
                        <p class="card-text">${post.tickets_sold} tickets-sold</p>
                       
                    <a href="#" class="card-link">BUY TICKET</a>
                    <a href="#" class="card-link">DELETE PURCHASED TICKET</a>
                </div>
            </div>
            `;
    });
postsList.innerHTML = output;
}
// Get - read the posts
// method:GET

fetch('http://localhost:3000/films')
.then(res => res.json())
.then(data => renderPosts(data))

 
// Create - insert new post
// Method:POST

// addPostForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // console.log(titleValue.value)
//     fetch('http://localhost:3000/films') {
//    method: 'POST',
//    headers: {
//     'Content-Type': 'application/json' 

//    }},
//    body: JSON.stringify({ 
//     title: titleValue.value,
//     body:bodyValue.value

//     // console.log('Form submited!')
//  })
   
    
//     .then(res => res.json())
//     .then(data => {
//         const dataArr = [];
//         dataArr.push(data);
//         renderPosts(dataArr);
//     })
// })