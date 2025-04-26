// // DOM element references
// let scoreH2 = document.getElementById('score');
// let timeLeftH2 = document.getElementById('timeLeft');
// let startNewGameButton = document.getElementById('startNewGame');
// let pauseGameButton = document.getElementById('pauseGame');
// let flex = document.getElementsByClassName('flex')[0];
// let squares = document.querySelectorAll('.square');
// let gameMusic = new Audio('./gameMusic.mp3');
// let hitMusic = new Audio('./hitMusic.mp3');
// let highScoreH2 = document.getElementById('highScore');


// // Game state variables
// let score = 0;
// let timeLeft = 60;
// let hitPosition = null;
// let timerId = null;
// let randomMoleId = null;

// let gameActive = false;


// // Initializing High Score from localStorage
// let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
// highScoreH2.innerHTML = `High Score: ${highScore}`; // Displaying the high score


// // randomly place mole
// function randomMole(){
//     squares.forEach(square => {
//         square.classList.remove('mole');

//         square.classList.remove('whacked');

//     })

//     let randomSquare = squares[Math.floor(Math.random()*squares.length)];
//     randomSquare.classList.add('mole');
//     hitPosition = randomSquare.id;
// }
// // Countdown timer function to handle time limit
// function countDown(){
//     timeLeft--;
//     timeLeftH2.innerHTML = `Time Left: ${timeLeft}`;

//     if(timeLeft === 0){
//         clearInterval(timerId);
//         clearInterval(randomMoleId);
//         flex.style.display = 'none';


//        // Checking if the current score is higher than the high score
//        if (score > highScore) {
//         highScore = score; // Update high score
//         localStorage.setItem('highScore', highScore); // Storing new high score in localStorage
//         highScoreH2.innerHTML = `High Score: ${highScore}`; // Updating the high score display
//     }



//         // Hide  pause button
//         pauseGameButton.style.display = 'none';
//         scoreH2.innerHTML = `Congratulations! Your Final Score: ${score}`;
//         scoreH2.style.color = '#000'; 
//         scoreH2.style.backgroundColor = '##D2FF72'; 
//         scoreH2.style.padding = '15px'; 
//         scoreH2.style.borderRadius = '20px'; 
//         scoreH2.style.textAlign = 'center'; 
//         scoreH2.style.display = 'inline-block'; 
//         scoreH2.style.marginLeft = '22%';
//         scoreH2.style.fontSize = '3rem';
      
//         const screenWidth = window.innerWidth;

//         if (screenWidth <= 480) { // Small screens
//             scoreH2.style.fontSize = '2rem';
//             scoreH2.style.marginLeft = '5%';
//             scoreH2.style.padding = '10px';
//         } else  if (screenWidth <= 768) {// Medium screens
//             scoreH2.style.fontSize = '3rem';
//             scoreH2.style.marginLeft = '10%';
//             scoreH2.style.padding = '15px';
//         } 
//         else { // Large screens
//             scoreH2.style.fontSize = '4rem';
//             scoreH2.style.marginLeft = '18%';
//             scoreH2.style.padding = '22px';
//         }

//         cursor.style.display = 'none'; // Hide hammer cursor
//         gameActive = false;// Set game to inactive
        
//     }
// }
// randomMole();


// // Start a new game by resetting all game variables and starting the timers
// function startGame(){
//     score = 0;
//     timeLeft = 60;

//     gameActive = true;
//     scoreH2.style.color = ''; 
//     scoreH2.style.backgroundColor = '';
//     scoreH2.style.padding = '15px';
//     scoreH2.style.borderRadius = '';
//     scoreH2.style.textAlign = '';
//     scoreH2.style.display = '';
//     scoreH2.style.marginLeft = '';
//     scoreH2.style.fontSize = '';
//     scoreH2.innerHTML = 'Your Score: 0';
//     timeLeft.innerHTML = 'Time Left: 60';
//     flex.style.display = 'flex';
//     pauseGameButton.style.display = 'inline-block'
//     pauseGameButton.innerHTML = 'Pause';
//     cursor.style.display = 'block'; 
//     gameMusic.play();

//     timerId = setInterval(randomMole, 1000);
//     randomMoleId = setInterval(countDown, 1000);
// }

// // Pause or resume the game
// function pauseResumeGame(){
//     if(pauseGameButton.textContent === 'Pause'){
//         gameMusic.pause();
//         clearInterval(timerId);
//         clearInterval(randomMoleId);
//         timerId = null;
//         randomMoleId = null;

//         gameActive = false;


//         pauseGameButton.textContent = 'Resume';
//     }else{
//         gameMusic.play();
//         timerId = setInterval(randomMole, 1000);
//         randomMoleId = setInterval(countDown, 1000);

//         gameActive = true;
//         cursor.style.display = 'block'; 

//         pauseGameButton.textContent = 'Pause';
//     }
// }

// // Hiding hammer when pausing the game
// pauseGameButton.addEventListener('click', () => {
//     cursor.style.display = gameActive ? 'block' : 'none';
// });

