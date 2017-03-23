import {invoker} from "ramda"
import {find} from "ramda"
import {prop} from "ramda"
import {values} from "ramda"
import axios from "axios"

import * as defaultPresenters from "./presenters"
import * as defaultAdapters from "./adapters"

const IS_MATCH_ARGUMENTS = 1
const isMatch = invoker(IS_MATCH_ARGUMENTS, "isMatch")
const defaultConfiguration = {
  presenters: values(defaultPresenters),
  adapters: values(defaultAdapters),
}

export default function farsight (configuration?: ConfigurationType = defaultConfiguration, mock?: MockType): Function {
  const {presenters} = configuration
  const {adapters} = configuration

  return function farsightWithConfiguration (url: string, type: string): Promise<any> {
    const findMatch = find(isMatch(url))
    const adapter = findMatch(adapters)
    const presenter = findMatch(presenters)
    const client: ClientType = mock || axios

    return client({
      url: adapter.getSource(url),
      transformResponse: [adapter.parser],
      responseType: "text",
      headers: adapter.headers,
    })
      .then(prop("data"))
      .then(presenter.render(type))
  }
}
