
// fetch("db.json")
//   .then(response => response.json())
//   .then(data => {
//     // 2. Extract details of the first movie
//     const movie = data.films[0];
//     const { poster, title, runtime, showtime, capacity, tickets_sold } = movie;
//     availableTickets = capacity - tickets_sold;    // 3. Set details in the HTML elements
//     document.getElementById('poster').src = poster;
//     document.getElementById('title').textContent = title;
//     document.getElementById('runtime').textContent = `${runtime} mins`;
//     document.getElementById('showtime').textContent = showtime;
//     document.getElementById('available-tickets').textContent = availableTickets;    // 4. Create movie list
//     const filmsList = document.getElementById('films');
//     data.films.forEach(movie => {
//       const { id, title, poster, showtime } = movie;
//       const li = document.createElement('li');
//       li.innerHTML = `<img src="${poster}" alt="${title}"><div><h4>${title}</h4><p>Showtime: ${showtime}</p></div>`;
//       li.addEventListener('click', () => showMovieDetails(id));
//       filmsList.appendChild(li);
//         });    // 5. Set up buy ticket button click event taking buyTicket as a callback
//     document.getElementById('buy-ticket').addEventListener('click', buyTicket);
//     })
//     .catch(error => {
//     console.log(error);
//     });    // buyTicket function decreases the number of available votes by one after every
//     // click of the Buy Ticket button. The button greys out (is disabled)
//     // and becomes ineffective once the available votes reaches 0.
//     function buyTicket() {
//       if (availableTickets > 0) {
//         availableTickets--;
//         document.getElementById('available-tickets').textContent = availableTickets;
//         if (availableTickets === 0) {
//           const buyButton = document.getElementById('buy-ticket');
//           buyButton.textContent = 'Sold Out';
//           buyButton.disabled = true;
//         }
//       }}    // Function to update the movie details
//     function updateMovieDetails(movie) {
//       const { poster, title, runtime, showtime, capacity, tickets_sold } = movie;
//       availableTickets = capacity - tickets_sold;
//       document.getElementById('poster').src = poster;
//       document.getElementById('title').textContent = title;
//       document.getElementById('runtime').textContent = `${runtime} mins`;
//       document.getElementById('showtime').textContent = showtime;
//       document.getElementById('available-tickets').textContent = availableTickets;
//     }
//     // Function to show movie details when a movie is clicked
//     function showMovieDetails(id) {
//       fetch("db.json")
//         .then(response => response.json())
//         .then(data => {
//           const movie = data.films.find(movie => movie.id === id);
//           if (movie) {
//             updateMovieDetails(movie);
//           }
//         })
//       .catch(error => console.error(error));
// }















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
                        <button class="buy-ticket-btn" data-id="${post.id}">BUY TICKET</button>
        <button class="decrement-ticket-btn" data-id="${post.id}">-</button>
                </div>
            </div>
            `;
    });
postsList.innerHTML = output;

  // add event listeners to the BUY TICKET and DECREMENT buttons
  const buyTicketBtns = document.querySelectorAll('.buy-ticket-btn');
  const decrementBtns = document.querySelectorAll('.decrement-ticket-btn');
  buyTicketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // increment the ticket count for the corresponding movie
      const postId = btn.dataset.id;
      const post = posts.find(p => p.id == postId);
      if (post.capacity > post.tickets_sold) {
        post.tickets_sold++;
        renderPosts(posts); // update the page
      }
    });
  });
  decrementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // decrement the ticket count for the corresponding movie
      const postId = btn.dataset.id;
      const post = posts.find(p => p.id == postId);
      if (post.tickets_sold > 0) {
        post.tickets_sold--;
        renderPosts(posts); // update the page
      }
    });
  });
};

// fetch the movie data from the server and render it on the page
fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => {
    // initialize the tickets_sold property for each movie to 0
    data.forEach(post => post.tickets_sold = 0);
    renderPosts(data);
  });

// // Get - read the posts
// // method:GET

// fetch('http://localhost:3000/films')
// .then(res => res.json())
// .then(data => renderPosts(data))


// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//   for (let i = number; i >= 0; i--) {
//     console.log(i);
//   }
// } else if (number < 0) {
//   for (let i = number; i <= 0; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Number is already 0");
// }
// console.log("Reached 0!");



// // const buyTicketButton = document.getElementById(`#btn`);
// //       buyTicketButton.addEventListener("click",buyTicket => {
// //         if (availableTickets > 0) {
// //           availableTickets--;
// //           document.getElementById(`btn`).textContent = availableTickets;
// //           film.tickets_sold++; // Increment the tickets_sold value of the film
// //           buyTicketButton.style.backgroundColor = "green";
// //         }
// //         if (availableTickets === 0) {
// //           buyTicketButton.textContent = "Sold Out";
// //           buyTicketButton.disabled = true;
// //           buyTicketButton.style.backgroundColor = "red";
// //           buyTicketButton.style.fontColor = "black";
// //         }
// //       });

      
 
// // Create - insert new post
// // Method:POST

// // addPostForm.addEventListener('submit', (e) => {
// //     e.preventDefault();

// //     // console.log(titleValue.value)
// //     fetch('http://localhost:3000/films') {
// //    method: 'POST',
// //    headers: {
// //     'Content-Type': 'application/json' 

// //    }},
// //    body: JSON.stringify({ 
// //     title: titleValue.value,
// //     body:bodyValue.value

// //     // console.log('Form submited!')
// //  })
   
    
// //     .then(res => res.json())
// //     .then(data => {
// //         const dataArr = [];
// //         dataArr.push(data);
// //         renderPosts(dataArr);
// //     })
// // })