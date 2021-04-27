module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',
  dest: 'public',
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
  ],
  // theme: 'Layout.vue', 
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '百度', link: 'https://www.baidu.com.cn' },
      {
        text: '文档',
        link: '/wendang/',
        items: [
          { text: '来购', link: '/wendang/two/' },
          { text: '商城', link: '/wendang/shangcheng/' },
        ]
      },
    ],
    sidebar111: [
      {
        title: '文档',
        path: '/wendang/',
        children: [
          {
            title: '来购',
            path: '/wendang/two'
          },
          {
            title: '商城',
            path: '/wendang/shangcheng',
            children: [
              
              {
                title: 'one',
                path: '/wendang/shangcheng/one'
              },
            ]
          }
          
        ]
      }
    ],
    sidebar: {
      // '/': [
      //   '',
      // ],
      '/wendang/': [
          {
            title: '来购',
            path: '/wendang/two'
          },
          {
            title: '商城',
            path: '/wendang/shangcheng',
            children: [
              
              {
                title: 'one',
                path: '/wendang/shangcheng/one'
              },
            ]
          }
          
        ]
      
    }
  }
}