const reader = require("readline-sync");

/*
 * Controller Class
 *
 * Properties:
 *  {Table} table --> table which the robot will move on
 *  {Robot} robot --> robot that will be controlled
 * 
 * Methods:
 *  .getCommand() --> gets user input, parses it and executes the command
 * 
*/
function Controller(table, robot) {
    this.table = table
    this.robot = robot

    this.getCommand = function() {
        console.log('\nToyRobot Simulator')

        let input = reader.question('Command (EXIT to quit): ')
        let [command, commandArgs] = input.toUpperCase().split(' ')
        
        switch(command) {
            case 'PLACE': 
                this.robot.place(table, commandArgs)
                break
            case 'MOVE': 
                this.robot.move(table)
                break
            case 'LEFT': 
                this.robot.left()
                break
            case 'RIGHT': 
                this.robot.right()
                break
            case 'REPORT':
                this.robot.report()
                break
            case 'EXIT':
                console.log('Thank you for using the ToyRobot Simulator!')
                process.exit(1);
                break
            default: 
                console.log('Error: Invalid command')
        }
    }
}

module.exports = { Controller }