// // Event listener for squares to handle mole hit detection
// squares.forEach(square => {
//     square.addEventListener('mousedown', () => {
//         if(timerId !== null){
//             if(gameActive &&  square.id === hitPosition){
//                 hitMusic.play();
//                 setTimeout(() => {hitMusic.pause()}, 1000);
//                 score++;
//                 scoreH2.innerHTML = `Your Score ${score}`;
//                 hitPosition = null;



//                 square.classList.remove('mole');
//                 square.classList.add('whacked');
//                 setTimeout(() => square.classList.remove('whacked'), 500);



//             }
//         }
//     })
// })


// // Event listeners for start and pause/resume buttons
// startNewGameButton.addEventListener('click', startGame);
// pauseGameButton.addEventListener('click', pauseResumeGame);

// // Event listeners for cursor movement and interaction
// const cursor = document.querySelector('.cursor');
// window.addEventListener('mousemove', e => {
//     if (gameActive) {
//         cursor.style.top = e.pageY + 'px';
//         cursor.style.left = e.pageX + 'px';
//     }
// });
// window.addEventListener('mousedown', () => {
//     if (gameActive) cursor.classList.add('active');
// });
// window.addEventListener('mouseup', () => {
//     if (gameActive) cursor.classList.remove('active');
// });


// DOM elements
let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let pauseGameButton = document.getElementById('pauseGame');
let flex = document.getElementsByClassName('flex')[0];
let squares = document.querySelectorAll('.square');
let cursor = document.querySelector('.cursor');
let highScoreH2 = document.getElementById('highScore');

// Audio elements - safely loaded with error handling
let gameMusic = new Audio('./gameMusic.mp3');
let hitMusic = new Audio('./hitMusic.mp3');

// Game state variables
let score = 0;
let timeLeft = 60;
let hitPosition = null;
let timerId = null;
let randomMoleId = null;
let gameActive = false;

// Get high score from localStorage with fallback
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
highScoreH2.innerHTML = `High Score: ${highScore}`;

// Set proper game board size based on screen size
function adjustGameSize() {
    const screenWidth = window.innerWidth;
    
    // Use fixed sizes with max-width fallbacks
    if (screenWidth <= 375) { // Extra small devices
        flex.style.width = '250px';
        flex.style.height = '250px';
        flex.style.maxWidth = '95vw';
        flex.style.maxHeight = '95vw';
    } else if (screenWidth <= 576) { // Mobile phones
        flex.style.width = '300px';
        flex.style.height = '300px';
        flex.style.maxWidth = '90vw';
        flex.style.maxHeight = '90vw';
    } else if (screenWidth <= 768) { // Small tablets
        flex.style.width = '350px';
        flex.style.height = '350px';
        flex.style.maxWidth = '85vw';
        flex.style.maxHeight = '85vw';
    } else if (screenWidth <= 992) { // Medium screens
        flex.style.width = '400px';
        flex.style.height = '400px';
        flex.style.maxWidth = '80vw';
        flex.style.maxHeight = '80vw';
    } else { // Large screens
        flex.style.width = '500px';
        flex.style.height = '500px';
        flex.style.maxWidth = '70vw';
        flex.style.maxHeight = '70vw';
    }
}

// Randomly place mole
function randomMole() {
    squares.forEach(square => {
        square.classList.remove('mole');
        square.classList.remove('whacked');
    });

    // Only place mole if game is active
    if (gameActive) {
        let randomSquare = squares[Math.floor(Math.random() * squares.length)];
        randomSquare.classList.add('mole');
        hitPosition = randomSquare.id;
    }
}

// Countdown timer function
function countDown() {
    timeLeft--;
    timeLeftH2.innerHTML = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
        clearInterval(timerId);
        clearInterval(randomMoleId);
        gameActive = false;
        flex.style.display = 'none';
        
        // Update high score if needed
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            highScoreH2.innerHTML = `High Score: ${highScore}`;
        }

        // Hide pause button
        pauseGameButton.style.display = 'none';
        
        // Style final score
        scoreH2.innerHTML = `Congratulations! Your Final Score: ${score}`;
        scoreH2.style.color = '#000';
        scoreH2.style.backgroundColor = '#D2FF72';
        scoreH2.style.borderRadius = '1rem';
        scoreH2.style.padding = '0.8rem';
        scoreH2.style.textAlign = 'center';
        scoreH2.style.display = 'block';
        scoreH2.style.margin = '0 auto';
        scoreH2.style.maxWidth = '90%';
        
        // Responsive final score styling
        responsiveFinalScore();
        
        // Hide hammer cursor
        cursor.style.display = 'none';
        
        // Stop game music
        try {
            gameMusic.pause();
        } catch (error) {
            console.log("Audio pause error:", error);
        }
    }
}

