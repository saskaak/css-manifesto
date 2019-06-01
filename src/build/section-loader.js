const marked = require("marked");

const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['scss']);

marked.setOptions({
  highlight: function (code, language) {
    return Prism.highlight(code, Prism.languages[language], language);
  },
});

module.exports = function (source) {
  const titleMatch = source.match(/^# (.*)\n/);

  const section = {
    title: titleMatch[1],
    content: marked(source.substring(titleMatch[0].length)),
  };

  return `export default ${JSON.stringify(section)}`;
};
