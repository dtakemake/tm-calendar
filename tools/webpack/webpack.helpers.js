/**
 * Are we in development mode?
 */
const inDev = () => process.env.NODE_ENV === 'development'

// Export helpers
module.exports = {
  inDev
}
