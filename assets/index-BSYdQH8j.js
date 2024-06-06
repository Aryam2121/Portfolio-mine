import{_ as o}from"./index-CPsqKZMB.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-B-acR2ph.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-B-acR2ph.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
