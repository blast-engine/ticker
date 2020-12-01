const { getCurrentContext } = require('@blast-engine/context')
const { findFileRecursivelyUp } = require('@blast-engine/find-recursively-up')

let cache
const getContext = async () => {
  if (cache) return cache

  const context = await getCurrentContext({ 
    directory: __dirname, 
    errorOutIfNone: true 
  })

  // @todo: context should add in extras with "onSelect"
  const serviceKeyFilePath = await findFileRecursivelyUp('current-service-key', __dirname)

  cache = { context, serviceKeyFilePath }
  return cache
}

module.exports = { getContext }