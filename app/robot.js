/*
 * Robot Class 
 *
 * Properties:
 *  {Boolean} isPlaced --> true if the robot is placed on a table, false if not
 *  {Int,Int} position --> robot coordinates
 *  {String} direction --> direction the robot is facing
 * 
 * Methods:
 *  .place(Table, String) --> places the robot in a table  
 *  .move(Table) --> moves the robot 1 position forward in the table  
 *  .right() --> turns the robot to the right
 *  .left() --> turns the robot to the left
 *  .report() --> reports the robot state (position and direction)
 * 
*/
function Robot() {
    this.isPlaced = false
    this.position = { x: undefined, y: undefined }
    this.direction = undefined
    let directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']

    this.place = function(table, args) {
        if(args == null || args.split(',').length != 3) {
            console.log('Error: Please enter all the parameters: (x,y,direction)')
            return
        }

        let [x, y, direction] = args.split(',')
        x = parseInt(x)
        y = parseInt(y)

        if(!table.isValidPosition(x, y, 'place')) return
        
        if(!directions.includes(direction)) {
            console.log('Error: Please enter a valid direction: (NORTH, EAST, SOUTH, WEST)')
            return
        }

        this.isPlaced = true
        this.position.x = x
        this.position.y = y
        this.direction = direction
    }

    this.move = function(table) {
        if(!this.isPlaced) {
            console.log('Error: Robot is not placed')
            return
        }

        switch(this.direction) {
            case 'NORTH':
                if(table.isValidPosition(this.position.x, this.position.y + 1)) this.position.y++
                break
            case 'EAST':
                if(table.isValidPosition(this.position.x + 1, this.position.y)) this.position.x++
                break
            case 'SOUTH':
                if(table.isValidPosition(this.position.x, this.position.y - 1)) this.position.y--
                break
            case 'WEST':
                if(table.isValidPosition(this.position.x - 1, this.position.y)) this.position.x--
                break
        }
    }

    this.right = function() {
        if(!this.isPlaced) {
            console.log('Error: Robot is not placed')
            return
        }

        let dir = directions.indexOf(this.direction)
        dir++
        if(dir <= 3) this.direction = directions[dir]
        else this.direction = directions[0]
    }

    this.left = function() {
        if(!this.isPlaced) {
            console.log('Error: Robot is not placed')
            return
        }

        let dir = directions.indexOf(this.direction)
        dir--
        if(dir >= 0) this.direction = directions[dir]
        else this.direction = directions[3]        
    }

    this.report = function() {
        if(!robot.isPlaced) {
            console.log('Error: Robot is not placed')
            return
        }

        console.log('\n----- Robot State -----')
        console.log(`Position --> X: ${this.position.x}, Y: ${this.position.y}`)
        console.log(`Direction --> ${this.direction}`)
        console.log('-----------------------')
    }
}

module.exports = { Robot }