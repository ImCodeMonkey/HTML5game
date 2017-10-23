//配置本地服务器
// fis.match('*', {
//   deploy: fis.plugin('local-deliver', {
//     to: 'S:/nginx-1.9.6/html'
//   })
// })

//资源配置表
fis.match('/map.json',{
    release: '/tpl/config/map.json'
})