const {sep} = require("path");

module.exports = ($, siteMetaData) => {
    const articlesMetaData =
        siteMetaData.filter(md => md.destPath.startsWith(`public${sep}blog${sep}articles${sep}`));

    $("h2").after("<ul class=\"articles\"></ul>");

    articlesMetaData.forEach(data => $("ul.articles").append(`<li><a href="articles${sep}${data.name}" title="${data.title}">${data.title}</a></li>`));
};