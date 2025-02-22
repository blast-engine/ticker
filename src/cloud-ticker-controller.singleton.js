const { context } = require('@blast-engine/context')
const { computeEngine } = require('@blast-engine/cloud-control')

class CloudTickerController {

  start(quiet = true) {
    return cloud.computeEngine.executeAppCommand(
      context.computeInstance('ticker'),
      `yarn ticker:start-daemon`,
      quiet
    )
  }

  stop(quiet = true) {
    return cloud.computeEngine.executeAppCommand(
      context.computeInstance('ticker'),
      `yarn ticker:stop-daemons`,
      quiet
    )
  }

  ssh() {
    return computeEngine.replaceProcessWithCloudSSH(
      context.computeInstance('ticker')
    )
  }

  exec(commands, quiet = true) {
    commands = Array.isArray(commands) ? commands : [ commands ]
    return cloud.computeEngine.executeCommands(
      context.computeInstance('ticker'),
      commands,
      quiet
    )
  }

  deploy() {
    return cloud.computeEngine.deployCode(context.computeInstance('ticker'))
  }

}

module.exports = { cloudTicker: new CloudTickerController }