import React, { useState, useEffect } from 'react'

const initialBoard = [
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
]

const ChessGame = () => {
  const [board, setBoard] = useState(initialBoard)
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true)
  const [isSinglePlayer, setIsSinglePlayer] = useState(false)

  const getPossibleMoves = (piece) => {
    if (!piece) {
      return []
    }

    const possibleMoves = []
    const { rowIndex, colIndex, piece: pieceType } = piece
    const direction = pieceType === '♟' ? 1 : -1 // 1 for player1, -1 for player2

    // Normal move (one square forward)
    if (board[rowIndex + direction][colIndex] === ' ') {
      possibleMoves.push({ row: rowIndex + direction, col: colIndex })

      // Initial double move (two squares forward)
      if (
        (pieceType === '♟' && rowIndex === 1) ||
        (pieceType === '♙' && rowIndex === 6)
      ) {
        if (board[rowIndex + 2 * direction][colIndex] === ' ') {
          possibleMoves.push({ row: rowIndex + 2 * direction, col: colIndex })
        }
      }
    }

    // Capture moves (diagonal)
    if (colIndex > 0 && board[rowIndex + direction][colIndex - 1] !== ' ') {
      possibleMoves.push({ row: rowIndex + direction, col: colIndex - 1 })
    }
    if (colIndex < 7 && board[rowIndex + direction][colIndex + 1] !== ' ') {
      possibleMoves.push({ row: rowIndex + direction, col: colIndex + 1 })
    }

    return possibleMoves
  }

  const isValidMove = (piece, startRow, startCol, endRow, endCol) => {
    const { rowIndex: startRowIndex, colIndex: startColIndex, piece: pieceType } = piece;
    const direction = pieceType === '♟' ? 1 : -1 // 1 for player1, -1 for player2
  
    // Check if the selected piece is moving to an empty square
    if (board[endRow][endCol] === ' ' && endRow === startRow + direction && endCol === startCol)
      return true;
  
    // Check if the selected piece is moving to a square with an enemy piece
    if (board[endRow][endCol] !== ' ' && board[endRow][endCol].toLowerCase() !== pieceType.toLowerCase() && endRow === startRow + direction && Math.abs(endCol - startCol) === 1)
      return true;
  
    // Check for initial double move
    if (
      (pieceType === '♟' && startRow === 1 && endRow === 3 && endCol === startCol && board[2][startCol] === ' ') ||
      (pieceType === '♙' && startRow === 6 && endRow === 4 && endCol === startCol && board[5][startCol] === ' ')
    ) {
      return true;
    }
  
    return false;
  }

  const makeComputerMove = () => {
    const newBoard = board.map((row) => [...row])
    // For now, let's just move a random piece
    const pieces = []
    board.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (
          piece !== ' ' &&
          piece.toLowerCase() === '♟' &&
          !isPlayer1Turn
        ) {
          pieces.push({ piece, rowIndex, colIndex })
        }
      })
    })
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)]
    const possibleMoves = getPossibleMoves(randomPiece)
    if (possibleMoves.length > 0) {
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
      newBoard[randomMove.row][randomMove.col] =
        randomPiece.piece
      newBoard[randomPiece.rowIndex][randomPiece.colIndex] = ' '
      setBoard(newBoard)
      setIsPlayer1Turn(true)
    }
  }

  useEffect(() => {
    if (isSinglePlayer && !isPlayer1Turn) {
      setTimeout(() => {
        makeComputerMove()
      }, 500)
    }
  }, [isSinglePlayer, isPlayer1Turn, board, makeComputerMove])

  const handlePieceClick = (piece, row, col) => {
    if (isSinglePlayer && !isPlayer1Turn) {
      return
    }

    if (selectedPiece) {
      const isValid = isValidMove(selectedPiece.row, selectedPiece.col, row, col)
      if (isValid) {
        const newBoard = board.map((row) => [...row])
        newBoard[row][col] = selectedPiece.piece
        newBoard[selectedPiece.row][selectedPiece.col] = ' '
        setBoard(newBoard)
        setSelectedPiece(null)
        setIsPlayer1Turn(!isPlayer1Turn)
        if (isSinglePlayer) {
          setTimeout(() => {
            makeComputerMove()
          }, 500)
        }
      } else {
        setSelectedPiece(null)
      }
    } else {
      setSelectedPiece({ piece, row, col })
    }
  }

  return (
    <div>
      <h1>Chess Game</h1>
      <div>
        <button onClick={() => setIsSinglePlayer(true)}>Single Player</button>
        <button onClick={() => setIsSinglePlayer(false)}>Multiplayer</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((piece, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: '50px',
                  height: '50px',
                  border: '1px solid black',
                  backgroundColor: (rowIndex + colIndex) % 2 === 0 ? 'white' : 'gray',
                  textAlign: 'center',
                  lineHeight: '50px',
                  cursor: 'pointer',
                }}
                onClick={() => handlePieceClick(piece, rowIndex, colIndex)}
              >
                {piece}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChessGame