(()=>{var e={};e.id=999,e.ids=[999],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},144:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>m,routeModule:()=>x,tree:()=>c});var i=s(3137),r=s(4647),a=s(4183),n=s.n(a),l=s(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=i.AppPageRouteModule,c=["",{children:["security-assessment",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2209)),"/Users/ok/Developer/omsnet_digital_fortress_cybersecurity_website_0o7r4g/app/security-assessment/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3253)),"/Users/ok/Developer/omsnet_digital_fortress_cybersecurity_website_0o7r4g/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],m=["/Users/ok/Developer/omsnet_digital_fortress_cybersecurity_website_0o7r4g/app/security-assessment/page.tsx"],p="/security-assessment/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new d({definition:{kind:r.x.APP_PAGE,page:"/security-assessment/page",pathname:"/security-assessment",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1824:(e,t,s)=>{Promise.resolve().then(s.bind(s,5843))},5843:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var i=s(80),r=s(4880),a=s(4576),n=s(8384),l=s(7052),o=s(9885),d=s(7),c=s(6253),m=s(4901),p=s(8089),u=s(5574);function x(){let[e,t]=(0,o.useState)(0),[s,x]=(0,o.useState)({}),[h,g]=(0,o.useState)(!1),[v,y]=(0,o.useState)(""),b=[{id:"network_security",question:"How would you rate your current network security measures?",options:[{value:1,label:"Basic - Limited firewall and basic monitoring"},{value:2,label:"Standard - Firewall, some monitoring, basic policies"},{value:3,label:"Advanced - Multi-layer security, regular assessments"},{value:4,label:"Enterprise - Advanced threat detection, 24/7 monitoring"}]},{id:"data_protection",question:"How is your sensitive data currently protected?",options:[{value:1,label:"Limited - Basic file permissions, no encryption"},{value:2,label:"Standard - Some encryption, basic access controls"},{value:3,label:"Advanced - Full encryption, role-based access"},{value:4,label:"Enterprise - Advanced DLP, encryption everywhere"}]},{id:"incident_response",question:"What is your incident response capability?",options:[{value:1,label:"None - No formal incident response plan"},{value:2,label:"Basic - Some documentation, limited testing"},{value:3,label:"Advanced - Documented plan, regular testing"},{value:4,label:"Enterprise - Automated response, 24/7 SOC"}]},{id:"compliance",question:"How would you describe your compliance posture?",options:[{value:1,label:"Non-compliant - Not meeting basic requirements"},{value:2,label:"Partial - Meeting some but not all requirements"},{value:3,label:"Compliant - Meeting all current requirements"},{value:4,label:"Advanced - Exceeding requirements, proactive compliance"}]},{id:"employee_training",question:"How comprehensive is your security awareness training?",options:[{value:1,label:"None - No formal security training program"},{value:2,label:"Basic - Annual training, limited coverage"},{value:3,label:"Advanced - Regular training, phishing simulations"},{value:4,label:"Enterprise - Continuous training, advanced simulations"}]}],f=(e,t)=>{x(s=>({...s,[e]:t}))},j=(e,t,s,i,r)=>{let a=new Date().toLocaleDateString(),n=`SA-${Date.now()}`,l=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omsnet Digital Fortress - Security Assessment Report</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 40px;
    line-height: 1.6;
    color: #333;
  }
  .letterhead {
    border-bottom: 3px solid #2563eb;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  .company-name {
    font-size: 28px;
    font-weight: bold;
    color: #2563eb;
    margin-bottom: 5px;
  }
  .company-tagline {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
  .contact-info {
    font-size: 12px;
    color: #666;
    margin-bottom: 20px;
  }
  .report-header {
    background-color: #f8fafc;
    padding: 20px;
    border-left: 4px solid #2563eb;
    margin-bottom: 30px;
  }
  .section-title {
    font-size: 18px;
    font-weight: bold;
    color: #2563eb;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 5px;
  }
  .score-display {
    background-color: #2563eb;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin: 20px 0;
  }
  .score-number {
    font-size: 48px;
    font-weight: bold;
  }
  .risk-level {
    font-size: 24px;
    margin-top: 10px;
  }
  .recommendation-item {
    background-color: #f0f9ff;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #0ea5e9;
    border-radius: 4px;
  }
  .question-analysis {
    margin: 15px 0;
    padding: 15px;
    background-color: #f8fafc;
    border-radius: 6px;
  }
  .footer {
    margin-top: 50px;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th, td {
    border: 1px solid #e2e8f0;
    padding: 12px;
    text-align: left;
  }
  th {
    background-color: #f1f5f9;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="letterhead">
    <div class="company-name">Omsnet Digital Fortress</div>
    <div class="company-tagline">Cybersecurity Excellence & Digital Protection</div>
    <div class="contact-info">
      Email: contact@omsnet.co.uk | Phone: 0113 534 7445 | Location: Leeds, West Yorkshire
    </div>
  </div>

  <div class="report-header">
    <h1 style="color: #2563eb; margin: 0 0 10px 0;">Security Assessment Report</h1>
    <p style="margin: 0; color: #666;">Report ID: ${n} | Assessment Date: ${a}</p>
  </div>

  <div class="score-display">
    <div class="score-number">${e}%</div>
    <div class="risk-level">${t.level}</div>
  </div>

  <div class="section-title">EXECUTIVE SUMMARY</div>
  <p><strong>Overall Security Score:</strong> ${e}%</p>
  <p><strong>Risk Level:</strong> ${t.level}</p>
  <p><strong>Assessment Date:</strong> ${a}</p>
  <p>${t.description}</p>
  <p>This report provides a comprehensive analysis of your organization's cybersecurity posture based on the assessment completed on ${a}. The assessment evaluates key security domains including network security, data protection, incident response, compliance, and employee training.</p>

  <div class="section-title">DETAILED SCORING BREAKDOWN</div>
  <table>
    <thead>
      <tr>
        <th>Question</th>
        <th>Score</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      ${i.map((e,t)=>{let s=r[e.id]||0;return`<tr>
          <td>${e.question}</td>
          <td>${s}/4 (${s/4*100}%)</td>
          <td style="color: ${s>=3?"#10b981":s>=2?"#f59e0b":"#ef4444"}; font-weight: bold;">${s>=3?"Strong":s>=2?"Moderate":"Weak"}</td>
        </tr>`}).join("")}
    </tbody>
  </table>

  <div class="section-title">RECOMMENDED ACTIONS</div>
  ${s.map((e,t)=>`
    <div class="recommendation-item">
      <strong>${t+1}.</strong> ${e}
    </div>
  `).join("")}

  <div class="section-title">PRIORITY IMPLEMENTATION PLAN</div>
  <table>
    <thead>
      <tr>
        <th>Priority Level</th>
        <th>Timeline</th>
        <th>Key Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>HIGH PRIORITY</strong></td>
        <td>Immediate - 30 days</td>
        <td>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Implement comprehensive security framework</li>
            <li>Establish 24/7 security monitoring</li>
            <li>Develop incident response plan</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>MEDIUM PRIORITY</strong></td>
        <td>30-90 days</td>
        <td>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Enhance employee security training</li>
            <li>Implement advanced threat detection</li>
            <li>Regular security assessments</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>LONG-TERM</strong></td>
        <td>90+ days</td>
        <td>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Advanced encryption implementation</li>
            <li>Multi-factor authentication</li>
            <li>Regular penetration testing</li>
            <li>Continuous security improvement program</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="section-title">NEXT STEPS</div>
  <ol style="margin: 15px 0; padding-left: 20px;">
    <li>Schedule a consultation with our security experts</li>
    <li>Review and implement the recommended actions</li>
    <li>Conduct follow-up assessments every 6 months</li>
    <li>Consider our managed security services for ongoing protection</li>
  </ol>

  <div class="section-title">CONTACT INFORMATION</div>
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
    <p><strong>Omsnet Digital Fortress</strong></p>
    <p>Email: <a href="mailto:contact@omsnet.co.uk">contact@omsnet.co.uk</a></p>
    <p>Phone: 0113 534 7445</p>
    <p>Location: Leeds, West Yorkshire</p>
    <p>We specialize in helping organizations like yours build robust cybersecurity defenses and maintain compliance with industry standards.</p>
  </div>

  <div class="footer">
    <p>\xa9 2025 Omsnet Digital Fortress - All Rights Reserved</p>
    <p>This report is confidential and intended for the recipient only.</p>
    <p>Generated on: ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`;return l},N=b[e],w=(()=>{let e=Object.values(s).reduce((e,t)=>e+t,0),t=4*b.length;return Math.round(e/t*100)})(),k=w>=80?{level:"Low Risk",color:"text-green-500",description:"Strong security posture"}:w>=60?{level:"Moderate Risk",color:"text-yellow-500",description:"Some areas need improvement"}:w>=40?{level:"High Risk",color:"text-orange-500",description:"Significant security gaps"}:{level:"Critical Risk",color:"text-red-500",description:"Immediate action required"},_=(e=>{let t=[];return e<60&&(t.push("Implement comprehensive security framework"),t.push("Establish 24/7 security monitoring"),t.push("Develop incident response plan")),e<70&&(t.push("Enhance employee security training"),t.push("Implement advanced threat detection"),t.push("Regular security assessments")),e<80&&(t.push("Advanced encryption implementation"),t.push("Multi-factor authentication"),t.push("Regular penetration testing")),t.push("Continuous security improvement program"),t})(w);return h?(0,i.jsxs)("div",{className:"min-h-screen",children:[i.jsx(r.Navigation,{}),i.jsx("section",{className:"relative overflow-hidden cyber-grid",children:i.jsx("div",{className:"container mx-auto px-4 py-24 lg:py-32",children:(0,i.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,i.jsxs)("div",{className:"text-center space-y-8 mb-12",children:[(0,i.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight animate-fade-in",children:["Security Assessment",i.jsx("span",{className:"text-primary block gradient-text animate-float",children:"Results"})]}),i.jsx("p",{className:"text-xl text-muted-foreground animate-slide-up",children:"Your cybersecurity posture analysis and recommendations"})]}),(0,i.jsxs)(l.Zb,{className:"border-border/40 hover:glow hover-lift transition-all duration-300 mb-8",children:[(0,i.jsxs)(l.Ol,{className:"text-center",children:[i.jsx(l.ll,{className:"text-2xl sm:text-3xl mb-4",children:"Your Security Score"}),(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4",children:[(0,i.jsxs)("div",{className:`text-5xl sm:text-6xl font-bold ${k.color}`,children:[w,"%"]}),(0,i.jsxs)("div",{className:"text-center sm:text-left",children:[i.jsx("div",{className:`text-lg sm:text-xl font-semibold ${k.color}`,children:k.level}),i.jsx("div",{className:"text-muted-foreground text-sm sm:text-base",children:k.description})]})]})]}),i.jsx(l.aY,{children:i.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:i.jsx("div",{className:"h-3 rounded-full bg-primary transition-all duration-300",style:{width:`${w}%`}})})})]}),(0,i.jsxs)(l.Zb,{className:"border-border/40 hover:glow hover-lift transition-all duration-300 mb-8",children:[i.jsx(l.Ol,{children:(0,i.jsxs)(l.ll,{className:"flex items-center space-x-2",children:[i.jsx(d.Z,{className:"h-6 w-6 text-primary"}),i.jsx("span",{children:"Recommended Actions"})]})}),i.jsx(l.aY,{children:i.jsx("div",{className:"space-y-4",children:_.map((e,t)=>(0,i.jsxs)("div",{className:"flex items-center space-x-3 animate-fade-in",style:{animationDelay:`${.1*t}s`},children:[i.jsx(c.Z,{className:"h-5 w-5 text-primary flex-shrink-0"}),i.jsx("span",{className:"text-muted-foreground",children:e})]},t))})})]}),(0,i.jsxs)(l.Zb,{className:"border-border/40 hover:glow hover-lift transition-all duration-300 mb-8",children:[i.jsx(l.Ol,{children:(0,i.jsxs)(l.ll,{className:"flex items-center space-x-2",children:[i.jsx(m.Z,{className:"h-6 w-6 text-primary"}),i.jsx("span",{children:"Detailed Analysis"})]})}),i.jsx(l.aY,{children:i.jsx("div",{className:"space-y-6",children:b.map((e,t)=>(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[i.jsx("span",{className:"font-medium",children:e.question}),(0,i.jsxs)("span",{className:`text-sm font-semibold ${s[e.id]>=3?"text-green-500":s[e.id]>=2?"text-yellow-500":"text-red-500"}`,children:[s[e.id]||0,"/4"]})]}),i.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:i.jsx("div",{className:"h-2 rounded-full bg-primary transition-all duration-300",style:{width:`${(s[e.id]||0)/4*100}%`}})})]},e.id))})})]}),(0,i.jsxs)(l.Zb,{className:"border-border/40 hover:glow hover-lift transition-all duration-300",children:[(0,i.jsxs)(l.Ol,{children:[i.jsx(l.ll,{className:"text-xl sm:text-2xl",children:"Get Your Detailed Report"}),i.jsx(l.SZ,{className:"text-sm sm:text-base",children:"Enter your email to receive a comprehensive security assessment report with detailed recommendations."})]}),i.jsx(l.aY,{children:(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[i.jsx("input",{type:"email",placeholder:"Enter your email",value:v,onChange:e=>y(e.target.value),className:"w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"}),(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2",children:[(0,i.jsxs)(n.z,{className:"glow hover-lift hover-glow flex items-center justify-center space-x-2 py-3",onClick:()=>{v?alert(`Thank you! Your security assessment report has been sent to ${v}`):alert("Please enter your email address to receive the report.")},children:[i.jsx(p.Z,{className:"h-4 w-4"}),i.jsx("span",{children:"Get Report"})]}),(0,i.jsxs)(n.z,{variant:"outline",className:"flex items-center justify-center space-x-2 py-3",onClick:()=>{let e=j(w,k,_,b,s),t=document.createElement("a"),i=new Blob([e],{type:"application/msword"});t.href=URL.createObjectURL(i),t.download=`omsnet-security-assessment-report-${w}-${Date.now()}.doc`,document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:[i.jsx(u.Z,{className:"h-4 w-4"}),i.jsx("span",{children:"Download Word Document"})]})]})]})})]}),i.jsx("div",{className:"text-center mt-8",children:i.jsx(n.z,{size:"lg",className:"glow text-lg px-8 py-4 hover-lift hover-glow",onClick:()=>window.location.href="/contact",children:"Schedule Security Consultation"})})]})})}),i.jsx(a.$,{})]}):(0,i.jsxs)("div",{className:"min-h-screen",children:[i.jsx(r.Navigation,{}),i.jsx("section",{className:"relative overflow-hidden cyber-grid",children:i.jsx("div",{className:"container mx-auto px-4 py-24 lg:py-32",children:(0,i.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,i.jsxs)("div",{className:"text-center space-y-8 mb-12",children:[(0,i.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight animate-fade-in",children:["Security",i.jsx("span",{className:"text-primary block gradient-text animate-float",children:"Assessment"})]}),i.jsx("p",{className:"text-xl text-muted-foreground animate-slide-up",children:"Evaluate your cybersecurity posture and receive personalized recommendations in just 5 minutes."})]}),(0,i.jsxs)("div",{className:"mb-8",children:[(0,i.jsxs)("div",{className:"flex justify-between text-sm text-muted-foreground mb-2",children:[(0,i.jsxs)("span",{children:["Question ",e+1," of ",b.length]}),(0,i.jsxs)("span",{children:[Math.round((e+1)/b.length*100),"% Complete"]})]}),i.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:i.jsx("div",{className:"h-2 rounded-full bg-primary transition-all duration-300",style:{width:`${(e+1)/b.length*100}%`}})})]}),(0,i.jsxs)(l.Zb,{className:"border-border/40 hover:glow hover-lift transition-all duration-300",children:[i.jsx(l.Ol,{children:i.jsx(l.ll,{className:"text-2xl",children:N.question})}),i.jsx(l.aY,{className:"space-y-4",children:N.options.map((e,t)=>i.jsx("button",{onClick:()=>f(N.id,e.value),className:`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:glow hover-lift ${s[N.id]===e.value?"border-primary bg-primary/10 text-primary":"border-border hover:border-primary/50"}`,children:(0,i.jsxs)("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:`h-4 w-4 rounded-full border-2 flex items-center justify-center ${s[N.id]===e.value?"border-primary bg-primary":"border-border"}`,children:s[N.id]===e.value&&i.jsx("div",{className:"h-2 w-2 rounded-full bg-white"})}),i.jsx("span",{children:e.label})]})},t))})]}),(0,i.jsxs)("div",{className:"flex justify-between mt-8",children:[i.jsx(n.z,{variant:"outline",onClick:()=>{e>0&&t(e=>e-1)},disabled:0===e,children:"Previous"}),i.jsx(n.z,{className:"glow hover-lift hover-glow",onClick:()=>{e<b.length-1?t(e=>e+1):g(!0)},disabled:!s[N.id],children:e===b.length-1?"See Results":"Next Question"})]})]})})}),i.jsx(a.$,{})]})}},2209:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});var i=s(7536);let r=(0,i.createProxy)(String.raw`/Users/ok/Developer/omsnet_digital_fortress_cybersecurity_website_0o7r4g/app/security-assessment/page.tsx`),{__esModule:a,$$typeof:n}=r,l=r.default,o=l}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[689,416,186,800,489,880,781],()=>s(144));module.exports=i})();