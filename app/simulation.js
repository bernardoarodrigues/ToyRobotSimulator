const { Table } = require('./table')
const { Robot } = require('./robot')
const { Controller } = require('./controller')

/*
 * ToyRobotSimulation Class
 *
 * Methods:
 *  [static] .run() --> creates a Table, a Robot and a Controller and starts getting user input
 * 
*/
function ToyRobotSimulation() {}

ToyRobotSimulation.run = function() {
    table = new Table(5, 5)
    robot = new Robot()
    controller = new Controller(table, robot)

    while (true) {
        controller.getCommand()
    }
}

module.exports = ToyRobotSimulation