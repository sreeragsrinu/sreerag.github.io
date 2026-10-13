import { useState } from 'react';
import { Download, ZoomIn, ZoomOut, FileText, ExternalLink, Eye, Layout } from 'lucide-react';
import { generateResumePdf } from '../utils/generateResumePdf';

export default function ResumeViewer() {
  const [scale, setScale] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'document' | 'pdf'>('document');

  const pdfUrl = '/Sreerag_S_Analytics_Insights_CV.pdf';

  const handleDownload = () => {
    generateResumePdf();
  };

  return (
    <div className="flex flex-col h-full bg-slate-100/90 text-slate-800">
      {/* Viewer Toolbar */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-md border-b border-slate-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#800020] flex items-center justify-center text-white shadow-xs">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide flex items-center gap-2">
              <span>Sreerag_S_Analytics_Insights_CV.pdf</span>
              <span className="text-[10px] bg-rose-900/40 text-rose-200 border border-rose-800/50 px-1.5 py-0.5 rounded font-mono font-medium">
                1 Page
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              Analytics & Insights | Business Intelligence
            </div>
          </div>
        </div>

        {/* Controls: Mode, Zoom & Download */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode('document')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                viewMode === 'document' ? 'bg-[#800020] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
              title="Responsive Document Layout"
            >
              <Layout className="w-3.5 h-3.5" />
              Document
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                viewMode === 'pdf' ? 'bg-[#800020] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
              title="Native PDF Embed"
            >
              <Eye className="w-3.5 h-3.5" />
              PDF View
            </button>
          </div>

          {/* Zoom controls (Document View only) */}
          {viewMode === 'document' && (
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-lg px-2 py-1 border border-slate-700 text-xs text-slate-300">
              <button 
                onClick={() => setScale((s) => Math.max(75, s - 10))} 
                className="p-0.5 hover:text-white transition-colors cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center font-mono text-[11px]">{scale}%</span>
              <button 
                onClick={() => setScale((s) => Math.min(130, s + 10))} 
                className="p-0.5 hover:text-white transition-colors cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Open in New Tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
            title="Open raw PDF file in new browser tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Open Tab</span>
          </a>

          {/* Download Action */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 bg-[#800020] hover:bg-[#6b001a] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-[#800020]/40 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Content Container */}
      {viewMode === 'pdf' ? (
        <div className="flex-1 w-full h-full bg-slate-900 p-2 sm:p-4">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full rounded-xl border border-slate-800 bg-white shadow-2xl"
            title="Sreerag S Analytics & Insights CV"
          />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center">
          {/* SINGLE PAGE CV */}
          <div 
            style={{ transform: `scale(${scale / 100})`, transformOrigin: 'top center' }}
            className="w-full max-w-[794px] bg-white rounded-md shadow-2xl border border-slate-300 p-8 sm:p-11 text-slate-900 font-sans transition-transform duration-150 relative select-text"
          >
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-wide uppercase mb-1">
                SREERAG S
              </h1>
              <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-widest mb-1.5">
                ANALYTICS & INSIGHTS | BUSINESS INTELLIGENCE
              </div>
              <div className="text-[11px] sm:text-xs text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>8970445510</span>
                <span>|</span>
                <a href="mailto:sreeragsrinuu@gmail.com" className="text-slate-900 hover:text-[#800020] hover:underline">
                  sreeragsrinuu@gmail.com
                </a>
                <span>|</span>
                <span>LinkedIn: </span>
                <a href="https://linkedin.com/in/sreerag-s-9b25162a7" target="_blank" rel="noreferrer" className="text-slate-900 hover:text-[#800020] hover:underline">
                  linkedin.com/in/sreerag-s-9b25162a7
                </a>
                <span>|</span>
                <span>GitHub: </span>
                <a href="https://github.com/sreeragsrinu" target="_blank" rel="noreferrer" className="text-slate-900 hover:text-[#800020] hover:underline">
                  github.com/sreeragsrinu
                </a>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-700 mt-1">
                <span>Portfolio: </span>
                <a href="https://sreeragportfolio.netlify.app" target="_blank" rel="noreferrer" className="text-slate-900 hover:text-[#800020] hover:underline">
                  sreeragportfolio.netlify.app
                </a>
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-slate-800 text-justify">
                BCA Data Science graduate with hands-on, project-based experience in business intelligence, data analysis, and dashboard development using Power BI, Tableau, Excel, SQL, and Python. Skilled in data cleaning, exploratory analysis, KPI reporting, data transformation, and turning complex datasets into clear visual insights. Interested in building reliable, user-focused analytics solutions that support business decisions and stakeholder needs.
              </p>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-1.5">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1 text-[11.5px] sm:text-[12px] text-slate-800">
                <div>
                  <span className="font-bold text-slate-950">BI & Visualization: </span>
                  Power BI, Tableau, dashboard design, KPI reporting, data storytelling
                </div>
                <div>
                  <span className="font-bold text-slate-950">Data Preparation: </span>
                  Power Query, Excel, data cleaning, transformation, validation, EDA
                </div>
                <div>
                  <span className="font-bold text-slate-950">Querying & Programming: </span>
                  SQL, MariaDB, Python, Pandas, NumPy, Matplotlib
                </div>
                <div>
                  <span className="font-bold text-slate-950">Analytics: </span>
                  Trend analysis, feature engineering, regression, classification, model evaluation
                </div>
                <div>
                  <span className="font-bold text-slate-950">Tools: </span>
                  Git, GitHub, VS Code, Jupyter Notebook
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-2">
                PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="mb-2.5">
                <div className="text-[11.5px] sm:text-[12px] text-slate-950 mb-0.5">
                  <span className="font-bold">Climate-Aware Disease Outbreak Prediction</span>
                  <span className="text-slate-600 font-normal"> | Python, Pandas, scikit-learn, Tableau-style dashboard</span>
                </div>
                <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                  <li>Prepared and analyzed a dataset combining disease cases with rainfall, temperature, and humidity indicators.</li>
                  <li>Built time-aware features and compared machine-learning approaches to explore relationships between climate patterns and disease risk.</li>
                  <li>Developed a visual reporting concept to communicate trends and potential risk patterns clearly.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mb-2.5">
                <div className="text-[11.5px] sm:text-[12px] text-slate-950 mb-0.5">
                  <span className="font-bold">Customer Churn & Revenue Impact Analysis</span>
                  <span className="text-slate-600 font-normal"> | Python, machine learning, Power BI</span>
                </div>
                <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                  <li>Analyzed customer churn patterns and developed classification workflows to identify customers at risk of leaving.</li>
                  <li>Explored customer value and revenue implications to support retention-focused business recommendations.</li>
                  <li>Presented analytical findings through dashboard-oriented reporting and visual summaries.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="text-[11.5px] sm:text-[12px] text-slate-950 mb-0.5">
                  <span className="font-bold">Olist E-commerce Data Analysis</span>
                  <span className="text-slate-600 font-normal"> | SQL, MariaDB</span>
                </div>
                <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                  <li>Queried multi-table e-commerce data to examine orders, products, customers, and sales performance.</li>
                  <li>Used SQL-based analysis to derive business metrics and organize findings for reporting.</li>
                </ul>
              </div>
            </div>

            {/* VIRTUAL EXPERIENCE */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-2">
                VIRTUAL EXPERIENCE
              </h2>

              <div className="mb-2.5">
                <div className="text-[11.5px] sm:text-[12px] font-bold text-slate-950 mb-0.5">
                  Deloitte Australia — Data Analytics Job Simulation, Forage | 2026
                </div>
                <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                  <li>Worked through data validation and cleaning, Excel-based exploratory analysis, and business reporting tasks.</li>
                  <li>Created an interactive Tableau dashboard to communicate analytical findings.</li>
                </ul>
              </div>

              <div>
                <div className="text-[11.5px] sm:text-[12px] font-bold text-slate-950 mb-0.5">
                  Tata iQ — GenAI-Powered Data Analytics Virtual Experience, Forage | 2026
                </div>
                <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                  <li>Identified customer delinquency risk indicators and outlined a no-code predictive framework and AI-supported collections strategy.</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-1.5">
                EDUCATION
              </h2>
              <div className="text-[11.5px] sm:text-[12px] text-slate-950 font-bold">
                Bachelor of Computer Applications (BCA), Data Science | Acharya Institute of Graduate Studies, Bengaluru
              </div>
              <div className="text-[11px] sm:text-[11.5px] text-slate-600">
                2023–2026
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-950 uppercase tracking-wider pb-0.5 border-b border-slate-300 mb-1.5">
                CERTIFICATIONS
              </h2>
              <ul className="space-y-0.5 text-[11px] sm:text-[11.5px] text-slate-800 pl-4 list-disc">
                <li>IBM Data Science Professional Certificate</li>
                <li>Data Science Internship Certificate — Coding Monks Innovations</li>
                <li>Anthropic AI Fluency Framework & Foundations; AI Capabilities and Limitations; Introduction to Claude Cowork</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
