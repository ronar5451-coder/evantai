import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════
   EVANTAI — Multi-Agentic AI Platform (v5 — Full Detail Pages + Images)
   ═══════════════════════════════════════════════════════════════ */

/* ── Icon Component ──────────────────────────────────────────── */
function Icon({ name, size = 24 }) {
  const s = { width: size, height: size };
  const p = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", style: s };
  const d = {
    search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    arrowUR: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25",
    menu: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    close: "M6 18 18 6M6 6l12 12",
    check: "m4.5 12.75 6 6 9-13.5",
    arrowR: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
    users: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
    chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
    shield: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    store: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72",
    trending: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
    database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    cpu: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    zap: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
    building: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",
    pen: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    grad: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
    handshake: "M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 0-.668-.668 1.667 1.667 0 0 1-1.667-1.667V8.325a1.575 1.575 0 0 0-3.15 0",
    bulb: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    team: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
    rocket: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    lock: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
    target: "M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    doc: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    video: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
    chat: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    cog: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z",
    spark: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  };
  return <svg {...p}><path strokeLinecap="round" strokeLinejoin="round" d={d[name]}/></svg>;
}

/* ── Images ───────────────────────────────────────────────────── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=700&q=80",
  platform: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80",
  hr: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80",
  sales: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  compliance: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80",
  shops: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
  content: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&q=80",
  careers: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
  team: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
  services: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
};

/* ── Nav & Data ──────────────────────────────────────────────── */
const navItems = [
  { label: "The Platform", path: "/" }, { label: "Solutions", path: "/solutions" },
  { label: "AI Services", path: "/ai-services" }, { label: "Pricing", path: "/pricing" },
  { label: "Resources", path: "/resources" }, { label: "About Us", path: "/about" },
];

