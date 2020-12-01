const { computeEngine } = require('@blast-engine/cloud-control')
const { getContext } = require('./get-context.fn')

;(async () => {
  const context = await getContext()
  const { zone, name } = context.computeInstances.ticker
  computeEngine.replaceProcessWithCloudSSH({ zone, name })
})()

