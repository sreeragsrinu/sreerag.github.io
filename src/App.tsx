/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState, FormEvent } from "react";
import { 
  Github, 
  Linkedin, 
  Download, 
  ChevronRight, 
  Database, 
  BarChart3, 
  BrainCircuit,
  Code2,
  Mail,
  ArrowUpRight,
  X,
  Info,
  LineChart,
  ExternalLink,
  Eye,
  Layout
} from "lucide-react";

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-5, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [10, 25]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [6, 30]);
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });
  const smoothRotateZ = useSpring(rotateZ, { stiffness: 100, damping: 30 });
  
  const hoverValue = useSpring(0, { stiffness: 300, damping: 30 });
  
  const finalRotateX = useTransform([smoothRotateX, hoverValue], ([r, h]) => (r as number) * (1 - (h as number)));
  const finalRotateY = useTransform([smoothRotateY, hoverValue], ([r, h]) => (r as number) * (1 - (h as number)));
  const finalRotateZ = useTransform([smoothRotateZ, hoverValue], ([r, h]) => (r as number) * (1 - (h as number)));
  const finalScale = useTransform(hoverValue, [0, 1], [1, 1.05]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const { scrollYProgress: pageScrollY } = useScroll();
  const scaleX = useSpring(pageScrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const aboutImageY = useTransform(aboutScrollY, [0, 1], [50, -50]);
  const aboutTextY = useTransform(aboutScrollY, [0, 1], [-20, 20]);

  const skillsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: skillsScrollY } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"]
  });

  const skillsX1 = useTransform(skillsScrollY, [0, 1], [-30, 30]);
  const skillsX2 = useTransform(skillsScrollY, [0, 1], [30, -30]);

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [viewingDashboard, setViewingDashboard] = useState<any>(null);
  const [activeChartIndex, setActiveChartIndex] = useState<number | null>(null);

  const projectDetails: any = {
    "Project 1 : Sales Performanc...": {
      title: "Project 1: Sales Performance Dashboard",
      img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png",
      overview: "Analyzed a retail sales dataset to track business performance and identify revenue-driving factors. Built an interactive dashboard to monitor KPIs and sales trends.",
      tools: ["Excel", "Data Cleaning", "Pivot Tables"],
      metrics: ["Total Revenue", "Total Orders", "Average Order Value (AOV)", "Profit"],
      whatIDid: [
        "Cleaned and transformed raw sales data",
        "Created KPI metrics for business performance tracking",
        "Built an interactive dashboard with filters (region, category, segment)",
        "Analyzed sales trends and product performance"
      ],
      insights: [
        "The Technology category generates the highest overall sales among product categories.",
        "Some sub-categories achieve high sales but contribute relatively lower profit, indicating possible pricing or discount impacts.",
        "The West region contributes the highest revenue, showing strong regional market performance.",
        "The Consumer segment records the highest number of orders, making it the largest customer segment.",
        "Higher discount levels appear to reduce profitability in certain categories, affecting overall profit margins."
      ],
      dashboardDescription: "Built a dynamic sales dashboard using PivotTables, Slicers, and PivotCharts for real-time data exploration.",
      charts: [
        { title: "Sales Performance Analysis", img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png" },
        { title: "Sales by category", img: "https://i.ibb.co/FbhQg24n/Screenshot-2026-03-21-204703.png" },
        { title: "Sales by segment", img: "https://i.ibb.co/7JbmhxQd/Screenshot-2026-03-21-204716.png" },
        { title: "Profit by category", img: "https://i.ibb.co/0jhq0pJZ/Screenshot-2026-03-21-204727.png" },
        { title: "Sales by subcategory", img: "https://i.ibb.co/YT0sMLjf/Screenshot-2026-03-21-204737.png" },
        { title: "Sales by region", img: "https://i.ibb.co/rJQ2F7J/Screenshot-2026-03-21-204745.png" },
        { title: "Region analysis", img: "https://i.ibb.co/LKjk3cj/Screenshot-2026-03-21-204756.png" }
      ],
      links: {
        charts: "#",
        dashboard: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png",
        source: "https://github.com/sreeragsrinu/sales-data-analysis-dashboard"
      }
    },
    "Project 2 : E-Commerce Dat...": {
      title: "Project 2: E-Commerce Data Analysis using SQL & Power BI",
      img: "https://i.ibb.co/0yQW366x/dashboard-overview.png",
      overview: "Performed end-to-end analysis on an e-commerce dataset to extract business insights related to customer behavior, product performance, and order trends. Built an interactive dashboard to visualize key metrics and trends.",
      tools: ["MySQL", "MariaDB", "SQL (Joins, Aggregations, Group By, Subqueries)", "Power BI (Dashboarding, Data Modeling, Visualization)"],
      metricsLabel: "Sample Analysis Performed",
      metrics: [
        "Total revenue and total orders",
        "Top-selling products",
        "Revenue by category",
        "Order status distribution",
        "Monthly sales trends"
      ],
      whatIDid: [
        "Queried and combined multiple tables using SQL to extract meaningful insights",
        "Analyzed revenue, order volume, and customer trends",
        "Identified top-performing products and sellers",
        "Calculated key business KPIs such as revenue and AOV",
        "Built an interactive Power BI dashboard to visualize insights and trends"
      ],
      insightsLabel: "📌 Business Insights & Recommendations",
      insights: [
        "97% of orders are successfully delivered, indicating strong logistics performance and operational efficiency.",
        "Total revenue (13.59M) is driven primarily by high order volume (~99K orders), while average order value (136.68) remains moderate—suggesting an opportunity to increase revenue through upselling or bundling.",
        "Revenue shows a sharp increase between 2016 and 2017, followed by steady growth in 2018, indicating successful expansion and market stabilization.",
        "A small number of product categories contribute the majority of revenue, highlighting category concentration and potential risk if demand shifts.",
        "Top-performing sellers generate a significant share of revenue, indicating dependency on a limited seller base—diversification could reduce risk.",
        "Sales distribution follows a long-tail pattern, where a few products dominate while many contribute smaller portions, suggesting opportunities in promoting mid-tier products.",
        "Recommendation: Focus on increasing average order value and diversifying both product categories and seller contributions to ensure sustainable growth."
      ],
      dashboardDescription: "Comprehensive e-commerce analysis using SQL for data extraction and Power BI for advanced visualization and business intelligence.",
      charts: [
        { title: "Monthly Order Trend Graph", img: "https://i.ibb.co/VpJxLM7x/monthly-orders-trend.png" },
        { title: "Monthly Revenue Trend Graph", img: "https://i.ibb.co/rXtmP6m/monthly-revenue-trend.png" },
        { title: "Top 10 products by revenue", img: "https://i.ibb.co/Cpw4G7N2/top-products.png" },
        { title: "Top 10 sellers by revenue", img: "https://i.ibb.co/jqyZWyd/top10-sellers.png" },
        { title: "Count of order ID", img: "https://i.ibb.co/tM4n2gKF/order-status-distribution.png" }
      ],
      links: {
        charts: "#",
        dashboard: "#",
        source: "https://github.com/sreeragsrinu/ecommerce-customer-insights-analysis"
      }
    }
  };

  // Add aliases for full titles used in Dashboards section
  projectDetails["Project 1 : Sales Performance Dashboard"] = projectDetails["Project 1 : Sales Performanc..."];
  projectDetails["Project 2 : E-Commerce Data Analysis using SQL & Power BI"] = projectDetails["Project 2 : E-Commerce Dat..."];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/sreeragsrinuu@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Portfolio Message!",
          _template: "table"
        })
      });
      
      if (response.ok) {
        setFormStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1d4ed8] rounded-full flex items-center justify-center text-white font-black text-xs">
              ss
            </div>
            <span className="font-black text-xl tracking-tight uppercase">SREERAG S</span>
          </div>
          
            <div className="flex items-center gap-10">
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                {['Home', 'About', 'Projects', 'Dashboards', 'Skills', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>

              <button 
                onClick={() => setIsResumeOpen(true)}
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all"
              >
                Resume <Download className="w-4 h-4" />
              </button>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="pt-40 pb-20 px-6 dot-grid min-h-screen flex items-center">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[80px] md:text-[120px] font-display font-bold leading-[0.75] tracking-[-0.06em] mb-12 uppercase">
              DATA <br /> ANALYST
            </h1>
            <p className="text-xl text-slate-600 max-w-lg mb-12 leading-relaxed">
              Aspiring <span className="font-semibold text-slate-900">Data Analyst</span> skilled in Excel, SQL, and Power BI with hands-on experience analyzing real-world datasets and building interactive dashboards to drive business insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -5, rotateY: 10, rotateZ: 6 }}
            animate={{ opacity: 1, scale: 1 }}
            onMouseEnter={() => hoverValue.set(1)}
            onMouseLeave={() => hoverValue.set(0)}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              rotateX: finalRotateX, 
              rotateY: finalRotateY, 
              rotateZ: finalRotateZ,
              scale: finalScale,
              y: smoothY,
              perspective: 1200 
            }}
            className="relative cursor-pointer"
          >
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 max-w-lg lg:translate-x-20 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Project Highlights</h3>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <div className="text-blue-600 font-bold text-sm mb-1">Project 1 : Sales Performance Dashboard</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Excel • Data Cleaning • Pivot Tables</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <div className="text-blue-600 font-bold text-sm mb-1">Project 2 : E-Commerce Data Analysis using SQL & Power BI</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">SQL • Power BI • MariaDB</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ y: aboutTextY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl font-black mb-4">About <span className="text-[#2563eb]">Sreerag</span></h2>
            <h3 className="text-2xl font-bold mb-8">BCA <span className="text-[#2563eb]">DataScience</span> Student</h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-12 max-w-xl">
              Aspiring Data Analyst skilled in Excel, SQL, and Power BI with hands-on experience analyzing real-world datasets and building interactive dashboards to drive business insights.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Education</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                    Bachelor of Computer Application (BCA) – Specialization in Data Science | 2023 – Present. Acharya Institute of Graduate Studies, Bangalore
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Certifications</h4>
                  <ul className="text-zinc-500 text-sm space-y-2 max-w-md">
                    <li>- IBM : Software Foundation, Basic Watson Services, RDBMS, and Rapid Development for AI.</li>
                    <li>- Coursera : Access Controls, Cryptography, Systems and Application Security, Network Security.</li>
                    <li>- Red Hat : Introduction to OpenShift Applications (DO101).</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: aboutImageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[32px] overflow-hidden border-[12px] border-zinc-900 shadow-2xl">
              <img 
                src="https://i.ibb.co/67wj83Gt/Screenshot-2026-03-21-180708.png" 
                alt="Sreerag" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2563eb] px-8 py-6 rounded-[24px] shadow-2xl flex flex-col items-center justify-center min-w-[140px]">
              <div className="text-3xl font-black text-white">BCA</div>
              <div className="text-[10px] uppercase tracking-widest font-black text-white/90 mt-1">Data Science</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-32 px-6 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-6 text-slate-900"
          >
            Technical Arsenal
          </motion.h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl">
            A comprehensive overview of my technical expertise and analytical capabilities.
          </p>
        </div>

        <div className="max-w-7xl lg:ml-12 xl:ml-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Languages & Tools",
              icon: <Code2 className="w-8 h-8 text-blue-600" />,
              skills: ["SQL (MariaDB/MySQL)", "Microsoft Excel", "PivotTables", "Power Query", "VBA", "Power BI", "DAX", "Data Modeling", "GitHub"]
            },
            {
              title: "Data Analysis",
              icon: <Database className="w-8 h-8 text-blue-600" />,
              skills: ["Data Cleaning", "Transformation", "KPI Analysis", "Data Visualization", "Trend Analysis", "Descriptive Statistics"]
            },
            {
              title: "Soft Skills",
              icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
              skills: ["Analytical Thinking", "Problem Solving", "Effective Communication", "Fast Learner"]
            }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              style={{ x: idx === 0 ? skillsX1 : idx === 2 ? skillsX2 : 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[48px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-10">
                {category.icon}
              </div>
              <h3 className="text-3xl font-bold mb-10 text-slate-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="bg-[#f0f4ff] text-[#1d4ed8] px-5 py-2.5 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-7xl font-black mb-8 text-zinc-950">Projects</h2>
            <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
              Real-world case studies where data analysis led to measurable business strategies and outcomes.
            </p>
          </div>
          <a 
            href="https://github.com/sreeragsrinu" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold flex items-center gap-2 hover:underline text-lg"
          >
            View all on GitHub <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>

        <div className="max-w-7xl lg:ml-12 xl:ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Project 1 : Sales Performanc...",
              tech: "MICROSOFT EXCEL",
              img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png"
            },
            {
              title: "Project 2 : E-Commerce Dat...",
              tech: "SQL POWER BI",
              img: "https://i.ibb.co/0yQW366x/dashboard-overview.png"
            }
          ].map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedProject(projectDetails[project.title])}
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-slate-50">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white text-zinc-950 px-6 py-3 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-zinc-950 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{project.tech}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboards Section */}
      <section id="dashboards" className="py-32 bg-zinc-950 text-white">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6 mb-20">
          <h2 className="text-6xl font-black mb-6">Interactive <span className="text-blue-500">Dashboards</span></h2>
          <p className="text-zinc-500 max-w-2xl">
            Designed and developed interactive dashboards using Excel and Power BI, enabling stakeholders to explore data through filters, slicers, and KPI metrics for actionable insights.
          </p>
        </div>

        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Project 1 : Sales Performance Dashboard",
              tech: "MICROSOFT EXCEL",
              desc: "Built a dynamic sales dashboard using PivotTables, Slicers, and PivotCharts for real-...",
              img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png"
            },
            {
              title: "Project 2 : E-Commerce Data Analysis using SQL & Power BI",
              tech: "SQL POWER BI MARIADB",
              desc: "Performed end-to-end analysis on an e-commerce dataset to extract business insight...",
              img: "https://i.ibb.co/0yQW366x/dashboard-overview.png"
            }
          ].map((dash, idx) => (
            <motion.div
              key={dash.title}
              onClick={() => setViewingDashboard(projectDetails[dash.title])}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 p-6 rounded-[32px] border border-zinc-800 flex flex-col md:flex-row gap-6 items-center group cursor-pointer hover:bg-zinc-900 transition-colors"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img src={dash.img} alt={dash.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1">{dash.title}</h4>
                <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-3">{dash.tech}</div>
                <p className="text-xs text-zinc-500 leading-relaxed">{dash.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-700 group-hover:text-blue-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 dot-grid">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 bg-zinc-950 rounded-[60px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Actively seeking opportunities as a <span className="text-blue-500">Data Analyst</span>.
            </h2>
            <p className="text-2xl font-bold text-blue-500 italic mb-12">
              If you believe I'd be a good fit for your team, please don't hesitate to get in touch.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/sreerag-s-9b25162a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/sreeragsrinu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleContactSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Sreerag" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="sreerag@gmail.com" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="Job Opportunity" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Message</label>
              <textarea 
                name="message"
                required
                placeholder="How can I help you?" 
                rows={4} 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" 
              />
            </div>
            <button 
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus === 'sent' && (
              <p className="text-green-500 text-sm font-bold text-center mt-4">
                Message sent successfully
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 text-sm font-bold text-center mt-4">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-100 flex flex-col items-center gap-4">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">
          &copy; 2026 Sreerag S • Data Analyst Portfolio
        </div>
        <a 
          href="mailto:sreeragsrinuu@gmail.com" 
          title="sreeragsrinuu@gmail.com"
          className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full transition-all group"
        >
          <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </a>
      </footer>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl z-10 flex flex-col max-h-[95vh] p-8"
            >
              {/* Header */}
              <div className="relative mb-6 flex justify-center items-center">
                <h3 className="text-3xl font-bold text-slate-900">My Resume</h3>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="absolute right-0 top-0 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto mb-8 rounded-xl border border-slate-200 bg-white p-4">
                <img 
                  src="https://i.ibb.co/5WwHNwVP/Whats-App-Image-2026-03-21-at-18-22-02.jpg" 
                  alt="Resume" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Footer Action */}
              <div className="flex justify-center">
                <a 
                  href="https://i.ibb.co/5WwHNwVP/Whats-App-Image-2026-03-21-at-18-22-02.jpg" 
                  download="Sreerag_Resume.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d4ed8] text-white px-10 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Download Resume <Download className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[48px] overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto p-8 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                      Project Details
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                          <h3 className="text-xl font-bold">Overview</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {selectedProject.overview}
                        </p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                          <h3 className="text-xl font-bold">Tools Used</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tools.map((tool: string) => (
                            <span key={tool} className="px-6 py-3 bg-slate-100 rounded-2xl font-bold text-sm text-slate-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                          <h3 className="text-xl font-bold">{selectedProject.metricsLabel || "Key Metrics"}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedProject.metrics.map((metric: string) => (
                            <div key={metric} className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                              <div className="text-blue-600 font-bold text-sm">{metric}</div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-xl">
                      <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dashboard Preview</span>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                      </div>
                      <img 
                        src={selectedProject.img} 
                        alt="Preview" 
                        className="w-full aspect-video object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                        <h3 className="text-xl font-bold">What I Did</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedProject.whatIDid.map((step: string, idx: number) => (
                          <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center font-bold text-blue-600 shadow-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                        <h3 className="text-xl font-bold">{selectedProject.insightsLabel || "Key Insights"}</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedProject.insights.map((insight: string, idx: number) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                            <p className="text-slate-600 text-sm leading-relaxed">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      setViewingDashboard({
                        title: selectedProject.title + " - Charts",
                        images: selectedProject.charts?.map((c: any) => ({ src: c.img, title: c.title })) || [{ src: selectedProject.img, title: selectedProject.title }],
                        type: "Charts",
                        dashboardDescription: selectedProject.dashboardDescription,
                        links: selectedProject.links
                      });
                      setActiveChartIndex(0);
                    }}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-50 text-zinc-950 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all"
                  >
                    <BarChart3 className="w-5 h-5" /> View Charts
                  </button>
                  <a 
                    href={selectedProject.links?.dashboard || "#"} 
                    onClick={(e) => {
                      e.preventDefault();
                      setViewingDashboard({
                        ...selectedProject,
                        type: "Dashboard"
                      });
                    }}
                    className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    <Layout className="w-5 h-5" /> View Dashboard
                  </a>
                  <a 
                    href={selectedProject.links?.source || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-slate-50 text-zinc-950 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all"
                  >
                    <Github className="w-5 h-5" /> View Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Dashboard Viewer */}
      <AnimatePresence>
        {viewingDashboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewingDashboard(null)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-[#121212] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-1">
                    {viewingDashboard.type || "Interactive Dashboard"}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {viewingDashboard.title}
                  </h2>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-5 h-1 bg-blue-600 rounded-full" />
                    <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                  </div>
                  <button
                    onClick={() => setViewingDashboard(null)}
                    className="w-8 h-8 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 overflow-hidden px-6 pb-3">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 overflow-auto scrollbar-hide p-6">
                    {viewingDashboard.type === "Charts" ? (
                      <div className="flex flex-col md:flex-row h-full gap-6">
                        {/* Sidebar with names */}
                        <div className="w-full md:w-72 space-y-2 border-r border-slate-100 pr-4 shrink-0">
                          <div className="flex items-center gap-2 mb-4 px-2">
                            <BarChart3 className="w-4 h-4 text-blue-600" />
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select a Chart</h4>
                          </div>
                          <div className="space-y-1">
                            {viewingDashboard.images.map((img: any, idx: number) => (
                              <button
                                key={idx}
                                onClick={() => setActiveChartIndex(idx)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group/btn ${
                                  activeChartIndex === idx 
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                                    : "text-slate-600 hover:bg-slate-50"
                                }`}
                              >
                                <span className="truncate pr-2">{img.title}</span>
                                <ChevronRight className={`w-3 h-3 transition-transform ${activeChartIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Main area with image */}
                        <div className="flex-1 flex flex-col h-full min-h-[400px]">
                          {activeChartIndex !== null ? (
                            <div className="w-full h-full flex flex-col items-center justify-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                              <div className="text-center">
                                <h3 className="text-zinc-900 font-bold text-lg mb-1">{viewingDashboard.images[activeChartIndex].title}</h3>
                                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
                              </div>
                              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                                <img 
                                  src={viewingDashboard.images[activeChartIndex].src} 
                                  alt={viewingDashboard.images[activeChartIndex].title} 
                                  className="max-w-full max-h-full object-contain p-4 drop-shadow-2xl"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 opacity-20" />
                              </div>
                              <p className="text-sm font-medium">Select a chart from the list to view details</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-12">
                        {viewingDashboard.images ? (
                          viewingDashboard.images.map((img: any, idx: number) => (
                            <div key={idx} className="space-y-4">
                              {img.title && <h3 className="text-zinc-900 font-bold text-lg border-l-4 border-blue-600 pl-4">{img.title}</h3>}
                              <img 
                                src={img.src} 
                                alt={img.title || "Chart View"} 
                                className="w-full h-auto object-contain rounded-xl shadow-md border border-zinc-100"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))
                        ) : (
                          <img 
                            src={viewingDashboard.img} 
                            alt="Dashboard View" 
                            className="w-full h-auto min-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  {/* Custom Scrollbar indicator */}
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-zinc-100 border-l border-zinc-200">
                    <div className="w-full h-24 bg-zinc-400 rounded-full mt-4 mx-auto" style={{ width: '3px' }} />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-[#181818] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Live Preview Mode</span>
                  </div>
                  <div className="h-3 w-px bg-white/10 hidden md:block" />
                  <p className="text-zinc-400 text-xs max-w-xl">
                    {viewingDashboard.dashboardDescription}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setViewingDashboard(null)}
                    className="text-zinc-400 hover:text-white text-xs font-bold transition-colors"
                  >
                    Close Viewer
                  </button>
                  <a 
                    href={viewingDashboard.links?.source || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> View Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
