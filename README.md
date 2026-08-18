# Checkers Game

A classic two-player Checkers game playable in a web browser. Play against a friend on the same device (localhost).

## Author

Marc-Arthur Saint Louis

## About

This project is a digital implementation of the classic strategy board game Checkers (Draughts). It simulates a game between two players on a single computer. The game enforces all standard checkers rules, including mandatory captures and king promotion.

The interface is built with **Next.js** and **Tailwind CSS**, providing a smooth, interactive drag-and-drop or click-to-move experience.

## Features

- **Two-Player Local Game:** Take turns with a friend on the same device.
- **Official Rules:** Enforces standard checkers moves, jumps (captures), and multi-jumps.
- **King Promotion:** Pieces are crowned as "Kings" when reaching the opposite side, gaining the ability to move backwards.
- **Move Validation:** Prevents illegal moves according to standard checkers rules.
- **Game State Display:** Clearly indicates which player's turn it is.
- **Profile Management:** Users can change their profile information.
- **Quit/Reset Option:** Allows players to quit the current game and start a new one at any time.

## Results

This is a fully functional two-player checker game that can be played locally. Players take turns moving their pieces, capturing opponent pieces by jumping over them, and promoting pieces to kings when they reach the opposite side.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and playing.

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/arthfs/checker.git
   cd checker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the game**
   Open [http://localhost:3000](http://localhost:3000) with your browser to play.

## How to Play

1. The game starts with the dark pieces (Player 1). The current player's turn is displayed on screen.
2. **To move:** Click on one of your pieces, then click on a valid highlighted square.
3. **To capture (jump):** If an opponent's piece is diagonally adjacent and the square immediately beyond is empty, you **must** jump and capture that piece.
4. **Multiple Jumps:** If a piece can make another capture after its first jump, it **must** continue jumping.
5. **King Pieces:** When a piece reaches the opposite side of the board, it becomes a King. Kings can move both forward and backward diagonally.
6. **Winning:** The game ends when one player has no remaining pieces or has no legal moves available. That player loses, and the other player wins.

## Files

- `pages/index.js` - Main game board and UI logic
- `pages/api/hello.js` - Example API route
- `public/` - Static assets
- `src/` - Source code directory
- `package.json` - Project dependencies and scripts
- `next.config.mjs` - Next.js configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `jsconfig.json` - JavaScript configuration

## Project Structure

```
checker/
├── public/           # Static assets (images, fonts, etc.)
├── src/              # Source code
│   └── ...           # Components and game logic
├── pages/            # Next.js pages
│   ├── index.js      # Main game board
│   └── api/          # API routes
│       └── hello.js  # Example API endpoint
├── package.json      # Dependencies and scripts
├── next.config.mjs   # Next.js configuration
├── tailwind.config.mjs # Tailwind configuration
├── postcss.config.mjs # PostCSS configuration
└── jsconfig.json     # JS configuration
```

## Run Instructions (Summary)

```bash
git clone https://github.com/arthfs/checker.git
cd checker
npm install
npm run dev
# Open http://localhost:3000
```

## Future Improvements

- Add an AI opponent to play against the computer
- Implement online multiplayer via WebSockets
- Add move timers and game clocks
- Save game history and replays
- Add sound effects for moves and captures
- Implement different difficulty levels
- Add drag-and-drop movement instead of click-to-click

## Acknowledgments

- Inspired by classic Checkers board game rules
- Built as a portfolio project to demonstrate front-end development and game logic implementation
- Thanks to the Next.js team for the excellent framework

## License

This project is open source and available under the [MIT License](LICENSE)
