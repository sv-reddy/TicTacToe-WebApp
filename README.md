# Tic-Tac-Toe Game

A classic, browser-based Tic-Tac-Toe game built with plain HTML, CSS, and JavaScript. This project is a simple and clean implementation where two players can compete against each other on the same screen.

<img width="1000" height="920" alt="TicTacToe Page Preview" src="https://github.com/user-attachments/assets/ca43fc2a-bef9-4f20-8392-440a59363912" />


## Features

* **Interactive 3x3 Grid:** A classic game board where players can click to place their mark.
* **Two-Player Gameplay:** The game supports two players, "X" and "O", who take turns.
* **Win and Draw Detection:** The game automatically detects when a player has won or when the game is a draw.
    * It checks for all 8 winning combinations (horizontal, vertical, and diagonal).
    * It declares a draw if all nine boxes are filled without a winner.
* **Game Over Notification:** An alert pops up to announce the winner or declare a draw.
* **Reset Functionality:** A "Reset Game" button allows players to clear the board and start a new game at any time.
* **Clean UI:** A simple and visually appealing interface styled with modern CSS, including Flexbox for layout.

## Technologies Used

* **HTML5:** For the structure and content of the game.
* **CSS3:** For styling the game board, buttons, and layout.
* **JavaScript (ES6):** For all the game logic, including handling clicks, tracking turns, checking for winners, and resetting the game.

## How to Play

1.  Clone or download the repository to your local machine.
2.  Open the `index.html` file in your preferred web browser.
3.  The game starts with Player **X**.
4.  Click on any empty square to make your move.
5.  Players will alternate turns until one player achieves three marks in a row or the board is full.
6.  To play again, simply click the **"Reset Game"** button.

## File Structure

The project is organized into three main files:
### Code Overview

* **`index.html`**: Contains the basic structure, including a container for the 3x3 grid (made of 9 `<button>` elements) and the reset button.
* **`styles.css`**: Provides the styling for the page, container, game grid, and individual boxes. It uses `vmin` units for responsive grid sizing and `flexbox` for centering.
* **`script.js`**:
    * It defines an array `winpattern` that holds all possible winning combinations.
    * An event listener is added to each box to handle player moves. When a box is clicked, it's filled with "X" or "O" and then disabled.
    * The `checkWinner()` function is called after every move to see if the game has been won or is a draw.
    * The `resetgame()` function clears the board, re-enables the boxes, and resets the turn counter for a new game.
