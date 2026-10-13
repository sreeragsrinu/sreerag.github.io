import { jsPDF } from 'jspdf';

export function generateResumePdf(): void {
  // If running in browser and the pre-generated static PDF is available, download it directly
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    try {
      const link = document.createElement('a');
      link.href = '/Sreerag_S_Analytics_Insights_CV.pdf';
      link.download = 'Sreerag_S_Analytics_Insights_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    } catch (e) {
      console.warn('Direct static PDF download failed, falling back to dynamic jsPDF', e);
    }
  }

  // Fallback single-page jsPDF matching user CV
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  let y = 14;

  const drawSectionHeader = (title: string) => {
    y += 2.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(title, margin, y);
    y += 1.3;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.35);
    doc.line(margin, y, pageWidth - margin, y);
    y += 3.8;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(20, 20, 20);
  doc.text('SREERAG S', pageWidth / 2, y, { align: 'center' });
  y += 5.2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(50, 50, 50);
  doc.text('ANALYTICS & INSIGHTS | BUSINESS INTELLIGENCE', pageWidth / 2, y, { align: 'center' });
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(60, 60, 60);
  const contactText1 = '8970445510 | sreeragsrinuu@gmail.com | LinkedIn: linkedin.com/in/sreerag-s-9b25162a7 | GitHub: github.com/sreeragsrinu';
  doc.text(contactText1, pageWidth / 2, y, { align: 'center' });
  y += 3.8;
  doc.text('Portfolio: sreeragportfolio.netlify.app', pageWidth / 2, y, { align: 'center' });
  y += 5;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(40, 40, 40);
  const summaryText = 'BCA Data Science graduate with hands-on, project-based experience in business intelligence, data analysis, and dashboard development using Power BI, Tableau, Excel, SQL, and Python. Skilled in data cleaning, exploratory analysis, KPI reporting, data transformation, and turning complex datasets into clear visual insights. Interested in building reliable, user-focused analytics solutions that support business decisions and stakeholder needs.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 3.6 + 2.5;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('TECHNICAL SKILLS');
  const skills = [
    { label: 'BI & Visualization: ', text: 'Power BI, Tableau, dashboard design, KPI reporting, data storytelling' },
    { label: 'Data Preparation: ', text: 'Power Query, Excel, data cleaning, transformation, validation, EDA' },
    { label: 'Querying & Programming: ', text: 'SQL, MariaDB, Python, Pandas, NumPy, Matplotlib' },
    { label: 'Analytics: ', text: 'Trend analysis, feature engineering, regression, classification, model evaluation' },
    { label: 'Tools: ', text: 'Git, GitHub, VS Code, Jupyter Notebook' }
  ];

  skills.forEach((s) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(20, 20, 20);
    doc.text(s.label, margin, y);
    const labelW = doc.getTextWidth(s.label);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    doc.text(s.text, margin + labelW, y);
    y += 3.6;
  });
  y += 2.5;

  // --- PROJECTS ---
  drawSectionHeader('PROJECTS');

  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Climate-Aware Disease Outbreak Prediction', margin, y);
  const p1W = doc.getTextWidth('Climate-Aware Disease Outbreak Prediction');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(' | Python, Pandas, scikit-learn, Tableau-style dashboard', margin + p1W, y);
  y += 3.6;

  const p1Bullets = [
    'Prepared and analyzed a dataset combining disease cases with rainfall, temperature, and humidity indicators.',
    'Built time-aware features and compared machine-learning approaches to explore relationships between climate patterns and disease risk.',
    'Developed a visual reporting concept to communicate trends and potential risk patterns clearly.'
  ];
  p1Bullets.forEach((b) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 45, 45);
    const lines = doc.splitTextToSize('• ' + b, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.4;
  });
  y += 1.5;

  // Project 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Customer Churn & Revenue Impact Analysis', margin, y);
  const p2W = doc.getTextWidth('Customer Churn & Revenue Impact Analysis');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(' | Python, machine learning, Power BI', margin + p2W, y);
  y += 3.6;

  const p2Bullets = [
    'Analyzed customer churn patterns and developed classification workflows to identify customers at risk of leaving.',
    'Explored customer value and revenue implications to support retention-focused business recommendations.',
    'Presented analytical findings through dashboard-oriented reporting and visual summaries.'
  ];
  p2Bullets.forEach((b) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 45, 45);
    const lines = doc.splitTextToSize('• ' + b, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.4;
  });
  y += 1.5;

  // Project 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Olist E-commerce Data Analysis', margin, y);
  const p3W = doc.getTextWidth('Olist E-commerce Data Analysis');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(' | SQL, MariaDB', margin + p3W, y);
  y += 3.6;

  const p3Bullets = [
    'Queried multi-table e-commerce data to examine orders, products, customers, and sales performance.',
    'Used SQL-based analysis to derive business metrics and organize findings for reporting.'
  ];
  p3Bullets.forEach((b) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 45, 45);
    const lines = doc.splitTextToSize('• ' + b, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.4;
  });
  y += 2.5;

  // --- VIRTUAL EXPERIENCE ---
  drawSectionHeader('VIRTUAL EXPERIENCE');

  // Exp 1: Deloitte
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Deloitte Australia — Data Analytics Job Simulation, Forage | 2026', margin, y);
  y += 3.6;
  const deloitteBullets = [
    'Worked through data validation and cleaning, Excel-based exploratory analysis, and business reporting tasks.',
    'Created an interactive Tableau dashboard to communicate analytical findings.'
  ];
  deloitteBullets.forEach((b) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 45, 45);
    const lines = doc.splitTextToSize('• ' + b, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.4;
  });
  y += 1.5;

  // Exp 2: Tata
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Tata iQ — GenAI-Powered Data Analytics Virtual Experience, Forage | 2026', margin, y);
  y += 3.6;
  const tataBullet = 'Identified customer delinquency risk indicators and outlined a no-code predictive framework and AI-supported collections strategy.';
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(45, 45, 45);
  const tataLines = doc.splitTextToSize('• ' + tataBullet, contentWidth - 2);
  doc.text(tataLines, margin + 2, y);
  y += tataLines.length * 3.4 + 2.5;

  // --- EDUCATION ---
  drawSectionHeader('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.3);
  doc.setTextColor(20, 20, 20);
  doc.text('Bachelor of Computer Applications (BCA), Data Science | Acharya Institute of Graduate Studies, Bengaluru', margin, y);
  y += 3.6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  doc.text('2023–2026', margin, y);
  y += 5.5;

  // --- CERTIFICATIONS ---
  drawSectionHeader('CERTIFICATIONS');
  const certs = [
    'IBM Data Science Professional Certificate',
    'Data Science Internship Certificate — Coding Monks Innovations',
    'Anthropic AI Fluency Framework & Foundations; AI Capabilities and Limitations; Introduction to Claude Cowork'
  ];
  certs.forEach((c) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(45, 45, 45);
    const lines = doc.splitTextToSize('• ' + c, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.4;
  });

  doc.save('Sreerag_S_Analytics_Insights_CV.pdf');
}
