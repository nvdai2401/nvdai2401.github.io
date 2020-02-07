function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  let bowls = 0
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} phút đọc`
  }
}

// `lang` is optional and will default to the current user agent locale
function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean)
  return date.toLocaleDateString(...args)
}

const isAlphabetNum = s =>
  /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(s)

function kebabCase(s) {
  if (isAlphabetNum(s)) {
    return s
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map(x => x.toLowerCase())
      .join('-')
  }

  return s
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

module.exports = {
  formatReadingTime,
  kebabCase,
  formatPostDate,
}
