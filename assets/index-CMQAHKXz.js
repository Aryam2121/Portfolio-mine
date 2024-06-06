import{_ as o}from"./index-CPsqKZMB.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-Cm-7PK7s.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-Cm-7PK7s.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css","assets/ValueWithRandom-CZv4Px9B.js","assets/AnimationOptions-5Y2d_1mt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
