import{_ as n}from"./index-CPsqKZMB.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DfOGxH1n.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CyGv1fqL.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DfOGxH1n.js","assets/PolygonDrawerBase-DLLBa0ub.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css","assets/TriangleDrawer-CyGv1fqL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
