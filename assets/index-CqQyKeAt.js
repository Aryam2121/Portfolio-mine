import{_ as i}from"./index-CPsqKZMB.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-PK3KtXVr.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-PK3KtXVr.js","assets/index-CPsqKZMB.js","assets/index-K_WlYA7-.css","assets/ValueWithRandom-CZv4Px9B.js","assets/AnimationOptions-5Y2d_1mt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
