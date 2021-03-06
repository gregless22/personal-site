//config.js
module.exports = {
  extend: "@vuepress/theme-default",
  title: "Greg Connolly",
  description: "Portfolio and CV page",
  plugins: ['vuepress-plugin-smooth-scroll'],
  themeConfig: {
    logo: '',
    navbar: true,
    nav: [
      {text:"Home", link: "/"},
      // {text:"About", link: "about"},
      {text:"Experience", link: "experience"},
      {text:"Education", link: "education"},
      {text:"Skills", link: "skills"},
      {text:"Interests", link: "interests"},
      {text:"Contact", link: "contact"}
    ],
    search: false,
    nextLinks: false,
    prevLinks: false,
    sidebar: true,
    sidebarDepth: 1,
    smoothscroll: true
  }
}
