import{_ as e}from"./index-CPsqKZMB.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BHRVSXWZ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-BHRVSXWZ.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
