
// 根据roles和routerMap生成路由
let getRouter = function(roles, routerMap){
  let router = roles.map( route => {
    let temp = Object.assign({}, route, routerMap[route.id])
    if(route.children && route.children.length > 0){
      let children = getRouter(route.children, routerMap[route.id].children)
      temp = Object.assign(temp, {children})
    }
    return temp;
  })
  return router
}

// 获取当前地址的路由
let getCurrentRouter = function(router, path){
  let currentRouter = null;
  router.some( v => {
    if(v.path == path){
      currentRouter = v
      return true
    }
  })
  return currentRouter;
}

export {
  getRouter,
  getCurrentRouter
}