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
      {text:"Experience", link: "/pages/experience"},
      {text:"Education", link: "/pages/education"},
      {text:"Skills", link: "/pages/skills"},
      {text:"Interests", link: "/pages/interests"},
      {text:"Contact", link: "/pages/contact"}
    ],
    search: false,
    nextLinks: false,
    prevLinks: false,
    sidebar: true,
    sidebarDepth: 0,
    smoothscroll: true
  }
}
