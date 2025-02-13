const AWS = require('aws-sdk')

module.exports = async () => {
  const secretsManager = new AWS.SecretsManager()
  const secret = await secretsManager.getSecretValue({ SecretId: 'rapidapi' }).promise()
  if (!secret) {
    throw new Error('Secret not found')
  }
  console.log('############')

  console.log(JSON.parse(secret.SecretString))
  return JSON.parse(secret.SecretString)
}
