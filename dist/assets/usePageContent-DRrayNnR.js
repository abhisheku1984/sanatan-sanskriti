import{r as s}from"./react-vendor-icbPLavm.js";function m(){const[i,a]=s.useState(""),[o,r]=s.useState(!1),t=s.useRef(null);return s.useEffect(()=>{const e=setTimeout(()=>{if(t.current){const n=u(t.current);a(n),r(!0)}},500);return()=>clearTimeout(e)},[]),{pageContent:i,isReady:o,contentRef:t}}function u(i){const a=[],o=document.createTreeWalker(i,NodeFilter.SHOW_TEXT,null);let r,t="";for(;r=o.nextNode();){const e=r.textContent?.trim()||"";if(e.length>0){const n=r.parentElement;n?.tagName.match(/^H[1-6]$/)?(t.trim()&&(a.push(t.trim()),t=""),a.push(`
${e}
`)):n?.tagName==="P"||n?.tagName==="DIV"||n?.tagName==="SPAN"||n?.tagName==="LI"?(t&&(t+=" "),t+=e,(e.endsWith(".")||e.endsWith("।")||n?.tagName==="P")&&(a.push(t.trim()),t="")):(n?.tagName==="TD"||n?.tagName==="TH"||e)&&(t&&(t+=" "),t+=e)}}return t.trim()&&a.push(t.trim()),a.filter(e=>e.trim().length>0).join(`

`).replace(/\n\n\n+/g,`

`)}export{m as u};
