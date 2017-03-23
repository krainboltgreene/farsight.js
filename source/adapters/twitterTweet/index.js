import {match} from "ramda"

import extract from "./extract"
import getSource from "./getSource"

export default {
  extract,
  isMatch: match(/twitter\.com\/.+?\/status\/.+?/),
  getSource,
  parser: JSON.parse,
  headers: {},
}
