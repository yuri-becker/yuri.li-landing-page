import * as functions from 'firebase-functions'
import * as https from 'https'
import * as corsConfig from 'cors'

const cors = corsConfig({origin: true})
export const blogFeed = functions.https.onRequest((req, resp) => cors(req, resp, () => {
  https.get('https://medium.com/feed/@yuri.li', (feedResponse) => {
    let feedData = ''
    feedResponse.on('data', chunk => feedData += chunk)
    feedResponse.on('end', () => resp.contentType('application/atom+xml').status(200).send(feedData))
  })
}))
