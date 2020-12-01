const PubSub = require('@google-cloud/pubsub')
const { context } = require('@smackchat/cloud-context') // @todo: rename to { env }

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = context.serviceKeyFilepath()
const pubsub = new PubSub()

function doTick() {
  return pubsub
    .topic('tick')
    .publisher()
    .publish(Buffer.from('tick occurred'))
}

module.exports = { doTick }