import{s as r,b as l,Y as f}from"./index-CPsqKZMB.js";import{A as u}from"./AnimationOptions-5Y2d_1mt.js";import{O as a}from"./OptionsColor-B1eFdYZ5.js";class n extends u{constructor(){super(),this.offset=0,this.sync=!0}load(s){super.load(s),s&&s.offset!==void 0&&(this.offset=r(s.offset))}}class c{constructor(){this.h=new n,this.s=new n,this.l=new n}load(s){s&&(this.h.load(s.h),this.s.load(s.s),this.l.load(s.l))}}class e extends a{constructor(){super(),this.animation=new c}static create(s,i){const o=new e;return o.load(s),i!==void 0&&(l(i)||f(i)?o.load({value:i}):o.load(i)),o}load(s){if(super.load(s),!s)return;const i=s.animation;i!==void 0&&(i.enable!==void 0?this.animation.h.load(i):this.animation.load(s.animation))}}export{e as A};
