const marked = require("marked");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['scss']);

marked.setOptions({
  highlight: function (code, language) {
    return Prism.highlight(code, Prism.languages[language], language);
  },
});

// ideoita:
// https://www.npmjs.com/package/markdown-toc
// https://www.npmjs.com/package/front-matter

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .options({
          markdown: (body) => {
            return marked(body);
          },
        })
        .end()
  }
};