// Handle responsive styling for final score
function responsiveFinalScore() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 375) {
        scoreH2.style.fontSize = '1.2rem';
        scoreH2.style.padding = '0.5rem';
    } else if (screenWidth <= 576) {
        scoreH2.style.fontSize = '1.5rem';
        scoreH2.style.padding = '0.6rem';
    } else if (screenWidth <= 768) {
        scoreH2.style.fontSize = '1.8rem';
        scoreH2.style.padding = '0.8rem';
    } else if (screenWidth <= 992) {
        scoreH2.style.fontSize = '2rem';
        scoreH2.style.padding = '1rem';
    } else {
        scoreH2.style.fontSize = '2.5rem';
        scoreH2.style.padding = '1.2rem';
    }
}

// Check if mouse is inside game board
function isInsideGameBoard(x, y) {
    const boardRect = flex.getBoundingClientRect();
    return (
        x >= boardRect.left &&
        x <= boardRect.right &&
        y >= boardRect.top &&
        y <= boardRect.bottom
    );
}

// Start a new game
function startGame() {
    // Reset game state
    score = 0;
    timeLeft = 60;
    gameActive = true;
    
    // Reset displays
    scoreH2.style = '';
    scoreH2.innerHTML = 'Your Score: 0';
    timeLeftH2.innerHTML = 'Time Left: 60';
    
    // Show and size game board
    flex.style.display = 'flex';
    adjustGameSize();
    
    // Show pause button
    pauseGameButton.style.display = 'inline-block';
    pauseGameButton.innerHTML = 'Pause';
    
    // Don't show cursor until mouse enters game board
    cursor.style.display = 'none';
    
    // Play game music with error handling
    try {
        gameMusic.currentTime = 0;
        gameMusic.play().catch(e => console.log("Audio play failed:", e));
        gameMusic.loop = true;
    } catch (error) {
        console.log("Audio error:", error);
    }

    // Start game timers
    timerId = setInterval(randomMole, 1000);
    randomMoleId = setInterval(countDown, 1000);
}

// Pause or resume game
function pauseResumeGame() {
    if (pauseGameButton.textContent === 'Pause') {
        // Pause the game
        try {
            gameMusic.pause();
        } catch (error) {
            console.log("Audio pause error:", error);
        }
        clearInterval(timerId);
        clearInterval(randomMoleId);
        timerId = null;
        randomMoleId = null;
        gameActive = false;
        cursor.style.display = 'none';
        pauseGameButton.textContent = 'Resume';
    } else {
        // Resume the game
        try {
            gameMusic.play().catch(e => console.log("Audio play failed:", e));
        } catch (error) {
            console.log("Audio error:", error);
        }
        timerId = setInterval(randomMole, 1000);
        randomMoleId = setInterval(countDown, 1000);
        gameActive = true;
        pauseGameButton.textContent = 'Pause';
    }
}

// Add event listeners for mole hits
squares.forEach(square => {
    // Mouse events
    square.addEventListener('mousedown', () => {
        if (timerId !== null && gameActive && square.id === hitPosition) {
            try {
                hitMusic.currentTime = 0;
                hitMusic.play().catch(e => console.log("Hit sound failed:", e));
            } catch (error) {
                console.log("Audio error:", error);
            }
            
            score++;
            scoreH2.innerHTML = `Your Score: ${score}`;
            hitPosition = null;
            
            square.classList.remove('mole');
            square.classList.add('whacked');
            setTimeout(() => square.classList.remove('whacked'), 500);
        }
    });
    
    // Touch events for mobile
    square.addEventListener('touchstart', (e) => {
        if (timerId !== null && gameActive && square.id === hitPosition) {
            e.preventDefault(); // Prevent default behavior
            
            try {
                hitMusic.currentTime = 0;
                hitMusic.play().catch(e => console.log("Hit sound failed:", e));
            } catch (error) {
                console.log("Audio error:", error);
            }
            
            score++;
            scoreH2.innerHTML = `Your Score: ${score}`;
            hitPosition = null;
            
            square.classList.remove('mole');
            square.classList.add('whacked');
            setTimeout(() => square.classList.remove('whacked'), 500);
        }
    });
});

// Button event listeners
startNewGameButton.addEventListener('click', startGame);
pauseGameButton.addEventListener('click', pauseResumeGame);

// Mouse movement for hammer cursor
window.addEventListener('mousemove', e => {
    if (gameActive && isInsideGameBoard(e.clientX, e.clientY)) {
        cursor.style.display = 'block';
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    } else if (gameActive) {
        cursor.style.display = 'none';
    }
});

// Game board mouse enter/leave
flex.addEventListener('mouseenter', () => {
    if (gameActive) {
        cursor.style.display = 'block';
    }
});

flex.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// Mouse down event for hammer animation
window.addEventListener('mousedown', (e) => {
    if (gameActive && isInsideGameBoard(e.clientX, e.clientY)) {
        cursor.classList.add('active');
    }
});

// Mouse up event to reset hammer animation
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Handle window resize
window.addEventListener('resize', () => {
    if (gameActive) {
        adjustGameSize();
    }
    
    if (!gameActive && timeLeft === 0) {
        responsiveFinalScore();
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    adjustGameSize();
});

// Set initial mole position
randomMole();