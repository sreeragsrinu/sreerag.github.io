/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState, FormEvent, useEffect } from "react";
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
  Layout,
  Cpu,
  Briefcase,
  Award
} from "lucide-react";
import ResumeViewer from "./components/ResumeViewer";

export default function App() {
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

  const aboutTextY = useTransform(aboutScrollY, [0, 1], [-20, 20]);

  const skillsRef = useRef<HTMLElement>(null);

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [certFilter, setCertFilter] = useState<'ibm' | 'virtual-experiences' | 'all'>('ibm');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      // Hide header when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectDetails: any = {
    "Beyond the Can — What Drives Red Bull’s Digital Dominance": {
      title: "Beyond the Can — What Drives Red Bull’s Digital Dominance",
      img: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png",
      overview: "An analytical deep dive into Red Bull's media-house business model and digital dominance, studying how their extreme sports sponsorship and content platform functions as a powerful consumer-engagement engine.",
      tools: ["Digital Media Analytics", "Sponsorship ROI Valuation", "Social Media Performance KPI Analysis"],
      metricsLabel: "Key Pillars Analyzed",
      metrics: ["Content-First Engine", "Extreme Sports Integrations", "Owned Media Network", "Global Brand Equity"],
      whatIDid: [
        "Analyzed digital engagement levels of legendary campaigns like Red Bull Stratos and global flight days.",
        "Evaluated how Red Bull Media House creates self-funding digital marketing loops.",
        "Mapped brand associations and sponsorships across Formula 1, extreme sports, and gaming.",
        "Developed attribution insights showing how sports ownership reduces direct advertising spend."
      ],
      insightsLabel: "📌 Digital Dominance Insights",
      insights: [
        "Red Bull functions as a media production house first that sells energy drinks second, completely bypassing standard advertising costs.",
        "Over 80% of digital video content focuses on narrative-driven extreme athletics rather than direct product promotion.",
        "Owned-event IP (like Red Bull Rampage and soapbox races) ensures year-round multi-channel content loops.",
        "The model builds peerless brand loyalty by turning extreme experiences into shared community stories."
      ],
      dashboardDescription: "Business strategy and digital media analysis highlighting Red Bull's non-traditional consumer engagement and multi-channel content distribution.",
      charts: [
        { title: "Red Bull Digital Dominance", img: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png" }
      ],
      links: {
        charts: "#",
        dashboard: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png",
        source: "#"
      }
    },
    "Sales performance dashboard": {
      title: "Sales performance dashboard",
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
    "E-Commerce Data Analysis using SQL & Power BI": {
      title: "E-Commerce Data Analysis using SQL & Power BI",
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
    },
    "E-Commerce Customer Insights Analysis": {
      title: "E-Commerce Customer Insights Analysis",
      img: "https://i.ibb.co/0yQW366x/dashboard-overview.png",
      overview: "Analyzed 99K+ orders and ₹16M+ in revenue using MariaDB SQL, Excel, and Power BI. Identified customer behavior, sales trends, product categories, and seller performance through comprehensive data analytics.",
      tools: ["MariaDB", "SQL (Joins, Window Functions, Group By)", "Excel", "Power BI", "DAX"],
      metricsLabel: "Key Findings & Metrics",
      metrics: ["99K+ Orders Analyzed", "₹16M+ Revenue", "97% Successful Delivery", "Category & Seller Analysis"],
      whatIDid: [
        "Analyzed 99K+ orders and ₹16M+ revenue using MariaDB SQL, Excel, and Power BI.",
        "Identified customer behavior, sales trends, product categories, and seller performance.",
        "Built an interactive Power BI dashboard to track revenue, orders, AOV, and monthly sales trends.",
        "Delivered strategic recommendations on basket size expansion and seller diversification."
      ],
      insightsLabel: "📌 Strategic Business Insights",
      insights: [
        "97% of orders are successfully delivered, demonstrating strong logistics consistency.",
        "Revenue was driven by high order volume (~99K orders) with moderate average order value.",
        "Concentrated revenue in top categories indicates clear upselling and bundling opportunities.",
        "Optimized seller diversification strategies to minimize platform revenue risk."
      ],
      dashboardDescription: "Interactive Power BI dashboard monitoring revenue trends, order distributions, and product metrics.",
      charts: [
        { title: "Monthly Order Trend Graph", img: "https://i.ibb.co/VpJxLM7x/monthly-orders-trend.png" },
        { title: "Monthly Revenue Trend Graph", img: "https://i.ibb.co/rXtmP6m/monthly-revenue-trend.png" },
        { title: "Top 10 products by revenue", img: "https://i.ibb.co/Cpw4G7N2/top-products.png" },
        { title: "Top 10 sellers by revenue", img: "https://i.ibb.co/jqyZWyd/top10-sellers.png" },
        { title: "Count of order ID", img: "https://i.ibb.co/tM4n2gKF/order-status-distribution.png" }
      ],
      links: {
        charts: "#",
        dashboard: "https://i.ibb.co/0yQW366x/dashboard-overview.png",
        source: "https://github.com/sreeragsrinu/ecommerce-customer-insights-analysis"
      }
    },
    "Churn Revenue Impact Forecaster": {
      title: "Churn Revenue Impact Forecaster",
      img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png",
      overview: "Explored customer churn patterns and visualized their potential revenue impact. Developed a predictive analytics pipeline using Python, XGBoost, and Random Forest combined with a business impact dashboard in Power BI.",
      tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Random Forest", "Power BI"],
      metricsLabel: "Model & Business Metrics",
      metrics: ["Predictive Churn Risk", "Revenue at Risk Valuation", "High-Risk Customer Segments", "Retention ROI Potential"],
      whatIDid: [
        "Developed a customer churn analysis and forecasting pipeline using Python, XGBoost, and Random Forest.",
        "Performed data cleaning, feature engineering, and exploratory data analysis to identify key churn drivers.",
        "Built a Power BI dashboard to visualize churn metrics, customer risk segments, and direct revenue impact.",
        "Formulated retention strategies targeting accounts with high lifetime value."
      ],
      insightsLabel: "📌 Churn & Revenue Insights",
      insights: [
        "Contract type, tenure, and customer support ticket frequency emerged as the strongest predictors of churn.",
        "Early intervention on month-to-month subscribers reduces projected annual revenue loss significantly.",
        "Segmenting customers by risk score allows prioritizing high-LTV accounts for proactive retention offers."
      ],
      dashboardDescription: "Power BI visual dashboard tracking churn risk probability and quantifying revenue preservation opportunities.",
      charts: [
        { title: "Sales & Churn Overview", img: "https://i.ibb.co/CK5qDkGm/dashboard-preview.png" }
      ],
      links: {
        charts: "#",
        dashboard: "#",
        source: "https://github.com/sreeragsrinu/churn-revenue-impact-forecaster"
      }
    },
    "Beyond The Can: Red Bull Analytics": {
      title: "Beyond The Can: Red Bull Analytics",
      img: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png",
      overview: "Analyzed digital engagement trends across Formula 1, esports, and competitor activity. Evaluated how Red Bull's media house strategy turns extreme sports sponsorships into high-impact digital brand equity.",
      tools: ["Python", "SQL", "Power BI", "EDA", "Social Media Analytics"],
      metricsLabel: "Key Analytics Pillars",
      metrics: ["F1 Digital Engagement", "Esports Audience Growth", "Owned Media Distribution", "Sponsorship ROI Modeling"],
      whatIDid: [
        "Analyzed Red Bull digital engagement trends using Python, SQL, and Power BI.",
        "Performed data cleaning, exploratory data analysis (EDA), and trend tracking across Formula 1, esports, and competitor activity.",
        "Developed interactive Power BI dashboards to communicate business insights and sponsorship efficiency.",
        "Quantified digital reach and audience sentiment across global event campaigns."
      ],
      insightsLabel: "📌 Digital Dominance Insights",
      insights: [
        "Red Bull functions as a media production house first that sells energy drinks second, radically decreasing traditional paid media expenses.",
        "Over 80% of digital video content focuses on narrative-driven extreme athletics rather than direct product promotion.",
        "Formula 1 race weekends and esports tournaments drive viral organic engagement spikes."
      ],
      dashboardDescription: "Business strategy and digital media analysis highlighting Red Bull's non-traditional consumer engagement.",
      charts: [
        { title: "Red Bull Digital Dominance", img: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png" }
      ],
      links: {
        charts: "#",
        dashboard: "https://i.ibb.co/XfRZKJkH/Screenshot-2026-07-20-233350.png",
        source: "https://github.com/sreeragsrinu/beyond-the-can-redbull-analytics"
      }
    },
    "Climate-Aware Disease Outbreak Prediction": {
      title: "Climate-Aware Disease Outbreak Prediction",
      img: "https://i.ibb.co/FbhQg24n/Screenshot-2026-03-21-204703.png",
      overview: "Analyzed climate and disease datasets using Python and predictive modeling techniques. Evaluated historical weather patterns and disease incidence to forecast outbreak risks using machine learning algorithms.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "GridSearchCV"],
      metricsLabel: "Model Performance Metrics",
      metrics: ["Outbreak Risk Classification", "Cross-Validation Score", "Climate Feature Correlation", "GridSearchCV Optimization"],
      whatIDid: [
        "Analyzed climate and disease datasets using Python, Pandas, and data preprocessing techniques.",
        "Applied cross-validation and GridSearchCV for predictive model optimization and risk forecasting.",
        "Visualized disease trends, rainfall/temperature correlations, and prediction accuracy using Matplotlib.",
        "Delivered actionable early-warning risk indicators for public health planning."
      ],
      insightsLabel: "📌 Climate & Predictive Insights",
      insights: [
        "Strong seasonal correlation between sustained rainfall spikes, elevated ambient temperatures, and outbreak incubation periods.",
        "Hyperparameter optimization via GridSearchCV boosted classification sensitivity on high-risk warning flags.",
        "Predictive risk scoring provides critical lead time for preventive resource allocation."
      ],
      dashboardDescription: "Predictive modeling and exploratory data analysis of climate variables and outbreak incidence.",
      charts: [
        { title: "Disease & Climate Correlation", img: "https://i.ibb.co/FbhQg24n/Screenshot-2026-03-21-204703.png" }
      ],
      links: {
        charts: "#",
        dashboard: "#",
        source: "https://github.com/sreeragsrinu/climate-aware-disease-outbreak-prediction"
      }
    }
  };

  // Add aliases for full titles used in Dashboards section and backwards compatibility
  projectDetails["Project 1 : Sales Performanc..."] = projectDetails["Sales performance dashboard"];
  projectDetails["Project 2 : E-Commerce Dat..."] = projectDetails["E-Commerce Data Analysis using SQL & Power BI"];
  projectDetails["Project 1 : Sales Performance Dashboard"] = projectDetails["Sales performance dashboard"];
  projectDetails["Project 2 : E-Commerce Data Analysis using SQL & Power BI"] = projectDetails["E-Commerce Data Analysis using SQL & Power BI"];
  projectDetails["Beyond the Can — What Drives Red Bull’s Digital Dominance"] = projectDetails["Beyond The Can: Red Bull Analytics"];

  const anthropicCertificates = [
    {
      title: "Claude with the Anthropic API",
      issuer: "Anthropic",
      issued: "Issued Oct 2024",
      category: "Anthropic" as const,
      logo: "https://i.ibb.co/rGrZ6dhq/Screenshot-2026-10-11-213201.png",
      featured: true,
      skills: ["Anthropic API", "Claude Integration", "System Prompts", "LLM Applications"],
      credentialId: "9l7dvyox7j27",
      verifyUrl: "https://verify.skilljar.com/c/9l7dvyox7j27"
    },
    {
      title: "Prompt Design in Anthropic Console",
      issuer: "Anthropic",
      issued: "Issued Oct 2024",
      category: "Anthropic" as const,
      logo: "https://i.ibb.co/rGrZ6dhq/Screenshot-2026-10-11-213201.png",
      featured: true,
      skills: ["Anthropic Console", "Prompt Evaluation", "Parameter Tuning", "Optimization"],
      credentialId: "gl3c6bcf6418",
      verifyUrl: "https://verify.skilljar.com/c/gl3c6bcf6418"
    },
    {
      title: "Prompt Engineering Interactive Tutorial",
      issuer: "Anthropic",
      issued: "Issued Oct 2024",
      category: "Anthropic" as const,
      logo: "https://i.ibb.co/rGrZ6dhq/Screenshot-2026-10-11-213201.png",
      featured: true,
      skills: ["Prompt Engineering", "Few-Shot Learning", "Context Engineering", "Chain-of-Thought"],
      credentialId: "rwh5z2v16x9g",
      verifyUrl: "https://verify.skilljar.com/c/rwh5z2v16x9g"
    },
    {
      title: "Building with the Claude 3 Model Family",
      issuer: "Anthropic",
      issued: "Issued Oct 2024",
      category: "Anthropic" as const,
      logo: "https://i.ibb.co/rGrZ6dhq/Screenshot-2026-10-11-213201.png",
      featured: true,
      skills: ["Claude 3 Family", "Haiku, Sonnet & Opus", "Multimodal Reasoning", "Anthropic AI"],
      credentialId: "431uqvfqy2q4",
      verifyUrl: "https://verify.skilljar.com/c/431uqvfqy2q4"
    }
  ];

  const ibmCertificates = [
    {
      title: "Predictive Modeling with IBM SPSS Modeler",
      issuer: "IBM",
      issued: "Issued Jul 2026",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "09cd27d7214b4bddb3bbba1d97817840",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/09cd27d7214b4bddb3bbba1d97817840"
    },
    {
      title: "Big Data Technologies - Spark & Scala Fundamentals",
      issuer: "IBM",
      issued: "Issued May 2026",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "145735d34d514856b2ff76dccfa3bb03",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/145735d34d514856b2ff76dccfa3bb03"
    },
    {
      title: "Watson Services - Rapid development for AI",
      issuer: "IBM",
      issued: "Issued Sep 2025",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "b2de243348b44d80a4935052a152ff43",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/b2de243348b44d80a4935052a152ff43"
    },
    {
      title: "Data Visualisation",
      issuer: "IBM",
      issued: "Issued Oct 2024",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "f04494b9555446af942ecde04eecd48e",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/f04494b9555446af942ecde04eecd48e"
    },
    {
      title: "RDBMS",
      issuer: "IBM",
      issued: "Issued Jun 2024",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "632e0f3542bb49de92bcb64457d9e21b",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/632e0f3542bb49de92bcb64457d9e21b"
    },
    {
      title: "Software Foundation Course - Basic",
      issuer: "IBM",
      issued: "Issued Jun 2024",
      category: "IBM" as const,
      logo: "https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png",
      credentialId: "cce96aa97ebd449594e3f74136336e9c",
      verifyUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/cce96aa97ebd449594e3f74136336e9c"
    }
  ];

  const internshipCertificates = [
    {
      title: "Data Science Internship Certificate",
      issuer: "Coding Monks Innovations",
      issued: "Issued Jan 2026",
      category: "Internship" as const,
      logo: "https://i.ibb.co/rGrZ6dhq/Screenshot-2026-10-11-213201.png",
      skills: ["Data Science", "Python", "Predictive Modeling", "Exploratory Data Analysis", "Business Analytics"],
      credentialId: "Certificate No: CM26B7DSO02",
      verifyUrl: "https://github.com/sreeragsrinu"
    }
  ];

  const virtualExperienceCertificates = [
    {
      title: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      issued: "Issued Jun 2026",
      category: "Virtual Experiences" as const,
      logo: "https://i.ibb.co/TDz7dhzV/Screenshot-2026-10-11-213150.png",
      skills: ["GenAI", "Data Analytics", "Delinquency Risk Assessment", "AI-Driven Strategy", "EDA"],
      credentialId: "eM5jw5igHzkfvkGMX",
      verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_69ca91f1d68dc55bf654283c_1780302712448_completion_certificate.pdf"
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      issued: "Issued Mar 2026",
      category: "Virtual Experiences" as const,
      logo: "https://i.ibb.co/TDz7dhzV/Screenshot-2026-10-11-213150.png",
      skills: ["Data Analytics", "Tableau", "Excel", "Data Cleaning & Transformation", "KPI Dashboards"],
      credentialId: "5R6LpdLjsByZP7xw5",
      verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69ca91f1d68dc55bf654283c_1774888864221_completion_certificate.pdf"
    }
  ];

  const allCertificates = [
    ...ibmCertificates, 
    ...virtualExperienceCertificates
  ];
  const certifications = allCertificates;

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
          _subject: `New Portfolio Message: ${data.subject || 'No Subject'}`,
          _template: "table",
          _captcha: "false"
        })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success === "true") {
        setFormStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("FormSubmit Error:", result);
        setFormStatus('error');
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#800020] z-[60] origin-left"
        style={{ scaleX }}
      />
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50 text-white transition-transform duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center text-white font-black text-xs">
              ss
            </div>
            <span className="font-black text-xl tracking-tight uppercase text-white">SREERAG S</span>
          </div>
          
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
                {['Home', 'About', 'Projects', 'Skills'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#a8203d] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#800020] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#600018] transition-all shadow-md shadow-[#800020]/20 cursor-pointer"
              >
                Contact
              </button>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 bg-black text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 uppercase text-white">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-zinc-300 mb-2">
                HEY I'M
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[90px] font-display font-bold leading-[0.88] tracking-[-0.04em] text-white">
                SREERAG
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed">
              I'm a <span className="font-semibold text-white">Data Science</span> professional passionate about transforming data into actionable insights using SQL, Python, Power BI, Excel, Tableau, and Machine Learning to solve real-world problems and drive data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#800020] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#600018] transition-all shadow-lg shadow-[#800020]/30"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="border-2 border-zinc-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Resume <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-md lg:max-w-lg flex justify-center lg:justify-end">
              <img 
                src="https://i.ibb.co/LdBYXhK9/Whats-App-Image-2026-10-11-at-19-45-01.jpg" 
                alt="Sreerag" 
                className="w-full h-auto max-h-[600px] object-contain object-bottom"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-28 md:py-32 bg-white text-slate-900 overflow-hidden relative dot-grid border-t border-slate-100">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: ABOUT ME */}
            <motion.div
              style={{ y: aboutTextY }}
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900 tracking-tight uppercase">
                ABOUT ME
              </h2>
              <ul className="space-y-3.5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Passionate about turning challenges into opportunities for learning and growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Analytical thinker with a problem-solving mindset.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Curious about discovering patterns, exploring ideas, and understanding how things work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Committed to continuous learning and improving my technical and analytical abilities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Value teamwork, adaptability, and effective communication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Focused on building practical solutions that create meaningful impact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>Aspiring to grow as a data professional and contribute to real-world business success.</span>
                </li>
              </ul>

              {/* Social & Contact Links */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-3.5">
                <a 
                  href="https://www.linkedin.com/in/sreerag-s-9b25162a7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-[#800020] hover:text-white text-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a 
                  href="https://github.com/sreeragsrinu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-zinc-950 hover:text-white text-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a 
                  href="mailto:sreeragsrinuu@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-[#800020] hover:text-white text-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
                  title="Email sreeragsrinuu@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Education & Certifications */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Education Box */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">
                  Education
                </h3>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white border border-slate-200/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                      <img 
                        src="https://i.ibb.co/cXJ9rL3Y/Screenshot-2026-10-11-202014.png" 
                        alt="Acharya Institute of Graduate Studies" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-900 leading-snug">Acharya Institute of Graduate Studies</h4>
                      <p className="text-base font-medium text-slate-700">
                        BCA Data Science, Artificial Intelligence
                      </p>
                      <p className="text-sm font-normal text-slate-500">
                        Jul 2023 – Jul 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Box */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Certifications
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {allCertificates.length} Verified Credentials
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Line 1: IBM */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setCertFilter('ibm');
                      setIsCertificationsOpen(true);
                    }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setCertFilter('ibm'); setIsCertificationsOpen(true); } }}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#800020]/40 hover:bg-[#800020]/5 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
                          <img 
                            src="https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png" 
                            alt="IBM Certifications" 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#800020] transition-colors leading-snug">
                              IBM
                            </h4>
                            <span className="text-[10px] font-bold text-[#800020] bg-[#800020]/10 px-2 py-0.5 rounded-full border border-[#800020]/20">
                              6 Badges
                            </span>
                          </div>
                          <p className="text-xs font-medium text-slate-600 line-clamp-1">
                            Data Science, Predictive Modeling, Spark, Big Data & RDBMS
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#800020] font-semibold group-hover:translate-x-0.5 transition-transform shrink-0">
                        <span className="hidden sm:inline">View</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Line 2: Virtual Experiences */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setCertFilter('virtual-experiences');
                      setIsCertificationsOpen(true);
                    }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setCertFilter('virtual-experiences'); setIsCertificationsOpen(true); } }}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#800020]/40 hover:bg-[#800020]/5 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
                          <img 
                            src="https://i.ibb.co/TDz7dhzV/Screenshot-2026-10-11-213150.png" 
                            alt="Virtual Experiences" 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#800020] transition-colors leading-snug">
                              Virtual Experiences
                            </h4>
                            <span className="text-[10px] font-bold text-[#800020] bg-[#800020]/10 px-2 py-0.5 rounded-full border border-[#800020]/20">
                              2 Simulations
                            </span>
                          </div>
                          <p className="text-xs font-medium text-slate-600 line-clamp-1">
                            Tata GenAI & Deloitte Australia Job Simulations — Forage
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#800020] font-semibold group-hover:translate-x-0.5 transition-transform shrink-0">
                        <span className="hidden sm:inline">View</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Certifications Button */}
                <div className="mt-4 pt-1 flex items-center justify-start">
                  <a
                    href="https://www.linkedin.com/in/sreerag-s-9b25162a7/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100/90 hover:bg-[#800020] text-slate-700 hover:text-white text-xs font-semibold transition-all duration-300 border border-slate-200/80 hover:border-[#800020] shadow-2xs hover:shadow-md group cursor-pointer"
                  >
                    <span>Other Certifications</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24 md:py-28 px-6 bg-black text-white overflow-hidden relative dark-dot-grid border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white uppercase tracking-tight"
          >
            Technical Skills
          </motion.h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Core analytical competencies, database architectures, programming, and business intelligence toolsets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-3.5">
          {[
            {
              title: "SQL & Databases",
              icon: <Database className="w-4 h-4 text-[#800020]" />,
              skills: "SQL · MySQL · MariaDB · Joins · Subqueries · Data Aggregation"
            },
            {
              title: "Power BI & Data Visualization",
              icon: <BarChart3 className="w-4 h-4 text-[#800020]" />,
              skills: "Power BI · DAX · Power Query · Tableau · Interactive Dashboards · KPI Reporting"
            },
            {
              title: "Python & Data Analysis",
              icon: <Code2 className="w-4 h-4 text-[#800020]" />,
              skills: "Python · Pandas · NumPy · Matplotlib · Data Cleaning · Exploratory Data Analysis"
            },
            {
              title: "Excel & Power Query",
              icon: <Layout className="w-4 h-4 text-[#800020]" />,
              skills: "Microsoft Excel · Data Cleaning · PivotTables · Lookup Functions · Data Transformation"
            },
            {
              title: "Statistics & Business Analytics",
              icon: <LineChart className="w-4 h-4 text-[#800020]" />,
              skills: "Descriptive Statistics · Probability · Correlation Analysis · Hypothesis Testing · Trend Analysis · Business Insights"
            },
            {
              title: "Machine Learning",
              icon: <BrainCircuit className="w-4 h-4 text-[#800020]" />,
              skills: "Regression · Classification · Random Forest · XGBoost · Feature Engineering · Model Evaluation"
            },
            {
              title: "Tools & Technologies",
              icon: <Cpu className="w-4 h-4 text-[#800020]" />,
              skills: "Git · GitHub · Jupyter Notebook · Visual Studio Code · Generative AI Tools"
            }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.35 }}
              className="p-4 sm:p-5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/90 hover:bg-zinc-900 transition-all group"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800/90 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal pl-0 sm:pl-[44px] tracking-normal">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-28 px-6 bg-white dot-grid border-t border-slate-100 relative">
        <span id="project" className="sr-only" />
        <div className="max-w-4xl lg:ml-12 xl:ml-24 flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-zinc-950 uppercase tracking-tight">
              PROJECT
            </h2>
            <p className="text-slate-500 max-w-xl text-sm sm:text-base leading-relaxed">
              Real-world data science case studies and predictive pipelines delivering measurable business impact.
            </p>
          </div>
          <a 
            href="https://github.com/sreeragsrinu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#800020] font-bold flex items-center gap-1.5 hover:underline text-sm sm:text-base flex-shrink-0"
          >
            View all on GitHub <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="max-w-4xl lg:ml-12 xl:ml-24 flex flex-col gap-3.5">
          {[
            {
              emoji: "📊",
              title: "E-Commerce Customer Insights Analysis",
              description: "Analyzed 99K+ orders and ₹16M+ in revenue using SQL, Excel, and Power BI.",
              github: "https://github.com/sreeragsrinu/ecommerce-customer-insights-analysis"
            },
            {
              emoji: "📈",
              title: "Churn Revenue Impact Forecaster",
              description: "Explored customer churn patterns and visualized their potential revenue impact.",
              github: "https://github.com/sreeragsrinu/churn-revenue-impact-forecaster"
            },
            {
              emoji: "📉",
              title: "Beyond The Can: Red Bull Analytics",
              description: "Analyzed digital engagement trends across Formula 1, esports, and competitor activity.",
              github: "https://github.com/sreeragsrinu/beyond-the-can-redbull-analytics"
            },
            {
              emoji: "🌦️",
              title: "Climate-Aware Disease Outbreak Prediction",
              description: "Analyzed climate and disease datasets using Python and predictive modeling techniques.",
              github: "https://github.com/sreeragsrinu/climate-aware-disease-outbreak-prediction"
            }
          ].map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.35 }}
              onClick={() => setSelectedProject(projectDetails[project.title])}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#800020]/40 hover:bg-[#800020]/5 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="text-2xl sm:text-3xl flex-shrink-0 select-none leading-none pt-0.5 sm:pt-0">
                  {project.emoji}
                </span>
                <div className="leading-snug">
                  <span className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                    {project.title}
                  </span>
                  <span className="text-slate-400 font-semibold mx-2 select-none"> — </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {project.description}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold text-slate-600 hover:text-[#800020] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#800020]/30 shadow-2xs transition-all"
                  title="View GitHub repository"
                >
                  GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#800020] group-hover:border-[#800020]/30 group-hover:translate-x-0.5 transition-all shadow-2xs">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 dot-grid bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl lg:ml-12 xl:ml-24 bg-zinc-950 rounded-[60px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center shadow-2xl">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Actively seeking opportunities as a <span className="text-[#a8203d]">Data Analyst</span>.
            </h2>
            <p className="text-2xl font-bold text-[#a8203d] italic mb-12">
              If you believe I'd be a good fit for your team, please don't hesitate to get in touch.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/sreerag-s-9b25162a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-[#800020] transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/sreeragsrinu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-[#800020] transition-all"
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
                  placeholder=" YOUR NAME" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#800020] transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="YOUR EMAIL ADRESS" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#800020] transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2 relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Subject</label>
              <div className="relative">
                <select 
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#800020] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>REASON TO CONNECT</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Discussion">Project Discussion</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Message</label>
              <textarea 
                name="message"
                required
                placeholder="TYPE...." 
                rows={4} 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#800020] transition-colors resize-none" 
              />
            </div>
            <button 
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-[#800020] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#600018] transition-all shadow-xl shadow-[#800020]/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
          &copy; 2026 Sreerag S • PORTFOLIO
        </div>
        <a 
          href="mailto:sreeragsrinuu@gmail.com" 
          title="sreeragsrinuu@gmail.com"
          className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full transition-all group"
        >
          <Mail className="w-5 h-5 text-slate-400 group-hover:text-[#800020] transition-colors" />
        </a>
      </footer>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer" 
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl z-10 flex flex-col h-[94vh] max-h-[96vh] overflow-hidden border border-slate-200"
            >
              {/* Header */}
              <div className="px-6 py-3.5 bg-white border-b border-slate-200 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Sreerag S — Analytics & Insights CV</h3>
                  <span className="text-[11px] font-semibold text-[#800020] bg-[#800020]/10 border border-[#800020]/20 px-2.5 py-0.5 rounded-full font-mono">
                    Sreerag_S_Analytics_Insights_CV.pdf
                  </span>
                </div>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Close resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* PDF Document Viewer */}
              <div className="flex-1 overflow-hidden">
                <ResumeViewer />
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#800020]/10 text-[#800020] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                      Project Details
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-[#800020] rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                          <h3 className="text-xl font-bold">Overview</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {selectedProject.overview}
                        </p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-[#800020] rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
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
                          <div className="w-8 h-8 bg-[#800020] rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                          <h3 className="text-xl font-bold">{selectedProject.metricsLabel || "Key Metrics"}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedProject.metrics.map((metric: string) => (
                            <div key={metric} className="p-4 bg-[#800020]/5 rounded-2xl border border-[#800020]/20">
                              <div className="text-[#800020] font-bold text-sm">{metric}</div>
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
                        <div className="w-8 h-8 bg-[#800020] rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                        <h3 className="text-xl font-bold">What I Did</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedProject.whatIDid.map((step: string, idx: number) => (
                          <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center font-bold text-[#800020] shadow-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-[#800020] rounded-lg flex items-center justify-center text-white text-lg">🔹</div>
                        <h3 className="text-xl font-bold">{selectedProject.insightsLabel || "Key Insights"}</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedProject.insights.map((insight: string, idx: number) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-2 shrink-0" />
                            <p className="text-slate-600 text-sm leading-relaxed">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                  <a 
                    href={selectedProject.links?.source || "https://github.com/sreeragsrinu"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-zinc-950 text-white rounded-2xl font-bold text-sm hover:bg-[#800020] transition-all shadow-md"
                  >
                    <Github className="w-5 h-5" /> View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Side Slide-Over Drawer for Certifications */}
      <AnimatePresence>
        {isCertificationsOpen && (
          <div className="fixed inset-0 z-[75] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertificationsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-out Panel from the Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col h-full z-10 overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-200 bg-slate-50/90">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 p-1 flex items-center justify-center shadow-xs">
                      {certFilter === 'ibm' ? (
                        <img 
                          src="https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png" 
                          alt="IBM" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : certFilter === 'virtual-experiences' ? (
                        <img 
                          src="https://i.ibb.co/TDz7dhzV/Screenshot-2026-10-11-213150.png" 
                          alt="Virtual Experiences" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700 bg-slate-100 rounded-lg">
                          <Award className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 leading-tight">
                        {certFilter === 'virtual-experiences'
                          ? 'Virtual Experiences'
                          : certFilter === 'ibm' 
                          ? 'IBM Certifications' 
                          : 'All Certifications'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {certFilter === 'virtual-experiences'
                          ? 'Forage Job Simulations — Tata & Deloitte Australia'
                          : certFilter === 'ibm' 
                          ? 'IBM Professional Credentials (6 Verified Badges)' 
                          : `${allCertificates.length} Verified Credentials & Badges`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/sreerag-s-9b25162a7/details/certifications/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#800020] text-slate-700 hover:text-white text-xs font-semibold transition-all duration-200 border border-slate-200/80 group cursor-pointer"
                      title="View other certifications on LinkedIn"
                    >
                      <span>Other Certifications</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                    <button
                      onClick={() => setIsCertificationsOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                      title="Close certifications panel"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl mt-4 border border-slate-200/70 overflow-x-auto">
                  <button
                    onClick={() => setCertFilter('ibm')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      certFilter === 'ibm'
                        ? 'bg-white text-[#800020] shadow-xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <img src="https://i.ibb.co/MDG3VQTp/Screenshot-2026-10-11-203331.png" alt="IBM" className="w-3.5 h-3.5 object-contain" />
                    IBM ({ibmCertificates.length})
                  </button>
                  <button
                    onClick={() => setCertFilter('virtual-experiences')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      certFilter === 'virtual-experiences'
                        ? 'bg-white text-[#800020] shadow-xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <img src="https://i.ibb.co/TDz7dhzV/Screenshot-2026-10-11-213150.png" alt="Virtual Experiences" className="w-3.5 h-3.5 object-contain" />
                    Virtual experiences ({virtualExperienceCertificates.length})
                  </button>
                  <button
                    onClick={() => setCertFilter('all')}
                    className={`py-1.5 px-3.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      certFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    All ({allCertificates.length})
                  </button>
                </div>
              </div>

              {/* Scrollable Certificates List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {(certFilter === 'ibm' 
                  ? ibmCertificates 
                  : certFilter === 'virtual-experiences'
                  ? virtualExperienceCertificates
                  : allCertificates
                ).map((cert: any) => (
                  <div 
                    key={cert.credentialId + cert.title}
                    className={`p-5 rounded-2xl border transition-all duration-200 ${
                      cert.category === 'Anthropic'
                        ? 'bg-amber-50/20 border-amber-200/70 hover:border-amber-400 hover:bg-amber-50/40'
                        : cert.category === 'Internship'
                        ? 'bg-emerald-50/20 border-emerald-200/70 hover:border-emerald-400 hover:bg-emerald-50/40'
                        : cert.category === 'Virtual Experiences'
                        ? 'bg-indigo-50/20 border-indigo-200/70 hover:border-indigo-400 hover:bg-indigo-50/40'
                        : 'bg-slate-50/90 border-slate-200 hover:border-[#800020]/30 hover:bg-[#800020]/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center flex-shrink-0 shadow-xs">
                        <img 
                          src={cert.logo} 
                          alt={cert.issuer} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {cert.title}
                          </h4>
                        </div>
                        <p className="text-sm font-semibold text-slate-700 mt-0.5">{cert.issuer}</p>
                        <p className="text-xs text-slate-500">{cert.issued}</p>

                        {cert.skills && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {cert.skills.map((skill: string) => (
                              <span 
                                key={skill}
                                className="text-[11px] font-medium px-2 py-0.5 bg-white text-slate-700 rounded-md border border-slate-200/80 shadow-2xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {cert.credentialId && (
                          <p className="text-xs text-slate-500 mt-2 font-mono break-all bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/60 flex items-center justify-between">
                            <span>
                              <span className="font-sans font-medium text-slate-600">Credential ID: </span>
                              {cert.credentialId}
                            </span>
                          </p>
                        )}

                        <div className="mt-3.5 flex items-center justify-between">
                          {cert.category === 'Anthropic' ? (
                            <a 
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs bg-zinc-900 text-white hover:bg-black"
                            >
                              Show credential <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : cert.category === 'IBM' ? (
                            <a 
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                            >
                              Show credential <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : cert.category === 'Virtual Experiences' ? (
                            <a 
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                              Show credential <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <a 
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs bg-emerald-700 text-white hover:bg-emerald-800"
                            >
                              Show credential <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          <span className="text-[11px] font-medium text-slate-400">
                            {cert.category === 'Anthropic' 
                              ? 'Skilljar Verified' 
                              : cert.category === 'Internship' 
                              ? 'Coding Monks' 
                              : cert.category === 'Virtual Experiences'
                              ? 'Forage Verified'
                              : 'Cognitive Class'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                <span>
                  {certFilter === 'virtual-experiences'
                    ? 'Verified Virtual Experience Job Simulations — Forage'
                    : certFilter === 'ibm' 
                    ? 'Verified via IBM Cognitive Class' 
                    : `${allCertificates.length} Verified Professional Credentials`}
                </span>
                <button
                  onClick={() => setIsCertificationsOpen(false)}
                  className="font-semibold text-[#800020] hover:text-[#600018] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
