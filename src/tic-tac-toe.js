class TicTacToe {
    constructor() {
        this.currentPlayer = 'x'; 
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.finish = 'notFinished'; 
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    //The method changes the current player and fills the field with players' symbols 

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayer; 
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
        
    }

    //the method returns false / true values to show whether 
    //the game is ended or not (has got a winner or it's a draw = the game's finished)

    isFinished() {
        this.getWinner();
        this.isDraw();
        return this.finish === 'notFinished' ? false : true; 
    }

    //the method checks whether there are victory lines in the game field

    isWinLine(player) {
        if (// Row lines
            this.field[0].every(el => el === player) || 
            this.field[1].every(el => el === player) ||
            this.field[2].every(el => el === player) ||
            // Diagonal line from top left to bottom right
            (this.field[0][0] === player && this.field[1][1] === player && this.field[2][2] === player) ||
            // Diagonal line from top right to bottom left
            (this.field[0][2] === player && this.field[1][1] === player && this.field[2][0] === player) ||
            // Column lines
            (this.field[0][0] === player && this.field[1][0] === player && this.field[2][0] === player) ||
            (this.field[0][1] === player && this.field[1][1] === player && this.field[2][1] === player) ||
            (this.field[0][2] === player && this.field[1][2] === player && this.field[2][2] === player)
        ) return player; 
    
    }

    //the method checks whether there is a game winner or not

    getWinner() {
       if (this.isWinLine('x') === 'x') {
            this.finish = 'finished';
            return 'x';
       } else if (this.isWinLine('o') === 'o') {
            this.finish = 'finished';
            return 'o';
       } else return null;
       
    }

    //the method checks whether the game field is full or not. 

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            if (this.field[i].includes(null)) return false;   
        } 
        return true; 
    }

    //The method returns true if there are no more turns 
    //and no winners (=> it is a draw) 

    isDraw() {
       if (this.noMoreTurns() && this.getWinner() === null) {
           this.finish = 'draw'; 
           return true; 
       } else return false; 
    }

    //The method returns the value of 
    //the specified position in the field

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
