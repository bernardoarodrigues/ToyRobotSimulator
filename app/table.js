/*
 * Table Class 
 *
 * Properties:
 *  {Int} length  --> length of the table
 *  {Int} width --> width of the table
 * 
 * Methods:
 *  {Boolean} .isValidPosition() --> checks whether the (x,y) position is inside the table boundaries
 * 
*/
function Table(length, width) {
    this.length = length
    this.width = width

    this.isValidPosition = function(x, y, cmd) {
        if(x >= 0 && x < this.length) {
            if(y >= 0 && y < this.width) {
                return true
            }
        }

        if (cmd == 'place') console.log('Error: Invalid position - out of table boundaries')
        else console.log('Error: Invalid move - out of table boundaries')
        
        return false
    }
}

module.exports = { Table }