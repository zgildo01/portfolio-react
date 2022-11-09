export function hyphenator(str) {
  let strNoSpec = str.replace(/[!%&'()*+./;<=>?\\,/:#@\t\r\n"[\]_\u007B-\u00BF-]/g, "")
  let strNoSpace = strNoSpec.replace(" ", "-").toLowerCase()
  return strNoSpace
}