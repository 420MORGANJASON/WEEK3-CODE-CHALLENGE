const postsList = document.querySelector('.post-list');
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

let output = ""
// const url =  "http://localhost:3000/films"
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
                      <p class="availableTkts">Available tickets  ${post.capacity-post.tickets_sold} - ${post.capacity}</p>
                        <p class="card-text">${post.tickets_sold} tickets-sold</p>
                        <button class="buy-ticket-btn" data-id="${post.id}">BUY TICKET</button>
        <button class="decrement-ticket-btn" data-id="${post.id}">-</button>
                </div>
                 <h5>Tickets Remaining: <span id="ticket-count">10</span></h5>
                <button onclick="buyTicket()">BUY TICKET</button>
                    
            </div>
            `;
            
    });
//  ticketCountElement.innerText = ticketCount.toString();
postsList.innerHTML = output;



  };

 function buyTicket() {
        const ticketCountElement = document.getElementById("ticket-count");
        let ticketCount = parseInt(ticketCountElement.innerText);

        if (ticketCount > 0) {
          ticketCount--;
          ticketCountElement.innerText = ticketCount.toString();
        } else {
          alert("No more tickets remaining!");
        }
      }

// Function to handle "Buy Ticket" button click event
const handleBuyTicket = (event) => {
   console.log("Buy Ticket button clicked");
  const postId = event.target.dataset.id;
  const post = posts.find(post => post.id === postId);

  if (post.capacity - post.tickets_sold <= 0) {
    alert("Sorry, this showing is sold out.");
    return;
  }

  post.tickets_sold++;
  renderPosts(posts);
};

// Function to add event listeners to "Buy Ticket" buttons
const addBuyTicketListeners = () => {
  const buyTicketButtons = document.querySelectorAll(".buy-ticket-btn");
  buyTicketButtons.forEach(button => {
    button.addEventListener("click", handleBuyTicket);
  });
   console.log("Buy Ticket event listeners added");

};

// Example posts data
const posts = [
  {
    id: 1,
    title: "Movie 1",
    poster: "https://example.com/poster1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    showtime: "Saturday, April 10, 2023 7:00 PM",
    capacity: 50,
    tickets_sold: 0
  },
  {
    id: 2,
    title: "Movie 2",
    poster: "https://example.com/poster2.jpg",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showtime: "Sunday, April 11, 2023 3:00 PM",
    capacity: 100,
    tickets_sold: 50
  }
];

  function buyTicket() {
        const ticketCountElement = document.getElementById("ticket-count");
        let ticketCount = parseInt(ticketCountElement.innerText);

        if (ticketCount > 0) {
          ticketCount--;
          ticketCountElement.innerText = ticketCount.toString();
        } else {
          alert("No more tickets remaining!");
        }
      }

// Render posts on the frontend and add event listeners to "Buy Ticket" buttons
renderPosts(posts);
addBuyTicketListeners();

// fetch the movie data from the server and render it on the page
fetch("http://localhost:3000/films")
  .then(res => res.json())
  .then(data => {
    // initialize the tickets_sold property for each movie to 0
    data.forEach(post => post.tickets_sold = 0);
    renderPosts(data);






      // Function to show movie details when a movie is clicked
    function showMovieDetails(id) {
      fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
          const movie = data.films.find(movie => movie.id === id);
          if (movie) {
            updateMovieDetails(movie);
          }
        })
      .catch(error => console.error(error));


      

      }

      //     console.log(error);
    });  
    
    const ticketCount = document.getElementById("ticket-count");
const buyBtn = document.getElementById("buy-btn");
const removeBtn = document.getElementById("remove-btn");

let availableTickets = 50;

buyBtn.addEventListener("click", function() {
  if (availableTickets > 0) {
    availableTickets--;
    ticketCount.textContent = availableTickets;
  } else {
    alert("No more tickets available!");
  }
});

removeBtn.addEventListener("click", function() {
  availableTickets++;
  ticketCount.textContent = availableTickets;
});

    
    
    
    
    
    
    // buyTicket function decreases the number of available votes by one after every
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
// }
  // });

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