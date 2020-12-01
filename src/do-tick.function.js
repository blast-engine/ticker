const PubSub = require('@google-cloud/pubsub')
const { getContext } = require('./get-context.fn')


const doTick = async () => {
  const { serviceKeyFilePath } = await getContext()

  process.env['GOOGLE_APPLICATION_CREDENTIALS'] = serviceKeyFilePath
  const pubsub = new PubSub()

  return pubsub
    .topic('tick')
    .publisher()
    .publish(Buffer.from('tick occurred'))
}

module.exports = { doTick }