const agents = [
  { id:"hr", name:"HR Agent", icon:"users", img:IMG.hr, tagColor:"text-blue-600", color:"border-blue-300", hoverBg:"hover:bg-blue-50",
    desc:"Automate recruiting, onboarding, employee engagement, and workforce analytics with intelligent HR workflows.",
    longDesc:"Transform your entire HR department with an AI agent that intelligently handles the complete employee lifecycle — from the moment a job requisition is created to managing ongoing performance reviews and career development. Our HR Agent uses natural language processing to screen resumes, machine learning to match candidates with roles, and predictive analytics to identify retention risks before they become problems.",
    capabilities:["Resume screening & candidate matching","Automated interview scheduling","Employee onboarding workflows","Performance review automation","Leave & attendance management"],
    features:[
      {t:"Smart Resume Screening",d:"Upload hundreds of resumes and let AI rank candidates based on skills, experience, cultural fit, and job requirements. Eliminates bias with standardized evaluation criteria.",img:"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80"},
      {t:"Automated Interview Pipeline",d:"Automatically schedule interviews across time zones, send reminders, collect interviewer feedback, and move candidates through your pipeline — zero manual coordination.",img:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"},
      {t:"Intelligent Onboarding",d:"Generate personalized onboarding plans for each new hire. Automatically assign training modules, schedule meet-and-greets, provision accounts, and track completion — all customized by role and department.",img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"},
      {t:"Performance Intelligence",d:"Continuously analyze employee performance data, 360-degree feedback, and goal progress. Generate actionable insights for managers and auto-create development plans for underperformers.",img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"}
    ],
    howItWorks:["Connect your ATS, HRIS, and communication tools","Configure hiring criteria, evaluation rubrics, and compliance rules","AI screens candidates, schedules interviews, and manages pipelines","Review AI-generated shortlists and insights on your dashboard","Continuously learns from your hiring decisions to improve accuracy"],
    integrations:["Workday","BambooHR","Greenhouse","Lever","Slack","Microsoft Teams","LinkedIn","Indeed"],
    useCases:["Reduce time-to-hire by 60%","Automate 90% of onboarding paperwork","Predict employee attrition risk with 87% accuracy","Generate weekly workforce analytics reports","Streamline benefits enrollment across 50+ providers"],
    stats:[{v:"80%",l:"Less manual HR work"},{v:"60%",l:"Faster hiring"},{v:"3x",l:"Better candidate quality"},{v:"95%",l:"Employee satisfaction"}] },
  { id:"sales", name:"Sales Agent", icon:"chart", img:IMG.sales, tagColor:"text-emerald-600", color:"border-emerald-300", hoverBg:"hover:bg-emerald-50",
    desc:"Supercharge your pipeline with AI-driven lead scoring, outreach automation, and real-time deal intelligence.",
    longDesc:"Your AI-powered sales team member that works 24/7 to fill your pipeline, nurture prospects, and close deals. The Sales Agent continuously analyzes prospect behavior across channels, scores and prioritizes leads using predictive models, crafts hyper-personalized outreach sequences, enriches your CRM with real-time data from 50+ sources, and provides deal intelligence that helps your reps focus on the opportunities most likely to close.",
    capabilities:["Lead scoring & prioritization","Automated email outreach sequences","CRM data enrichment","Pipeline forecasting","Meeting prep & follow-up briefs"],
    features:[
      {t:"Predictive Lead Scoring",d:"AI analyzes 200+ signals — website visits, email opens, social activity, firmographic data — to score every lead in real-time. Your reps always know exactly who to call first.",img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"},
      {t:"Hyper-Personalized Outreach",d:"Generate unique email sequences for each prospect based on their industry, role, pain points, and engagement history. A/B test subject lines and content automatically for maximum response rates.",img:"https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80"},
      {t:"Real-Time CRM Enrichment",d:"Automatically enrich every contact and company in your CRM with data from LinkedIn, news sources, financial filings, tech stack data, and social signals — always up to date.",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"},
      {t:"AI Deal Intelligence",d:"Get instant deal health scores, risk alerts, and next-best-action recommendations for every opportunity. The agent analyzes email sentiment, meeting notes, and pipeline velocity to predict outcomes.",img:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"}
    ],
    howItWorks:["Integrate with your CRM (Salesforce, HubSpot, Pipedrive)","AI ingests your historical win/loss data to build scoring models","Leads are automatically scored, enriched, and prioritized","Personalized outreach sequences are generated and sent","Dashboard shows pipeline health, forecasts, and rep performance"],
    integrations:["Salesforce","HubSpot","Pipedrive","Outreach","SalesLoft","LinkedIn Sales Nav","ZoomInfo","Gong"],
    useCases:["Increase qualified pipeline by 40%","Automate 15-touch outreach sequences","Enrich CRM records from 50+ data sources","Predict deal outcomes with 85% accuracy","Generate personalized meeting prep briefs in 30 seconds"],
    stats:[{v:"40%",l:"Pipeline increase"},{v:"3x",l:"Outreach efficiency"},{v:"85%",l:"Forecast accuracy"},{v:"2x",l:"Deal close rate"}] },
  { id:"compliance", name:"Compliance Agent", icon:"shield", img:IMG.compliance, tagColor:"text-amber-600", color:"border-amber-300", hoverBg:"hover:bg-amber-50",
    desc:"Stay ahead of regulations with continuous monitoring, automated audits, and instant policy enforcement.",
    longDesc:"Navigate the complex and ever-changing regulatory landscape with an AI agent that never misses an update. The Compliance Agent continuously monitors 500+ regulatory sources across jurisdictions, automatically maps regulatory changes to your internal policies, generates audit-ready reports, scores risk in real-time, and ensures every decision is traceable with complete data lineage — giving you defensibility in front of regulators and clients.",
    capabilities:["Regulatory change monitoring","Automated compliance audits","Policy document generation","Risk assessment & scoring","Incident reporting automation"],
    features:[
      {t:"24/7 Regulatory Monitoring",d:"AI monitors 500+ regulatory bodies, government gazettes, and industry standards across 40+ countries. Get instant alerts when regulations change that affect your business, with plain-language impact summaries.",img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"},
      {t:"Automated Audit Engine",d:"Generate comprehensive audit reports in minutes, not weeks. The agent collects evidence from your systems, maps controls to requirements, identifies gaps, and produces regulator-ready documentation.",img:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80"},
      {t:"Intelligent Policy Management",d:"Auto-generate and update policy documents when regulations change. Track policy acknowledgments, manage version control, and ensure every employee has access to current policies.",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"},
      {t:"Real-Time Risk Scoring",d:"Continuously evaluate compliance risk across your organization with AI-powered scoring. Identify high-risk areas, track remediation progress, and generate board-ready risk dashboards.",img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"}
    ],
    howItWorks:["Connect your document management, HR, and financial systems","Define your regulatory scope — industries, jurisdictions, standards","AI maps your current policies and controls to regulatory requirements","Continuous monitoring alerts you to changes with impact analysis","Auto-generate audit reports and track remediation workflows"],
    integrations:["ServiceNow","SAP GRC","OneTrust","LogicGate","SharePoint","Jira","Confluence","Power BI"],
    useCases:["Monitor 500+ regulatory sources 24/7 across 40 countries","Auto-generate SOC 2 and ISO 27001 audit reports","Reduce compliance violations by 90%","Cut audit preparation time from 6 weeks to 3 days","Automate incident response with SLA tracking"],
    stats:[{v:"90%",l:"Fewer violations"},{v:"24/7",l:"Monitoring"},{v:"50K",l:"Hours saved/year"},{v:"100%",l:"Audit coverage"}] },
  { id:"shops", name:"Shops Agent", icon:"store", img:IMG.shops, tagColor:"text-violet-600", color:"border-violet-300", hoverBg:"hover:bg-violet-50",
    desc:"Optimize retail operations with inventory intelligence, pricing strategies, and customer experience automation.",
    longDesc:"The retail AI agent that optimizes every aspect of your store operations — from warehouse to checkout. Using machine learning models trained on your sales patterns, seasonal trends, and competitor data, the Shops Agent predicts demand with 95% accuracy, automates restocking decisions, dynamically adjusts pricing to maximize margins, analyzes customer sentiment from reviews and support tickets, and provides real-time store performance dashboards that help you make data-driven decisions instantly.",
    capabilities:["Inventory tracking & restocking alerts","Dynamic pricing optimization","Customer sentiment analysis","Order fulfillment automation","Store performance dashboards"],
    features:[
      {t:"Demand Forecasting & Auto-Restock",d:"Predict demand for every SKU using AI that analyzes sales history, seasonality, weather, local events, and market trends. Automatically generate purchase orders when inventory hits optimal reorder points.",img:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"},
      {t:"Dynamic Pricing Engine",d:"Maximize margins with AI-powered pricing that considers competitor prices, demand elasticity, inventory levels, and customer segments. Set guardrails and let the agent optimize within your rules.",img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"},
      {t:"Customer Experience Intelligence",d:"Analyze reviews, support tickets, social mentions, and NPS surveys in real-time. Identify trending complaints, surface product quality issues early, and generate automated response templates.",img:"https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80"},
      {t:"Unified Store Analytics",d:"Real-time dashboards showing sales velocity, foot traffic patterns, conversion rates, basket analysis, and staff productivity across all locations — drill down from chain-level to individual store.",img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"}
    ],
    howItWorks:["Connect your POS, inventory management, and e-commerce platforms","AI ingests historical sales data and builds demand prediction models","Set pricing rules, reorder thresholds, and fulfillment preferences","Agent monitors inventory, adjusts prices, and triggers reorders automatically","Review performance on real-time dashboards with drill-down analytics"],
    integrations:["Shopify","WooCommerce","Square","Lightspeed","NetSuite","QuickBooks","Amazon","Google Analytics"],
    useCases:["Reduce stockouts by 75% with predictive reordering","Increase margins by 15% with dynamic pricing","Analyze 10,000+ customer reviews in minutes","Automate multi-warehouse fulfillment routing","Track real-time performance across 100+ store locations"],
    stats:[{v:"75%",l:"Fewer stockouts"},{v:"15%",l:"Margin increase"},{v:"30%",l:"Cost reduction"},{v:"4.8★",l:"Customer satisfaction"}] },
  { id:"content", name:"Content Creator Agent", icon:"pen", img:IMG.content, tagColor:"text-pink-600", color:"border-pink-300", hoverBg:"hover:bg-pink-50",
    desc:"Generate, schedule, and optimize content across platforms with AI-powered creative intelligence.",
    longDesc:"Your tireless creative partner that produces high-quality, on-brand content at 10x the speed of manual creation. The Content Creator Agent understands your brand voice, target audience, and content strategy to generate blog posts, social media content, email newsletters, ad copy, and video scripts — then optimizes everything for SEO, schedules publishing across platforms, and provides performance analytics to continuously improve what resonates with your audience.",
    capabilities:["Multi-platform content generation","SEO optimization & keyword targeting","Social media scheduling & analytics","Brand voice consistency checks","Visual content suggestions"],
    features:[
      {t:"AI Content Generation",d:"Generate blog posts, LinkedIn articles, Twitter threads, Instagram captions, email newsletters, and ad copy — all in your brand voice. Supports 25+ content formats with customizable tone, style, and length.",img:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80"},
      {t:"SEO & Keyword Intelligence",d:"AI researches trending keywords, analyzes competitor content, identifies content gaps, and optimizes every piece for search engines. Get real-time SEO scores and improvement suggestions before publishing.",img:"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80"},
      {t:"Smart Publishing Calendar",d:"AI recommends optimal posting times based on your audience behavior. Manage a visual content calendar, auto-schedule posts across 10+ platforms, and maintain a consistent publishing cadence.",img:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"},
      {t:"Performance Analytics & Learning",d:"Track content performance across all channels in one dashboard. AI identifies what topics, formats, and posting times drive the most engagement, then automatically adjusts your content strategy.",img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"}
    ],
    howItWorks:["Define your brand voice, target audience, and content pillars","AI generates a content strategy with topic clusters and keyword targets","Review and approve AI-generated content (or auto-publish with guardrails)","Content is optimized for SEO and scheduled across all platforms","Analytics dashboard shows performance; AI refines strategy weekly"],
    integrations:["WordPress","Medium","LinkedIn","Twitter/X","Instagram","Mailchimp","Buffer","Google Search Console"],
    useCases:["Generate 10x more content without hiring additional writers","Increase organic traffic by 200% in 6 months","Maintain 100% brand voice consistency across all channels","Automate social media with 30-day content calendars","A/B test headlines and CTAs automatically"],
    stats:[{v:"10x",l:"Content output"},{v:"200%",l:"Traffic growth"},{v:"50%",l:"Time saved"},{v:"3x",l:"Engagement rate"}] },
  { id:"careers", name:"Careers Agent", icon:"grad", img:IMG.careers, tagColor:"text-sky-600", color:"border-sky-300", hoverBg:"hover:bg-sky-50",
    desc:"Empower job seekers and internal mobility with intelligent career pathing, job matching, and skill gap analysis.",
    longDesc:"The AI career counselor that guides employees and candidates to their best-fit roles with precision matching and personalized development plans. Using advanced skill taxonomy mapping, labor market intelligence, and organizational data, the Careers Agent identifies hidden internal talent, recommends personalized upskilling paths, matches candidates with 95% accuracy, prepares candidates for interviews with AI coaching, and tracks career progression across your entire workforce.",
    capabilities:["Job matching & recommendations","Skill gap analysis & upskilling paths","Resume building & optimization","Interview preparation coaching","Internal mobility tracking"],
    features:[
      {t:"AI-Powered Job Matching",d:"Goes beyond keyword matching — our AI understands skills, experience context, career trajectory, culture fit, and growth potential. Matches candidates to roles with 95% accuracy, surfacing hidden gems that traditional search misses.",img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"},
      {t:"Skill Gap Intelligence",d:"Map your entire organization's skills landscape. Identify gaps between current capabilities and future needs, then generate personalized learning paths with curated courses, mentorship pairings, and stretch assignments.",img:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"},
      {t:"AI Interview Coach",d:"Prepare candidates with AI-powered mock interviews tailored to the specific role. Provide real-time feedback on answers, communication style, and body language. Generate customized preparation guides with likely questions.",img:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"},
      {t:"Internal Mobility Hub",d:"Surface internal opportunities that match employee aspirations and skills. Track career progression, identify flight risks, and proactively suggest lateral moves or promotions to retain top talent.",img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"}
    ],
    howItWorks:["Import your org chart, job descriptions, and skills taxonomy","AI maps every employee's skills, certifications, and career goals","Employees get personalized career paths and learning recommendations","Internal job postings are automatically matched with qualified employees","Managers get talent insights, succession plans, and mobility reports"],
    integrations:["LinkedIn Learning","Coursera","Udemy Business","Degreed","Cornerstone","SuccessFactors","Workday","Eightfold"],
    useCases:["Match candidates with 95% accuracy vs 60% industry average","Identify 3x more internal mobility opportunities","Generate personalized learning paths for every employee","Reduce voluntary turnover by 40%","Build succession plans for all critical roles"],
    stats:[{v:"95%",l:"Match accuracy"},{v:"40%",l:"Less turnover"},{v:"2x",l:"Internal mobility"},{v:"85%",l:"Employee growth"}] },
];

const techStacks = [
  { title:"Enterprise", subtitle:"Knowledge Hub", icon:"database", description:"Make all your enterprise-relevant data available to AI agents for intelligent decision-making." },
  { title:"Enterprise", subtitle:"Digital Experts", icon:"cpu", description:"Create and orchestrate AI agents to assist, augment and automate your business operations." },
  { title:"LLM Optimization", subtitle:"Engine", icon:"zap", description:"Swap in or bring your own best-fit LLMs, eliminating vendor lock-in and enhancing performance." },
  { title:"Enterprise", subtitle:"Governance", icon:"shield", description:"Govern and monitor AI agents and data for safety, auditability, accuracy at scale." },
];

const valueProps = [
  { label:"Faster Time-to-Value", color:"bg-blue-500" }, { label:"Auditability by Design", color:"bg-cyan-500" },
  { label:"Lower Cost-to-Serve", color:"bg-blue-600" }, { label:"Enterprise Compliance", color:"bg-sky-500" },
];

const reimagineCards = [
  { title:"Reimagine HR", description:"Streamline recruiting, onboarding, and workforce management.", icon:"users" },
  { title:"Reimagine Sales", description:"Unlock revenue with AI-driven lead scoring and outreach.", icon:"trending" },
  { title:"Reimagine Retail", description:"Optimize inventory, pricing, and customer experience.", icon:"store" },
  { title:"Reimagine Compliance", description:"Embed governance and auditability by design.", icon:"shield" },
];

const pricingPlans = [
  { name:"Starter", price:"$49", period:"/mo", description:"For small teams getting started.", features:["2 AI Agents","1,000 tasks/month","Email support","Basic analytics","5 integrations"], highlighted:false },
  { name:"Professional", price:"$199", period:"/mo", description:"For growing businesses.", features:["All 6 AI Agents","25,000 tasks/month","Priority support","Advanced analytics","Unlimited integrations","Custom workflows","API access"], highlighted:true },
  { name:"Enterprise", price:"Custom", period:"", description:"For large organizations.", features:["Everything in Pro","Unlimited tasks","Dedicated CSM","Custom SLAs","On-premise option","SSO & SAML","Custom agent training"], highlighted:false },
];

const services = [
  { title:"Ecosystem Evaluation", desc:"Evaluate your ecosystem for AI readiness — infrastructure, data architecture, governance.", cat:"creation" },
  { title:"Custom AI Model Integration", desc:"Support proprietary or preferred AI models with complete setup and integration.", cat:"creation" },
  { title:"Knowledge Consolidation", desc:"Craft knowledge systems making structured and unstructured data accessible to agents.", cat:"creation" },
  { title:"AI Architecture Transformation", desc:"Transform entire technology stacks for the AI era with scalable architectures.", cat:"creation" },
  { title:"Expert Agent Development", desc:"Design, build, and deploy expert agents tailored for your specific processes.", cat:"dev" },
  { title:"Agent Refinement", desc:"Continuously refine agent performance ensuring peak effectiveness over time.", cat:"dev" },
  { title:"Auditable by Design", desc:"Every decision is explainable with complete data lineage and compliance support.", cat:"dev" },
];

const differentiators = ["Multi-agent AI platform to build knowledge and agentic teams","Open architecture — bring any LLM, avoid vendor lock-in","Enterprise-grade governance and auditability built-in","Designed for regulated industries and complex workflows","Continuous learning agents that improve with your data","500+ integrations with your existing tech stack"];

/* ═══════════════════ SHARED ═════════════════════════════════ */
function ScrollToTop(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null;}

function Navbar({onOpenContact}){
  const[scrolled,setScrolled]=useState(false);const[mob,setMob]=useState(false);const loc=useLocation();
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
  return(<nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${scrolled?"shadow-md":""}`}>
    <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400"/>
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
      <Link to="/" className="flex-shrink-0"><img src="/evantailogo.png" alt="Evantai" className="h-12 w-auto"/></Link>
      <div className="hidden lg:flex items-center gap-6">{navItems.map(i=><Link key={i.label} to={i.path} className={`text-[15px] font-medium whitespace-nowrap transition-colors ${loc.pathname===i.path?"text-blue-600 border-b-2 border-blue-600 pb-0.5":"text-slate-700 hover:text-blue-600"}`}>{i.label}</Link>)}</div>
      <div className="hidden lg:flex items-center gap-3">
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors"><Icon name="search" size={20}/></button>
        <button onClick={onOpenContact} className="px-5 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5">TALK TO US <Icon name="arrowUR" size={16}/></button>
      </div>
      <button onClick={()=>setMob(!mob)} className="lg:hidden text-slate-700">{mob?<Icon name="close"/>:<Icon name="menu"/>}</button>
    </div>
    {mob&&<div className="lg:hidden bg-white border-t px-6 pb-6 shadow-xl">{navItems.map(i=><Link key={i.label} to={i.path} onClick={()=>setMob(false)} className={`block py-3 font-medium border-b border-slate-50 ${loc.pathname===i.path?"text-blue-600":"text-slate-700"}`}>{i.label}</Link>)}<button onClick={()=>{onOpenContact();setMob(false)}} className="mt-4 w-full py-2.5 bg-blue-600 text-white font-semibold rounded-full">Talk to Us</button></div>}
  </nav>);
}

function Footer(){return(<footer className="bg-slate-900 text-slate-300 py-16"><div className="max-w-7xl mx-auto px-6">
  <div className="grid md:grid-cols-5 gap-10 mb-12"><div><img src="/evantailogo.png" alt="Evantai" className="h-12 mb-4 brightness-0 invert"/><p className="text-sm text-slate-400">The multi-agentic AI platform for every department.</p></div>
  {[{t:"PRODUCTS",l:["Knowledge Hub","Digital Experts","LLM Engine","Governance"]},{t:"SOLUTIONS",l:agents.map(a=>a.name)},{t:"RESOURCES",l:["Blog","Community","Academy","Partners"]},{t:"COMPANY",l:["About Us","Pricing","Careers","Contact"]}].map(c=><div key={c.t}><h4 className="text-white font-bold text-sm tracking-wider mb-4">{c.t}</h4><ul className="space-y-2.5">{c.l.map(l=><li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>)}</ul></div>)}</div>
  <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-sm text-slate-500">&copy; Evantai, 2026</p><div className="flex gap-6 text-sm text-slate-500">{["Disclaimer","Privacy","Terms"].map(l=><a key={l} href="#" className="hover:text-white transition-colors">{l}</a>)}</div></div>
</div></footer>);}

function ContactModal({open,onClose}){if(!open)return null;return(<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}><div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 relative" onClick={e=>e.stopPropagation()}>
  <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200"><Icon name="close" size={20}/></button>
  <img src="/evantailogo.png" alt="Evantai" className="h-10 mb-4"/><h3 className="text-2xl font-bold text-blue-700 mb-1">Try Evantai</h3><p className="text-slate-500 mb-6">Connect with one of our experts</p>
  <form className="space-y-4" onSubmit={e=>e.preventDefault()}><div className="grid grid-cols-2 gap-4"><input placeholder="First name*" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"/><input placeholder="Last name*" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"/></div>
  <input placeholder="Company*" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"/>
  <input placeholder="Email*" type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"/>
  <textarea placeholder="How can we help?" rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 resize-none"/>
  <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Submit</button></form>
</div></div>);}

/* ═══════════════════ PAGES ═══════════════════════════════════ */

function HomePage(){return(<div className="pt-[68px]">
  {/* Hero with image */}
  <section className="min-h-[85vh] flex items-center bg-white"><div className="max-w-7xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">Multi-Agentic AI Platform</div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">AI Agents.<br/><span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">True Business Impact.</span></h1>
      <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">Deploy specialized AI agents across HR, Sales, Compliance, Retail, Content & Careers — orchestrating intelligence to transform how your organization operates.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/solutions" className="group px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center gap-2">Explore Solutions <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
        <Link to="/pricing" className="px-7 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all">View Pricing</Link>
      </div>
      <div className="mt-10 flex items-center gap-6 text-sm text-slate-400"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"/> 99.9% Uptime</span><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400"/> 500+ Integrations</span></div>
    </div>
    <div className="hidden md:block"><img src={IMG.hero} alt="AI Platform" className="rounded-3xl shadow-2xl shadow-blue-500/10 object-cover w-full h-[480px] hover:shadow-blue-500/20 transition-shadow duration-500"/></div>
  </div></section>

  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-3 px-6 text-center"><p className="text-white text-sm md:text-base">Reimagine your operations — deploy intelligent AI agents and save thousands of hours — <Link to="/solutions" className="underline font-semibold hover:text-blue-100">Learn more.</Link></p></div>

  {/* Value Props with image */}
  <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    <div>
      <img src={IMG.platform} alt="Platform" className="rounded-2xl shadow-lg object-cover w-full h-[360px] hover:shadow-xl transition-shadow duration-300"/>
    </div>
    <div>
      <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">Evantai is an enterprise-grade <span className="text-blue-600 font-bold">Open Business Impact AI</span> platform that delivers secure, decision-grade intelligence with <span className="text-cyan-600 font-semibold">measurable business impact</span> via</p>
      <div className="space-y-5">{valueProps.map(p=>(<div key={p.label} className="flex items-center gap-4 group cursor-pointer"><div className={`w-1.5 h-10 rounded-full ${p.color} group-hover:h-12 transition-all`}/><span className="text-lg font-bold text-blue-700 group-hover:text-blue-800 transition-colors">{p.label}</span></div>))}</div>
    </div>
  </div></section>

  {/* Tech Stacks */}
  <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-14">Evantai has <span className="text-blue-600">4 Technology Stacks</span></h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{techStacks.map(s=>(<div key={s.subtitle} className="group bg-white rounded-2xl p-8 border border-slate-100 text-center cursor-pointer hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-blue-400 group-hover:text-blue-600 transition-colors mb-5 flex justify-center"><Icon name={s.icon} size={40}/></div>
      <h3 className="text-lg font-bold text-slate-900">{s.title}</h3><p className="text-blue-600 font-semibold mb-4">{s.subtitle}</p><p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
    </div>))}</div>
  </div></section>

  {/* Business Impact */}
  <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">What is Business Impact AI?</h2>
    <p className="text-slate-500 max-w-4xl leading-relaxed mb-14">Aligning AI outcomes with enterprise imperatives, delivering measurable business value across:</p>
    <div className="grid md:grid-cols-2 gap-6">{reimagineCards.map(c=>(<div key={c.title} className="group rounded-2xl p-8 border border-cyan-100 bg-white cursor-pointer hover:bg-cyan-50/40 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4"><div className="text-blue-500 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1"><Icon name={c.icon} size={28}/></div><div><h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 mb-2 transition-colors">{c.title}</h3><p className="text-slate-500 leading-relaxed">{c.description}</p></div></div>
    </div>))}</div>
  </div></section>

  {/* Differentiators */}
  <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div><h2 className="text-3xl font-extrabold text-slate-900 mb-2">Open Model</h2><p className="text-slate-400 mb-6">Start using today with no cost</p><p className="text-slate-600 leading-relaxed mb-6">Evantai is available as an independent platform to build, optimize, govern and deploy intelligent agentic workflows.</p>
    <img src={IMG.team} alt="Team" className="rounded-2xl shadow-md object-cover w-full h-[220px] hover:shadow-lg transition-shadow duration-300"/></div>
    <div><h2 className="text-3xl font-extrabold text-slate-900 mb-6">What sets us apart?</h2><div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">{differentiators.map(dd=>(<div key={dd} className="flex items-start gap-3"><span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"/><span className="text-slate-700">{dd}</span></div>))}</div></div>
  </div></section>
</div>);}

/* ── SOLUTIONS LIST ──────────────────────────────────────────── */
function SolutionsPage(){
  const[filter,setFilter]=useState("all");
  const cats=["all","HR","Sales","Compliance","Retail","Content","Careers"];
  const catMap={HR:"hr",Sales:"sales",Compliance:"compliance",Retail:"shops",Content:"content",Careers:"careers"};
  const filtered=filter==="all"?agents:agents.filter(a=>a.id===catMap[filter]);
  return(<div className="pt-[68px]"><section className="py-16 bg-gradient-to-b from-blue-50/40 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Solutions</h1>
      <p className="text-slate-500 max-w-3xl leading-relaxed mb-12">Browse our agentic AI solutions designed to reimagine your operations and drive innovation.</p>
      <div className="flex flex-wrap gap-3 mb-12">{cats.map(c=>(<button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${filter===c?"bg-blue-600 text-white border-blue-600 shadow-md":"bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"}`}>{c.toUpperCase()}</button>))}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map(a=>(
        <Link to={`/solutions/${a.id}`} key={a.id} className={`group bg-white rounded-2xl overflow-hidden border-2 ${a.color} ${a.hoverBg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
          <img src={a.img} alt={a.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3"><div className={a.tagColor}><Icon name={a.icon} size={28}/></div><h3 className={`text-xl font-bold ${a.tagColor}`}>{a.name}</h3></div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.desc}</p>
            <div className={`text-sm font-semibold ${a.tagColor} flex items-center gap-1 group-hover:gap-2 transition-all`}>View Details <Icon name="arrowR" size={16}/></div>
          </div>
        </Link>
      ))}</div>
    </div>
  </section></div>);
}

/* ── SOLUTION DETAIL PAGE ────────────────────────────────────── */
function SolutionDetailPage({onOpenContact}){
  const{id}=useParams();
  const agent=agents.find(a=>a.id===id);
  if(!agent)return<div className="pt-[68px] p-20 text-center"><h1 className="text-2xl font-bold">Solution not found</h1><Link to="/solutions" className="text-blue-600 mt-4 inline-block">Back to Solutions</Link></div>;
  return(<div className="pt-[68px]">
    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={agent.img} alt={agent.name} className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
        <Link to="/solutions" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors">&larr; All Solutions</Link>
        <div className="flex items-center gap-4 mb-3"><div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-white"><Icon name={agent.icon} size={32}/></div><h1 className="text-4xl md:text-5xl font-extrabold text-white">{agent.name}</h1></div>
        <p className="text-white/80 text-lg max-w-2xl">{agent.desc}</p>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-white border-b"><div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      {agent.stats.map(s=>(<div key={s.l} className="text-center group cursor-pointer"><div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">{s.v}</div><div className="text-sm text-slate-400 mt-1">{s.l}</div></div>))}
    </div></section>

    {/* Overview + Image */}
    <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Overview</h2>
        <p className="text-slate-600 leading-relaxed text-lg mb-6">{agent.longDesc}</p>
        <div className="flex flex-wrap gap-3">{agent.integrations.slice(0,4).map(i=>(<span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">{i}</span>))}</div>
      </div>
      <img src={agent.features[0].img} alt={agent.name} className="rounded-2xl shadow-lg object-cover w-full h-[380px] hover:shadow-xl transition-shadow duration-300"/>
    </div></section>

    {/* Detailed Features with Images */}
    <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">Key Features</h2>
      <p className="text-slate-500 text-center max-w-2xl mx-auto mb-14">Powerful capabilities designed to transform how your team works</p>
      <div className="space-y-16">
        {agent.features.map((f,i)=>(<div key={f.t} className={`grid md:grid-cols-2 gap-12 items-center ${i%2===1?"md:direction-rtl":""}`}>
          <div className={i%2===1?"md:order-2":""}>
            <h3 className={`text-2xl font-bold ${agent.tagColor} mb-4`}>{f.t}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{f.d}</p>
          </div>
          <div className={i%2===1?"md:order-1":""}>
            <img src={f.img} alt={f.t} className="rounded-2xl shadow-md object-cover w-full h-[280px] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"/>
          </div>
        </div>))}
      </div>
    </div></section>

    {/* How It Works */}
    <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">How It Works</h2>
      <div className="grid md:grid-cols-5 gap-4">
        {agent.howItWorks.map((step,i)=>(<div key={i} className="group relative">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">{i+1}</div>
            <p className="text-slate-700 text-sm leading-relaxed">{step}</p>
          </div>
          {i<agent.howItWorks.length-1&&<div className="hidden md:block absolute top-1/2 -right-3 text-slate-300 z-10">&rarr;</div>}
        </div>))}
      </div>
    </div></section>

    {/* Capabilities */}
    <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Capabilities</h2>
        <div className="space-y-4">{agent.capabilities.map(c=>(<div key={c} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer"><span className="text-blue-500 mt-0.5"><Icon name="check" size={20}/></span><span className="text-slate-700 group-hover:text-slate-900 font-medium transition-colors">{c}</span></div>))}</div>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Integrations</h2>
        <div className="grid grid-cols-2 gap-3">{agent.integrations.map(intg=>(<div key={intg} className="group flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer"><div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors"><Icon name="cog" size={18}/></div><span className="text-slate-700 font-medium text-sm">{intg}</span></div>))}</div>
      </div>
    </div></section>

    {/* Use Cases */}
    <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">Real-World Use Cases</h2>
      <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">See the measurable impact our {agent.name} delivers for organizations like yours</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{agent.useCases.map((uc,i)=>(<div key={uc} className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
        <div className="flex items-start gap-3"><span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">{String(i+1).padStart(2,"0")}</span><span className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors leading-relaxed">{uc}</span></div>
      </div>))}</div>
    </div></section>

    {/* CTA */}
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500"><div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to deploy {agent.name}?</h2>
      <p className="text-blue-100 text-lg mb-8">Start your 14-day free trial today. No credit card required.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/pricing" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all">Start Free Trial</Link>
        <button onClick={onOpenContact} className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">Book a Demo</button>
      </div>
    </div></section>
  </div>);
}

/* ── AI SERVICES ─────────────────────────────────────────────── */
function AIServicesPage(){
  const cr=services.filter(s=>s.cat==="creation");const dv=services.filter(s=>s.cat==="dev");
  return(<div className="pt-[68px]"><section className="py-16 bg-gradient-to-b from-blue-50/40 to-white"><div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16"><div className="flex justify-center gap-4 text-blue-400 mb-4"><Icon name="handshake" size={36}/><Icon name="bulb" size={36}/><Icon name="team" size={36}/></div><h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">AI Services</h1><p className="text-slate-500 mt-3 text-lg">Accelerate Your AI Journey with Professional Services</p></div>
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16"><img src={IMG.services} alt="Services" className="rounded-2xl shadow-lg object-cover w-full h-[320px] hover:shadow-xl transition-shadow duration-300"/><div><p className="text-slate-600 leading-relaxed text-lg">For organizations seeking <span className="text-blue-600 font-semibold">accelerated deployment and expert guidance</span>, our Professional Services deliver end-to-end support for building and operationalizing AI at scale.</p></div></div>
    <div className="bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 mb-16"><div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-400"><Icon name="building" size={56}/></div><div><p className="text-sm text-slate-400 font-medium mb-1">Trusted by</p><h3 className="text-2xl font-extrabold text-slate-900 mb-3">Industry Leaders Worldwide</h3><p className="text-slate-600 leading-relaxed">Enterprise-grade Digital Experts deployed across leading organizations in highly regulated industries.</p></div></div>
    <h2 className="text-2xl font-extrabold text-blue-700 text-center mb-10">Our Professional Services</h2>
    <h3 className="text-xl font-bold text-slate-900 mb-6">Creation & Architecture</h3>
    <div className="grid md:grid-cols-2 gap-5 mb-10">{cr.map(s=>(<div key={s.title} className="group bg-white rounded-xl p-6 border border-cyan-200 cursor-pointer hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"><h4 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 mb-2 transition-colors">{s.title}</h4><p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-6">Development & Execution</h3>
    <div className="grid md:grid-cols-2 gap-5">{dv.map(s=>(<div key={s.title} className="group bg-white rounded-xl p-6 border border-cyan-200 cursor-pointer hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"><h4 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 mb-2 transition-colors">{s.title}</h4><p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div>
  </div></section></div>);
}

/* ── PRICING ─────────────────────────────────────────────────── */
function PricingPage({onOpenContact}){return(<div className="pt-[68px]"><section className="py-16 bg-gradient-to-b from-blue-50/40 to-white"><div className="max-w-7xl mx-auto px-6">
  <div className="text-center mb-16"><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Simple, Transparent <span className="text-blue-600">Pricing</span></h1><p className="mt-3 text-lg text-slate-500">Choose the plan that fits your organization</p></div>
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{pricingPlans.map(plan=>(<div key={plan.name} className={`group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${plan.highlighted?"bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/25 scale-[1.03]":"bg-white border border-slate-200 hover:shadow-xl hover:border-blue-200"}`}>
    {plan.highlighted&&<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-blue-600 text-xs font-bold rounded-full shadow-lg">MOST POPULAR</div>}
    <h3 className={`text-xl font-bold ${plan.highlighted?"text-white":"text-slate-900"}`}>{plan.name}</h3>
    <div className="mt-4 flex items-baseline gap-1"><span className={`text-5xl font-extrabold ${plan.highlighted?"text-white":"text-slate-900"}`}>{plan.price}</span><span className={`text-lg ${plan.highlighted?"text-blue-100":"text-slate-400"}`}>{plan.period}</span></div>
    <p className={`mt-3 text-sm ${plan.highlighted?"text-blue-100":"text-slate-500"}`}>{plan.description}</p>
    <ul className="mt-8 space-y-3">{plan.features.map(f=>(<li key={f} className="flex items-center gap-3 text-sm"><span className={plan.highlighted?"text-white":"text-blue-500"}><Icon name="check" size={16}/></span><span className={plan.highlighted?"text-blue-50":"text-slate-600"}>{f}</span></li>))}</ul>
    <button onClick={onOpenContact} className={`mt-8 w-full py-3 rounded-full font-semibold transition-all ${plan.highlighted?"bg-white text-blue-600 hover:shadow-lg":"bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25"}`}>{plan.name==="Enterprise"?"Contact Sales":"Start Free Trial"}</button>
  </div>))}</div>
  <div className="mt-24 max-w-3xl mx-auto"><h2 className="text-2xl font-extrabold text-center text-slate-900 mb-10">FAQ</h2>
  {[{q:"Can I change plans?",a:"Yes, upgrade or downgrade anytime. Changes apply next billing cycle."},{q:"Free trial?",a:"All plans include 14-day free trial. No credit card required."},{q:"Task limit exceeded?",a:"We notify you at 80%. Upgrade or purchase more tasks."},{q:"Custom enterprise?",a:"Absolutely. Our Enterprise plan is fully customizable."}].map(f=>(<div key={f.q} className="border-b border-slate-100 py-5 group cursor-pointer"><h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">{f.q}</h3><p className="text-slate-500 leading-relaxed">{f.a}</p></div>))}</div>
</div></section></div>);}

/* ── RESOURCES ───────────────────────────────────────────────── */
function ResourcesPage(){
  const res=[{t:"Blog",d:"Latest insights on multi-agent AI and enterprise automation.",i:"doc"},{t:"Webinars",d:"Live demos and expert panels on deploying AI at scale.",i:"video"},{t:"Case Studies",d:"Real-world examples of Evantai driving business impact.",i:"chart"},{t:"Documentation",d:"Complete technical docs and API references.",i:"book"},{t:"Community",d:"Share ideas and get peer support.",i:"chat"},{t:"Academy",d:"Self-paced courses and certifications.",i:"grad"}];
  return(<div className="pt-[68px]"><section className="py-16 bg-gradient-to-b from-blue-50/40 to-white min-h-[60vh]"><div className="max-w-7xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Resources</h1><p className="text-slate-500 max-w-3xl leading-relaxed mb-12">Guides, webinars, case studies, and best practices.</p>
    <div className="grid md:grid-cols-3 gap-6">{res.map(r=>(<div key={r.t} className="group bg-white rounded-2xl p-8 border border-slate-100 cursor-pointer hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"><div className="text-blue-400 group-hover:text-blue-600 transition-colors mb-4"><Icon name={r.i} size={32}/></div><h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">{r.t}</h3><p className="text-slate-500 text-sm leading-relaxed">{r.d}</p><div className="mt-4 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Explore <Icon name="arrowR" size={16}/></div></div>))}</div>
  </div></section></div>);
}

/* ── ABOUT ───────────────────────────────────────────────────── */
function AboutPage(){
  const vals=[{t:"Innovation First",d:"Cutting-edge multi-agent AI delivering real enterprise value.",i:"rocket"},{t:"Trust & Security",d:"Enterprise-grade security and auditability built-in.",i:"lock"},{t:"Customer Impact",d:"We measure success by the business impact we create.",i:"target"}];
  return(<div className="pt-[68px]"><section className="py-16 bg-gradient-to-b from-blue-50/40 to-white"><div className="max-w-7xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 border-b-2 border-blue-600 inline-block pb-2">About Us</h1>
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16"><div className="space-y-6 text-slate-600 leading-relaxed text-lg">
      <p>Evantai is a multi-agent enterprise platform built by AI and automation experts, delivering secure intelligence with measurable impact across every department.</p>
      <p>Our approach, rooted in First Principles and Design Thinking, drives innovation through specialized agents for HR, Sales, Compliance, Retail, Content, and Careers.</p>
    </div><img src={IMG.team} alt="Team" className="rounded-2xl shadow-lg object-cover w-full h-[320px] hover:shadow-xl transition-shadow duration-300"/></div>
    <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Our Values</h2>
    <div className="grid md:grid-cols-3 gap-6">{vals.map(v=>(<div key={v.t} className="group bg-white rounded-2xl p-8 border border-slate-100 cursor-pointer hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"><div className="text-blue-400 group-hover:text-blue-600 transition-colors mb-4"><Icon name={v.i} size={32}/></div><h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">{v.t}</h3><p className="text-slate-500 leading-relaxed">{v.d}</p></div>))}</div>
  </div></section></div>);
}

/* ═══════════════════ APP ═════════════════════════════════════ */
export default function App(){
  const[contactOpen,setContactOpen]=useState(false);
  return(<Router><ScrollToTop/><div className="min-h-screen bg-white font-sans antialiased">
    <Navbar onOpenContact={()=>setContactOpen(true)}/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/solutions" element={<SolutionsPage/>}/>
      <Route path="/solutions/:id" element={<SolutionDetailPage onOpenContact={()=>setContactOpen(true)}/>}/>
      <Route path="/ai-services" element={<AIServicesPage/>}/>
      <Route path="/pricing" element={<PricingPage onOpenContact={()=>setContactOpen(true)}/>}/>
      <Route path="/resources" element={<ResourcesPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    <Footer/>
    <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
  </div></Router>);
}
