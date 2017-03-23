import {match} from "ramda"

export default function getSource (uri: string): string {
  const [, id] = match(/twitter\.com\/.+?\/status\/(.+)?/, uri)

  return `https://api.twitter.com/1.1/statuses/show.json?id=${id}`
}
