import{B as i}from"./chunks/theme.DrfMm0CJ.js";import{R as o,aF as u,aG as l,aH as c,aI as f,aJ as d,aK as m,aL as h,aM as g,aN as A,aO as P,d as v,u as y,v as C,s as R,aP as w,aQ as b,aR as E,a0 as S}from"./chunks/framework.BM8OjcU4.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return C(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),a=F();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function F(){return g(T)}function L(){let e=o,a;return A(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};