import{_ as i}from"./index-CPsqKZMB.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-DLux6Qlq.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-DLux6Qlq.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}