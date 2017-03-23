import {test} from "tap"

import farsight from "./index"

test(({equal, end}) => {
  const farsighted = farsight()

  return farsighted("https://twitter.com/AP/status/839687258626273285", "text")
    .then((text) => equal(text, ""))
})
