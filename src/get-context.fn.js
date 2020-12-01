const { getCurrentContext } = require('@blast-engine/context')

const getContext = async () => {
  return getCurrentContext({ 
    directory: __dirname, 
    errorOutIfNone: true 
  })
}

module.exports = { getContext }