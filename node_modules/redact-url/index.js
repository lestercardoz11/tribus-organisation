var isURL = require("is-url")
var URL = require("url")
var qs = require("querystring")

var redact = module.exports = function(input, replacement) {

  replacement = typeof(replacement) === "string" ? replacement : "REDACTED"

  if (!isURL(input)) return input

  var url = URL.parse(input)

  if (url.auth) {
    url.auth = replacement
  }

  if (url.query){
    url.search = null
    url.query = qs.parse(url.query)

    Object.keys(url.query).forEach(function(key) {
      if (key.match(/secret|pass|token|key|pwd/i)) url.query[key] = replacement
    })

  }

  return URL.format(url)
}
