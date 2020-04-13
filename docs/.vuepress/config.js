//config.js
module.exports = {
  extend: "@vuepress/theme-default",
  title: "Greg Connolly",
  description: "Portfolio and CV page",
  themeConfig: {
    navbar: false,
    sidebar: [
      "/",
      "about",
      "experience",
      "education",
      "skills",
      "interests",
      "contact"
    ],
    sidebarDepth: 0,
    smoothscroll: true
  }
}
