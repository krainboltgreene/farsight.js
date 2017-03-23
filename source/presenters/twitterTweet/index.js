import {match} from "ramda"
import {tap} from "ramda"
import * as renders from "./renders"

export default {
  isMatch: match(/twitter\.com/),
  render (type: string): Function {
    return renders[type] || tap
  }
}
