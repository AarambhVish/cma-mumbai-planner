const storeKey = "cma-mumbai-planner-v1";
const dummyReportTag = "dummy-report-data";
const changedTTSource = "changed-tt";
const googleSheetSource = {
  id: "1QC7jdICqY237tKxiOLWJtDJ5Huaa4HSA",
  sheet: "Batch Wise",
  gvizUrl: "https://docs.google.com/spreadsheets/d/1QC7jdICqY237tKxiOLWJtDJ5Huaa4HSA/gviz/tq?sheet=Batch%20Wise",
  importSource: "google-sheet"
};
const fixedCloudSyncUrl = "https://script.google.com/macros/s/AKfycbw1FsCcB8Dd3ydpazVSCOZx0qUwrHanZdP4woDRc4z4VVFp1dagHPFetp_YKU2a7OdirA/exec";
const defaultTimeSlots = [
  { start: "07:00", end: "10:00" },
  { start: "12:00", end: "20:00" },
  { start: "14:00", end: "20:00" }
];
const batchPalettes = {
  Foundation: ["#d8eef3", "#f7d9df"],
  Inter: ["#e2efd8", "#f8e1c5", "#dce7f8", "#fff0b8"],
  Final: ["#eadff5", "#d9f0e8", "#eee3d6", "#e1e4f2"],
  "CMA USA Part 1": ["#d8f3e8", "#e8f7d2", "#d7f0ff"],
  "CMA USA Part 2": ["#fff0c8", "#ffe0df", "#eadfff"]
};
const batchPalette = Object.values(batchPalettes).flat();
const professorPalette = ["#cfe8ff", "#ffd6d6", "#d9f7d8", "#ffe6a8", "#e8d7ff", "#c8f3ef", "#f5d0e2", "#dfe7ff", "#f1e0c5", "#d7f0bf", "#ffc9a9", "#d4d4ff", "#bfe9df", "#f7cdd2", "#cde4b8"];

const cmaPapers = {
  Foundation: {
    "Foundation": [
      "Fundamentals of Business Laws",
      "Business Communication",
      "Fundamentals of Financial Accounting",
      "Fundamentals of Business Maths & Stats",
      "Fundamentals of Business Economics",
      "Fundamentals of Business Management"
    ]
  },
  Inter: {
    "Group 1": [
      "Business Laws and Ethics",
      "Financial Accounting",
      "Direct and Indirect Taxation",
      "Cost Accounting"
    ],
    "Group 2": [
      "Operations Management",
      "Strategic Management",
      "Corporate Accounting",
      "Auditing",
      "Business Data Analytics",
      "Management Accounting"
    ]
  },
  Final: {
    "Group 3": [
      "Corporate and Economic Laws",
      "Strategic Financial Management",
      "Direct Tax Laws & International Taxation",
      "Strategic Cost Management (SCM)"
    ],
    "Group 4": [
      "Cost and Management Audit",
      "Corporate Financial Reporting",
      "Indirect Tax Laws and Practice",
      "Strategic Performance Mgmt & Business Valuation"
    ]
  },
  "CMA USA Part 1": {
    "Part 1": [
      "CMA USA Part 1 - Section A: External Financial Reporting Decisions",
      "CMA USA Part 1 - Section B: Planning, Budgeting, and Forecasting",
      "CMA USA Part 1 - Section C: Performance Management",
      "CMA USA Part 1 - Section D: Cost Management",
      "CMA USA Part 1 - Section E: Internal Controls",
      "CMA USA Part 1 - Section F: Technology and Analytics"
    ]
  },
  "CMA USA Part 2": {
    "Part 2": [
      "CMA USA Part 2 - Section A: Financial Statement Analysis",
      "CMA USA Part 2 - Section B: Corporate Finance",
      "CMA USA Part 2 - Section C: Decision Analysis",
      "CMA USA Part 2 - Section D: Risk Management",
      "CMA USA Part 2 - Section E: Investment Decisions",
      "CMA USA Part 2 - Section F: Professional Ethics"
    ]
  }
};

const programs = {
  "CMA India": ["Foundation", "Inter", "Final"],
  "CMA USA": ["CMA USA Part 1", "CMA USA Part 2"]
};

const paperNumbers = {
  "Fundamentals of Business Laws": 1,
  "Business Communication": 1,
  "Fundamentals of Financial Accounting": 2,
  "Fundamentals of Business Maths & Stats": 3,
  "Fundamentals of Business Economics": 4,
  "Fundamentals of Business Management": 4,
  "Business Laws and Ethics": 5,
  "Financial Accounting": 6,
  "Direct and Indirect Taxation": 7,
  "Cost Accounting": 8,
  "Operations Management": 9,
  "Strategic Management": 9,
  "Corporate Accounting": 10,
  "Auditing": 10,
  "Business Data Analytics": 11,
  "Management Accounting": 12,
  "Corporate and Economic Laws": 13,
  "Strategic Financial Management": 14,
  "Direct Tax Laws & International Taxation": 15,
  "Strategic Cost Management (SCM)": 16,
  "Cost and Management Audit": 17,
  "Corporate Financial Reporting": 18,
  "Indirect Tax Laws and Practice": 19,
  "Strategic Performance Mgmt & Business Valuation": 20,
  "CMA USA Part 1 - Section A: External Financial Reporting Decisions": 101,
  "CMA USA Part 1 - Section B: Planning, Budgeting, and Forecasting": 102,
  "CMA USA Part 1 - Section C: Performance Management": 103,
  "CMA USA Part 1 - Section D: Cost Management": 104,
  "CMA USA Part 1 - Section E: Internal Controls": 105,
  "CMA USA Part 1 - Section F: Technology and Analytics": 106,
  "CMA USA Part 2 - Section A: Financial Statement Analysis": 201,
  "CMA USA Part 2 - Section B: Corporate Finance": 202,
  "CMA USA Part 2 - Section C: Decision Analysis": 203,
  "CMA USA Part 2 - Section D: Risk Management": 204,
  "CMA USA Part 2 - Section E: Investment Decisions": 205,
  "CMA USA Part 2 - Section F: Professional Ethics": 206
};

const paperShortNames = {
  "Fundamentals of Business Laws": "Bus Laws",
  "Business Communication": "Bus Comm",
  "Fundamentals of Financial Accounting": "Fin Accounting",
  "Fundamentals of Business Maths & Stats": "Maths & Stats",
  "Fundamentals of Business Economics": "Economics",
  "Fundamentals of Business Management": "Management",
  "Business Laws and Ethics": "Laws & Ethics",
  "Financial Accounting": "Fin Accounting",
  "Direct and Indirect Taxation": "Taxation",
  "Cost Accounting": "Cost Accounting",
  "Operations Management": "OM",
  "Strategic Management": "SM",
  "Corporate Accounting": "Corp Accounting",
  "Auditing": "Auditing",
  "Business Data Analytics": "BDA",
  "Management Accounting": "Mgmt Accounting",
  "Corporate and Economic Laws": "Corp & Eco Laws",
  "Strategic Financial Management": "SFM",
  "Direct Tax Laws & International Taxation": "DT & Intl Tax",
  "Strategic Cost Management (SCM)": "SCM",
  "Cost and Management Audit": "CMAudit",
  "Corporate Financial Reporting": "CFR",
  "Indirect Tax Laws and Practice": "IDT",
  "Strategic Performance Mgmt & Business Valuation": "SPM & BV",
  "CMA USA Part 1 - Section A: External Financial Reporting Decisions": "P1 Sec A",
  "CMA USA Part 1 - Section B: Planning, Budgeting, and Forecasting": "P1 Sec B",
  "CMA USA Part 1 - Section C: Performance Management": "P1 Sec C",
  "CMA USA Part 1 - Section D: Cost Management": "P1 Sec D",
  "CMA USA Part 1 - Section E: Internal Controls": "P1 Sec E",
  "CMA USA Part 1 - Section F: Technology and Analytics": "P1 Sec F",
  "CMA USA Part 2 - Section A: Financial Statement Analysis": "P2 Sec A",
  "CMA USA Part 2 - Section B: Corporate Finance": "P2 Sec B",
  "CMA USA Part 2 - Section C: Decision Analysis": "P2 Sec C",
  "CMA USA Part 2 - Section D: Risk Management": "P2 Sec D",
  "CMA USA Part 2 - Section E: Investment Decisions": "P2 Sec E",
  "CMA USA Part 2 - Section F: Professional Ethics": "P2 Sec F"
};

const realProfessors = [
  { id: "radhika-miss", name: "Radhika Miss", speciality: "Law and Strategic Management", home: "Online", levels: ["Foundation", "Inter"], papers: ["Fundamentals of Business Laws", "Business Laws and Ethics", "Strategic Management"] },
  { id: "rahul-b-sir", name: "Rahul B. Sir", speciality: "Communication and Strategic Management", home: "Online", levels: ["Foundation", "Inter"], papers: ["Business Communication", "Strategic Management"] },
  { id: "nitin-sir", name: "Nitin Sir", speciality: "Accounting", home: "Online", levels: ["Foundation", "Inter", "Final"], papers: ["Fundamentals of Financial Accounting", "Financial Accounting", "Management Accounting", "Cost and Management Audit"] },
  { id: "sumit-sir", name: "Sumit Sir", speciality: "Maths, Operations, Valuation", home: "Online", levels: ["Foundation", "Inter", "Final"], papers: ["Fundamentals of Business Maths & Stats", "Operations Management", "Strategic Performance Mgmt & Business Valuation"] },
  { id: "ravi-patel-sir", name: "Ravi Patel Sir", speciality: "Maths and Stats", home: "Online", levels: ["Foundation"], papers: ["Fundamentals of Business Maths & Stats"] },
  { id: "manisha-miss", name: "Manisha Miss", speciality: "Maths and Stats", home: "Online", levels: ["Foundation"], papers: ["Fundamentals of Business Maths & Stats"] },
  { id: "deepak-thakur-sir", name: "Deepak Thakur Sir", speciality: "Economics", home: "Online", levels: ["Foundation"], papers: ["Fundamentals of Business Economics"] },
  { id: "jigar-joshi-sir", name: "Jigar Joshi Sir", speciality: "Management and Analytics", home: "Online", levels: ["Foundation", "Inter"], papers: ["Fundamentals of Business Management", "Business Data Analytics"] },
  { id: "sandesh-g-sir", name: "Sandesh G. Sir", speciality: "Accounting and Finance", home: "Online", levels: ["Inter", "Final"], papers: ["Financial Accounting", "Corporate Accounting", "Strategic Financial Management", "Corporate Financial Reporting"] },
  { id: "gaorav-sir", name: "Gaorav Sir", speciality: "Tax and Audit", home: "Online", levels: ["Inter", "Final"], papers: ["Direct and Indirect Taxation", "Auditing", "Direct Tax Laws & International Taxation", "Cost and Management Audit", "Indirect Tax Laws and Practice"] },
  { id: "jeet-shah-sir", name: "Jeet Shah Sir", speciality: "Taxation", home: "Online", levels: ["Inter", "Final"], papers: ["Direct and Indirect Taxation", "Indirect Tax Laws and Practice"] },
  { id: "dilip-sir", name: "Dilip Sir", speciality: "Costing and Finance", home: "Online", levels: ["Inter", "Final"], papers: ["Cost Accounting", "Strategic Financial Management", "Strategic Cost Management (SCM)", "Strategic Performance Mgmt & Business Valuation"] },
  { id: "jignesh-sir", name: "Jignesh Sir", speciality: "Management Accounting", home: "Online", levels: ["Inter"], papers: ["Management Accounting"] },
  { id: "chirag-jain-sir", name: "Chirag Jain Sir", speciality: "Corporate Laws", home: "Online", levels: ["Final"], papers: ["Corporate and Economic Laws"] },
  { id: "swapnil-sir", name: "Swapnil Sir", speciality: "Direct Tax", home: "Online", levels: ["Final"], papers: ["Direct Tax Laws & International Taxation"] }
];
const indiaProfessorMaster = new Map(realProfessors.map((professor) => [professor.id, professor]));

function topicRows(paperNo, paperName, rows) {
  return rows.map((row, index) => {
    const chapterName = Array.isArray(row) ? row[0] : row;
    const standardHours = Array.isArray(row) ? row[1] : 0;
    return {
    id: `p${paperNo}-${index + 1}`,
    paperNo,
    paperName,
    chapterName,
    standardHours
    };
  });
}

function syllabusTopics(paperNo, paperName, sections) {
  return topicRows(paperNo, paperName, sections.flatMap((section) =>
    section.topics.map((topic) => `${section.code} - ${section.name}: ${topic}`)
  ));
}

const topicMaster = [
  ...topicRows(1, "Fundamentals of Business Laws and Business Communication (FBLC)", [
    ["Law: Introduction to Law", 4],
    ["Law: Indian Contracts Act, 1872", 21],
    ["Law: Sale of Goods Act, 1930", 8],
    ["Law: Negotiable Instruments Act, 1881", 5],
    ["Business Communication", 12]
  ]),
  ...topicRows(2, "Fundamentals of Financial and Cost Accounting (FFCA)", [
    ["Accounts: Accounting Principles, concepts", 3],
    ["Accounts: Capital and revenue transaction", 2],
    ["Accounts: Contingent Assets, Provision & Liabilities", 2],
    ["Accounts: Accounting process - Journal Theory", 4],
    ["Accounts: Accounting process - Ledger", 2],
    ["Accounts: Accounting process - Trial Balance / Adjusted Trial Balance", 3],
    ["Accounts: Accounting process - Cash Book", 2],
    ["Accounts: Accounting process - Subsidiary Book", 2],
    ["Accounts: Accounting process - Opening/Closing Entries", 1],
    ["Accounts: Journal Entries - Basic", 5],
    ["Accounts: Depreciation (SLM/WDV/Prov of Dep)", 10],
    ["Accounts: Rectification of errors", 12],
    ["Accounts: Bank reconciliation statements", 9],
    ["Accounts: Bill of exchange", 9],
    ["Accounts: Consignment", 10],
    ["Accounts: Joint Venture", 7],
    ["Accounts: Final Account (Profit making)", 10],
    ["Accounts: Accounting Treatment of Bad Debts and RDD", 2],
    ["Accounts: NPO (Not for Profit)", 12],
    ["Costing: Cost Sheet", 10],
    ["Costing: Theory", 5]
  ]),
  ...topicRows(3, "Fundamentals of Business Mathematics and Statistics (FBMS)", [
    ["Mathematics: Ratio and Proportion", 6],
    ["Mathematics: Indices", 9],
    ["Mathematics: Logarithms", 10],
    ["Mathematics: Progressions", 10],
    ["Mathematics: Mathematics of Finance / Time value of Money", 9],
    ["Mathematics: Quadratic Equations", 5],
    ["Mathematics: Permutations and Combinations", 14],
    ["Mathematics: Set Theory", 5],
    ["Mathematics: Variation", 2],
    ["Mathematics: Distance, Speed, Time", 3],
    ["Mathematics: Calculas (Derivatives)", 10],
    ["Statistics: Introduction to Statistics", 4],
    ["Statistics: Measures of Central tendency", 8],
    ["Statistics: Measures of Dispersion and Skewness", 8],
    ["Statistics: Correlation and Regression", 10],
    ["Statistics: Probability", 7],
    ["Statistics: Index Number", 3],
    ["Statistics: Time Series", 3]
  ]),
  ...topicRows(4, "Fundamentals of Business Economics and Management (FBEM)", [
    ["Economics: Basic concepts of economics", 6],
    ["Economics: Theory of demand and supply", 10],
    ["Economics: Theory of production", 6],
    ["Economics: Theory of cost", 6],
    ["Economics: Market", 6],
    ["Economics: Money", 4],
    ["Economics: Bank", 4],
    ["Economics: Money Market", 3],
    ["Economics: PESTEL Analyses", 4],
    ["Economics: Emerging Dimensions of VUCAFU", 4],
    ["Management: Introduction to Management", 8],
    ["Management: Stewardship Theory and Agency of Management", 4],
    ["Management: Planning, Organising, Staffing, And Leading", 6],
    ["Management: Communication, Coordination, Collaboration, Monitoring, And Control", 10],
    ["Management: Organisation Structure, Responsibility, Accountability, And Delegation Of Authority", 6],
    ["Management: Leadership and Motivation Concepts and Theory", 6],
    ["Management: Decision Making Types and Process", 2]
  ]),
  ...topicRows(5, "Business Laws and Ethics (BLE)", [
    ["Introduction to Law", 10],
    ["Laws of Contract (Advanced Level)", 14],
    ["Laws relating to Sale of Goods (Advanced Level)", 3],
    ["Negotiable Instruments Act (Advanced Level)", 5],
    ["Indian Partnership Act, 1932", 4],
    ["Limited Liability Partnership Act, 2008", 6],
    ["Factories Act, 1948", 5],
    ["Payment of Gratuity Act, 1972", 4],
    ["Employees Provident Fund and Misc. Provisions Act, 1952", 4],
    ["Employees State Insurance Act, 1948", 3],
    ["Code on Wages", 6],
    ["Companies Act, 2013", 40],
    ["Business Ethics", 5]
  ]),
  ...topicRows(6, "Financial Accounting (FA)", [
    ["Financial Statement from Incomplete Records / Single Entry", 12],
    ["Insurance Claims - Loss of Stock and Loss of Profit", 12],
    ["Investment Accounts", 3],
    ["Consignment Accounting", 10],
    ["Accounting for Depreciation", 6],
    ["Financial Statements of Not for Profit Organisations", 12],
    ["Financial Statements of Profit Oriented Organisations", 3],
    ["Bills of Exchange", 3],
    ["Hire Purchase and Instalment Purchase System", 9],
    ["Departmental Accounts", 5],
    ["Branch Accounts", 15],
    ["Capital and Revenue Transactions", 3],
    ["Rectification of Errors", 3],
    ["Dissolution of a Partnership Firm", 3],
    ["Piecemeal Distribution", 4],
    ["Admission of Partner", 3],
    ["Retirement of Partners", 5],
    ["Death of Partner", 2],
    ["Amalgamation of Firms and Conversion to Company", 3],
    ["AS Intro", 2],
    ["AS 1", 3],
    ["AS 10", 4],
    ["AS 11", 6],
    ["AS 12", 5],
    ["AS 16", 6],
    ["AS 19", 6],
    ["AS 22", 5]
  ]),
  ...topicRows(7, "Direct and Indirect Taxation (DITX)", [
    ["7A Direct Tax: Introduction, Basics", 3],
    ["7A Direct Tax: Residential Status and Scope of Income", 5],
    ["7A Direct Tax: Income under Head Salaries", 16],
    ["7A Direct Tax: Income under Head House Property", 10],
    ["7A Direct Tax: Income under Head Profits and Gains of Business or Profession", 10],
    ["7A Direct Tax: Income under Head Capital Gains", 16],
    ["7A Direct Tax: Income under Head Income from Other Sources", 5],
    ["7A Direct Tax: Income of Other Persons Included in Assessee's Total Income (Clubbing of Income)", 5],
    ["7A Direct Tax: Set Off and Carry Forward of Losses", 4],
    ["7A Direct Tax: Deductions in Computing Total Income", 10],
    ["7A Direct Tax: Total Income", 3],
    ["7A Direct Tax: TDS and TCS", 3],
    ["7A Direct Tax: Return and PAN", 2],
    ["7A Direct Tax: Assessment Procedure", 4],
    ["7A Direct Tax: Agricultural Income", 3],
    ["7A Direct Tax: Theory", 2],
    ["7B Indirect Tax: Introduction and Basics", 3],
    ["7B Indirect Tax: Supply", 4],
    ["7B Indirect Tax: Exemptions", 3],
    ["7B Indirect Tax: Levy and Collection of Tax (Including Composition Levy, SEZ)", 3],
    ["7B Indirect Tax: Time of Supply", 6],
    ["7B Indirect Tax: Value of Supply (Excluding Valuation Rules)", 6],
    ["7B Indirect Tax: Place of Supply", 6],
    ["7B Indirect Tax: Input Tax Credit (ITC)", 10],
    ["7B Indirect Tax: Registration under GST", 5],
    ["7B Indirect Tax: Tax Invoice, Credit and Debit Notes and Other Documents under GST", 2],
    ["7B Indirect Tax: Accounts and Records under GST", 1],
    ["7B Indirect Tax: Payment of Tax", 1],
    ["7B Indirect Tax: TDS and TCS under GST", 2],
    ["7B Indirect Tax: Return under GST", 4],
    ["7B Indirect Tax: Audit under GST", 1],
    ["7B Indirect Tax: E-Way Bill under GST", 1],
    ["7B Indirect Tax: Misc GST", 1],
    ["7B Indirect Tax: Customs Laws", 10]
  ]),
  ...topicRows(8, "Cost Accounting (CA)", [
    ["Cost Sheet", 12],
    ["Material Cost", 15],
    ["Employee Costs / Labour Costing", 15],
    ["Direct Expenses", 1],
    ["Overheads", 15],
    ["Integral and Non-Integrated Accounts", 10],
    ["Reconciliation of Costing Records with Financial", 5],
    ["Contract Costing", 10],
    ["Process Costing", 10],
    ["JIT", 5],
    ["Operating or Service Costing", 8],
    ["Job and Batch Costing", 2],
    ["Marginal Costing - Group 1", 10],
    ["Standard Costing - Group 1", 15],
    ["Budget and Budgetary Control - Group 1", 10],
    ["Cost Accounting Standard", 2]
  ]),
  ...topicRows(9, "Operations Management and Strategic Management (OMSM)", [
    ["Strategic Management: Introduction", 10],
    ["Strategic Analysis and Strategic Planning", 5],
    ["Formulation and Implementation of Strategy", 6],
    ["Forecasting", 5],
    ["Facility Planning, Location Planning, Time Motion Study", 5],
    ["Capacity Planning, Productivity Measurement, Aggregate Planning", 5],
    ["Assignment Problem", 6],
    ["Travelling Salesman Problem", 6],
    ["Transportation Problem", 5],
    ["Linear Programming Problem", 5],
    ["Simulation", 3],
    ["Learning Curve", 5],
    ["Queuing Theory", 5],
    ["Maintenance", 5],
    ["Project Management", 10]
  ]),
  ...topicRows(10, "Corporate Accounting and Auditing (CAA)", [
    ["10 Company Accounts: Issue of Shares", 15],
    ["10 Company Accounts: Redemption of Preference Shares", 8],
    ["10 Company Accounts: Buy Back of Shares", 3],
    ["10 Company Accounts: Underwriting of Shares and Debentures", 8],
    ["10 Company Accounts: Issue and Redemption of Debentures", 10],
    ["10 Company Accounts: Accounts of Banking Company", 12],
    ["10 Company Accounts: Accounts of Insurance Company", 5],
    ["10 Company Accounts: Presentation of Financial Statement (As Per Schedule III)", 12],
    ["10 Company Accounts: Accounts of Electricity Company", 5],
    ["10 Company Accounts: Cash Flow Statement", 8],
    ["10 Company Accounts: Accounting Standards", 16],
    ["10 Auditing: Auditing Concept", 1],
    ["10 Auditing: Audit Strategy, Audit Planning and Audit Program", 2],
    ["10 Auditing: Audit Documentation and Audit Evidence", 3],
    ["10 Auditing: Internal Control", 2],
    ["10 Auditing: Internal Audit", 2],
    ["10 Auditing: External Audit", 2],
    ["10 Auditing: Final Audit", 2],
    ["10 Auditing: Statutory Audit and Internal Auditing", 4],
    ["10 Auditing: Audit Sampling", 1],
    ["10 Auditing: Analytical Procedure", 1],
    ["10 Auditing: Audit of Items of Financial Statements", 2],
    ["10 Auditing: The Company Audit", 3],
    ["10 Auditing: Audit Banks", 4],
    ["10 Auditing: Audit of Different Types of Entities", 3]
  ]),
  ...topicRows(11, "Financial Management and Business Data Analytics (FMDA)", [
    ["Tools for Financial Analysis and Planning (Ratio Analysis)", 15],
    ["Funds Flow Statement", 8],
    ["Cash Flow Statement", 12],
    ["Working Capital Management", 12],
    ["Management of Receivables", 3],
    ["Cash Management", 4],
    ["Cost of Capital", 12],
    ["Capital Structure", 6],
    ["Dividend Policy", 10],
    ["Leverages Analysis", 6],
    ["Capital Budgeting: Investment Decision", 15],
    ["Data Analytics", 12]
  ]),
  ...topicRows(12, "Management Accounting (MA)", [
    ["Activity Based Costing", 10],
    ["Budgeting and Budgetary Control", 12],
    ["Marginal Costing and Decision Making", 11],
    ["Transfer Pricing", 12],
    ["Standard Costing and Variance Analysis", 10],
    ["Divisional Performance Measurement", 10],
    ["Learning Curve", 5],
    ["Responsibility Accounting", 8],
    ["Decision Theory", 5]
  ]),
  ...topicRows(13, "Corporate and Economic Laws (CEL)", [
    ["Law: Co formation and Conversion", 10],
    ["Law: Board of Directors and KMP", 14],
    ["Law: Board Meetings and Procedures", 10],
    ["Law: Dividends", 5],
    ["Law: Accounts and Audit", 12],
    ["Law: Investment and Loans", 5],
    ["Law: Inspection, Investigation and Inquiry", 5],
    ["Law: Prevention of Oppression and Mismanagement", 5],
    ["Law: Corporate winding up", 7],
    ["Law: SEBI laws", 10],
    ["Law: Competition Act", 7],
    ["Law: Banking Sector Laws", 9],
    ["Law: Insurance Sector Laws", 6],
    ["Law: Corporate governance", 3],
    ["Law: Social, environmental and economic responsibilities of Business", 3],
    ["Law: Insolvency and Bankruptcy Code", 8],
    ["Law: Foreign Exchange Management Act, 1999", 9],
    ["Law: Prevention of Money Laundering", 5],
    ["Law: Cyber laws", 8],
    ["Law: MSME laws", 6]
  ]),
  ...topicRows(14, "Strategic Financial Management (SFM)", [
    ["SFM: Capital Budgeting - Techniques", 14],
    ["SFM: Capital Budgeting - Risks & Uncertainty", 16],
    ["SFM: Leasing", 10],
    ["SFM: Bond Valuation", 8],
    ["SFM: Mutual Funds", 16],
    ["SFM: Security Analysis & Portfolio Management", 22],
    ["SFM: Derivatives", 28],
    ["SFM: Foreign Exchanges Risk Management", 25],
    ["SFM: SFM Theory", 4]
  ]),
  ...topicRows(15, "Direct Tax Laws and International Taxation (DIT)", [
    ["DT: Transfer Pricing", 31],
    ["DT: Double Taxation Avoidance Agreement (DTAA)", 20],
    ["DT: Assessment of Various Entities", 40],
    ["DT: Non-Resident Taxation", 4],
    ["DT: Return of Income", 4],
    ["DT: Assessment Procedure", 9],
    ["DT: Survey, Search and Seizure", 5],
    ["DT: Appeals, Rectification, Revision, Settlement Commission", 11],
    ["DT: Advance Ruling", 2],
    ["DT: Interest", 8],
    ["DT: Collection, Recovery and Refund", 1],
    ["DT: Penalties and Prosecution", 1],
    ["DT: Business Restructuring and Reorganisation", 9],
    ["DT: Different Aspects of Tax Planning", 10],
    ["DT: Income Tax Authorities", 1],
    ["DT: Liability in Special Cases", 1],
    ["DT: Income Computation & Disclosure Standards", 5],
    ["DT: Black Money & Imposition of Tax Act", 1],
    ["DT: Case Studies", 10],
    ["DT: Tonnage Taxation", 3]
  ]),
  ...topicRows(16, "Strategic Cost Management (SCM)", [
    ["SCM: Target Costing", 10],
    ["SCM: Activity Based Costing", 10],
    ["SCM: Marginal Costing", 20],
    ["SCM: Transfer Pricing", 10],
    ["SCM: Throughput Costing", 6],
    ["SCM: Standard Costing", 20],
    ["SCM: Uniform Costing", 4],
    ["SCM: Life Cycle Costing", 3],
    ["SCM: Just in Time (JIT)", 3],
    ["SCM: Assignment Problem", 8],
    ["SCM: Transportation problem", 8],
    ["SCM: Linear Programming Problem", 5],
    ["SCM: Simulation", 6],
    ["SCM: Learning curve", 7],
    ["SCM: Project management", 12]
  ]),
  ...topicRows(17, "Cost and Management Audit (CMAD)", [
    ["Cost Audit: Basics Of Cost And Management Audit", 1],
    ["Cost Audit: Companies (Cost Records And Audit) Rules, 2014", 2],
    ["Cost Audit: Cost Audit Documentation And Audit Process", 1],
    ["Cost Audit: Cost Auditor - Professional Ethics, Responsibilities And Punishment", 2],
    ["Cost Audit: Overview Of Cost Accounting Standards And GACap", 4],
    ["Cost Audit: Cost Audit Programme", 2],
    ["Cost Audit: Preparation And Filing Of Cost Audit Report", 4],
    ["Cost Audit: Management Reporting Issues Under Cost Audit", 1],
    ["Cost Audit: Basics Of Management Audit", 1],
    ["Cost Audit: Management Audit In Different Functions", 2],
    ["Cost Audit: Evaluation Of Corporate Image", 1],
    ["Cost Audit: Internal Control, Internal Audit Under The Companies Act, 2013 And Operational Audit", 8],
    ["Cost Audit: Audit Of Service Organisations", 6],
    ["Cost Audit: Analysis Of Managerial Performance", 8]
  ]),
  ...topicRows(18, "Corporate Financial Reporting (CFR)", [
    ["CFR: Accounting Standards", 25],
    ["CFR: Accounting Of Business Combinations & Restructuring", 25],
    ["CFR: Consolidated Financial Statements (Holding Company)", 25],
    ["CFR: Recent Trends In Financial Reporting", 4],
    ["CFR: Valuation, Accounting And Reporting Of Financial Instruments And Others", 20],
    ["CFR: Share Based Payments", 8],
    ["CFR: Reporting Through XBRL", 1],
    ["CFR: Government Accounting", 2]
  ]),
  ...topicRows(19, "Indirect Tax Laws and Practice (ITLP)", [
    ["Indirect Tax: Introduction & Basics", 5],
    ["Indirect Tax: Supply", 13],
    ["Indirect Tax: Classification of Goods and Services under GST - Reading the Rate Schedule", 4],
    ["Indirect Tax: Levy and Collection of Tax (including composition levy, SEZ etc)", 5],
    ["Indirect Tax: Time of Supply", 13],
    ["Indirect Tax: Value of Supply", 18],
    ["Indirect Tax: Place of Supply", 9],
    ["Indirect Tax: Input Tax Credit (ITC)", 15],
    ["Indirect Tax: Registration under GST", 7],
    ["Indirect Tax: Tax Invoice, Credit and Debit Notes and Other Documents under GST", 3],
    ["Indirect Tax: Accounts and Records under GST", 2],
    ["Indirect Tax: Payment of Tax", 2],
    ["Indirect Tax: TDS & TCS under GST", 3],
    ["Indirect Tax: Returns under GST", 2],
    ["Indirect Tax: Assessment, Inspection, Search & Seizure", 10],
    ["Indirect Tax: Audit under GST", 2],
    ["Indirect Tax: Advance Concepts under GST", 15],
    ["Indirect Tax: Misc Topics of GST", 5],
    ["Indirect Tax: Customs Law", 12],
    ["Indirect Tax: Foreign Trade Policy", 5]
  ]),
  ...topicRows(20, "Strategic Performance Management and Business Valuation / Electives", [
    ["PMBV: Conceptual Framework Of Performance Management", 1],
    ["PMBV: Performance Evaluation & Improvement Tools", 12],
    ["PMBV: Economic Efficiency Of The Firm", 20],
    ["PMBV: Enterprise Risk Management", 8],
    ["PMBV: Business Valuation Basics", 1],
    ["PMBV: Valuation Models", 8],
    ["PMBV: Valuation Of Assets And Liabilities", 14],
    ["PMBV: Valuation In Mergers And Acquisitions", 16]
  ]),
  ...topicRows(101, "CMA USA Part 1 - Section A", [["External Financial Reporting Decisions", 0]]),
  ...topicRows(102, "CMA USA Part 1 - Section B", [["Planning, Budgeting, and Forecasting", 0]]),
  ...topicRows(103, "CMA USA Part 1 - Section C", [["Performance Management", 0]]),
  ...topicRows(104, "CMA USA Part 1 - Section D", [["Cost Management", 0]]),
  ...topicRows(105, "CMA USA Part 1 - Section E", [["Internal Controls", 0]]),
  ...topicRows(106, "CMA USA Part 1 - Section F", [["Technology and Analytics", 0]]),
  ...topicRows(201, "CMA USA Part 2 - Section A", [["Financial Statement Analysis", 0]]),
  ...topicRows(202, "CMA USA Part 2 - Section B", [["Corporate Finance", 0]]),
  ...topicRows(203, "CMA USA Part 2 - Section C", [["Decision Analysis", 0]]),
  ...topicRows(204, "CMA USA Part 2 - Section D", [["Risk Management", 0]]),
  ...topicRows(205, "CMA USA Part 2 - Section E", [["Investment Decisions", 0]]),
  ...topicRows(206, "CMA USA Part 2 - Section F", [["Professional Ethics", 0]])
];

const realBatchNames = [
  "CMAF_D26_SHREE_CLASSES",
  "CMAF_D26_DADAR",
  "CMAF_D26_ANDHERI",
  "CMAF_D26_BORIVALI_HYBRID",
  "CMAF_D26_GHATKOPAR",
  "CMAF_D26_MULUND",
  "CMAF_D26_DOMBIVLI",
  "CMAF_D26_VASHI",
  "CMAF_D26_CHM",
  "CMAF_D26_JOGESHWARI",
  "CMAF_J26_MULUND",
  "CMAF_J26_BORIVALI",
  "CMAI_D26_ICON_CLASSES",
  "CMAI_D26_DADAR",
  "CMAI_D26_ANDHERI",
  "CMAI_D26_BORIVALI_HYBRID",
  "CMAI_D26_GHATKOPAR",
  "CMAI_D26_MULUND",
  "CMAI_D26_DOMBIVLI",
  "CMAI_D26_VASHI",
  "CMA_FINAL_J26/D26_G3_MULUND",
  "CMA_FINAL_J26/D26_G4_BORIVALI",
  "CMA_FINAL_J27_G3_BORIVALI",
  "CMA_FINAL_J27_G4_MULUND"
];

const importedTimetableProfessors = [
  { name: "Yash Mundhra Sir", levels: ["Inter"], papers: ["Direct and Indirect Taxation"] },
  { name: "Pradeep Sir", levels: ["Foundation", "Inter"], papers: ["Fundamentals of Financial Accounting", "Financial Accounting", "Cost Accounting"] },
  { name: "Raina T. Miss", levels: ["Foundation"], papers: ["Fundamentals of Business Maths & Stats"] },
  { name: "Payal Miss", levels: ["Foundation"], papers: ["Fundamentals of Business Economics"] },
  { name: "Yasin Sir", levels: ["Foundation"], papers: ["Fundamentals of Financial Accounting"] },
  { name: "SP Sir", levels: ["Foundation"], papers: ["Fundamentals of Business Economics"] },
  { name: "Rakesh Sir", levels: ["Foundation"], papers: ["Fundamentals of Business Economics", "Fundamentals of Business Management"] }
];

const importedTimetableEntries = [
  ["2026-05-08", "08:00", "13:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 VASHI"],
  ["2026-05-10", "08:00", "14:30", "Nitin Sir", "Cost Accounting", "CMAI D26 VASHI"],
  ["2026-05-11", "08:00", "14:00", "Rahul B. Sir", "Business Laws and Ethics", "CMAI D26 VASHI"],
  ["2026-05-12", "08:00", "13:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 VASHI"],
  ["2026-05-13", "08:00", "13:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 VASHI"],
  ["2026-05-14", "08:00", "13:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 VASHI"],
  ["2026-05-09", "13:00", "18:30", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 DOMBIVLI"],
  ["2026-05-09", "18:30", "20:00", "", "Classroom Test", "CMAI D26 DOMBIVLI", true],
  ["2026-05-10", "15:00", "20:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 DOMBIVLI"],
  ["2026-05-11", "13:00", "20:00", "Radhika Miss", "Business Laws and Ethics", "CMAI D26 DOMBIVLI"],
  ["2026-05-12", "13:00", "20:00", "Rahul B. Sir", "Business Laws and Ethics", "CMAI D26 DOMBIVLI"],
  ["2026-05-14", "13:00", "20:00", "Radhika Miss", "Business Laws and Ethics", "CMAI D26 DOMBIVLI"],
  ["2026-05-08", "13:00", "20:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 DADAR"],
  ["2026-05-09", "08:00", "13:00", "Nitin Sir", "Cost Accounting", "CMAI D26 DADAR"],
  ["2026-05-11", "08:00", "14:00", "Nitin Sir", "Cost Accounting", "CMAI D26 DADAR"],
  ["2026-05-12", "15:00", "20:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 DADAR"],
  ["2026-05-13", "08:00", "13:00", "Nitin Sir", "Cost Accounting", "CMAI D26 DADAR"],
  ["2026-05-14", "15:00", "20:00", "Yash Mundhra Sir", "Direct and Indirect Taxation", "CMAI D26 DADAR"],
  ["2026-05-08", "14:45", "20:30", "Sandesh G. Sir", "Financial Accounting", "CMAI D26 ANDHERI"],
  ["2026-05-10", "08:00", "14:30", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 ANDHERI"],
  ["2026-05-11", "13:30", "20:00", "Pradeep Sir", "Financial Accounting", "CMAI D26 ANDHERI"],
  ["2026-05-12", "13:00", "20:00", "Sandesh G. Sir", "Cost Accounting", "CMAI D26 ANDHERI"],
  ["2026-05-13", "08:00", "13:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 ANDHERI"],
  ["2026-05-14", "13:00", "20:00", "Sandesh G. Sir", "Cost Accounting", "CMAI D26 ANDHERI"],
  ["2026-05-09", "15:00", "20:00", "Nitin Sir", "Cost Accounting", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-10", "08:00", "13:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-11", "13:00", "20:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-12", "13:00", "20:00", "Radhika Miss", "Business Laws and Ethics", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-13", "15:00", "20:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-14", "15:00", "20:00", "Jeet Shah Sir", "Direct and Indirect Taxation", "CMAI D26 HYBRID GHATKOPAR"],
  ["2026-05-08", "15:00", "20:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 MULUND"],
  ["2026-05-09", "15:00", "20:00", "Jignesh Sir", "Cost Accounting", "CMAI D26 MULUND"],
  ["2026-05-10", "15:00", "20:00", "Jignesh Sir", "Cost Accounting", "CMAI D26 MULUND"],
  ["2026-05-11", "14:00", "20:00", "Gaorav Sir", "Direct and Indirect Taxation", "CMAI D26 MULUND"],
  ["2026-05-12", "13:00", "20:00", "Nitin Sir", "Cost Accounting", "CMAI D26 MULUND"],
  ["2026-05-13", "13:00", "20:00", "Rahul B. Sir", "Business Laws and Ethics", "CMAI D26 MULUND"],
  ["2026-05-14", "13:00", "20:00", "Rahul B. Sir", "Business Laws and Ethics", "CMAI D26 MULUND"],
  ["2026-05-08", "12:00", "16:00", "Chirag Jain Sir", "Fundamentals of Business Management", "CMAFC J26 MULUND"],
  ["2026-05-08", "16:30", "20:00", "Raina T. Miss", "Fundamentals of Business Maths & Stats", "CMAFC J26 MULUND"],
  ["2026-05-09", "13:00", "16:00", "Raina T. Miss", "Fundamentals of Business Maths & Stats", "CMAFC J26 MULUND"],
  ["2026-05-09", "16:30", "20:00", "Chirag Jain Sir", "Fundamentals of Business Management", "CMAFC J26 MULUND"],
  ["2026-05-10", "09:00", "16:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC J26 MULUND"],
  ["2026-05-11", "11:30", "14:30", "Raina T. Miss", "Fundamentals of Business Maths & Stats", "CMAFC J26 MULUND"],
  ["2026-05-11", "15:00", "20:00", "Chirag Jain Sir", "Fundamentals of Business Management", "CMAFC J26 MULUND"],
  ["2026-05-12", "08:30", "15:00", "Payal Miss", "Fundamentals of Business Economics", "CMAFC J26 MULUND"],
  ["2026-05-13", "13:00", "20:00", "Chirag Jain Sir", "Fundamentals of Business Management", "CMAFC J26 MULUND"],
  ["2026-05-08", "13:00", "20:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC J26 BORIVALI"],
  ["2026-05-09", "13:30", "20:00", "Sumit Sir", "Fundamentals of Business Maths & Stats", "CMAFC J26 BORIVALI"],
  ["2026-05-10", "09:00", "16:00", "Payal Miss", "Fundamentals of Business Economics", "CMAFC J26 BORIVALI"],
  ["2026-05-11", "11:00", "19:00", "Sumit Sir", "Fundamentals of Business Maths & Stats", "CMAFC J26 BORIVALI"],
  ["2026-05-12", "12:00", "20:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC J26 BORIVALI"],
  ["2026-05-13", "12:00", "20:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC J26 BORIVALI"],
  ["2026-05-11", "13:00", "15:30", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 VASHI"],
  ["2026-05-13", "13:00", "15:30", "Yasin Sir", "Fundamentals of Financial Accounting", "CMAFC D26 VASHI"],
  ["2026-05-09", "08:30", "11:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 SHREE CLASSES"],
  ["2026-05-11", "08:30", "11:30", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 SHREE CLASSES"],
  ["2026-05-12", "09:00", "11:30", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 SHREE CLASSES"],
  ["2026-05-13", "08:30", "11:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 SHREE CLASSES"],
  ["2026-05-14", "08:30", "11:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 SHREE CLASSES"],
  ["2026-05-09", "13:00", "15:30", "Chirag Jain Sir", "Fundamentals of Business Laws", "CMAFC D26 MULUND"],
  ["2026-05-12", "12:00", "14:30", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 MULUND"],
  ["2026-05-14", "10:00", "12:30", "Rahul B. Sir", "Business Communication", "CMAFC D26 MULUND"],
  ["2026-05-08", "09:00", "12:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 ICON CLASSES"],
  ["2026-05-11", "09:00", "12:00", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 ICON CLASSES"],
  ["2026-05-12", "09:00", "12:00", "Rahul B. Sir", "Business Communication", "CMAFC D26 ICON CLASSES"],
  ["2026-05-13", "09:00", "12:00", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 ICON CLASSES"],
  ["2026-05-14", "09:00", "12:00", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 ICON CLASSES"],
  ["2026-05-08", "10:00", "12:30", "Rahul B. Sir", "Business Communication", "CMAFC D26 HYBRID GHATKOPAR"],
  ["2026-05-11", "13:00", "15:30", "Yasin Sir", "Fundamentals of Financial Accounting", "CMAFC D26 HYBRID GHATKOPAR"],
  ["2026-05-13", "13:00", "15:30", "SP Sir", "Fundamentals of Business Economics", "CMAFC D26 HYBRID GHATKOPAR"],
  ["2026-05-09", "09:00", "11:30", "Raina T. Miss", "Fundamentals of Business Maths & Stats", "CMAFC D26 DOMBIVLI"],
  ["2026-05-11", "13:00", "15:30", "SP Sir", "Fundamentals of Business Economics", "CMAFC D26 DOMBIVLI"],
  ["2026-05-13", "14:00", "16:30", "Rakesh Sir", "Fundamentals of Business Management", "CMAFC D26 DOMBIVLI"],
  ["2026-05-09", "13:00", "15:30", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 DADAR"],
  ["2026-05-11", "10:00", "12:30", "Payal Miss", "Fundamentals of Business Economics", "CMAFC D26 DADAR"],
  ["2026-05-14", "13:00", "15:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 DADAR"],
  ["2026-05-12", "13:00", "15:30", "Chirag Jain Sir", "Fundamentals of Business Laws", "CMAFC D26 CHM COLLEGE"],
  ["2026-05-14", "14:00", "16:30", "Rakesh Sir", "Fundamentals of Business Economics", "CMAFC D26 CHM COLLEGE"],
  ["2026-05-09", "13:00", "15:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 BORIVALI"],
  ["2026-05-12", "09:00", "11:30", "Pradeep Sir", "Fundamentals of Financial Accounting", "CMAFC D26 BORIVALI"],
  ["2026-05-14", "13:00", "15:30", "Manisha Miss", "Fundamentals of Business Maths & Stats", "CMAFC D26 BORIVALI"],
  ["2026-05-09", "16:30", "18:45", "Ravi Patel Sir", "Fundamentals of Business Maths & Stats", "CMAFC D26 ANDHERI"],
  ["2026-05-11", "11:30", "13:30", "Chirag Jain Sir", "Fundamentals of Business Laws", "CMAFC D26 ANDHERI"],
  ["2026-05-13", "09:00", "11:30", "Rahul B. Sir", "Business Communication", "CMAFC D26 ANDHERI"]
];

const whatsappTimetableEntries = Array.isArray(window.whatsappTimetableEntries) ? window.whatsappTimetableEntries : [];

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleFromCode(value) {
  return String(value)
    .split("_")
    .map((part) => part === "CHM" ? "CHM" : part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

function importedBatchName(rawName) {
  return String(rawName)
    .replace(/^CMAFC\s+/, "CMAF ")
    .trim()
    .replace(/\s+/g, "_")
    .toUpperCase();
}

function isCmaUsaText(value) {
  return /CMA[_\s-]*USA|US[_\s-]*CMA/.test(String(value || "").toUpperCase());
}

function cmaUsaLevelFromText(value) {
  const text = String(value || "").toUpperCase();
  return /PART[_\s-]*2|\bP2\b/.test(text) ? "CMA USA Part 2" : "CMA USA Part 1";
}

function importedBatchMeta(rawName, subject) {
  const name = importedBatchName(rawName);
  const isUsa = isCmaUsaText(rawName);
  const usaPart = cmaUsaLevelFromText(rawName);
  const isInter = name.startsWith("CMAI_");
  const isFinal = name.startsWith("CMA_FINAL");
  const level = isUsa ? usaPart : isFinal ? "Final" : isInter ? "Inter" : "Foundation";
  const group = isUsa ? (usaPart.endsWith("2") ? "Part 2" : "Part 1") : level === "Final" ? (name.includes("_G4_") ? "Group 4" : "Group 3") : level === "Inter" && papersForLevel("Inter").includes(subject) ? "Group 1" : "Foundation";
  const attempt = name.includes("_J27_") ? "Jun 2027" : name.includes("_J26/D26_") ? "Jun 2026 / Dec 2026" : name.includes("_J26_") ? "Jun 2026" : "Dec 2026";
  const centreCode = isUsa
    ? name.replace(/^(CMA_)?USA_?/, "").replace(/^US_CMA_?/, "").replace(/^PART_?[12]_?/, "")
    : isFinal
    ? name.split(/_G[34]_/).pop()
    : name.replace(/^CMAI_D26_/, "").replace(/^CMAF_[DJ]26_/, "");
  const centre = titleFromCode(centreCode);
  return {
    id: slug(name),
    name,
    level,
    group,
    paper: subject,
    attempt,
    centre,
    plannedHours: standardPlannedHours(level, group, name),
    startDate: "2026-05-08",
    targetDate: attempt === "Jun 2026" ? "2026-05-15" : "2026-10-15",
    color: paletteForLevel(level)[0]
  };
}

function standardPlannedHours(level, group = "", name = "") {
  if (String(level).startsWith("CMA USA")) return 100;
  if (level === "Foundation") return 240;
  if (level === "Inter") return 640;
  if (String(name).includes("G3") && String(name).includes("G4")) return 981;
  if (group === "Group 3" || String(name).includes("_G3_")) return 598;
  if (group === "Group 4" || String(name).includes("_G4_")) return 383;
  return 981;
}

function levelOrder(level) {
  return { Foundation: 0, Inter: 1, Final: 2, "CMA USA Part 1": 3, "CMA USA Part 2": 4 }[level] ?? 9;
}

function defaultLevelColor(level) {
  return paletteForLevel(level)[0] || "#eef2f7";
}

function ensureImportedProfessor(entry) {
  const name = entry.name;
  const id = slug(name);
  let professor = data.professors.find((item) => item.name.toLowerCase() === name.toLowerCase() || item.id === id);
  if (!professor) {
    professor = {
      id,
      name,
      speciality: "Imported timetable faculty",
      home: "Online",
      levels: [],
      papers: [],
      headPaperNos: [],
      loginId: professorFirstNameCredential(name),
      loginPassword: professorFirstNameCredential(name),
      color: professorPalette[data.professors.length % professorPalette.length]
    };
    data.professors.push(professor);
  }
  const indiaMaster = indiaProfessorMaster.get(professor.id);
  const levelsToAdd = indiaMaster
    ? entry.levels.filter((level) => programForLevel(level) === "CMA India")
    : entry.levels;
  const papersToAdd = indiaMaster
    ? entry.papers.filter((paper) => levelsForPaper(paper).some((level) => programForLevel(level) === "CMA India"))
    : entry.papers;
  levelsToAdd.forEach((level) => {
    if (!professor.levels.includes(level)) professor.levels.push(level);
  });
  papersToAdd.forEach((paper) => {
    if (!professor.papers.includes(paper)) professor.papers.push(paper);
  });
  return professor;
}

function ensureImportedTimetable() {
  importedTimetableProfessors.forEach(ensureImportedProfessor);
  [...importedTimetableEntries, ...whatsappTimetableEntries].forEach(([date, start, end, professorName, subject, rawBatchName, noLecture, importSource]) => {
    const batchMeta = importedBatchMeta(rawBatchName, subject);
    if (!data.batches.some((batch) => batch.id === batchMeta.id)) {
      data.batches.push({
        ...batchMeta,
        color: paletteForLevel(batchMeta.level)[data.batches.filter((batch) => batch.level === batchMeta.level).length % paletteForLevel(batchMeta.level).length]
      });
    }
    const professor = professorName ? ensureImportedProfessor({
      name: professorName,
      levels: [batchMeta.level],
      papers: [subject]
    }) : null;
    const exists = data.slots.some((slot) =>
      slot.batchId === batchMeta.id &&
      slot.date === date &&
      slot.start === start &&
      slot.end === end &&
      slot.subject === subject
    );
    if (!exists) {
      data.slots.push({
        id: uid("imp"),
        batchId: batchMeta.id,
        date,
        start,
        end,
        professorId: professor?.id || "",
        subject,
        noLecture: Boolean(noLecture),
        importSource: importSource || "manual-import"
      });
    }
    const dateSlots = timeSlotsForDate(date);
    if (!dateSlots.some((slot) => slot.start === start && slot.end === end)) {
      setTimeSlotsForDate(date, [...dateSlots, { start, end }]);
    }
  });
}

function createDefaultBatch(name, index) {
  const isFoundation = name.startsWith("CMAF_");
  const isInter = name.startsWith("CMAI_");
  const level = isFoundation ? "Foundation" : isInter ? "Inter" : "Final";
  const group = level === "Foundation" ? "Foundation" : name.includes("_G4_") ? "Group 4" : level === "Final" ? "Group 3" : "Group 1";
  const paper = cmaPapers[level][group][0];
  const attempt = name.includes("J26/D26") ? "Jun 2026 / Dec 2026" : name.includes("_J27_") ? "Jun 2027" : name.includes("_J26_") ? "Jun 2026" : "Dec 2026";
  const centreCode = level === "Final" ? name.split(/_G[34]_/)[1] : name.replace(/^CMA[FI]_([DJ]26)_/, "");
  const centre = titleFromCode(centreCode);
  const targetDate = attempt.includes("Jun 2027") ? "2027-05-15" : attempt.includes("Jun 2026") && !attempt.includes("Dec 2026") ? "2026-05-15" : "2026-10-15";

  return {
    id: slug(name),
    name,
    level,
    group,
    paper,
    attempt,
    centre,
    plannedHours: standardPlannedHours(level, group, name),
    startDate: "2026-05-01",
    targetDate,
    color: paletteForLevel(level)[index % paletteForLevel(level).length]
  };
}

const defaultData = {
  settings: {
    telegramBotToken: "",
    googleSheetLink: "https://docs.google.com/spreadsheets/d/1QC7jdICqY237tKxiOLWJtDJ5Huaa4HSA/edit?usp=sharing",
    googleWebAppUrl: "",
    weeklyColumnWidth: 180,
    activeProgram: "CMA India",
    googleImportHistory: [],
    levelBatchDefaultsApplied: false
  },
  centres: ["Andheri", "Borivali", "Borivali Hybrid", "CHM", "Dadar", "Dombivli", "Ghatkopar", "Icon Classes", "Jogeshwari", "Mulund", "Shree Classes", "Thane", "Vashi", "Online"],
  professors: realProfessors,
  batches: realBatchNames.map(createDefaultBatch),
  timeSlots: defaultTimeSlots,
  slots: [
    { id: "s1", batchId: "cmai-d26-andheri", date: "2026-05-02", start: "07:00", end: "10:00", professorId: "dilip-sir", subject: "Cost Accounting" },
    { id: "s2", batchId: "cma-final-j26-d26-g3-mulund", date: "2026-05-02", start: "14:00", end: "20:00", professorId: "dilip-sir", subject: "Strategic Financial Management" },
    { id: "s3", batchId: "cmaf-d26-borivali-hybrid", date: "2026-05-03", start: "07:00", end: "10:00", professorId: "radhika-miss", subject: "Fundamentals of Business Laws" }
  ],
  progress: [
    { id: "pr1", batchId: "cmai-d26-andheri", professorId: "dilip-sir", date: "2026-04-24", topic: "P8 Cost Accounting", hours: 6, remarks: "Basics and problems completed" },
    { id: "pr2", batchId: "cmai-d26-andheri", professorId: "dilip-sir", date: "2026-04-26", topic: "P8 Cost Accounting", hours: 4, remarks: "Variance introduction" },
    { id: "pr3", batchId: "cma-final-j26-d26-g3-mulund", professorId: "dilip-sir", date: "2026-04-25", topic: "P14 SFM", hours: 8, remarks: "NPV and IRR covered" },
    { id: "pr4", batchId: "cmaf-d26-borivali-hybrid", professorId: "radhika-miss", date: "2026-04-23", topic: "P1 Business Laws", hours: 10, remarks: "Practice pending" }
  ]
};

let data = loadData();
ensureDataShape();
let selectedWeekStart = formatDateInput(getFriday(new Date()));
let professorManagementView = "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadData() {
  const raw = localStorage.getItem(storeKey);
  if (!raw) return structuredClone(defaultData);
  try {
    return { ...structuredClone(defaultData), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultData);
  }
}

function ensureDataShape() {
  data.settings = {
    ...structuredClone(defaultData.settings),
    ...(data.settings || {})
  };
  if (!Array.isArray(data.settings.googleImportHistory)) data.settings.googleImportHistory = [];
  if (!Array.isArray(data.topicPlans)) data.topicPlans = [];
  if (!Array.isArray(data.actualLectures)) data.actualLectures = [];
  if (!Array.isArray(data.notifications)) data.notifications = [];
  if (!data.dateTimeSlots || typeof data.dateTimeSlots !== "object" || Array.isArray(data.dateTimeSlots)) data.dateTimeSlots = {};
  defaultData.centres.forEach((centre) => {
    if (!data.centres.includes(centre)) data.centres.push(centre);
  });
  const retiredSampleProfessorIds = ["p1", "p2", "p3", "p4", "p5"];
  const professorIdMigration = {
    p1: "nitin-sir",
    p2: "gaorav-sir",
    p3: "dilip-sir",
    p4: "radhika-miss",
    p5: "sandesh-g-sir"
  };
  const subjectMigration = {
    "Business Laws and Business Communication": "Fundamentals of Business Laws",
    "Financial and Cost Accounting": "Fundamentals of Financial Accounting",
    "Business Mathematics and Statistics": "Fundamentals of Business Maths & Stats",
    "Business Economics and Management": "Fundamentals of Business Economics",
    "Laws and Ethics": "Business Laws and Ethics",
    "Operations Management and Strategic Management": "Operations Management",
    "Corporate Accounting and Auditing": "Corporate Accounting",
    "Financial Management and Business Data Analytics": "Business Data Analytics",
    "Direct Tax Laws and International Taxation": "Direct Tax Laws & International Taxation",
    "Strategic Cost Management": "Strategic Cost Management (SCM)",
    "Strategic Performance Management and Business Valuation": "Strategic Performance Mgmt & Business Valuation"
  };
  const retiredSampleBatchIds = [
    "fd26-borivali",
    "fd26-andheri",
    "fd26-mulund",
    "fd26-dadar",
    "id26-borivali",
    "id26-andheri",
    "id26-mulund",
    "id26-dadar",
    "finald26-mulund",
    "finald26-online"
  ];
  const batchIdMigration = {
    "fd26-borivali": "cmaf-d26-borivali-hybrid",
    "fd26-andheri": "cmaf-d26-andheri",
    "fd26-mulund": "cmaf-d26-mulund",
    "fd26-dadar": "cmaf-d26-dadar",
    "id26-borivali": "cmai-d26-borivali-hybrid",
    "id26-andheri": "cmai-d26-andheri",
    "id26-mulund": "cmai-d26-mulund",
    "id26-dadar": "cmai-d26-dadar",
    "finald26-mulund": "cma-final-j26-d26-g3-mulund",
    "finald26-online": "cma-final-j26-d26-g4-borivali"
  };
  data.professors = data.professors.filter((professor) => !retiredSampleProfessorIds.includes(professor.id));
  data.batches = data.batches.filter((batch) => !retiredSampleBatchIds.includes(batch.id));
  defaultData.professors.forEach((professor) => {
    if (!data.professors.some((item) => item.id === professor.id)) {
      data.professors.push(structuredClone(professor));
    }
  });
  defaultData.batches.forEach((batch) => {
    const existing = data.batches.find((item) => item.id === batch.id);
    if (!existing) {
      data.batches.push(structuredClone(batch));
    } else {
      existing.name = batch.name;
      existing.level = batch.level;
      existing.attempt = batch.attempt;
      existing.centre = batch.centre;
      existing.group = batch.group;
      existing.paper = subjectMigration[existing.paper] || batch.paper;
    }
  });
  data.professors = data.professors.map((professor) => ({
    ...professor,
    levels: Array.isArray(professor.levels) && professor.levels.length ? professor.levels : inferProfessorLevels(professor),
    papers: Array.isArray(professor.papers) && professor.papers.length ? professor.papers : inferProfessorPapers(professor),
    headPaperNos: Array.isArray(professor.headPaperNos) ? professor.headPaperNos.map(Number).filter(Boolean) : [],
    loginId: isOldAutoProfessorLogin(professor) ? professorFirstNameCredential(professor.name) : professor.loginId,
    loginPassword: isOldAutoProfessorPassword(professor) ? professorFirstNameCredential(professor.name) : professor.loginPassword,
    color: professor.color || professorPalette[data.professors.findIndex((item) => item.id === professor.id) % professorPalette.length]
  }));
  data.professors.forEach(cleanProfessorProgramMapping);
  data.batches = data.batches.map((batch, index) => {
    const normalized = normalizeBatchProgram({ ...batch });
    return {
      ...normalized,
      plannedHours: normalized.level === "Final" && (!normalized.plannedHours || Number(normalized.plannedHours) === 400)
        ? standardPlannedHours(normalized.level, normalized.group, normalized.name)
        : normalized.plannedHours,
      professorId: undefined,
      color: paletteForLevel(normalized.level).includes(normalized.color)
        ? normalized.color
        : paletteForLevel(normalized.level)[index % paletteForLevel(normalized.level).length]
    };
  });
  if (!data.settings.levelBatchDefaultsApplied) {
    data.batches = data.batches
      .map((batch) => ({ ...batch, color: defaultLevelColor(batch.level) }))
      .sort((a, b) => levelOrder(a.level) - levelOrder(b.level) || a.name.localeCompare(b.name));
    data.settings.levelBatchDefaultsApplied = true;
  }
  data.batches.forEach((batch) => delete batch.professorId);
  if (!Array.isArray(data.timeSlots) || !data.timeSlots.length) {
    data.timeSlots = structuredClone(defaultTimeSlots);
  }
  data.slots.forEach((slot) => {
    const exists = data.timeSlots.some((item) => item.start === slot.start && item.end === slot.end);
    if (!exists) data.timeSlots.push({ start: slot.start, end: slot.end });
  });
  data.timeSlots.sort((a, b) => a.start.localeCompare(b.start));
  Object.keys(data.dateTimeSlots).forEach((date) => {
    if (!Array.isArray(data.dateTimeSlots[date])) {
      delete data.dateTimeSlots[date];
      return;
    }
    data.dateTimeSlots[date] = data.dateTimeSlots[date]
      .filter((slot) => slot?.start && slot?.end && hoursBetween(slot.start, slot.end) > 0)
      .sort((a, b) => a.start.localeCompare(b.start));
  });
  data.slots = data.slots.map((slot) => {
    const nextBatchId = batchIdMigration[slot.batchId] || slot.batchId;
    const batch = data.batches.find((item) => item.id === nextBatchId);
    return {
      ...slot,
      batchId: nextBatchId,
      professorId: professorIdMigration[slot.professorId] || slot.professorId || "",
      subject: subjectMigration[slot.subject] || slot.subject || batch?.paper || "",
      approvedConflicts: Array.isArray(slot.approvedConflicts) ? slot.approvedConflicts : []
    };
  }).filter((slot) => data.batches.some((batch) => batch.id === slot.batchId));
  data.progress = data.progress.map((entry) => ({
    ...entry,
    batchId: batchIdMigration[entry.batchId] || entry.batchId,
    professorId: professorIdMigration[entry.professorId] || entry.professorId
  })).filter((entry) => data.batches.some((batch) => batch.id === entry.batchId));
  data.actualLectures = data.actualLectures.map((entry) => ({
    ...entry,
    batchId: batchIdMigration[entry.batchId] || entry.batchId,
    professorId: professorIdMigration[entry.professorId] || entry.professorId
  })).filter((entry) => data.batches.some((batch) => batch.id === entry.batchId));
  data.topicPlans = data.topicPlans.map((plan) => {
    const topic = topicById(plan.topicId);
    const batch = data.batches.find((item) => item.id === (batchIdMigration[plan.batchId] || plan.batchId));
    const slot = data.slots.find((item) => item.id === plan.slotId);
    const subject = slot ? slotSubject(slot) : "";
    const paperNo = Number(plan.paperNo || topic?.paperNo || paperNumbers[subject] || paperNumbers[batch?.paper] || 0);
    return {
      ...plan,
      batchId: batchIdMigration[plan.batchId] || plan.batchId,
      professorId: professorIdMigration[plan.professorId] || plan.professorId,
      paperNo,
      allocatedHours: Number(plan.allocatedHours || topic?.standardHours || 0),
      givenHours: Number(plan.givenHours || 0),
      weekStart: plan.weekStart || formatDateInput(getFriday(new Date())),
      assignedByRole: plan.assignedByRole || (plan.selfAssigned ? "professor" : "tt-head"),
      assignedByProfessorId: plan.assignedByProfessorId || ""
    };
  }).filter((plan) => data.batches.some((batch) => batch.id === plan.batchId));
}

function ensureDummyReportData() {
  const hasDummyData = [data.slots, data.topicPlans, data.actualLectures, data.progress]
    .some((collection) => collection.some((item) => item.dummyData === dummyReportTag || String(item.id || "").startsWith("dummy-report-")));
  if (hasDummyData) return;

  const dummySlots = [
    { id: "dummy-report-slot-1", batchId: "cmai-d26-andheri", date: "2026-05-18", start: "08:00", end: "11:00", professorId: "radhika-miss", subject: "Business Laws and Ethics" },
    { id: "dummy-report-slot-2", batchId: "cmai-d26-andheri", date: "2026-05-20", start: "08:00", end: "12:00", professorId: "sandesh-g-sir", subject: "Financial Accounting" },
    { id: "dummy-report-slot-3", batchId: "cmai-d26-dadar", date: "2026-05-19", start: "15:00", end: "20:00", professorId: "jeet-shah-sir", subject: "Direct and Indirect Taxation" },
    { id: "dummy-report-slot-4", batchId: "cmai-d26-mulund", date: "2026-05-21", start: "13:00", end: "18:00", professorId: "dilip-sir", subject: "Cost Accounting" },
    { id: "dummy-report-slot-5", batchId: "cmai-d26-mulund", date: "2026-05-23", start: "09:00", end: "12:00", professorId: "jignesh-sir", subject: "Management Accounting" }
  ].filter((slot) =>
    data.batches.some((batch) => batch.id === slot.batchId) &&
    data.professors.some((professor) => professor.id === slot.professorId)
  ).map((slot) => ({ ...slot, dummyData: dummyReportTag }));

  const dummyPlans = [
    { id: "dummy-report-plan-1", batchId: "cmai-d26-andheri", professorId: "radhika-miss", topicId: "p5-1", paperNo: 5, allocatedHours: 10 },
    { id: "dummy-report-plan-2", batchId: "cmai-d26-andheri", professorId: "radhika-miss", topicId: "p5-2", paperNo: 5, allocatedHours: 14 },
    { id: "dummy-report-plan-3", batchId: "cmai-d26-andheri", professorId: "sandesh-g-sir", topicId: "p6-1", paperNo: 6, allocatedHours: 12 },
    { id: "dummy-report-plan-4", batchId: "cmai-d26-dadar", professorId: "jeet-shah-sir", topicId: "p7-1", paperNo: 7, allocatedHours: 3 },
    { id: "dummy-report-plan-5", batchId: "cmai-d26-dadar", professorId: "jeet-shah-sir", topicId: "p7-17", paperNo: 7, allocatedHours: 3 },
    { id: "dummy-report-plan-6", batchId: "cmai-d26-mulund", professorId: "dilip-sir", topicId: "p8-1", paperNo: 8, allocatedHours: 12 },
    { id: "dummy-report-plan-7", batchId: "cmai-d26-mulund", professorId: "jignesh-sir", topicId: "p12-1", paperNo: 12, allocatedHours: 10 }
  ].filter((plan) =>
    data.batches.some((batch) => batch.id === plan.batchId) &&
    data.professors.some((professor) => professor.id === plan.professorId) &&
    topicById(plan.topicId)
  ).map((plan) => ({
    ...plan,
    weekStart: "2026-05-15",
    slotId: "",
    givenHours: 0,
    dummyData: dummyReportTag
  }));

  const dummyActualLectures = [
    { id: "dummy-report-actual-1", slotId: "dummy-report-slot-1", batchId: "cmai-d26-andheri", professorId: "radhika-miss", date: "2026-05-18", start: "08:00", end: "11:00", topicPlanId: "dummy-report-plan-1", topic: "P5 Introduction to Law", timeIn: "08:05", timeOut: "10:55", actualHours: 2.8 },
    { id: "dummy-report-actual-2", slotId: "dummy-report-slot-2", batchId: "cmai-d26-andheri", professorId: "sandesh-g-sir", date: "2026-05-20", start: "08:00", end: "12:00", topicPlanId: "dummy-report-plan-3", topic: "P6 Financial Statement from Incomplete Records / Single Entry", timeIn: "08:00", timeOut: "11:45", actualHours: 3.8 },
    { id: "dummy-report-actual-3", slotId: "dummy-report-slot-3", batchId: "cmai-d26-dadar", professorId: "jeet-shah-sir", date: "2026-05-19", start: "15:00", end: "20:00", topicPlanId: "dummy-report-plan-4", topic: "P7 Direct Tax: Introduction, Basics", timeIn: "15:10", timeOut: "19:45", actualHours: 4.6 },
    { id: "dummy-report-actual-4", slotId: "dummy-report-slot-4", batchId: "cmai-d26-mulund", professorId: "dilip-sir", date: "2026-05-21", start: "13:00", end: "18:00", topicPlanId: "dummy-report-plan-6", topic: "P8 Cost Sheet", timeIn: "13:00", timeOut: "17:30", actualHours: 4.5 }
  ].filter((entry) => dummySlots.some((slot) => slot.id === entry.slotId))
    .map((entry) => ({
      ...entry,
      remarks: "DUMMY DATA - temporary report preview entry",
      dummyData: dummyReportTag
    }));

  const dummyProgress = dummyActualLectures.map((entry, index) => ({
    id: `dummy-report-progress-${index + 1}`,
    batchId: entry.batchId,
    professorId: entry.professorId,
    date: entry.date,
    topic: entry.topic,
    hours: entry.actualHours,
    remarks: "DUMMY DATA - temporary report preview entry",
    dummyData: dummyReportTag
  }));

  data.slots.push(...dummySlots);
  data.topicPlans.push(...dummyPlans);
  data.actualLectures.push(...dummyActualLectures);
  data.progress.push(...dummyProgress);
  ensureExpandedDummyReportData();
}

function ensureExpandedDummyReportData() {
  const expandedTag = `${dummyReportTag}-v2`;
  const hasExpandedData = [data.slots, data.topicPlans, data.actualLectures, data.progress]
    .some((collection) => collection.some((item) => item.dummyData === expandedTag || String(item.id || "").startsWith("dummy-report-v2-")));
  if (hasExpandedData) return;

  const startDate = "2026-05-04";
  const timeRanges = [
    ["07:00", "10:00"],
    ["10:30", "13:30"],
    ["14:00", "17:00"],
    ["17:30", "20:30"]
  ];
  const batchesByLevel = Object.fromEntries(Object.keys(cmaPapers).map((level) => [
    level,
    data.batches.filter((batch) => batch.level === level)
  ]));
  const topicCursorByPaper = {};
  const slotRows = [];
  const planRows = [];
  const actualRows = [];

  data.professors.forEach((professor, professorIndex) => {
    const levels = professor.levels.filter((level) => batchesByLevel[level]?.length);
    levels.forEach((level, levelIndex) => {
      const paper = professor.papers.find((item) => papersForLevel(level).includes(item));
      if (!paper) return;
      const paperNo = paperNumbers[paper];
      const topics = topicMaster.filter((topic) => topic.paperNo === paperNo);
      if (!topics.length) return;

      const batches = batchesByLevel[level];
      const batch = batches[(professorIndex + levelIndex) % batches.length];
      const date = addDays(startDate, (professorIndex * 4) + (levelIndex * 9));
      const [start, end] = timeRanges[(professorIndex + levelIndex) % timeRanges.length];
      const hours = hoursBetween(start, end);
      const slotId = `dummy-report-v2-slot-${professor.id}-${levelIndex + 1}`;
      const cursor = topicCursorByPaper[paperNo] || 0;
      const selectedTopics = [topics[cursor % topics.length], topics[(cursor + 1) % topics.length]].filter(Boolean);
      topicCursorByPaper[paperNo] = cursor + selectedTopics.length;

      slotRows.push({
        id: slotId,
        batchId: batch.id,
        date,
        start,
        end,
        professorId: professor.id,
        subject: paper,
        dummyData: expandedTag
      });

      selectedTopics.forEach((topic, topicIndex) => {
        const planId = `dummy-report-v2-plan-${professor.id}-${levelIndex + 1}-${topicIndex + 1}`;
        planRows.push({
          id: planId,
          batchId: batch.id,
          professorId: professor.id,
          topicId: topic.id,
          paperNo,
          weekStart: formatDateInput(getFriday(new Date(`${date}T00:00:00`))),
          slotId: "",
          allocatedHours: Number(topic.standardHours || hours),
          givenHours: 0,
          dummyData: expandedTag
        });

        if (topicIndex === 0) {
          const actualHours = Math.max(1, hours - ((professorIndex % 3) * 0.25));
          actualRows.push({
            id: `dummy-report-v2-actual-${professor.id}-${levelIndex + 1}`,
            slotId,
            batchId: batch.id,
            professorId: professor.id,
            date,
            start,
            end,
            topicPlanId: planId,
            topic: `P${topic.paperNo} ${topic.chapterName}`,
            timeIn: start,
            timeOut: end,
            actualHours,
            remarks: "DUMMY DATA V2 - temporary two-month report preview entry",
            dummyData: expandedTag
          });
        }
      });
    });
  });

  const progressRows = actualRows.map((entry) => ({
    id: entry.id.replace("actual", "progress"),
    batchId: entry.batchId,
    professorId: entry.professorId,
    date: entry.date,
    topic: entry.topic,
    hours: entry.actualHours,
    remarks: entry.remarks,
    dummyData: expandedTag
  }));

  data.slots.push(...slotRows);
  data.topicPlans.push(...planRows);
  data.actualLectures.push(...actualRows);
  data.progress.push(...progressRows);
}

function allPapers() {
  return Object.values(cmaPapers).flatMap((groups) => Object.values(groups).flat());
}

function paperNoOptions() {
  return [...new Set(Object.values(paperNumbers))]
    .sort((a, b) => a - b)
    .map((number) => `P${number}`);
}

function activeProgram() {
  return programs[data.settings?.activeProgram] ? data.settings.activeProgram : "CMA India";
}

function levelsForProgram(program = activeProgram()) {
  return programs[program] || programs["CMA India"];
}

function programForLevel(level) {
  return levelsForProgram("CMA USA").includes(level) ? "CMA USA" : "CMA India";
}

function batchProgram(batch) {
  return programForLevel(batch?.level);
}

function professorBelongsToProgram(professor, program = activeProgram()) {
  const levels = Array.isArray(professor?.levels) ? professor.levels : [];
  return levels.some((level) => levelsForProgram(program).includes(level));
}

function activeProgramBatches() {
  return data.batches.filter((batch) => batchProgram(batch) === activeProgram());
}

function activeProgramProfessors() {
  return data.professors.filter((professor) => professorBelongsToProgram(professor));
}

function activeProgramPaperNoOptions() {
  const levels = levelsForProgram();
  return [...new Set(allPapers()
    .filter((paper) => levelsForPaper(paper).some((level) => levels.includes(level)))
    .map((paper) => paperNumbers[paper])
    .filter(Boolean))]
    .sort((a, b) => a - b)
    .map((number) => `P${number}`);
}

function cleanProfessorProgramMapping(professor) {
  const indiaMaster = indiaProfessorMaster.get(professor.id);
  if (indiaMaster) {
    professor.levels = (professor.levels || []).filter((level) => programForLevel(level) === "CMA India");
    professor.papers = (professor.papers || []).filter((paper) => levelsForPaper(paper).some((level) => programForLevel(level) === "CMA India"));
    if (!professor.levels.length) professor.levels = [...indiaMaster.levels];
    if (!professor.papers.length) professor.papers = [...indiaMaster.papers];
    professor.headPaperNos = (professor.headPaperNos || []).filter((paperNo) => Number(paperNo) < 100);
    return;
  }

  const hasUsaPaper = (professor.papers || []).some((paper) => levelsForPaper(paper).some((level) => programForLevel(level) === "CMA USA"));
  if (!hasUsaPaper) {
    professor.levels = (professor.levels || []).filter((level) => programForLevel(level) !== "CMA USA");
    professor.headPaperNos = (professor.headPaperNos || []).filter((paperNo) => Number(paperNo) < 100);
  }
}

function normalizeBatchProgram(batch) {
  const subject = batch?.paper || "";
  const subjectLevels = levelsForPaper(subject);
  const hasUsaSubject = subjectLevels.some((level) => programForLevel(level) === "CMA USA");
  if (!isCmaUsaText(batch?.name) && !hasUsaSubject) return batch;

  const level = hasUsaSubject
    ? subjectLevels.find((item) => programForLevel(item) === "CMA USA")
    : cmaUsaLevelFromText(batch?.name);
  const group = level === "CMA USA Part 2" ? "Part 2" : "Part 1";
  const fallbackPaper = papersForLevel(level)[0];
  batch.level = level;
  batch.group = group;
  batch.paper = hasUsaSubject ? subject : fallbackPaper;
  batch.plannedHours = Number(batch.plannedHours || 0) > 0 ? batch.plannedHours : standardPlannedHours(level, group, batch.name);
  batch.color = paletteForLevel(level).includes(batch.color) ? batch.color : defaultLevelColor(level);
  return batch;
}

function paperCodeLabel(value) {
  const number = Number(String(value).replace("P", ""));
  if (number >= 101 && number <= 106) return `Part 1 Sec ${String.fromCharCode(64 + (number - 100))}`;
  if (number >= 201 && number <= 206) return `Part 2 Sec ${String.fromCharCode(64 + (number - 200))}`;
  return `P${number}`;
}

function paperCodeTitle(value) {
  const number = Number(String(value).replace("P", ""));
  return allPapers()
    .filter((paper) => paperNumbers[paper] === number)
    .map((paper) => paperShort(null, paper))
    .join(", ") || paperCodeLabel(number);
}

function paperSectionTitle(value) {
  const number = Number(String(value).replace("P", ""));
  const paper = allPapers().find((item) => paperNumbers[item] === number);
  if (!paper) return paperCodeLabel(value);
  if (number >= 101 && number <= 206) {
    const sectionName = paper.split(":").slice(1).join(":").trim();
    return sectionName || paperCodeLabel(value);
  }
  return paperCodeTitle(value);
}

function papersForLevel(level) {
  return Object.values(cmaPapers[level] || {}).flat();
}

function paperNumber(level, paper) {
  return paperNumbers[paper] ? paperCodeLabel(paperNumbers[paper]) : "P?";
}

function paperShort(level, paper) {
  return `${paperNumber(level, paper)} ${paperShortNames[paper] || paper}`;
}

function paletteForLevel(level) {
  return batchPalettes[level] || batchPalette;
}

function attemptCode(attempt) {
  const text = String(attempt || "").trim();
  const month = text.match(/[A-Za-z]+/)?.[0]?.slice(0, 1).toUpperCase() || "A";
  const year = text.match(/\d{2,4}/)?.[0] || "";
  return `${month}${year.slice(-2)}`;
}

function levelCode(level) {
  if (level === "Foundation") return "CMAF";
  if (level === "Inter") return "CMAI";
  if (level === "Final") return "CMAFinal";
  if (level === "CMA USA Part 1") return "CMAUSA_P1";
  if (level === "CMA USA Part 2") return "CMAUSA_P2";
  return "CMA";
}

function batchCode(level, attempt, centre) {
  const cleanCentre = String(centre || "").replace(/\s+/g, "");
  return `${levelCode(level)}_${attemptCode(attempt)}_${cleanCentre}`;
}

function batchCodeWithSection(level, attempt, centre, section) {
  const cleanSection = String(section || "").trim().replace(/\s+/g, "_").replace(/[^A-Za-z0-9_/-]/g, "").toUpperCase();
  return cleanSection ? `${batchCode(level, attempt, centre)}_${cleanSection}` : batchCode(level, attempt, centre);
}

function batchColor(batch) {
  return batch?.color || "#eef2f7";
}

function cellTint(color) {
  return `color-mix(in srgb, ${color} 42%, white)`;
}

function inferProfessorLevels(professor) {
  const speciality = String(professor.speciality || "").toLowerCase();
  if (speciality.includes("usa")) return levelsForProgram("CMA USA");
  if (speciality.includes("account")) return ["Foundation", "Inter"];
  if (speciality.includes("tax") || speciality.includes("cost")) return ["Inter", "Final"];
  if (speciality.includes("law")) return ["Foundation", "Inter", "Final"];
  return levelsForProgram("CMA India");
}

function inferProfessorPapers(professor) {
  const speciality = String(professor.speciality || "").toLowerCase();
  const token = speciality.split(/\s|,/).find(Boolean);
  const matches = token ? allPapers().filter((paper) => paper.toLowerCase().includes(token)) : [];
  return matches.length ? matches : allPapers();
}

function professorFirstNameCredential(name) {
  return cleanSheetText(String(name || "").split(/\s+/).find(Boolean) || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "") || "professor";
}

function oldAutoProfessorPassword(professor) {
  return `cma${String(professor.id || slug(professor.name)).replace(/[^a-z0-9]/gi, "").slice(0, 4)}`;
}

function isOldAutoProfessorLogin(professor) {
  return !professor.loginId || professor.loginId === professor.id || professor.loginId === slug(professor.name);
}

function isOldAutoProfessorPassword(professor) {
  return !professor.loginPassword || professor.loginPassword === oldAutoProfessorPassword(professor);
}

function saveData(options = {}) {
  localStorage.setItem(storeKey, JSON.stringify(data));
  render();
  if (!options.skipCloudSave) scheduleCloudAutoSave();
}

function animateButton(button, className = "button-saved", duration = 700) {
  if (!button) return;
  button.classList.remove(className);
  void button.offsetWidth;
  button.classList.add(className);
  setTimeout(() => button.classList.remove(className), duration);
}

const loginSessionKey = "cma-planner-login-ok";
const loginRoleKey = "cma-planner-login-role";
const loginProfessorKey = "cma-planner-login-professor";
const loginId = "CMATT";
const loginPassword = "cma";
let cloudSaveReminderId = null;
let editingActualLectureId = "";
let cloudAutoSaveId = null;
let cloudLoadInProgress = false;

function isLoggedIn() {
  return sessionStorage.getItem(loginSessionKey) === "yes";
}

function currentLoginRole() {
  return sessionStorage.getItem(loginRoleKey) || "owner";
}

function isProfessorMode() {
  return isLoggedIn() && currentLoginRole() === "professor";
}

function loggedInProfessorId() {
  return isProfessorMode() ? sessionStorage.getItem(loginProfessorKey) || "" : "";
}

function professorLoginId(professor) {
  return cleanSheetText(professor.loginId || professorFirstNameCredential(professor.name));
}

function professorPassword(professor) {
  return cleanSheetText(professor.loginPassword || professorFirstNameCredential(professor.name));
}

function professorLoginShareMessage(professor) {
  return [
    "Dear Sir/Madam,",
    "",
    "Please use this link to update actual lecture details:",
    "",
    "App Link:",
    "https://aarambhvish.github.io/cma-mumbai-planner/",
    "",
    `Login ID: ${professorLoginId(professor)}`,
    `Password: ${professorPassword(professor)}`,
    "",
    "Steps:",
    "1. Open link",
    "2. Press Cloud Load",
    "3. Your scheduled lectures will appear",
    "4. Select lecture",
    "5. Enter actual topic, actual hours, and remarks",
    "6. Press Submit Actual Lecture",
    "7. The system will send the save request automatically",
    "",
    "Please update after every lecture."
  ].join("\n");
}

function setActiveView(viewName) {
  $$(".tab").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  $$(".view").forEach((view) => view.classList.remove("active"));
  $(`#${viewName}View`)?.classList.add("active");
  updateFilterVisibility(viewName);
}

function renderProgramSwitch() {
  const program = activeProgram();
  document.body.dataset.program = program === "CMA USA" ? "usa" : "india";
  $$("[data-program]").forEach((button) => {
    button.classList.toggle("active", button.dataset.program === program);
  });
  const subtitle = $("#programSubtitle");
  if (subtitle) {
    subtitle.textContent = program === "CMA USA"
      ? "CMA USA Part 1 and Part 2 timetable, faculty allocation, and progress control."
      : "CMA India Foundation, Inter, and Final timetable, faculty allocation, and syllabus completion control.";
  }
}

function setActiveProgram(program) {
  if (!programs[program] || activeProgram() === program) return;
  data.settings.activeProgram = program;
  renderProgramSwitch();
  ["centreFilter", "attemptFilter", "levelFilter", "professorFilter"].forEach((id) => {
    const select = $(`#${id}`);
    if (select) select.value = "All";
  });
  localStorage.setItem(storeKey, JSON.stringify(data));
  setTimeout(render, 0);
}

function applyAccessMode() {
  const professorMode = isProfessorMode();
  document.body.classList.toggle("professor-mode", professorMode);
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("hidden", professorMode && tab.dataset.view !== "professorLogin");
  });
  if (professorMode) setActiveView("professorLogin");
  const label = $("#professorLoginSelect")?.closest("label");
  if (label) label.classList.toggle("hidden", professorMode);
  const professorHeading = $("#professorLoginView .panel-head h2");
  if (professorHeading) professorHeading.textContent = professorMode ? "Actual Lecture Update" : "Professor Login";
  const professorHelp = $("#professorLoginView .panel-head span");
  if (professorHelp) professorHelp.textContent = professorMode
    ? "Select your scheduled lecture and submit actual time, topic, and pending portion after class."
    : "Faculty can enter actual topic taught, time in, and time out after lecture.";
}

function showLoginGate() {
  document.body.classList.toggle("app-locked", !isLoggedIn());
  $("#loginGate")?.classList.toggle("hidden", isLoggedIn());
  applyAccessMode();
}

function showInitialCloudPrompt() {
  $("#cloudStartPrompt")?.classList.remove("hidden");
}

function hideInitialCloudPrompt() {
  $("#cloudStartPrompt")?.classList.add("hidden");
}

function startCloudSaveReminder() {
  if (cloudSaveReminderId) clearInterval(cloudSaveReminderId);
  cloudSaveReminderId = setInterval(() => {
    if (!isLoggedIn()) return;
    if (confirm("Reminder: save latest CMA planner data to cloud now?")) {
      saveCloudData();
    }
  }, 15 * 60 * 1000);
}

function scheduleCloudAutoSave() {
  if (!isLoggedIn() || isProfessorMode() || cloudLoadInProgress || !cloudSyncUrl()) return;
  clearTimeout(cloudAutoSaveId);
  cloudAutoSaveId = setTimeout(() => saveCloudData({ silent: true }), 5000);
}

function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const enteredId = form.elements.loginId.value.trim();
  const enteredPassword = form.elements.password.value;
  const selectedRole = form.elements.loginRole.value;
  const error = $("#loginError");

  if (selectedRole === "owner" && enteredId === loginId && enteredPassword === loginPassword) {
    sessionStorage.setItem(loginSessionKey, "yes");
    sessionStorage.setItem(loginRoleKey, "owner");
    sessionStorage.removeItem(loginProfessorKey);
    form.reset();
    if (error) error.textContent = "";
    showLoginGate();
    showInitialCloudPrompt();
    startCloudSaveReminder();
    return;
  }

  if (selectedRole === "professor") {
    const professor = data.professors.find((item) =>
      professorLoginId(item).toLowerCase() === enteredId.toLowerCase() &&
      professorPassword(item) === enteredPassword
    );
    if (professor) {
      sessionStorage.setItem(loginSessionKey, "yes");
      sessionStorage.setItem(loginRoleKey, "professor");
      sessionStorage.setItem(loginProfessorKey, professor.id);
      form.reset();
      form.elements.loginRole.value = "professor";
      if (error) error.textContent = "";
      showLoginGate();
      showInitialCloudPrompt();
      return;
    }
  }

  if (error) error.textContent = selectedRole === "owner"
    ? "Invalid Admin Login ID or password."
    : "Invalid Professor Login ID or password.";
}

function logout() {
  sessionStorage.removeItem(loginSessionKey);
  sessionStorage.removeItem(loginRoleKey);
  sessionStorage.removeItem(loginProfessorKey);
  hideInitialCloudPrompt();
  showLoginGate();
}

function cloudSyncUrl() {
  return fixedCloudSyncUrl;
}

function requireCloudSyncUrl() {
  const url = cloudSyncUrl();
  if (!url) {
    alert("Google Cloud Sync URL is not configured in the software.");
    return "";
  }
  if (!url.includes("script.google.com") || !url.includes("/exec")) {
    alert("Please paste the deployed Google Apps Script Web App URL. It normally starts with https://script.google.com/... and ends with /exec.");
    return "";
  }
  return url;
}

function updateCloudStatus(message = "", tone = "") {
  const status = $("#cloudStatus");
  if (!status) return;
  status.textContent = message || (data.settings.lastCloudSavedAt ? `Saved ${new Date(data.settings.lastCloudSavedAt).toLocaleTimeString()}` : "Cloud not checked");
  status.className = `cloud-status ${tone}`.trim();
}

function timetableSummaryForProgram(program = activeProgram()) {
  const programBatchIds = new Set(data.batches.filter((batch) => batchProgram(batch) === program).map((batch) => batch.id));
  const slots = data.slots.filter((slot) => programBatchIds.has(slot.batchId));
  const dates = [...new Set(slots.map((slot) => slot.date).filter(Boolean))].sort();
  return {
    count: slots.length,
    firstDate: dates[0] || "",
    lastDate: dates[dates.length - 1] || "",
    weekCount: slots.filter((slot) => slot.date >= selectedWeekStart && slot.date <= addDays(selectedWeekStart, 6)).length
  };
}

function timetableSummaryText(program = activeProgram()) {
  const summary = timetableSummaryForProgram(program);
  if (!summary.count) return `No ${program} timetable rows found in saved data.`;
  return `${summary.count} ${program} timetable rows saved from ${summary.firstDate} to ${summary.lastDate}. Current week ${selectedWeekStart} to ${addDays(selectedWeekStart, 6)} has ${summary.weekCount} row${summary.weekCount === 1 ? "" : "s"}.`;
}

function requestCloudData(url, timeoutMs = 12000) {
  return new Promise((resolve, reject) => {
    const callbackName = `cmaCloudLoad_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    let timeoutId;
    const cleanup = () => {
      clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    };
    window[callbackName] = (response) => {
      cleanup();
      resolve(response);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Could not reach Google cloud sync."));
    };
    script.src = `${url}${url.includes("?") ? "&" : "?"}action=load&callback=${encodeURIComponent(callbackName)}&_=${Date.now()}`;
    document.body.appendChild(script);
    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error("Google cloud sync opened but did not return data."));
    }, timeoutMs);
  });
}

function googleImportedSlots(sourceData = data) {
  return (sourceData.slots || []).filter((slot) => String(slot.importSource || "").startsWith(googleSheetSource.importSource));
}

function latestGoogleImportAt(sourceData = data) {
  return (sourceData.settings?.googleImportHistory || [])
    .map((item) => item.importedAt || "")
    .sort()
    .pop() || "";
}

function preserveNewerLocalGoogleImports(localData, cloudData) {
  const localImportAt = latestGoogleImportAt(localData);
  const cloudImportAt = latestGoogleImportAt(cloudData);
  if (!localImportAt || localImportAt <= cloudImportAt) return cloudData;

  const localSlots = googleImportedSlots(localData);
  if (!localSlots.length) return cloudData;

  const slotRangeKeys = new Set(localSlots.map((slot) => {
    const batch = (localData.batches || []).find((item) => item.id === slot.batchId);
    return `${batchProgram(batch)}|${slot.date}`;
  }));
  const localBatchIds = new Set(localSlots.map((slot) => slot.batchId));
  const localProfessorIds = new Set(localSlots.map((slot) => slot.professorId).filter(Boolean));
  const merged = structuredClone(cloudData);

  merged.batches = [
    ...(merged.batches || []).filter((batch) => !localBatchIds.has(batch.id)),
    ...(localData.batches || []).filter((batch) => localBatchIds.has(batch.id))
  ];
  merged.professors = [
    ...(merged.professors || []).filter((professor) => !localProfessorIds.has(professor.id)),
    ...(localData.professors || []).filter((professor) => localProfessorIds.has(professor.id))
  ];
  merged.slots = [
    ...(merged.slots || []).filter((slot) => {
      const batch = (merged.batches || []).find((item) => item.id === slot.batchId);
      return !slotRangeKeys.has(`${batchProgram(batch)}|${slot.date}`);
    }),
    ...localSlots
  ];
  merged.settings = {
    ...(merged.settings || {}),
    googleImportHistory: localData.settings.googleImportHistory
  };
  return merged;
}

async function loadCloudData() {
  const url = requireCloudSyncUrl();
  if (!url) return;
  cloudLoadInProgress = true;
  updateCloudStatus("Loading...", "saving");
  try {
    const response = await requestCloudData(url);
    if (!response?.ok || !response.data) {
      alert(response?.error || "Could not load cloud data. Please check the Apps Script URL and deployment access.");
      return;
    }

    const savedUrl = cloudSyncUrl();
    if (response.data === null) {
      alert("No cloud data is saved yet. Press Cloud Save from your main computer first.");
      return;
    }
    const localBeforeLoad = structuredClone(data);
    data = { ...structuredClone(defaultData), ...preserveNewerLocalGoogleImports(localBeforeLoad, response.data) };
    ensureDataShape();
    data.settings.googleWebAppUrl = fixedCloudSyncUrl;
    saveData({ skipCloudSave: true });
    updateCloudStatus(data.settings.lastCloudSavedAt ? `Loaded ${new Date(data.settings.lastCloudSavedAt).toLocaleTimeString()}` : "Loaded", "saved");
    alert(data.settings.lastCloudSavedAt
      ? `Cloud data loaded. Last cloud save was ${new Date(data.settings.lastCloudSavedAt).toLocaleString()}.\n\n${timetableSummaryText()}`
      : `Cloud data loaded into this device.\n\n${timetableSummaryText()}`);
  } catch (error) {
    updateCloudStatus("Load failed", "error");
    alert(`${error.message} Check that your pasted URL is the deployed Web App /exec URL and access is set to Anyone with the link.`);
  } finally {
    cloudLoadInProgress = false;
  }
}

function saveCloudData(options = {}) {
  const silent = Boolean(options.silent);
  const url = requireCloudSyncUrl();
  if (!url) return;
  const saveStamp = new Date().toISOString();
  data.settings.lastCloudSavedAt = saveStamp;
  localStorage.setItem(storeKey, JSON.stringify(data));
  updateCloudStatus("Saving...", "saving");

  const iframeName = `cmaCloudSaveFrame_${Date.now()}`;
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";
  let completed = false;
  let timeoutId;

  const cleanup = () => {
    clearTimeout(timeoutId);
    iframe.remove();
    form.remove();
  };

  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = iframeName;
  form.style.display = "none";

  const payloadInput = document.createElement("input");
  payloadInput.type = "hidden";
  payloadInput.name = "payload";
  payloadInput.value = JSON.stringify(data);
  form.appendChild(payloadInput);

  document.body.append(iframe, form);
  form.submit();

  setTimeout(async () => {
    if (completed) return;
    try {
      const response = await requestCloudData(url, 20000);
      const cloudStamp = response?.data?.settings?.lastCloudSavedAt || "";
      if (!response?.ok || cloudStamp !== saveStamp) {
        throw new Error(response?.error || "Cloud save could not be verified.");
      }
      completed = true;
      cleanup();
      updateCloudStatus(`Saved ${new Date(saveStamp).toLocaleTimeString()}`, "saved");
      if (!silent) alert(`Planner data saved and verified at ${new Date(saveStamp).toLocaleString()}.\n\n${timetableSummaryText()}`);
    } catch (error) {
      completed = true;
      cleanup();
      updateCloudStatus("Save not verified", "error");
      if (!silent) alert(`${error.message} Please confirm Apps Script was deployed as a new Web App version, then press Cloud Save again.`);
    }
  }, 6000);

  timeoutId = setTimeout(() => {
    if (completed) return;
    completed = true;
    cleanup();
    updateCloudStatus("Save timeout", "error");
    if (!silent) alert("Cloud Save did not confirm within 45 seconds. Please check internet and Apps Script deployment, then try Cloud Save again.");
  }, 45000);
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function professorName(id) {
  return data.professors.find((p) => p.id === id)?.name || "Unassigned";
}

function professorColor(id) {
  return data.professors.find((p) => p.id === id)?.color || "#ffffff";
}

function batchById(id) {
  return data.batches.find((batch) => batch.id === id);
}

function slotProfessorId(slot) {
  if (slot?.noLecture) return "";
  return slot.professorId || "";
}

function slotSubject(slot) {
  if (slot?.noLecture) return slot.subject || "No Lecture";
  return slot.subject || batchById(slot.batchId)?.paper || "";
}

function getFriday(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const daysSinceFriday = (day + 2) % 7;
  const diff = copy.getDate() - daysSinceFriday;
  copy.setDate(diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(dateText, days) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setDate(date.getDate() + days);
  return formatDateInput(date);
}

function dayLabel(dateText) {
  return new Date(`${dateText}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });
}

const dayFilterOptions = [
  { value: "All", label: "All" },
  { value: "0", label: "Fri" },
  { value: "1", label: "Sat" },
  { value: "2", label: "Sun" },
  { value: "3", label: "Mon" },
  { value: "4", label: "Tue" },
  { value: "5", label: "Wed" },
  { value: "6", label: "Thu" }
];

const alertFilterOptions = [
  { value: "All", label: "All Alerts" },
  { value: "Faculty double-booked", label: "Faculty Double Booked" },
  { value: "Travel buffer short", label: "Travel Buffer Short" }
];

function fullDateLabel(dateText) {
  return new Date(`${dateText}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function hoursBetween(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return Math.max(0, ((eh * 60 + em) - (sh * 60 + sm)) / 60);
}

function formatTimeShort(time) {
  const [hourText, minuteText] = time.split(":");
  let hour = Number(hourText);
  const suffix = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  return `${hour}${minuteText === "00" ? "" : `:${minuteText}`}${suffix}`;
}

function formatTimeRange(start, end) {
  return `${formatTimeShort(start)}-${formatTimeShort(end)}`;
}

function timetableDateLabel(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const weekday = date.toLocaleDateString("en-GB", { weekday: "short" });
  return `${day}-${month}-${date.getFullYear()} (${weekday})`;
}

function formatTimeCaps(time) {
  const [hourText, minuteText] = time.split(":");
  let hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minuteText} ${suffix}`;
}

function compactAttempt(attempt) {
  const text = String(attempt || "").toLowerCase();
  if (text.includes("jun 2027")) return "J27";
  if (text.includes("jun 2026") && text.includes("dec 2026")) return "J26/D26";
  if (text.includes("jun 2026")) return "J26";
  if (text.includes("dec 2026")) return "D26";
  return String(attempt || "").trim().toUpperCase();
}

function batchTimetableLines(batch) {
  if (!batch) return ["BATCH", "", ""];
  const name = String(batch.name || "").replace(/_/g, " ").toUpperCase();
  const centre = String(batch.centre || "").toUpperCase();
  const group = String(batch.group || "").replace(/Group\s*/i, "G").toUpperCase();
  const attempt = compactAttempt(batch.attempt);
  const section = String(batch.section || "").toUpperCase();
  const hybrid = name.includes("HYBRID") || section.includes("HYBRID");
  if (batch.level === "Final") return ["CMA FINAL", `${attempt} ${group}`.trim(), centre];
  if (batch.level === "Inter") return [`CMAI ${attempt}${hybrid ? " HYBRID" : ""}`.trim(), centre, ""];
  return [`CMAF ${attempt}${hybrid ? " HYBRID" : ""}`.trim(), centre, ""];
}

function batchTimetableTone(batch) {
  const name = String(batch?.name || "").toUpperCase();
  if (name.includes("J27") || compactAttempt(batch?.attempt) === "J27") return "#fff400";
  if (name.includes("HYBRID") || String(batch?.section || "").toUpperCase().includes("HYBRID")) return "#a9c6cc";
  if (batch?.level === "Final") return "#f3ddcc";
  return "#f4e1c9";
}

function professorTimetableTone(professorId) {
  const color = professorColor(professorId);
  return !color || color === "#ffffff" ? "#e7abc8" : color;
}

function timetableLectureTone(slot, fallbackColor) {
  return slot?.noLecture ? "#d9d9d9" : fallbackColor;
}

function timetableDisplayTime(slot, field) {
  return slot?.noLecture ? "-" : formatTimeCaps(slot[field]);
}

function timetableSubjectLabel(slot, batch) {
  if (slot.noLecture) return isChangedTT(slot) ? "No Lecture (Changed)" : "No Lecture";
  const subject = slotSubject(slot);
  const label = subject === "Strategic Financial Management"
    ? "SFM Only Live"
    : subject === "Financial Accounting" && batch?.level === "Inter"
      ? "G1 - AS"
      : paperShort(batch?.level, subject);
  return isChangedTT(slot) ? `${label} (Changed)` : label;
}

function professorSlotTopicLines(slot) {
  if (!slot || slot.noLecture) return [];
  const paperNo = paperNumbers[slotSubject(slot)];
  if (!paperNo) return [];
  return data.topicPlans
    .filter((plan) =>
      plan.professorId === slotProfessorId(slot) &&
      plan.batchId === slot.batchId &&
      paperForPlan(plan) === paperNo
    )
    .map((plan) => {
      const topic = topicById(plan.topicId);
      if (!topic?.chapterName) return "";
      const hours = Number(plan.allocatedHours || 0);
      return `${topic.chapterName}${hours ? ` (${hours.toFixed(1)} hrs)` : ""}`;
    })
    .filter(Boolean);
}

function actualHoursFromForm(form) {
  const timeIn = form?.elements?.timeIn?.value || "";
  const timeOut = form?.elements?.timeOut?.value || "";
  const breakMinutes = Math.max(0, Number(form?.elements?.breakMinutes?.value || 0));
  if (!timeIn || !timeOut) return 0;
  return Math.max(0, hoursBetween(timeIn, timeOut) - (breakMinutes / 60));
}

function updateActualHoursField(form) {
  if (!form?.elements?.actualHours) return;
  form.elements.actualHours.value = actualHoursFromForm(form).toFixed(2);
}

function parseTimePart(value) {
  const match = String(value).trim().toLowerCase().match(/^(\d{1,2})(?::?(\d{2}))?\s*(am|pm)?$/);
  if (!match) return "";
  let hour = Number(match[1]);
  const minute = match[2] || "00";
  const suffix = match[3];
  if (suffix === "pm" && hour < 12) hour += 12;
  if (suffix === "am" && hour === 12) hour = 0;
  if (hour > 23 || Number(minute) > 59) return "";
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

function parseTimeRange(value) {
  const parts = String(value).toLowerCase().replace(/\s+to\s+/g, "-").split("-");
  if (parts.length !== 2) return null;
  const start = parseTimePart(parts[0]);
  const end = parseTimePart(parts[1]);
  if (!start || !end || hoursBetween(start, end) <= 0) return null;
  return { start, end };
}

function timeSlotsForDate(date) {
  const slots = data.dateTimeSlots?.[date] || data.timeSlots;
  return slots.map((slot) => ({ start: slot.start, end: slot.end })).sort((a, b) => a.start.localeCompare(b.start));
}

function setTimeSlotsForDate(date, slots) {
  data.dateTimeSlots[date] = slots
    .map((slot) => ({ start: slot.start, end: slot.end }))
    .filter((slot) => slot.start && slot.end && hoursBetween(slot.start, slot.end) > 0)
    .sort((a, b) => a.start.localeCompare(b.start));
}

function allKnownTimeSlots() {
  const map = new Map();
  [...data.timeSlots, ...Object.values(data.dateTimeSlots || {}).flat()].forEach((slot) => {
    if (slot?.start && slot?.end) map.set(`${slot.start}|${slot.end}`, { start: slot.start, end: slot.end });
  });
  return Array.from(map.values()).sort((a, b) => a.start.localeCompare(b.start));
}

function daysLeft(targetDate) {
  const today = new Date();
  const target = new Date(`${targetDate}T23:59:59`);
  return Math.max(0, Math.ceil((target - today) / 86400000));
}

function doneHours(batchId) {
  return data.progress
    .filter((entry) => entry.batchId === batchId)
    .reduce((sum, entry) => sum + Number(entry.hours || 0), 0);
}

function batchMetrics(batch) {
  const done = doneHours(batch.id);
  const pending = Math.max(0, Number(batch.plannedHours) - done);
  const left = daysLeft(batch.targetDate);
  const weeksLeft = Math.max(0, Math.ceil(left / 7));
  const completionPercent = Number(batch.plannedHours) ? Math.min(100, (done / Number(batch.plannedHours)) * 100) : 0;
  const weeklyRequired = pending ? pending / Math.max(weeksLeft, 1) : 0;
  const availableWeeklyHours = slotsForBatchInRange(batch.id, selectedWeekStart, addDays(selectedWeekStart, 6))
    .reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
  const availableLeft = Math.max(availableWeeklyHours * Math.max(weeksLeft, 1), 0);
  let status = "On Track";
  let color = "green";

  if (pending === 0) {
    status = "Completed";
    color = "blue";
  } else if (left === 0 || weeklyRequired > availableWeeklyHours) {
    status = "Risk";
    color = "red";
  } else if (weeklyRequired > availableWeeklyHours * 0.75) {
    status = "Watch";
    color = "yellow";
  }

  return { done, pending, left, weeksLeft, weeklyRequired, completionPercent, availableWeeklyHours, availableLeft, status, color };
}

function slotsForBatchInRange(batchId, from, to) {
  return data.slots
    .filter((slot) => slot.batchId === batchId)
    .filter((slot) => !slot.noLecture)
    .filter((slot) => (!from || slot.date >= from) && (!to || slot.date <= to));
}

function hoursForBatchesInRange(batchIds, from, to) {
  const ids = new Set(batchIds);
  return data.slots
    .filter((slot) => ids.has(slot.batchId))
    .filter((slot) => !slot.noLecture)
    .filter((slot) => (!from || slot.date >= from) && (!to || slot.date <= to))
    .reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
}

function monthRangeFor(dateText) {
  const [year, month] = dateText.split("-").map(Number);
  return {
    from: `${dateText.slice(0, 7)}-01`,
    to: formatDateInput(new Date(year, month, 0))
  };
}

function filteredBatches() {
  const centre = $("#centreFilter").value;
  const attempt = $("#attemptFilter").value;
  const level = $("#levelFilter").value;
  return activeProgramBatches().filter((batch) =>
    (centre === "All" || batch.centre === centre) &&
    (attempt === "All" || batch.attempt === attempt) &&
    (level === "All" || batch.level === level)
  ).sort((a, b) => levelOrder(a.level) - levelOrder(b.level) || data.batches.indexOf(a) - data.batches.indexOf(b));
}

function selectedValues(select) {
  return Array.from(select.selectedOptions).map((option) => option.value);
}

function setOptions(select, values, selected, includeAll = false) {
  const options = includeAll ? ["All", ...values] : values;
  select.innerHTML = options.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  if (selected && options.includes(selected)) select.value = selected;
}

function setMultiOptions(select, values, selected = [], includeAll = false) {
  const options = includeAll ? ["All", ...values] : values;
  const active = selected.length ? selected : includeAll ? ["All"] : [];
  select.innerHTML = options.map((value) => `<option value="${escapeHtml(value)}" ${active.includes(value) ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderFilters() {
  const centre = $("#centreFilter").value || "All";
  const attempt = $("#attemptFilter").value || "All";
  const level = $("#levelFilter").value || "All";
  const timeSlots = selectedValues($("#timeSlotFilter"));
  const days = selectedValues($("#dayFilter"));
  const professor = $("#professorFilter").value || "All";
  const batches = activeProgramBatches();
  const professors = activeProgramProfessors();
  setOptions($("#centreFilter"), data.centres, centre, true);
  setOptions($("#attemptFilter"), [...new Set(batches.map((b) => b.attempt))].sort(), attempt, true);
  setOptions($("#levelFilter"), levelsForProgram(), level, true);
  setMultiOptions($("#timeSlotFilter"), allKnownTimeSlots().map((slot) => `${slot.start}|${slot.end}`), timeSlots.length ? timeSlots : ["All"], true);
  const selectedDays = days.length ? days : ["All"];
  $("#dayFilter").innerHTML = dayFilterOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedDays.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("");
  const alertTypeFilter = $("#alertTypeFilter");
  if (alertTypeFilter && !alertTypeFilter.options.length) {
    alertTypeFilter.innerHTML = alertFilterOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${option.value === "All" ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("");
  }
  setOptions($("#professorFilter"), professors.map((item) => item.id), professor, true);
  renderGoogleSheetLinkField();
  Array.from($("#professorFilter").options).forEach((option) => {
    if (option.value !== "All") option.textContent = professorName(option.value);
  });
  Array.from($("#timeSlotFilter").options).forEach((option) => {
    if (option.value !== "All") {
      const [start, end] = option.value.split("|");
      option.textContent = formatTimeRange(start, end);
    }
  });
}

function renderDashboard() {
  const batches = filteredBatches();
  const metrics = batches.map((batch) => ({ batch, ...batchMetrics(batch) }));
  const planned = batches.reduce((sum, b) => sum + Number(b.plannedHours || 0), 0);
  const done = metrics.reduce((sum, m) => sum + m.done, 0);
  const weekEnd = addDays(selectedWeekStart, 6);
  const month = monthRangeFor(selectedWeekStart);
  const batchIds = batches.map((batch) => batch.id);
  const activeMonthHours = hoursForBatchesInRange(batchIds, month.from, month.to);
  const activeWeekHours = hoursForBatchesInRange(batchIds, selectedWeekStart, weekEnd);
  const risk = metrics.filter((m) => m.color === "red").length;
  const avgCompletion = metrics.length ? metrics.reduce((sum, item) => sum + item.completionPercent, 0) / metrics.length : 0;
  const facultySessions = data.slots.filter((slot) => batchIds.includes(slot.batchId) && slotProfessorId(slot)).length;
  const levelCounts = levelsForProgram().map((level) => `${level}: ${batches.filter((batch) => batch.level === level).length}`).join(" | ");
  const levelKpiLabel = activeProgram() === "CMA USA" ? "Part 1 / Part 2" : "Foundation / Inter / Final";

  $("#kpiGrid").innerHTML = [
    ["Active Batches", batches.length, levelCounts, "brand"],
    [levelKpiLabel, levelCounts, "Active batches by level", "blue"],
    ["Active Month Total Hrs", activeMonthHours.toFixed(1), `${month.from} to ${month.to}`, "green"],
    ["Active Week Total Hrs", activeWeekHours.toFixed(1), `${selectedWeekStart} to ${weekEnd}`, "gold"],
    ["Avg Syllabus Completed", `${avgCompletion.toFixed(1)}%`, "Across selected batches", "green"],
    ["Faculty Sessions", facultySessions, "Scheduled with professor", "brand"],
    ["Risk Batches", risk, "Need attention", "red"]
  ].map(([label, value, note, tone]) => `<article class="kpi" style="border-left-color: var(--${tone})"><span>${label}</span><strong>${value}</strong><small>${escapeHtml(note)}</small></article>`).join("");

  $("#batchTable").innerHTML = metrics.length ? metrics.map(({ batch, done, weeksLeft, weeklyRequired, completionPercent, status, color }) => `
    <tr>
      <td><strong>${escapeHtml(batch.name)}</strong><br><span>${escapeHtml(batch.level)} | ${escapeHtml(batch.attempt)}</span></td>
      <td>${escapeHtml(batch.centre)}</td>
      <td>${escapeHtml(batch.level)}</td>
      <td><input class="dashboard-edit-input" data-dashboard-batch="${escapeHtml(batch.id)}" data-field="plannedHours" type="number" min="0" step="0.5" value="${Number(batch.plannedHours).toFixed(1)}" aria-label="Planned hours for ${escapeHtml(batch.name)}"></td>
      <td>${done.toFixed(1)}</td>
      <td><input class="dashboard-edit-input date" data-dashboard-batch="${escapeHtml(batch.id)}" data-field="targetDate" type="date" value="${escapeHtml(batch.targetDate)}" aria-label="Completion date for ${escapeHtml(batch.name)}"></td>
      <td>${weeksLeft}</td>
      <td>${weeklyRequired.toFixed(1)}</td>
      <td>
        <div class="meter"><span style="width:${completionPercent.toFixed(0)}%"></span></div>
        ${completionPercent.toFixed(1)}%
      </td>
      <td><span class="status ${color}">${status}</span></td>
    </tr>
  `).join("") : `<tr><td colspan="10" class="empty">No batches match these filters.</td></tr>`;

  $("#lastUpdated").textContent = `Planned ${planned.toFixed(1)} hrs | Till date ${done.toFixed(1)} hrs`;
  renderAlerts(metrics);
}

function renderAlerts(metrics) {
  const selectedTypes = selectedValues($("#alertTypeFilter"));
  const activeTypes = selectedTypes.length ? selectedTypes : ["All"];
  const alerts = conflictAlerts()
    .filter((alert) => ["Faculty double-booked", "Travel buffer short"].includes(alert.title))
    .filter((alert) => activeTypes.includes("All") || activeTypes.includes(alert.title));
  $("#alertCount").textContent = `${alerts.length} alerts`;
  $("#alerts").innerHTML = alerts.length ? alerts.map((alert) => `
    <div class="alert ${alert.tone}">
      <strong>${escapeHtml(alert.title)}</strong>
      <span>${escapeHtml(alert.body)}</span>
    </div>
  `).join("") : `<div class="empty">No timetable or syllabus risk alerts right now.</div>`;
}

function minutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function slotsOverlap(a, b) {
  return a.date === b.date && minutes(a.start) < minutes(b.end) && minutes(b.start) < minutes(a.end);
}

function conflictPairKey(a, b) {
  return [a?.id || "", b?.id || ""].sort().join("|");
}

function conflictIsApproved(a, b) {
  const key = conflictPairKey(a, b);
  return Boolean(key && (a?.approvedConflicts || []).includes(key) && (b?.approvedConflicts || []).includes(key));
}

function overlappingProfessorSlots(slot) {
  const professorId = slotProfessorId(slot);
  if (!professorId) return [];
  return data.slots.filter((other) =>
    other.id !== slot.id &&
    slotProfessorId(other) === professorId &&
    slotsOverlap(slot, other)
  );
}

function travelGapRequired(from, to) {
  if (from === to || from === "Online" || to === "Online") return 30;
  return 90;
}

function conflictAlerts(candidate) {
  const alerts = [];
  const slots = candidate ? [...data.slots.filter((slot) => slot.id !== candidate.id), candidate] : data.slots;
  for (let i = 0; i < slots.length; i += 1) {
    for (let j = i + 1; j < slots.length; j += 1) {
      const first = slots[i];
      const second = slots[j];
      const a = batchById(first.batchId);
      const b = batchById(second.batchId);
      if (!a || !b || first.date !== second.date) continue;

      const firstProfessorId = slotProfessorId(first);
      const secondProfessorId = slotProfessorId(second);

      if (firstProfessorId && firstProfessorId === secondProfessorId && slotsOverlap(first, second) && !conflictIsApproved(first, second)) {
        alerts.push({ tone: "red", title: "Faculty double-booked", body: `${professorName(firstProfessorId)} has overlapping classes for ${a.name} and ${b.name} on ${first.date}.` });
      }

      if (firstProfessorId && firstProfessorId === secondProfessorId && !slotsOverlap(first, second)) {
        const ordered = minutes(first.end) <= minutes(second.start) ? [first, second, a, b] : [second, first, b, a];
        const gap = minutes(ordered[1].start) - minutes(ordered[0].end);
        const required = travelGapRequired(ordered[2].centre, ordered[3].centre);
        if (gap >= 0 && gap < required) {
          alerts.push({ tone: "", title: "Travel buffer short", body: `${professorName(firstProfessorId)} has ${gap} minutes between ${ordered[2].centre} and ${ordered[3].centre}; keep at least ${required} minutes.` });
        }
      }
    }
  }
  return alerts;
}

function slotHasProfessorConflict(slot) {
  const batch = batchById(slot.batchId);
  const professorId = slotProfessorId(slot);
  if (!batch || !professorId) return false;
  return overlappingProfessorSlots(slot).some((other) => {
    if (other.id === slot.id) return false;
    const otherBatch = batchById(other.batchId);
    if (!otherBatch) return false;
    return !conflictIsApproved(slot, other);
  });
}

function professorIsAvailable(professorId, date, start, end, currentSlot) {
  if (!professorId) return true;
  const candidate = {
    id: currentSlot?.id || "__candidate__",
    batchId: currentSlot?.batchId || "",
    date,
    start,
    end,
    professorId
  };
  return !data.slots.some((slot) => {
    if (slot.id === currentSlot?.id) return false;
    if (slot.batchId === currentSlot?.batchId && slot.date === date && slot.start === start && slot.end === end) return false;
    return slotProfessorId(slot) === professorId && slotsOverlap(candidate, slot);
  });
}

function field(name, label, type = "text", value = "", attrs = "") {
  return `<label><span>${label}</span><input name="${name}" type="${type}" value="${escapeHtml(value)}" ${attrs}></label>`;
}

function selectField(name, label, options, value = "") {
  return `<label><span>${label}</span><select name="${name}">${options.map((option) => `<option value="${escapeHtml(option.value ?? option)}" ${(option.value ?? option) === value ? "selected" : ""}>${escapeHtml(option.label ?? option)}</option>`).join("")}</select></label>`;
}

function professorOptionsForLevel(level) {
  return activeProgramProfessors()
    .filter((professor) => professor.levels.includes(level))
    .map((professor) => ({ value: professor.id, label: professor.name }));
}

function multiSelectField(name, label, options, values = []) {
  return `<label class="wide"><span>${label}</span><select name="${name}" multiple>${options.map((option) => `<option value="${escapeHtml(option)}" ${values.includes(option) ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></label>`;
}

function renderForms() {
  const batchOptions = activeProgramBatches().map((batch) => ({ value: batch.id, label: `${batch.name} (${batch.centre})` }));

  if ($("#slotForm")) {
    $("#slotForm").innerHTML = [
      selectField("batchId", "Batch", batchOptions),
      field("date", "Date", "date", new Date().toISOString().slice(0, 10), "required"),
      field("start", "Start", "time", "08:00", "required"),
      field("end", "End", "time", "10:00", "required"),
      `<div class="row-actions wide"><button type="submit">Add Slot</button></div>`
    ].join("");
  }

  if ($("#progressForm")) {
    $("#progressForm").innerHTML = [
      selectField("batchId", "Batch", batchOptions),
      selectField("professorId", "Professor", professorOptionsForLevel("Foundation")),
      field("date", "Date", "date", new Date().toISOString().slice(0, 10), "required"),
      field("hours", "Hours Completed", "number", "2", "min=\"0.5\" step=\"0.5\" required"),
      field("topic", "Topic Taught", "text", "", "required"),
      `<label class="wide"><span>Remarks</span><textarea name="remarks" placeholder="Revision pending, test planned, doubts cleared..."></textarea></label>`,
      `<div class="row-actions wide"><button type="submit">Save Progress</button></div>`
    ].join("");
  }

  const defaultLevel = activeProgram() === "CMA USA" ? "CMA USA Part 1" : "Foundation";
  const defaultAttempt = activeProgram() === "CMA USA" ? "CMA USA" : "Dec 2026";
  $("#batchForm").innerHTML = [
    `<input name="level" type="hidden" value="${escapeHtml(defaultLevel)}">`,
    `<label><span>Level</span><input value="${escapeHtml(defaultLevel)}" disabled></label>`,
    field("attempt", "Attempt", "text", defaultAttempt, "required"),
    selectField("centre", "Mumbai Centre", data.centres),
    field("section", "Batch No / Extra Name", "text", "", "placeholder=\"e.g. Morning, Evening, B2\""),
    field("plannedHours", "Standard Hours", "number", "60", "min=\"1\" required"),
    field("startDate", "Start Date", "date", new Date().toISOString().slice(0, 10), "required"),
    field("targetDate", "Target Date", "date", "2026-10-15", "required"),
    `<div class="row-actions wide"><button type="submit">Create Batch</button></div>`
  ].join("");

  $("#masterForm").innerHTML = [
    field("telegramBotToken", "Telegram Bot Token", "password", data.settings.telegramBotToken || "", "placeholder=\"123456:ABC...\""),
    `<div class="fixed-cloud-url wide"><strong>Google Cloud Sync URL</strong><span>Locked to the institute cloud link.</span></div>`,
    field("centre", "New Centre", "text", "", "placeholder=\"e.g. Ghatkopar\""),
    `<div class="row-actions wide"><button type="submit">Save Master Data</button></div>`
  ].join("");

}

function renderDailyTimetable() {
  if (!$("#dailyTimetableTable")) return;
  const dateInput = $("#dailyDateFilter");
  if (!dateInput.value) dateInput.value = new Date().toISOString().slice(0, 10);
  const selectedDate = dateInput.value;
  const selectedDailyLevel = $("#dailyLevelFilter").value || "All";
  const selectedDailyCentre = $("#dailyCentreFilter").value || "All";
  setOptions($("#dailyLevelFilter"), levelsForProgram(), selectedDailyLevel, true);
  setOptions($("#dailyCentreFilter"), data.centres, selectedDailyCentre, true);
  const selectedProfessor = $("#professorFilter").value || "All";
  const rows = data.slots
    .filter((slot) => slot.date === selectedDate)
    .filter((slot) => filteredBatches().some((batch) => batch.id === slot.batchId))
    .filter((slot) => {
      const batch = batchById(slot.batchId);
      return batch &&
        (selectedDailyLevel === "All" || batch.level === selectedDailyLevel) &&
        (selectedDailyCentre === "All" || batch.centre === selectedDailyCentre);
    })
    .filter((slot) => selectedProfessor === "All" || slotProfessorId(slot) === selectedProfessor)
    .sort((a, b) => `${a.start} ${batchById(a.batchId)?.name || ""}`.localeCompare(`${b.start} ${batchById(b.batchId)?.name || ""}`));

  $("#dailyTimetableCount").textContent = `${rows.length} class${rows.length === 1 ? "" : "es"} on ${fullDateLabel(selectedDate)}`;
  $("#dailyTimetableTable").innerHTML = rows.map((slot) => {
    const batch = batchById(slot.batchId);
    const professorId = slotProfessorId(slot);
    const status = slot.noLecture ? "No Lecture" : professorId ? "Planned" : "Open";
    const statusClass = slot.noLecture ? "blue" : professorId ? "green" : "yellow";
    return `<tr>
      <td>${escapeHtml(fullDateLabel(slot.date))}</td>
      <td>${escapeHtml(formatTimeRange(slot.start, slot.end))}</td>
      <td><strong>${escapeHtml(batch?.name || "")}</strong></td>
      <td>${escapeHtml(batch?.centre || "")}</td>
      <td>${escapeHtml(slot.noLecture ? "-" : professorName(professorId))}</td>
      <td>${escapeHtml(slot.noLecture ? "No Lecture" : paperShort(batch?.level, slot.subject))}</td>
      <td>${sourceBadge(slot)} <span class="status ${statusClass}">${escapeHtml(status)}</span></td>
    </tr>`;
  }).join("") || `<tr><td colspan="7" class="empty">No timetable entries for this date/filter.</td></tr>`;
}

function renderTables() {
  renderDailyTimetable();

  const recent = [...data.progress].sort((a, b) => b.date.localeCompare(a.date));
  if ($("#progressCount") && $("#progressTable")) {
    $("#progressCount").textContent = `${recent.length} entries`;
    $("#progressTable").innerHTML = recent.map((entry) => {
      const batch = batchById(entry.batchId);
      return `<tr class="${slotIndex === 0 ? "date-start-row" : ""}">
        <td>${escapeHtml(entry.date)}</td>
        <td>${escapeHtml(batch?.name)}</td>
        <td>${escapeHtml(entry.topic)}</td>
        <td>${escapeHtml(professorName(entry.professorId))}</td>
        <td>${Number(entry.hours).toFixed(1)}</td>
        <td>${escapeHtml(entry.remarks)}</td>
        <td><button class="tiny danger" data-delete-progress="${entry.id}">Delete</button></td>
      </tr>`;
    }).join("") || `<tr><td colspan="7" class="empty">No progress entries yet.</td></tr>`;
  }

  const masterBatches = filteredBatches();
  $("#masterBatchCount").textContent = `${masterBatches.length} of ${activeProgramBatches().length} ${activeProgram()} batches`;
  $("#masterBatchTable").innerHTML = masterBatches.map((batch) => `<tr>
    <td><strong>${escapeHtml(batch.name)}</strong></td>
    <td>${escapeHtml(batch.level)}</td>
    <td>${escapeHtml(batch.attempt)}</td>
    <td>${escapeHtml(batch.centre)}</td>
    <td>${escapeHtml(batch.targetDate)}</td>
    <td><input class="chat-id-input" value="${escapeHtml(batch.telegramChatId || "")}" data-batch-chat-id="${batch.id}" placeholder="-100..."></td>
    <td>
      <div class="batch-actions">
        <div class="swatches" title="Batch colour">
          ${paletteForLevel(batch.level).map((color) => `<button class="swatch ${batchColor(batch) === color ? "selected" : ""}" style="background:${escapeHtml(color)}" data-batch-color="${batch.id}" data-color="${escapeHtml(color)}" type="button" aria-label="Set batch colour"></button>`).join("")}
        </div>
        <button class="tiny ghost" data-move-batch="${batch.id}" data-direction="-1" type="button">Left</button>
        <button class="tiny ghost" data-move-batch="${batch.id}" data-direction="1" type="button">Right</button>
        <button class="tiny danger" data-delete-batch="${batch.id}">Delete</button>
      </div>
    </td>
  </tr>`).join("") || `<tr><td colspan="7" class="empty">No batches match these filters.</td></tr>`;

  renderProfessorManagement();

  renderSharePanels();
}

function renderProfessorManagement() {
  if (!$("#professorManagementTable")) return;
  const paperNos = activeProgramPaperNoOptions();
  const paperNoLabel = (paperNo) => {
    return `${paperCodeLabel(paperNo)} | ${paperSectionTitle(paperNo)}`;
  };
  const isUsaProgram = activeProgram() === "CMA USA";
  const headHeader = $("#headPaperHeader");
  if (headHeader) headHeader.textContent = isUsaProgram ? "Head Section" : "Head Papers";
  const selectedLevel = $("#professorManagementLevel")?.value || levelsForProgram()[0];
  const selectedPaper = $("#professorManagementPaper")?.value || paperNos[0] || "P1";
  setOptions($("#professorManagementLevel"), levelsForProgram(), selectedLevel);
  $("#professorManagementPaper").innerHTML = paperNos.map((paperNo) =>
    `<option value="${escapeHtml(paperNo)}" ${paperNo === selectedPaper ? "selected" : ""}>${escapeHtml(paperNoLabel(paperNo))}</option>`
  ).join("");
  $("[data-professor-view].active")?.classList.remove("active");
  $(`[data-professor-view="${professorManagementView}"]`)?.classList.add("active");
  $("#professorManagementLevel").disabled = professorManagementView !== "level";
  $("#professorManagementPaper").disabled = professorManagementView !== "paper";
  $("#professorManagementForm").innerHTML = [
    field("name", "New Professor Name", "text", "", "placeholder=\"Prof Name\" required"),
    `<label><span>Levels</span><select name="levels" multiple>${levelsForProgram().map((option) => `<option value="${escapeHtml(option)}" selected>${escapeHtml(option)}</option>`).join("")}</select></label>`,
    `<label><span>Paper / Section</span><select name="paperNos" multiple>${paperNos.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(paperCodeLabel(option))}</option>`).join("")}</select></label>`,
    `<div class="row-actions professor-add-actions"><button type="submit">Add Professor</button></div>`
  ].join("");
  const visibleProfessors = activeProgramProfessors().filter((professor) => {
    if (professorManagementView === "level") return (professor.levels || []).includes($("#professorManagementLevel").value);
    if (professorManagementView === "paper") {
      const paperNo = Number($("#professorManagementPaper").value.replace("P", ""));
      return (professor.papers || []).some((paper) => paperNumbers[paper] === paperNo);
    }
    return true;
  });
  $("#professorManagementTable").innerHTML = visibleProfessors.map((professor) => {
    const programPapers = (professor.papers || []).filter((paper) =>
      levelsForPaper(paper).some((level) => levelsForProgram().includes(level))
    );
    const selectedPaperNos = [...new Set(programPapers.map((paper) => paperNumbers[paper]).filter(Boolean))]
      .map((number) => `P${number}`);
    const mappedPaperChips = programPapers
      .map((paper) => `<span class="paper-chip" style="background:${escapeHtml(cellTint(professor.color || professorColor(professor.id)))}">${escapeHtml(paperShort(null, paper))}</span>`)
      .join("");
    return `<tr data-professor-row="${escapeHtml(professor.id)}">
      <td class="professor-name-cell">
        <input data-professor-name="${escapeHtml(professor.id)}" value="${escapeHtml(professor.name)}" style="border-color:${escapeHtml(professor.color || professorColor(professor.id))}">
        <strong>${escapeHtml(professor.name)}</strong>
      </td>
      <td>
        <select multiple data-professor-levels="${escapeHtml(professor.id)}">
          ${levelsForProgram().map((level) => `<option value="${escapeHtml(level)}" ${(professor.levels || []).includes(level) ? "selected" : ""}>${escapeHtml(level)}</option>`).join("")}
        </select>
      </td>
      <td>
        <select multiple data-professor-paper-nos="${escapeHtml(professor.id)}">
          ${paperNos.map((paperNo) => `<option value="${escapeHtml(paperNo)}" ${selectedPaperNos.includes(paperNo) ? "selected" : ""}>${escapeHtml(paperNoLabel(paperNo))}</option>`).join("")}
        </select>
      </td>
      <td>
        ${isUsaProgram ? `<span class="muted">Not used for CMA USA</span><div class="head-paper-grid hidden" data-professor-head-paper-nos="${escapeHtml(professor.id)}"></div>` : `<div class="head-paper-grid" data-professor-head-paper-nos="${escapeHtml(professor.id)}">
          ${paperNos.map((paperNo) => {
            const number = Number(String(paperNo).replace("P", ""));
            const selected = (professor.headPaperNos || []).includes(number);
            return `<label class="head-paper-chip ${selected ? "selected" : ""}" title="${escapeHtml(paperNoLabel(paperNo))}">
              <input type="checkbox" value="${escapeHtml(paperNo)}" ${selected ? "checked" : ""}>
              <span>${escapeHtml(paperCodeLabel(paperNo))}</span>
            </label>`;
          }).join("")}
        </div>`}
      </td>
      <td><div class="paper-chip-list">${mappedPaperChips || `<span class="muted">No papers mapped</span>`}</div></td>
      <td><input data-professor-login-id="${escapeHtml(professor.id)}" value="${escapeHtml(professorLoginId(professor))}"></td>
      <td><input data-professor-password="${escapeHtml(professor.id)}" value="${escapeHtml(professorPassword(professor))}"></td>
      <td class="professor-actions-cell">
        <div class="row-actions">
          <button class="tiny ghost" data-save-professor="${escapeHtml(professor.id)}" type="button">Save</button>
          <button class="tiny ghost" data-copy-professor-login="${escapeHtml(professor.id)}" type="button">Copy Login</button>
          <button class="tiny danger" data-delete-professor="${escapeHtml(professor.id)}" type="button">Delete</button>
        </div>
      </td>
    </tr>`;
  }).join("") || `<tr><td colspan="8" class="empty">No faculty found for this view.</td></tr>`;
}

function slotsForCurrentWeek({ applyWeeklyFilters = true } = {}) {
  const weekEnd = addDays(selectedWeekStart, 6);
  const selectedTimeSlots = applyWeeklyFilters ? selectedValues($("#timeSlotFilter")) : ["All"];
  const activeTimeSlots = selectedTimeSlots.length ? selectedTimeSlots : ["All"];
  const selectedDays = applyWeeklyFilters ? selectedValues($("#dayFilter")) : ["All"];
  const activeDays = selectedDays.length ? selectedDays : ["All"];
  return data.slots
    .filter((slot) => slot.date >= selectedWeekStart && slot.date <= weekEnd)
    .filter((slot) => activeTimeSlots.includes("All") || activeTimeSlots.includes(`${slot.start}|${slot.end}`))
    .filter((slot) => activeDays.includes("All") || activeDays.some((day) => slot.date === addDays(selectedWeekStart, Number(day))))
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function slotLine(slot, includeBatch = false, includeProfessor = false) {
  const batch = batchById(slot.batchId);
  const subject = paperShort(batch?.level, slot.subject);
  const bits = [
    `${fullDateLabel(slot.date)}`,
    `${formatTimeRange(slot.start, slot.end)}`,
    includeBatch ? batch?.name : "",
    subject,
    includeProfessor ? professorName(slotProfessorId(slot)) : "",
    isChangedTT(slot) ? "Changed" : ""
  ].filter(Boolean);
  return `- ${bits.join(" | ")}`;
}

function batchShareMessage(batchId) {
  const batch = batchById(batchId);
  if (!batch) return "";
  const lines = slotsForCurrentWeek({ applyWeeklyFilters: false })
    .filter((slot) => slot.batchId === batchId)
    .map((slot) => slotLine(slot, false, true));
  return [
    batch.name,
    `Week: ${fullDateLabel(selectedWeekStart)} to ${fullDateLabel(addDays(selectedWeekStart, 6))}`,
    "",
    lines.length ? lines.join("\n") : "No lectures scheduled for this batch in the selected week/filter.",
    "",
    "Please attend on time."
  ].join("\n");
}

function batchSlots(batchId) {
  return slotsForCurrentWeek({ applyWeeklyFilters: false }).filter((slot) => slot.batchId === batchId);
}

function renderInfoTable(target, title, rows) {
  const panel = $(target);
  if (!panel) return;
  panel.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    <table>
      <tbody>
        ${rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderBatchPreview(batchId) {
  const batch = batchById(batchId);
  if (!batch) {
    $("#batchTimetablePreview").innerHTML = `<div class="tt-empty">Select a batch.</div>`;
    renderInfoTable("#batchShareInfo", "Batch Information", []);
    return;
  }
  const slots = batchSlots(batchId);
  const lectureSlots = slots.filter((slot) => slotProfessorId(slot));
  const noLectureSlots = slots.filter((slot) => slot.noLecture);
  const professors = [...new Set(lectureSlots.map((slot) => professorName(slotProfessorId(slot))))];
  const papers = [...new Set(lectureSlots.map((slot) => timetableSubjectLabel(slot, batch)))];
  const totalHours = lectureSlots.reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
  const items = slots.map((slot) => {
    const professorId = slotProfessorId(slot);
    const subject = timetableSubjectLabel(slot, batch);
    const teacher = slot.noLecture ? "No Lecture" : professorName(professorId);
    return `<tr>
      <td class="tt-date-col">${escapeHtml(timetableDateLabel(slot.date))}</td>
      <td class="tt-time-col">${escapeHtml(timetableDisplayTime(slot, "start"))}</td>
      <td class="tt-time-col">${escapeHtml(timetableDisplayTime(slot, "end"))}</td>
      <td class="tt-faculty-col tt-lecture-col" style="background:${escapeHtml(timetableLectureTone(slot, professorTimetableTone(professorId)))}">
        <strong>${escapeHtml(teacher)}</strong>
        <span>${escapeHtml(subject)}</span>
      </td>
    </tr>`;
  }).join("");

  $("#batchTimetablePreview").innerHTML = `
    <div class="tt-fit-wrap">
      <div class="tt-batch-heading" style="background:${escapeHtml(batchTimetableTone(batch))}">
        <strong>${escapeHtml(batch.name)}</strong>
      </div>
      <table class="tt-format-table" aria-label="Batchwise timetable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Lecture Details</th>
          </tr>
        </thead>
        <tbody>${items || `<tr><td class="tt-empty-cell" colspan="4">No lectures scheduled for this selection.</td></tr>`}</tbody>
      </table>
    </div>
  `;
  renderInfoTable("#batchShareInfo", "Batch Information", [
    ["Batch", batch.name],
    ["Level", batch.level || ""],
    ["Centre", batch.centre || ""],
    ["Lectures", String(lectureSlots.length)],
    ["Faculty Hrs", `${totalHours.toFixed(1)} hrs`],
    ["No Lecture", String(noLectureSlots.length)],
    ["Professors", professors.join(", ") || "-"],
    ["Papers", papers.join(", ") || "-"]
  ]);
}

function renderProfessorPreview(professorId) {
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) {
    $("#professorTimetablePreview").innerHTML = `<div class="tt-empty">Select a professor.</div>`;
    renderInfoTable("#professorShareInfo", "Professor Information", []);
    return;
  }
  const slots = slotsForCurrentWeek({ applyWeeklyFilters: false })
    .filter((slot) => slotProfessorId(slot) === professorId)
    .sort((a, b) => `${a.date} ${a.start} ${batchById(a.batchId)?.name || ""}`.localeCompare(`${b.date} ${b.start} ${batchById(b.batchId)?.name || ""}`));
  const batches = [...new Set(slots.map((slot) => batchById(slot.batchId)?.name).filter(Boolean))];
  const centres = [...new Set(slots.map((slot) => batchById(slot.batchId)?.centre).filter(Boolean))];
  const papers = [...new Set(slots.map((slot) => timetableSubjectLabel(slot, batchById(slot.batchId))))];
  const totalHours = slots.reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
  const conflicts = slots.filter((slot) => slotHasProfessorConflict(slot)).length;
  const items = slots.map((slot) => {
    const batch = batchById(slot.batchId);
    const subject = timetableSubjectLabel(slot, batch);
    const topics = professorSlotTopicLines(slot);
    const batchLines = batchTimetableLines(batch).filter(Boolean);
    return `<tr>
      <td class="tt-date-col">${escapeHtml(timetableDateLabel(slot.date))}</td>
      <td class="tt-time-col">${escapeHtml(timetableDisplayTime(slot, "start"))}</td>
      <td class="tt-time-col">${escapeHtml(timetableDisplayTime(slot, "end"))}</td>
      <td class="tt-faculty-col tt-lecture-col" style="background:${escapeHtml(timetableLectureTone(slot, professorTimetableTone(professorId)))}">
        <strong>${escapeHtml(professor.name)}</strong>
        <span>${escapeHtml(subject)}</span>
        ${topics.length ? `<small class="tt-topic-lines">${topics.map((topic) => escapeHtml(topic)).join("<br>")}</small>` : ""}
      </td>
      <td class="tt-batch-detail-col" style="background:${escapeHtml(timetableLectureTone(slot, batchTimetableTone(batch)))}">
        ${batchLines.map((line) => `<strong>${escapeHtml(line)}</strong>`).join("")}
      </td>
    </tr>`;
  }).join("");

  $("#professorTimetablePreview").innerHTML = `
    <div class="tt-fit-wrap">
      <div class="tt-batch-heading" style="background:#e7abc8">
        <strong>${escapeHtml(professor.name)}</strong>
        <span>${escapeHtml(fullDateLabel(selectedWeekStart))} to ${escapeHtml(fullDateLabel(addDays(selectedWeekStart, 6)))}</span>
      </div>
      <table class="tt-format-table" aria-label="Professorwise schedule">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Lecture Details</th>
            <th>Batch Details</th>
          </tr>
        </thead>
        <tbody>${items || `<tr><td class="tt-empty-cell" colspan="5">No lectures scheduled for this professor.</td></tr>`}</tbody>
      </table>
    </div>
  `;
  renderInfoTable("#professorShareInfo", "Professor Information", [
    ["Professor", professor.name],
    ["Week", `${fullDateLabel(selectedWeekStart)} to ${fullDateLabel(addDays(selectedWeekStart, 6))}`],
    ["Lectures", String(slots.length)],
    ["Total Hrs", `${totalHours.toFixed(1)} hrs`],
    ["Batches", batches.join(", ") || "-"],
    ["Centres", centres.join(", ") || "-"],
    ["Papers", papers.join(", ") || "-"],
    ["Conflicts", String(conflicts)]
  ]);
}

function professorShareMessage(professorId) {
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) return "";
  const lines = slotsForCurrentWeek({ applyWeeklyFilters: false })
    .filter((slot) => slotProfessorId(slot) === professorId)
    .map((slot) => {
      const topics = professorSlotTopicLines(slot);
      const topicText = topics.length ? `\n  Topics: ${topics.join("; ")}` : "";
      return `${slotLine(slot, true, false)}${topicText}`;
    });
  return [
    professor.name,
    `Week: ${fullDateLabel(selectedWeekStart)} to ${fullDateLabel(addDays(selectedWeekStart, 6))}`,
    "",
    lines.length ? lines.join("\n") : "No lectures scheduled for this professor in the selected week/filter."
  ].join("\n");
}

function renderSharePanels() {
  const batches = [...activeProgramBatches()].sort((a, b) => a.name.localeCompare(b.name));
  const professors = activeProgramProfessors();
  const batchSelect = $("#batchShareSelect");
  const professorSelect = $("#professorShareSelect");
  const currentBatch = batchSelect.value;
  const currentProfessor = professorSelect.value;

  batchSelect.innerHTML = batches.map((batch) => `<option value="${escapeHtml(batch.id)}">${escapeHtml(batch.name)}</option>`).join("");
  if (batches.some((batch) => batch.id === currentBatch)) batchSelect.value = currentBatch;

  professorSelect.innerHTML = professors.map((professor) => `<option value="${escapeHtml(professor.id)}">${escapeHtml(professor.name)}</option>`).join("");
  if (professors.some((professor) => professor.id === currentProfessor)) professorSelect.value = currentProfessor;

  $("#batchShareText").value = batchShareMessage(batchSelect.value);
  $("#professorShareText").value = professorShareMessage(professorSelect.value);
  renderBatchPreview(batchSelect.value);
  renderProfessorPreview(professorSelect.value);
}

function topicById(id) {
  return topicMaster.find((topic) => topic.id === id);
}

function weekEndFor(start) {
  return addDays(start, 6);
}

function professorWeekSlots(professorId, weekStart = selectedWeekStart) {
  const weekEnd = weekEndFor(weekStart);
  return data.slots
    .filter((slot) => slot.date >= weekStart && slot.date <= weekEnd)
    .filter((slot) => slotProfessorId(slot) === professorId)
    .sort((a, b) => `${a.date} ${a.start} ${batchById(a.batchId)?.name || ""}`.localeCompare(`${b.date} ${b.start} ${batchById(b.batchId)?.name || ""}`));
}

function levelsForPaper(paper) {
  return Object.entries(cmaPapers)
    .filter(([, groups]) => Object.values(groups).flat().includes(paper))
    .map(([level]) => level);
}

function paperNosForProfessorBatch(professorId, batchId) {
  const professor = data.professors.find((item) => item.id === professorId);
  const batch = batchById(batchId);
  const levelPapers = batch ? papersForLevel(batch.level) : allPapers();
  return [...new Set((professor?.papers || [])
    .filter((paper) => levelPapers.includes(paper))
    .map((paper) => paperNumbers[paper])
    .filter(Boolean))]
    .sort((a, b) => a - b);
}

function papersFromLevelsAndNos(levels, paperNos) {
  return allPapers().filter((paper) =>
    paperNos.includes(paperNumbers[paper]) &&
    levelsForPaper(paper).some((level) => levels.includes(level))
  );
}

function plannedTopicLabel(plan) {
  const topic = topicById(plan.topicId);
  if (!topic) return "Topic";
  const available = timetableHoursForAllocation(plan);
  const actualGiven = actualHoursForTopicPlan(plan);
  const pending = Math.max(0, Number(plan.allocatedHours || 0) - actualGiven);
  return `P${topic.paperNo} | ${topic.chapterName} | ${topicAssignmentLabel(plan)} | Alloc ${Number(plan.allocatedHours || 0).toFixed(1)} | Available ${available.toFixed(1)} | Actual ${actualGiven.toFixed(1)} | Balance ${pending.toFixed(1)}`;
}

function plannedTopicText(plan) {
  const topic = topicById(plan.topicId);
  return topic ? `P${topic.paperNo} ${topic.chapterName}` : "";
}

function topicAssignmentLabel(plan) {
  if (plan.assignedByRole === "head") return `Head Assigned by ${professorName(plan.assignedByProfessorId)}`;
  if (plan.assignedByRole === "professor") return "Professor Assigned";
  return "TT Head Assigned";
}

function topicAssignmentBadge(plan) {
  const label = topicAssignmentLabel(plan);
  const tone = plan.assignedByRole === "head" ? "blue" : plan.assignedByRole === "professor" ? "green" : "yellow";
  return statusBadge(label, tone);
}

function paperNameByNo(paperNo) {
  return allPapers().find((paper) => paperNumbers[paper] === Number(paperNo)) || "Paper";
}

function professorTopicAssignmentCombos(professorId) {
  const seen = new Set();
  const headPaperNos = (data.professors.find((professor) => professor.id === professorId)?.headPaperNos || []).map(Number);
  const headCombos = headPaperNos.flatMap((paperNo) =>
    activeProgramBatches()
      .filter((batch) => papersForLevel(batch.level).some((paper) => paperNumbers[paper] === paperNo))
      .map((batch) => ({
        key: `${batch.id}|${paperNo}`,
        batchId: batch.id,
        paperNo,
        label: `${batch.name} | ${batch.centre} | ${paperCodeLabel(paperNo)} ${paperNameByNo(paperNo)}`
      }))
  );
  const assignedPlanCombos = data.topicPlans
    .filter((plan) => plan.professorId === professorId)
    .map((plan) => {
      const batch = batchById(plan.batchId);
      const paperNo = paperForPlan(plan);
      if (!batch || !paperNo || batchProgram(batch) !== activeProgram()) return null;
      return {
        key: `${batch.id}|${paperNo}`,
        batchId: batch.id,
        paperNo,
        label: `${batch.name} | ${batch.centre} | ${paperCodeLabel(paperNo)} ${paperNameByNo(paperNo)}`
      };
    })
    .filter(Boolean);
  return [...headCombos, ...assignedPlanCombos]
    .filter((combo) => {
      if (seen.has(combo.key)) return false;
      seen.add(combo.key);
      return true;
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

function professorAssignedTopicIds(professorId, batchId, paperNo) {
  return new Set(data.topicPlans
    .filter((plan) =>
      plan.professorId === professorId &&
      plan.batchId === batchId &&
      paperForPlan(plan) === Number(paperNo)
    )
    .map((plan) => plan.topicId));
}

function professorHasAssignedTopicForSlot(professorId, slot) {
  const paperNo = paperNumbers[slotSubject(slot)];
  return Boolean(slot && paperNo && data.topicPlans.some((plan) =>
    plan.professorId === professorId &&
    plan.batchId === slot.batchId &&
    plan.topicId &&
    paperForPlan(plan) === paperNo
  ));
}

function topicPlanOwner(batchId, topicId) {
  return data.topicPlans.find((plan) => plan.batchId === batchId && plan.topicId === topicId);
}

function professorIsSubjectHead(professorId, paperNo) {
  const professor = data.professors.find((item) => item.id === professorId);
  return Boolean(professor && (professor.headPaperNos || []).map(Number).includes(Number(paperNo)));
}

function eligibleProfessorsForBatchPaper(batchId, paperNo) {
  const batch = batchById(batchId);
  const paper = paperNameByNo(paperNo);
  const assignedIds = new Set(data.slots
    .filter((slot) => slot.batchId === batchId)
    .filter((slot) => paperNumbers[slotSubject(slot)] === Number(paperNo))
    .map((slot) => slotProfessorId(slot))
    .filter(Boolean));
  return activeProgramProfessors()
    .filter((professor) =>
      professor.id === loggedInProfessorId() ||
      assignedIds.has(professor.id) ||
      ((professor.levels || []).includes(batch?.level) && (professor.papers || []).includes(paper))
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderProfessorSelfTopicForm(professorId) {
  const form = $("#professorSelfTopicForm");
  if (!form) return;
  const combos = professorTopicAssignmentCombos(professorId);
  const professor = data.professors.find((item) => item.id === professorId);
  const isAnyHead = Boolean((professor?.headPaperNos || []).length);
  if (!combos.length) {
    form.innerHTML = `<div class="empty wide">${isAnyHead ? "No batch found for this head paper/section." : "No chapter assigned by Head Professor yet."}</div>`;
    return;
  }
  const currentComboKey = form.elements?.comboKey?.value || combos[0].key;
  const selectedCombo = combos.find((combo) => combo.key === currentComboKey) || combos[0];
  const topics = topicMaster.filter((topic) => topic.paperNo === selectedCombo.paperNo);
  const isHead = professorIsSubjectHead(professorId, selectedCombo.paperNo);
  const targetProfessorId = isHead
    ? (form.elements?.targetProfessorId?.value || professorId)
    : professorId;
  const targetProfessor = data.professors.find((professor) => professor.id === targetProfessorId) || data.professors.find((professor) => professor.id === professorId);
  const timetableHours = timetableHoursForAllocation({
    professorId: targetProfessor?.id || professorId,
    batchId: selectedCombo.batchId,
    paperNo: selectedCombo.paperNo
  });
  const ownPlans = data.topicPlans.filter((plan) =>
    plan.professorId === (targetProfessor?.id || professorId) &&
    plan.batchId === selectedCombo.batchId &&
    paperForPlan(plan) === selectedCombo.paperNo
  );
  const ownTopicIds = new Set(ownPlans.map((plan) => plan.topicId));
  const ownHours = ownPlans.reduce((sum, plan) => sum + Number(plan.allocatedHours || 0), 0);
  const targetOptions = isHead
    ? eligibleProfessorsForBatchPaper(selectedCombo.batchId, selectedCombo.paperNo)
    : [];
  const allowedTopicIds = professorAssignedTopicIds(professorId, selectedCombo.batchId, selectedCombo.paperNo);
  const visibleTopics = isHead ? topics : topics.filter((topic) => allowedTopicIds.has(topic.id));
  const readOnlyAssignedRows = !isHead
    ? data.topicPlans
      .filter((plan) =>
        plan.professorId === professorId &&
        plan.batchId === selectedCombo.batchId &&
        paperForPlan(plan) === selectedCombo.paperNo
      )
      .map((plan) => ({ plan, topic: topicById(plan.topicId) }))
      .filter((row) => row.topic)
    : [];
  form.innerHTML = [
    selectField("comboKey", "Batch / Paper", combos.map((combo) => ({ value: combo.key, label: combo.label })), selectedCombo.key),
    isHead ? selectField("targetProfessorId", "Assign Topics To", targetOptions.map((professor) => ({ value: professor.id, label: professor.name })), targetProfessor?.id || professorId) : "",
    `<div class="self-topic-summary">
      <strong>${ownHours.toFixed(1)} hrs selected</strong>
      <span>${isHead ? `${timetableHours.toFixed(1)} timetable hrs available for ${escapeHtml(targetProfessor?.name || "this professor")}` : "Assigned chapters are locked by Head Professor"}</span>
    </div>`,
    isHead ? `<div class="topic-checklist self-topic-list wide">
      ${visibleTopics.map((topic) => {
        const owner = topicPlanOwner(selectedCombo.batchId, topic.id);
        const ownedByOther = owner && owner.professorId !== (targetProfessor?.id || professorId);
        const ownerName = ownedByOther ? professorName(owner.professorId) : "";
        const checked = ownTopicIds.has(topic.id);
        const locked = ownedByOther;
        return `<label class="topic-check ${locked ? "locked-topic" : ""}">
          <input name="topicIds" type="checkbox" value="${escapeHtml(topic.id)}" ${checked ? "checked" : ""} ${locked ? "disabled" : ""}>
          <span>P${topic.paperNo} | ${escapeHtml(topic.chapterName)}${ownedByOther ? ` | Taken by ${escapeHtml(ownerName)}` : ""}</span>
          <input class="topic-hours" name="topicHours_${escapeHtml(topic.id)}" type="number" min="0" step="0.5" value="${Number(owner?.allocatedHours || topic.standardHours || 0).toFixed(1)}" ${locked ? "disabled" : ""}>
        </label>`;
      }).join("") || `<div class="empty">No topics found for this paper.</div>`}
    </div>` : `<div class="readonly-topic-list wide">
      ${readOnlyAssignedRows.map(({ plan, topic }) => `<div class="readonly-topic-row">
        <strong>${escapeHtml(paperCodeLabel(topic.paperNo))} | ${escapeHtml(topic.chapterName)}</strong>
        <span>${Number(plan.allocatedHours || 0).toFixed(1)} hrs assigned by ${escapeHtml(professorName(plan.assignedByProfessorId))}</span>
      </div>`).join("") || `<div class="empty">No chapter assigned to you for this batch/paper yet.</div>`}
    </div>`,
    isHead ? `<div class="row-actions wide"><button type="submit">Save Head Topic Allocation</button></div>` : ""
  ].join("");
}

function saveProfessorSelfTopicSelection(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const professorId = loggedInProfessorId() || $("#professorLoginSelect")?.value || "";
  const combo = professorTopicAssignmentCombos(professorId).find((item) => item.key === form.elements.comboKey.value);
  if (!professorId || !combo) return;
  const isHead = professorIsSubjectHead(professorId, combo.paperNo);
  if (!isHead) {
    alert("Only Head Professor can assign chapters. Please ask the Head Professor to allocate topics to you.");
    return;
  }
  const targetProfessorId = isHead ? (form.elements.targetProfessorId?.value || professorId) : professorId;
  const selectedTopicIds = new Set(Array.from(form.querySelectorAll('input[name="topicIds"]:checked')).map((input) => input.value));

  selectedTopicIds.forEach((topicId) => {
    const topic = topicById(topicId);
    if (!topic) return;
    const existingOwner = topicPlanOwner(combo.batchId, topicId);
    if (existingOwner && existingOwner.professorId !== targetProfessorId) return;
    const existingOwn = data.topicPlans.find((plan) =>
      plan.professorId === targetProfessorId &&
      plan.batchId === combo.batchId &&
      plan.topicId === topicId
    );
    const hours = Number(form.elements[`topicHours_${topicId}`]?.value || topic.standardHours || 0);
    const payload = {
      professorId: targetProfessorId,
      batchId: combo.batchId,
      slotId: "",
      topicId,
      paperNo: topic.paperNo,
      weekStart: selectedWeekStart,
      allocatedHours: hours,
      givenHours: existingOwn ? Number(existingOwn.givenHours || 0) : 0,
      selfAssigned: false,
      assignedByProfessorId: professorId,
      assignedByRole: "head"
    };
    if (existingOwn) Object.assign(existingOwn, payload);
    else data.topicPlans.push({ id: uid("tp"), ...payload });
  });

  data.topicPlans = data.topicPlans.filter((plan) =>
    !(plan.professorId === targetProfessorId &&
      plan.batchId === combo.batchId &&
      paperForPlan(plan) === combo.paperNo &&
      (plan.selfAssigned || plan.assignedByProfessorId === professorId) &&
      !selectedTopicIds.has(plan.topicId))
  );

  saveData();
  renderProfessorSelfTopicForm(professorId);
  renderProfessorPlanning();
  renderSharePanels();
  if (isProfessorMode() && cloudSyncUrl()) saveCloudData({ silent: true });
}

function slotHoursById(slotId) {
  const slot = data.slots.find((item) => item.id === slotId);
  return slot ? hoursBetween(slot.start, slot.end) : 0;
}

function relatedTopicPlans(plan, throughWeekStart = "") {
  return data.topicPlans.filter((item) =>
    item.professorId === plan.professorId &&
    item.batchId === plan.batchId &&
    item.topicId === plan.topicId &&
    (!throughWeekStart || item.weekStart <= throughWeekStart)
  );
}

function timetableHoursForTopicPlan(plan, throughWeekStart = "") {
  return relatedTopicPlans(plan, throughWeekStart)
    .reduce((sum, item) => sum + (slotHoursById(item.slotId) || Number(item.allocatedHours || 0)), 0);
}

function actualHoursForTopicPlan(plan, throughWeekStart = "") {
  const relatedIds = relatedTopicPlans(plan, throughWeekStart).map((item) => item.id);
  const actual = data.actualLectures
    .filter((entry) => relatedIds.includes(entry.topicPlanId))
    .reduce((sum, entry) => sum + Number(entry.actualHours || 0), 0);
  if (actual > 0) return actual;
  return relatedTopicPlans(plan, throughWeekStart).reduce((sum, item) => sum + Number(item.givenHours || 0), 0);
}

function paperForPlan(plan) {
  const topic = topicById(plan.topicId);
  if (topic?.paperNo) return topic.paperNo;
  return Number(plan.paperNo || 0);
}

function timetableHoursForAllocation(plan, from = "", to = "") {
  const paperNo = paperForPlan(plan);
  return data.slots
    .filter((slot) => slotProfessorId(slot) === plan.professorId)
    .filter((slot) => slot.batchId === plan.batchId)
    .filter((slot) => paperNumbers[slotSubject(slot)] === paperNo)
    .filter((slot) => slotInDateRange(slot, from, to))
    .reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
}

function monthValue(dateText) {
  return String(dateText || "").slice(0, 7);
}

function lastDateOfMonth(monthText) {
  const [year, month] = monthText.split("-").map(Number);
  return formatDateInput(new Date(year, month, 0));
}

function monthRange(monthText) {
  const month = monthText || monthValue(selectedWeekStart);
  return {
    month,
    from: `${month}-01`,
    to: lastDateOfMonth(month)
  };
}

function professorHoursRange() {
  const month = $("#professorHoursMonth")?.value || monthValue(selectedWeekStart);
  const fallbackFrom = month ? `${month}-01` : selectedWeekStart;
  const fallbackTo = month ? lastDateOfMonth(month) : weekEndFor(selectedWeekStart);
  return {
    month,
    from: $("#professorHoursFrom")?.value || fallbackFrom,
    to: $("#professorHoursTo")?.value || fallbackTo
  };
}

function slotInDateRange(slot, from, to) {
  return (!from || slot.date >= from) && (!to || slot.date <= to);
}

function renderProfessorHoursFilters() {
  if (!$("#professorHoursMonth")) return;
  const range = professorHoursRange();
  $("#professorHoursMonth").value = range.month;
  $("#professorHoursFrom").value = range.from;
  $("#professorHoursTo").value = range.to;
}

function professorBranchHourSummary(from = "", to = "") {
  const map = new Map();
  data.slots
    .filter((slot) => slotProfessorId(slot))
    .filter((slot) => slotInDateRange(slot, from, to))
    .forEach((slot) => {
      const batch = batchById(slot.batchId);
      const professorId = slotProfessorId(slot);
      const branch = batch?.centre || "Unknown";
      const key = `${professorId}|${branch}`;
      const current = map.get(key) || { professorName: professorName(professorId), branch, hours: 0 };
      current.hours += hoursBetween(slot.start, slot.end);
      map.set(key, current);
    });
  return Array.from(map.values()).sort((a, b) => `${a.professorName} ${a.branch}`.localeCompare(`${b.professorName} ${b.branch}`));
}

function professorBatchHourReport(professorId, weekStart, selectedPaper = "All", from = "", to = "") {
  const map = new Map();
  data.slots
    .filter((slot) => slotProfessorId(slot) === professorId)
    .filter((slot) => selectedPaper === "All" || slotSubject(slot) === selectedPaper)
    .filter((slot) => slotInDateRange(slot, from, to))
    .forEach((slot) => {
      const batch = batchById(slot.batchId);
      const paper = slotSubject(slot);
      const key = `${professorId}|${slot.batchId}|${paper}`;
      const current = map.get(key) || {
        professorName: professorName(professorId),
        batchName: batch?.name || "",
        branch: batch?.centre || "",
        paper: paperShort(batch?.level, paper),
        weekHours: 0,
        totalHours: 0
      };
      const hours = hoursBetween(slot.start, slot.end);
      current.totalHours += hours;
      if (slot.date >= weekStart && slot.date <= weekEndFor(weekStart)) current.weekHours += hours;
      map.set(key, current);
    });
  return Array.from(map.values()).sort((a, b) => `${a.professorName} ${a.batchName} ${a.paper}`.localeCompare(`${b.professorName} ${b.batchName} ${b.paper}`));
}

function renderProfessorMonthlySummary() {
  const table = $("#professorMonthlySummaryTable");
  if (!table) return;
  const levelSelect = $("#professorSummaryLevel");
  const professorSelect = $("#professorSummaryProfessor");
  const monthInput = $("#professorSummaryMonth");
  const selectedLevel = levelSelect?.value || "All";
  const selectedProfessor = professorSelect?.value || "";
  const range = monthRange(monthInput?.value || monthValue(selectedWeekStart));
  if (monthInput) monthInput.value = range.month;
  const map = new Map();

  activeProgramProfessors().forEach((professor) => {
    if (selectedLevel !== "All" && !(professor.levels || []).includes(selectedLevel)) return;
    if (selectedProfessor && professor.id !== selectedProfessor) return;
    map.set(professor.id, {
      professorId: professor.id,
      professorName: professor.name,
      levels: new Set(professor.levels || []),
      monthHours: 0,
      actualHours: 0,
      hasDummy: false
    });
  });

  data.slots
    .filter((slot) => slotProfessorId(slot))
    .filter((slot) => !selectedProfessor || slotProfessorId(slot) === selectedProfessor)
    .filter((slot) => slotInDateRange(slot, range.from, range.to))
    .filter((slot) => batchMatchesLevelAttempt(batchById(slot.batchId), selectedLevel, "All"))
    .forEach((slot) => {
      const professorId = slotProfessorId(slot);
      const professor = data.professors.find((item) => item.id === professorId);
      const batch = batchById(slot.batchId);
      if (!map.has(professorId)) {
        map.set(professorId, {
          professorId,
          professorName: professorName(professorId),
          levels: new Set(professor?.levels || []),
          monthHours: 0,
          actualHours: 0,
          hasDummy: false
        });
      }
      const row = map.get(professorId);
      const hours = hoursBetween(slot.start, slot.end);
      row.monthHours += hours;
      if (batch) row.levels.add(batch.level);
      row.hasDummy = row.hasDummy || isDummy(slot);
    });

  data.actualLectures
    .filter((entry) => entry.professorId)
    .filter((entry) => !selectedProfessor || entry.professorId === selectedProfessor)
    .filter((entry) => entry.date >= range.from && entry.date <= range.to)
    .filter((entry) => batchMatchesLevelAttempt(batchById(entry.batchId), selectedLevel, "All"))
    .forEach((entry) => {
      const professorId = entry.professorId;
      const professor = data.professors.find((item) => item.id === professorId);
      const batch = batchById(entry.batchId);
      if (!map.has(professorId)) {
        map.set(professorId, {
          professorId,
          professorName: professorName(professorId),
          levels: new Set(professor?.levels || []),
          monthHours: 0,
          actualHours: 0,
          hasDummy: false
        });
      }
      const row = map.get(professorId);
      row.actualHours += Number(entry.actualHours || 0);
      if (batch) row.levels.add(batch.level);
      row.hasDummy = row.hasDummy || isDummy(entry);
    });

  const rows = Array.from(map.values())
    .sort((a, b) => b.monthHours - a.monthHours || a.professorName.localeCompare(b.professorName));

  table.innerHTML = rows.map((row) => {
    return `<tr class="${row.hasDummy ? "dummy-row" : ""}">
      <td><strong>${escapeHtml(row.professorName)}</strong></td>
      <td>${escapeHtml(Array.from(row.levels).filter((level) => selectedLevel === "All" || level === selectedLevel).join(", ") || selectedLevel)}</td>
      <td>${row.monthHours.toFixed(1)}</td>
      <td>${row.actualHours.toFixed(1)}</td>
    </tr>`;
  }).join("") || `<tr><td colspan="4" class="empty">No hours found for the selected professor, level, and month.</td></tr>`;
}

function attemptsForLevel(level = "All") {
  return [...new Set(activeProgramBatches()
    .filter((batch) => level === "All" || batch.level === level)
    .map((batch) => batch.attempt)
    .filter(Boolean))]
    .sort();
}

function fillLevelSelect(select, currentValue = "", includeAll = false) {
  if (!select) return;
  const levels = includeAll ? ["All", ...levelsForProgram()] : levelsForProgram();
  const selected = levels.includes(currentValue) ? currentValue : levels[0];
  select.innerHTML = levels.map((level) => `<option value="${escapeHtml(level)}" ${level === selected ? "selected" : ""}>${escapeHtml(level === "All" ? "All Levels" : level)}</option>`).join("");
}

function fillAttemptSelect(select, level = "All", currentValue = "") {
  if (!select) return;
  const attempts = ["All", ...attemptsForLevel(level)];
  const selected = attempts.includes(currentValue) ? currentValue : attempts[0];
  select.innerHTML = attempts.map((attempt) => `<option value="${escapeHtml(attempt)}" ${attempt === selected ? "selected" : ""}>${escapeHtml(attempt === "All" ? "All Attempts" : attempt)}</option>`).join("");
}

function batchMatchesLevelAttempt(batch, level = "All", attempt = "All") {
  return (!level || level === "All" || batch?.level === level) &&
    (!attempt || attempt === "All" || batch?.attempt === attempt);
}

function isDummy(item) {
  return String(item?.dummyData || "").startsWith(dummyReportTag) || String(item?.id || "").startsWith("dummy-report-");
}

function dummyBadge(item) {
  return isDummy(item) ? `<span class="status blue">DUMMY</span>` : `<span class="status green">LIVE</span>`;
}

function isChangedTT(item) {
  return item?.importSource === changedTTSource;
}

function notifyProfessorChange(professorId, slot, oldSlot = null, reason = "Timetable changed") {
  if (!professorId || !slot) return;
  const batch = batchById(slot.batchId);
  const oldText = oldSlot
    ? `${fullDateLabel(oldSlot.date)} ${formatTimeRange(oldSlot.start, oldSlot.end)} | ${batchById(oldSlot.batchId)?.name || ""} | ${oldSlot.noLecture ? "No Lecture" : paperShort(batchById(oldSlot.batchId)?.level, slotSubject(oldSlot))}`
    : "";
  const newText = `${fullDateLabel(slot.date)} ${formatTimeRange(slot.start, slot.end)} | ${batch?.name || ""} | ${slot.noLecture ? "No Lecture" : paperShort(batch?.level, slotSubject(slot))}`;
  data.notifications.unshift({
    id: uid("ntf"),
    professorId,
    slotId: slot.id,
    createdAt: new Date().toISOString(),
    reason,
    oldText,
    newText,
    read: false
  });
  data.notifications = data.notifications.slice(0, 250);
}

function renderProfessorNotifications(professorId) {
  const panel = $("#professorNotifications");
  if (!panel) return;
  const rows = (data.notifications || [])
    .filter((item) => item.professorId === professorId)
    .slice(0, 8);
  panel.innerHTML = rows.length ? rows.map((item) => `<article class="professor-notification ${item.read ? "" : "unread"}">
    <strong>${escapeHtml(item.reason)}</strong>
    <span>${escapeHtml(new Date(item.createdAt).toLocaleString())}</span>
    ${item.oldText ? `<small>Old: ${escapeHtml(item.oldText)}</small>` : ""}
    <small>New: ${escapeHtml(item.newText)}</small>
  </article>`).join("") : `<div class="empty">No timetable change notifications for this professor.</div>`;
}

function sourceBadge(item) {
  if (isChangedTT(item)) return `<span class="status red">Changed</span>`;
  if (item?.importSource === "whatsapp-timetable-image-export") return `<span class="status blue">WHATSAPP</span>`;
  if (String(item?.importSource || "").startsWith(googleSheetSource.importSource)) return `<span class="status blue">GOOGLE SHEET</span>`;
  return "";
}

function statusBadge(label, tone = "green") {
  return `<span class="status ${tone}">${escapeHtml(label)}</span>`;
}

function renderProfessorPlanningInsights() {
  const panel = $("#professorPlanningInsights");
  if (!panel) return;
  const timetableHours = data.slots.reduce((sum, slot) => sum + (slotProfessorId(slot) ? hoursBetween(slot.start, slot.end) : 0), 0);
  const actualHours = data.actualLectures.reduce((sum, entry) => sum + Number(entry.actualHours || 0), 0);
  const syllabusHours = data.topicPlans.reduce((sum, plan) => sum + Number(plan.allocatedHours || 0), 0);
  const dummySlots = data.slots.filter(isDummy).length;
  const dummyActual = data.actualLectures.filter(isDummy).length;
  const coveredPct = timetableHours ? Math.round((actualHours / timetableHours) * 100) : 0;
  panel.innerHTML = [
    { label: "Syllabus allocated", value: `${syllabusHours.toFixed(1)} hrs`, note: `${data.topicPlans.length} topic allocations` },
    { label: "Timetable capacity", value: `${timetableHours.toFixed(1)} hrs`, note: `${data.slots.filter((slot) => slotProfessorId(slot)).length} professor sessions` },
    { label: "Actual teaching", value: `${actualHours.toFixed(1)} hrs`, note: `${coveredPct}% of timetable hours` },
    { label: "Dummy preview data", value: `${dummySlots + dummyActual}`, note: "Tagged and removable later" }
  ].map((item) => `<article class="insight-card">
    <span>${escapeHtml(item.label)}</span>
    <strong>${escapeHtml(item.value)}</strong>
    <small>${escapeHtml(item.note)}</small>
  </article>`).join("");
}

function renderProfessorPlanning() {
  if (!$("#professorPlanSelect")) return;
  const levelSelect = $("#professorAllocationLevel");
  const attemptSelect = $("#professorAllocationAttempt");
  const professorSelect = $("#professorPlanSelect");
  const paperSelect = $("#professorPlanPaperFilter");
  const timetableLevelSelect = $("#professorTimetableLevel");
  const timetableAttemptSelect = $("#professorTimetableAttempt");
  const timetableProfessorSelect = $("#professorTimetableSelect");
  const timetablePaperSelect = $("#professorTimetablePaperFilter");
  const hoursLevelSelect = $("#professorHoursLevel");
  const hoursAttemptSelect = $("#professorHoursAttempt");
  const hoursProfessorSelect = $("#professorHoursProfessorSelect");
  const summaryLevelSelect = $("#professorSummaryLevel");
  const summaryProfessorSelect = $("#professorSummaryProfessor");
  const summaryMonthInput = $("#professorSummaryMonth");
  const batchMasterLevelSelect = $("#batchMasterLevel");
  const batchMasterAttemptSelect = $("#batchMasterAttempt");
  const currentLevel = levelSelect.value || "Inter";
  const currentAttempt = attemptSelect.value || "All";
  const currentProfessor = professorSelect.value;
  const currentPaper = paperSelect.value || "All";

  fillLevelSelect(levelSelect, currentLevel, false);
  fillAttemptSelect(attemptSelect, levelSelect.value, currentAttempt);
  const levelProfessors = activeProgramProfessors().filter((professor) => professor.levels.includes(levelSelect.value));
  professorSelect.innerHTML = levelProfessors.map((professor) => `<option value="${escapeHtml(professor.id)}">${escapeHtml(professor.name)}</option>`).join("");
  if (levelProfessors.some((professor) => professor.id === currentProfessor)) professorSelect.value = currentProfessor;
  const professor = data.professors.find((item) => item.id === professorSelect.value);
  const assignedAllocationPapers = professor
    ? [...new Set(data.slots
      .filter((slot) => slotProfessorId(slot) === professor.id)
      .filter((slot) => batchById(slot.batchId)?.level === levelSelect.value)
      .map((slot) => slotSubject(slot))
      .filter((paper) => papersForLevel(levelSelect.value).includes(paper)))]
    : [];
  const allocationPapers = assignedAllocationPapers.length
    ? assignedAllocationPapers
    : (professor?.papers || []).filter((paper) => papersForLevel(levelSelect.value).includes(paper));
  const paperOptions = ["All", ...allocationPapers];
  paperSelect.innerHTML = paperOptions.map((paper) => `<option value="${escapeHtml(paper)}" ${paper === currentPaper ? "selected" : ""}>${escapeHtml(paper === "All" ? "All Subjects" : paperShort(levelSelect.value, paper))}</option>`).join("");
  if (!paperOptions.includes(currentPaper)) paperSelect.value = "All";

  fillLevelSelect(timetableLevelSelect, timetableLevelSelect.value || levelSelect.value, true);
  fillAttemptSelect(timetableAttemptSelect, timetableLevelSelect.value, timetableAttemptSelect.value || "All");
  fillLevelSelect(hoursLevelSelect, hoursLevelSelect.value || levelSelect.value, true);
  fillAttemptSelect(hoursAttemptSelect, hoursLevelSelect.value, hoursAttemptSelect.value || "All");
  fillLevelSelect(summaryLevelSelect, summaryLevelSelect.value || levelSelect.value, true);
  if (summaryProfessorSelect) {
    const current = summaryProfessorSelect.value;
    const summaryProfessors = activeProgramProfessors().filter((item) => summaryLevelSelect.value === "All" || item.levels.includes(summaryLevelSelect.value));
    summaryProfessorSelect.innerHTML = summaryProfessors.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join("");
    if (summaryProfessors.some((item) => item.id === current)) summaryProfessorSelect.value = current;
    else if (summaryProfessors.some((item) => item.id === professor?.id)) summaryProfessorSelect.value = professor.id;
  }
  if (summaryMonthInput && !summaryMonthInput.value) summaryMonthInput.value = monthValue(selectedWeekStart);
  fillLevelSelect(batchMasterLevelSelect, batchMasterLevelSelect.value || levelSelect.value, true);
  fillAttemptSelect(batchMasterAttemptSelect, batchMasterLevelSelect.value, batchMasterAttemptSelect.value || "All");

  [timetableProfessorSelect, hoursProfessorSelect].forEach((select) => {
    const current = select.value;
    const professors = activeProgramProfessors();
    select.innerHTML = professors.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join("");
    if (professors.some((item) => item.id === current)) select.value = current;
    else if (professor?.id) select.value = professor.id;
  });
  const timetableProfessor = data.professors.find((item) => item.id === timetableProfessorSelect.value);
  const currentTimetablePaper = timetablePaperSelect.value || "All";
  const timetablePaperOptions = ["All", ...(timetableProfessor?.papers || [])];
  timetablePaperSelect.innerHTML = timetablePaperOptions.map((paper) => `<option value="${escapeHtml(paper)}" ${paper === currentTimetablePaper ? "selected" : ""}>${escapeHtml(paper === "All" ? "All Papers" : paperShort(null, paper))}</option>`).join("");
  if (!timetablePaperOptions.includes(currentTimetablePaper)) timetablePaperSelect.value = "All";

  renderTopicPlanner();
}

function renderTopicPlanner() {
  if (!$("#topicPlanForm")) return;
  const professorId = $("#professorPlanSelect").value;
  const selectedPaper = $("#professorPlanPaperFilter").value || "All";
  const selectedLevel = $("#professorAllocationLevel").value || "Inter";
  const selectedAttempt = $("#professorAllocationAttempt").value || "All";
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) return;
  const assignedSlots = data.slots.filter((slot) => slotProfessorId(slot) === professorId);
  const assignedBatchIds = new Set(assignedSlots.map((slot) => slot.batchId));
  const eligibleBatches = data.batches
    .filter((batch) => assignedBatchIds.has(batch.id))
    .filter((batch) => batchMatchesLevelAttempt(batch, selectedLevel, selectedAttempt));
  const currentBatchId = $("#topicPlanForm")?.elements?.batchId?.value || eligibleBatches[0]?.id || "";
  const selectedBatch = batchById(currentBatchId);
  const assignedPapersForBatch = selectedBatch
    ? [...new Set(assignedSlots
      .filter((slot) => slot.batchId === selectedBatch.id)
      .map((slot) => slotSubject(slot))
      .filter((paper) => papersForLevel(selectedBatch.level).includes(paper)))]
    : [];
  const batchPaperOptions = assignedPapersForBatch.length
    ? assignedPapersForBatch
    : selectedBatch
      ? professor.papers.filter((paper) => papersForLevel(selectedBatch.level).includes(paper))
      : [];
  const paperOptions = selectedPaper === "All" ? batchPaperOptions : batchPaperOptions.filter((paper) => paper === selectedPaper);
  const currentPaperNo = Number($("#topicPlanForm")?.elements?.paperNo?.value || paperNumbers[paperOptions[0]] || 0);
  const selectedPaperNo = paperOptions.some((paper) => paperNumbers[paper] === currentPaperNo)
    ? currentPaperNo
    : Number(paperNumbers[paperOptions[0]] || 0);
  const topics = topicMaster.filter((topic) => topic.paperNo === selectedPaperNo);
  const assignedPlans = data.topicPlans.filter((plan) =>
    plan.professorId === professorId &&
    plan.batchId === currentBatchId &&
    paperForPlan(plan) === selectedPaperNo
  );
  const assignedTopicIds = assignedPlans.map((plan) => plan.topicId);
  const assignedPlanIds = assignedPlans.map((plan) => plan.id);
  const selectedAllocatedHours = assignedPlans.reduce((sum, plan) => sum + Number(plan.allocatedHours || 0), 0);
  const selectedTimetableHours = timetableHoursForAllocation({ professorId, batchId: currentBatchId, paperNo: selectedPaperNo });
  const selectedActualHours = data.actualLectures
    .filter((entry) => entry.professorId === professorId && entry.batchId === currentBatchId)
    .filter((entry) => assignedPlanIds.includes(entry.topicPlanId) || paperNumbers[slotSubject(data.slots.find((slot) => slot.id === entry.slotId))] === selectedPaperNo)
    .reduce((sum, entry) => sum + Number(entry.actualHours || 0), 0);
  const monthRangeForProfessor = professorHoursRange();
  const professorMonthHours = data.slots
    .filter((slot) => slotProfessorId(slot) === professorId)
    .filter((slot) => slotInDateRange(slot, monthRangeForProfessor.from, monthRangeForProfessor.to))
    .filter((slot) => batchMatchesLevelAttempt(batchById(slot.batchId), selectedLevel, selectedAttempt))
    .reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
  const professorActualMonthHours = data.actualLectures
    .filter((entry) => entry.professorId === professorId)
    .filter((entry) => entry.date >= monthRangeForProfessor.from && entry.date <= monthRangeForProfessor.to)
    .filter((entry) => batchMatchesLevelAttempt(batchById(entry.batchId), selectedLevel, selectedAttempt))
    .reduce((sum, entry) => sum + Number(entry.actualHours || 0), 0);
  const timetableGap = selectedTimetableHours - selectedAllocatedHours;
  const syllabusBalance = Math.max(0, selectedAllocatedHours - selectedActualHours);
  const decisionRows = [
    ["Professor month timetable", `${professorMonthHours.toFixed(1)} hrs`],
    ["Professor month actual", `${professorActualMonthHours.toFixed(1)} hrs`],
    ["Selected batch allocated", `${selectedAllocatedHours.toFixed(1)} hrs`],
    ["Selected batch timetable", `${selectedTimetableHours.toFixed(1)} hrs`],
    ["Actual hrs taken", `${selectedActualHours.toFixed(1)} hrs`],
    ["Syllabus balance", `${syllabusBalance.toFixed(1)} hrs`],
    ["Timetable gap", timetableGap < 0 ? `Short ${Math.abs(timetableGap).toFixed(1)} hrs` : `Extra ${timetableGap.toFixed(1)} hrs`]
  ];

  if (!eligibleBatches.length || !paperOptions.length) {
    $("#topicPlanForm").innerHTML = `<div class="empty wide">Assign this professor in the Weekly Timetable first. Only assigned batches and papers will appear here for topic allocation.</div>`;
    $("#topicPlanTable").innerHTML = `<tr><td colspan="9" class="empty">No timetable assignment found for ${escapeHtml(professor.name)} in the selected level/attempt.</td></tr>`;
    renderProfessorTimetableReport();
    renderProfessorHoursFilters();
    renderProfessorMonthlySummary();
    renderProfessorActualBatchHours();
    renderBatchAllocationMaster();
    renderProfessorPlanningInsights();
    return;
  }

  $("#topicPlanForm").innerHTML = [
    selectField("batchId", "Batch Name", eligibleBatches
      .map((batch) => ({ value: batch.id, label: `${batch.name} | ${batch.centre}` })), currentBatchId),
    selectField("paperNo", "Paper", paperOptions
      .map((paper) => ({ value: paperNumbers[paper], label: paperShort(selectedBatch?.level, paper) })), selectedPaperNo),
    `<div class="allocation-workbench wide">
      <div>
        <div class="topic-checklist compact-topic-list">
          ${topics.map((topic) => `<label class="topic-check">
            <input name="topicIds" type="checkbox" value="${escapeHtml(topic.id)}" ${assignedTopicIds.includes(topic.id) ? "checked" : ""}>
            <span>P${topic.paperNo} | ${escapeHtml(topic.chapterName)}</span>
            <input class="topic-hours" name="topicHours_${escapeHtml(topic.id)}" type="number" min="0" step="0.5" value="${Number(assignedPlans.find((plan) => plan.topicId === topic.id)?.allocatedHours || topic.standardHours || 0).toFixed(1)}" aria-label="Allocated hours for ${escapeHtml(topic.chapterName)}">
          </label>`).join("") || `<div class="empty">No topics found for the selected batch and paper.</div>`}
        </div>
        <div class="row-actions allocation-actions"><button type="submit">Save Syllabus Allocation</button></div>
      </div>
      <aside class="decision-card">
        <h3>Professor Decision Info</h3>
        <table>
          <tbody>
            ${decisionRows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}
          </tbody>
        </table>
      </aside>
    </div>`
  ].join("");

  const hourRange = professorHoursRange();
  const allocationRows = professorSyllabusAllocationRows(professorId, selectedPaper, selectedLevel, selectedAttempt);
  $("#topicPlanTable").innerHTML = allocationRows.map((row) => {
    const available = timetableHoursForAllocation({ professorId: row.professorId, batchId: row.batchId, paperNo: row.paperNo });
    const gap = available - row.allocatedHours;
    const status = gap < 0 ? statusBadge(`Short ${Math.abs(gap).toFixed(1)}h`, "red") : statusBadge(`OK +${gap.toFixed(1)}h`, "green");
    return `<tr class="${row.hasDummy ? "dummy-row" : ""}">
    <td><strong>${escapeHtml(row.batchName)}</strong></td>
    <td>${escapeHtml(row.branch)}</td>
    <td>${escapeHtml(row.level)}</td>
    <td>${escapeHtml(row.attempt)}</td>
      <td>${escapeHtml(row.professorName)}</td>
      <td>${escapeHtml(row.paper)}</td>
      <td>${row.allocatedHours.toFixed(1)}</td>
      <td>${available.toFixed(1)}</td>
    <td>${row.assignmentTags} ${row.hasDummy ? dummyBadge({ dummyData: dummyReportTag }) : ""} ${status}</td>
  </tr>`;
  }).join("") || `<tr><td colspan="9" class="empty">No syllabus allocation saved for ${escapeHtml(professor.name)}.</td></tr>`;

  renderProfessorTimetableReport();
  renderProfessorHoursFilters();
  renderProfessorMonthlySummary();
  renderProfessorActualBatchHours();
  renderBatchAllocationMaster();
  renderProfessorPlanningInsights();
}

function professorSyllabusAllocationRows(professorId, selectedPaper = "All", selectedLevel = "All", selectedAttempt = "All") {
  const map = new Map();
  data.topicPlans
    .filter((plan) => plan.professorId === professorId)
    .filter((plan) => selectedPaper === "All" || paperForPlan(plan) === paperNumbers[selectedPaper])
    .forEach((plan) => {
      const batch = batchById(plan.batchId);
      const topic = topicById(plan.topicId);
      if (!batch || !topic || !batchMatchesLevelAttempt(batch, selectedLevel, selectedAttempt)) return;
      const hasAssignedLecture = data.slots.some((slot) =>
        slotProfessorId(slot) === professorId &&
        slot.batchId === batch.id &&
        paperNumbers[slotSubject(slot)] === topic.paperNo
      );
      if (!hasAssignedLecture) return;
      const key = `${plan.batchId}|${topic.paperNo}`;
      const current = map.get(key) || {
        batchName: batch.name,
        batchId: batch.id,
        branch: batch.centre,
        level: batch.level,
        attempt: batch.attempt || "",
        professorName: professorName(professorId),
        professorId,
        paperNo: topic.paperNo,
        paper: `P${topic.paperNo} ${topic.paperName}`,
        allocatedHours: 0,
        hasDummy: false,
        assignmentTags: new Map()
      };
      current.allocatedHours += Number(plan.allocatedHours || 0);
      current.hasDummy = current.hasDummy || isDummy(plan);
      current.assignmentTags.set(topicAssignmentLabel(plan), topicAssignmentBadge(plan));
      map.set(key, current);
    });
  return Array.from(map.values()).map((row) => ({
    ...row,
    assignmentTags: Array.from(row.assignmentTags.values()).join(" ")
  })).sort((a, b) => `${a.batchName} ${a.paper}`.localeCompare(`${b.batchName} ${b.paper}`));
}

function renderProfessorTimetableReport() {
  const professorId = $("#professorTimetableSelect")?.value || $("#professorPlanSelect").value;
  const selectedPaper = $("#professorTimetablePaperFilter")?.value || "All";
  const selectedLevel = $("#professorTimetableLevel")?.value || "All";
  const selectedAttempt = $("#professorTimetableAttempt")?.value || "All";
  const rows = data.slots
    .filter((slot) => slotProfessorId(slot) === professorId)
    .filter((slot) => selectedPaper === "All" || slotSubject(slot) === selectedPaper)
    .filter((slot) => batchMatchesLevelAttempt(batchById(slot.batchId), selectedLevel, selectedAttempt))
    .sort((a, b) => `${a.date} ${a.start} ${batchById(a.batchId)?.name || ""}`.localeCompare(`${b.date} ${b.start} ${batchById(b.batchId)?.name || ""}`));
  $("#professorPlanTimetable").innerHTML = rows.map((slot) => {
    const batch = batchById(slot.batchId);
    return `<tr class="${isDummy(slot) ? "dummy-row" : ""}">
      <td>${escapeHtml(fullDateLabel(slot.date))}</td>
      <td>${escapeHtml(formatTimeRange(slot.start, slot.end))}</td>
      <td><strong>${escapeHtml(batch?.name || "")}</strong></td>
      <td>${escapeHtml(batch?.centre || "")}</td>
      <td>${escapeHtml(batch?.level || "")}</td>
      <td>${escapeHtml(batch?.attempt || "")}</td>
      <td>${escapeHtml(paperShort(batch?.level, slotSubject(slot)))}</td>
      <td>${hoursBetween(slot.start, slot.end).toFixed(1)}</td>
      <td>${dummyBadge(slot)}</td>
    </tr>`;
  }).join("") || `<tr><td colspan="9" class="empty">No timetable hours found for this professor and paper.</td></tr>`;
}

function renderProfessorActualBatchHours() {
  const professorId = $("#professorHoursProfessorSelect")?.value || $("#professorPlanSelect").value;
  const selectedLevel = $("#professorHoursLevel")?.value || "All";
  const selectedAttempt = $("#professorHoursAttempt")?.value || "All";
  const range = professorHoursRange();
  const map = new Map();
  data.slots
    .filter((slot) => slotProfessorId(slot) === professorId)
    .filter((slot) => slotInDateRange(slot, range.from, range.to))
    .filter((slot) => batchMatchesLevelAttempt(batchById(slot.batchId), selectedLevel, selectedAttempt))
    .forEach((slot) => {
      const batch = batchById(slot.batchId);
      const paper = slotSubject(slot);
      const key = `${slot.batchId}|${paper}`;
      const current = map.get(key) || {
        professorName: professorName(professorId),
        batchName: batch?.name || "",
        branch: batch?.centre || "",
        level: batch?.level || "",
        attempt: batch?.attempt || "",
        paper: paperShort(batch?.level, paper),
        timetableHours: 0,
        actualHours: 0,
        hasDummy: false
      };
      current.timetableHours += hoursBetween(slot.start, slot.end);
      current.hasDummy = current.hasDummy || isDummy(slot);
      map.set(key, current);
    });
  data.actualLectures
    .filter((entry) => entry.professorId === professorId)
    .filter((entry) => (!range.from || entry.date >= range.from) && (!range.to || entry.date <= range.to))
    .filter((entry) => batchMatchesLevelAttempt(batchById(entry.batchId), selectedLevel, selectedAttempt))
    .forEach((entry) => {
      const slot = data.slots.find((item) => item.id === entry.slotId);
      const batch = batchById(entry.batchId);
      const paper = slot ? slotSubject(slot) : "";
      const key = `${entry.batchId}|${paper}`;
      const current = map.get(key) || {
        professorName: professorName(professorId),
        batchName: batch?.name || "",
        branch: batch?.centre || "",
        level: batch?.level || "",
        attempt: batch?.attempt || "",
        paper: paper ? paperShort(batch?.level, paper) : "",
        timetableHours: 0,
        actualHours: 0,
        hasDummy: false
      };
      current.actualHours += Number(entry.actualHours || 0);
      current.hasDummy = current.hasDummy || isDummy(entry);
      map.set(key, current);
    });
  const rows = Array.from(map.values()).sort((a, b) => `${a.batchName} ${a.paper}`.localeCompare(`${b.batchName} ${b.paper}`));
  $("#professorBatchHoursReport").innerHTML = rows.map((row) => {
    const variance = row.actualHours - row.timetableHours;
    const tone = Math.abs(variance) <= 0.25 ? "green" : variance < 0 ? "yellow" : "red";
    const label = variance < -0.25 ? `Pending ${Math.abs(variance).toFixed(1)}h` : variance > 0.25 ? `Extra ${variance.toFixed(1)}h` : "Matched";
    return `<tr class="${row.hasDummy ? "dummy-row" : ""}">
    <td>${escapeHtml(row.professorName)}</td>
    <td><strong>${escapeHtml(row.batchName)}</strong></td>
    <td>${escapeHtml(row.branch)}</td>
    <td>${escapeHtml(row.level)}</td>
    <td>${escapeHtml(row.attempt)}</td>
    <td>${escapeHtml(row.paper)}</td>
    <td>${row.timetableHours.toFixed(1)}</td>
    <td>${row.actualHours.toFixed(1)}</td>
    <td>${row.hasDummy ? dummyBadge({ dummyData: dummyReportTag }) : ""} ${statusBadge(label, tone)}</td>
  </tr>`;
  }).join("") || `<tr><td colspan="9" class="empty">No timetable or actual hours found for this professor in the selected range.</td></tr>`;
}

function renderBatchAllocationMaster() {
  const selectedLevel = $("#batchMasterLevel")?.value || "All";
  const selectedAttempt = $("#batchMasterAttempt")?.value || "All";
  const map = new Map();
  data.topicPlans.forEach((plan) => {
    const batch = batchById(plan.batchId);
    const topic = topicById(plan.topicId);
    if (!batch || !topic || !batchMatchesLevelAttempt(batch, selectedLevel, selectedAttempt)) return;
    const key = `${batch.id}|${topic.paperNo}|${plan.professorId}`;
    const current = map.get(key) || {
      batchId: batch.id,
      professorId: plan.professorId,
      paperNo: topic.paperNo,
      batchName: batch.name,
      branch: batch.centre,
      level: batch.level,
      attempt: batch.attempt || "",
      paper: `P${topic.paperNo} ${topic.paperName}`,
      professorName: professorName(plan.professorId),
      allocatedHours: 0,
      hasDummy: false
    };
    current.allocatedHours += Number(plan.allocatedHours || 0);
    current.hasDummy = current.hasDummy || isDummy(plan);
    map.set(key, current);
  });
  const rows = Array.from(map.values()).map((row) => {
    const timetableHours = data.slots
      .filter((slot) => slotProfessorId(slot) === row.professorId)
      .filter((slot) => slot.batchId === row.batchId)
      .filter((slot) => paperNumbers[slotSubject(slot)] === row.paperNo)
      .reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
    const actualHours = data.actualLectures
      .filter((entry) => entry.professorId === row.professorId)
      .filter((entry) => entry.batchId === row.batchId)
      .filter((entry) => {
        const plan = data.topicPlans.find((item) => item.id === entry.topicPlanId);
        return plan ? paperForPlan(plan) === row.paperNo : true;
      })
      .reduce((sum, entry) => sum + Number(entry.actualHours || 0), 0);
    const balance = Math.max(0, row.allocatedHours - actualHours);
    const utilization = row.allocatedHours ? Math.round((actualHours / row.allocatedHours) * 100) : 0;
    const gap = timetableHours - row.allocatedHours;
    return {
      ...row,
      timetableHours,
      actualHours,
      balance,
      utilization,
      gap
    };
  }).sort((a, b) => `${a.batchName} ${a.paper} ${a.professorName}`.localeCompare(`${b.batchName} ${b.paper} ${b.professorName}`));

  renderBatchAllocationInsights(rows);

  $("#batchAllocationMasterReport").innerHTML = rows.map((row) => {
    const tone = row.gap < 0 ? "red" : row.utilization >= 80 ? "green" : row.utilization >= 40 ? "yellow" : "blue";
    const label = row.gap < 0 ? `Need ${Math.abs(row.gap).toFixed(1)}h TT` : row.utilization >= 80 ? "Strong" : row.utilization >= 40 ? "In Progress" : "Planned";
    return `<tr class="${row.hasDummy ? "dummy-row" : ""}">
    <td><strong>${escapeHtml(row.batchName)}</strong></td>
    <td>${escapeHtml(row.branch)}</td>
    <td>${escapeHtml(row.level)}</td>
    <td>${escapeHtml(row.attempt)}</td>
    <td>${escapeHtml(row.paper)}</td>
    <td>${escapeHtml(row.professorName)}</td>
    <td>${row.allocatedHours.toFixed(1)}</td>
    <td>${row.timetableHours.toFixed(1)}</td>
    <td>${row.actualHours.toFixed(1)}</td>
    <td>${row.balance.toFixed(1)}</td>
    <td>
      <div class="meter" aria-label="Utilization ${row.utilization}%">
        <span style="width:${Math.min(row.utilization, 100)}%"></span>
      </div>
      <small>${row.utilization}%</small>
    </td>
    <td>${row.hasDummy ? dummyBadge({ dummyData: dummyReportTag }) : ""} ${statusBadge(label, tone)}</td>
  </tr>`;
  }).join("") || `<tr><td colspan="12" class="empty">No syllabus allocation saved yet.</td></tr>`;
}

function renderBatchAllocationInsights(rows) {
  const panel = $("#batchAllocationInsights");
  if (!panel) return;
  const allocated = rows.reduce((sum, row) => sum + row.allocatedHours, 0);
  const timetable = rows.reduce((sum, row) => sum + row.timetableHours, 0);
  const actual = rows.reduce((sum, row) => sum + row.actualHours, 0);
  const shortRows = rows.filter((row) => row.gap < 0).length;
  const avgUtilization = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.utilization, 0) / rows.length) : 0;
  panel.innerHTML = [
    { label: "Allocated syllabus", value: `${allocated.toFixed(1)} hrs`, note: `${rows.length} batch-paper-professor rows` },
    { label: "Timetable available", value: `${timetable.toFixed(1)} hrs`, note: `${shortRows} rows need more TT hours` },
    { label: "Actual completed", value: `${actual.toFixed(1)} hrs`, note: `${avgUtilization}% average utilization` },
    { label: "Open balance", value: `${Math.max(0, allocated - actual).toFixed(1)} hrs`, note: "Remaining syllabus hours" }
  ].map((item) => `<article class="insight-card">
    <span>${escapeHtml(item.label)}</span>
    <strong>${escapeHtml(item.value)}</strong>
    <small>${escapeHtml(item.note)}</small>
  </article>`).join("");
}

function renderProfessorLogin() {
  if (!$("#professorLoginSelect")) return;
  const professorSelect = $("#professorLoginSelect");
  const fixedProfessorId = loggedInProfessorId();
  const currentProfessor = professorSelect.value;
  const loginProfessors = fixedProfessorId ? data.professors.filter((professor) => professor.id === fixedProfessorId) : activeProgramProfessors();
  professorSelect.innerHTML = loginProfessors.map((professor) => `<option value="${escapeHtml(professor.id)}">${escapeHtml(professor.name)}</option>`).join("");
  if (fixedProfessorId && loginProfessors.some((professor) => professor.id === fixedProfessorId)) professorSelect.value = fixedProfessorId;
  if (loginProfessors.some((professor) => professor.id === currentProfessor)) professorSelect.value = currentProfessor;
  if (fixedProfessorId && loginProfessors.some((professor) => professor.id === fixedProfessorId)) professorSelect.value = fixedProfessorId;
  professorSelect.disabled = Boolean(fixedProfessorId);
  if ($("#professorLoginWeek")) $("#professorLoginWeek").value = selectedWeekStart;

  const professorId = professorSelect.value;
  const slots = professorWeekSlots(professorId, selectedWeekStart);
  const editingActual = data.actualLectures.find((entry) => entry.id === editingActualLectureId && entry.professorId === professorId);
  const currentSlotId = editingActual?.slotId || $("#professorActualForm")?.elements?.slotId?.value || slots[0]?.id || "";
  const selectedSlot = slots.find((slot) => slot.id === currentSlotId) || slots[0];
  const selectedSlotPaperNo = selectedSlot ? paperNumbers[slotSubject(selectedSlot)] : null;
  const allocationPlans = data.topicPlans.filter((plan) =>
    plan.professorId === professorId &&
    (!selectedSlot || plan.batchId === selectedSlot.batchId) &&
    (!selectedSlotPaperNo || paperForPlan(plan) === selectedSlotPaperNo)
  );
  const currentTopicPlanId = editingActual?.topicPlanId || $("#professorActualForm")?.elements?.topicPlanId?.value || "";
  const selectedPlan = allocationPlans.find((plan) => plan.id === currentTopicPlanId) || allocationPlans[0];
  const planOptions = [
    { value: "", label: allocationPlans.length ? "Select allocated topic" : "No topic assigned by Head Professor" },
    ...allocationPlans.map((plan) => ({ value: plan.id, label: plannedTopicLabel(plan) }))
  ];
  const professorNeedsAssignedTopic = isProfessorMode();
  const topicLocked = professorNeedsAssignedTopic && !selectedPlan;

  $("#professorActualForm").innerHTML = [
    selectField("slotId", "Lecture", slots.map((slot) => {
      const batch = batchById(slot.batchId);
      return { value: slot.id, label: `${dayLabel(slot.date)} ${formatTimeRange(slot.start, slot.end)} | ${batch?.name || ""} | ${paperShort(batch?.level, slotSubject(slot))}` };
    }), selectedSlot?.id || ""),
    `<input type="hidden" name="actualLectureId" value="${escapeHtml(editingActual?.id || "")}">`,
    selectField("topicPlanId", "Allocated Topic", planOptions, selectedPlan?.id || ""),
    field("topic", "Actual Topic Taught", "text", editingActual?.topic || (selectedPlan ? plannedTopicText(selectedPlan) : ""), `placeholder="${topicLocked ? "Ask Head Professor to assign chapter first" : "Write exact topic taught"}" ${professorNeedsAssignedTopic ? "readonly" : ""} required`),
    field("timeIn", "Time In", "time", editingActual?.timeIn || selectedSlot?.start || "07:00", "required"),
    field("timeOut", "Time Out", "time", editingActual?.timeOut || selectedSlot?.end || "10:00", "required"),
    field("breakMinutes", "Break Minutes", "number", editingActual?.breakMinutes || "0", "min=\"0\" step=\"5\" required"),
    field("actualHours", "Actual Hrs", "number", editingActual ? Number(editingActual.actualHours || 0).toFixed(2) : selectedSlot ? hoursBetween(selectedSlot.start, selectedSlot.end).toFixed(2) : "0.00", "min=\"0\" step=\"0.01\" readonly required"),
    `<label><span>Lecture Status</span><select name="lectureStatus"><option value="Completed" ${editingActual?.lectureStatus === "Completed" ? "selected" : ""}>Completed</option><option value="Partly Completed" ${editingActual?.lectureStatus === "Partly Completed" ? "selected" : ""}>Partly Completed</option><option value="Not Completed" ${editingActual?.lectureStatus === "Not Completed" ? "selected" : ""}>Not Completed</option></select></label>`,
    field("pendingPortion", "Pending Portion", "text", editingActual?.pendingPortion || "", "placeholder=\"If anything remains, write here\""),
    `<label class="wide"><span>Remarks</span><textarea name="remarks" placeholder="Covered examples, test planned, extra practice needed...">${escapeHtml(editingActual?.remarks || "")}</textarea></label>`,
    topicLocked ? `<div class="empty wide">Head Professor has not assigned any chapter for this lecture/batch yet. Actual entry is locked until chapter allocation is done.</div>` : "",
    `<div class="row-actions wide">${editingActual ? `<button class="ghost" type="button" data-cancel-actual-edit="true">Cancel Edit</button>` : ""}<button type="submit" ${topicLocked ? "disabled" : ""}>${editingActual ? "Update Actual Lecture" : "Submit Actual Lecture"}</button></div>`
  ].join("");
  updateActualHoursField($("#professorActualForm"));

  const records = data.actualLectures
    .filter((entry) => entry.professorId === professorId)
    .sort((a, b) => `${b.date} ${b.timeIn || ""}`.localeCompare(`${a.date} ${a.timeIn || ""}`));
  $("#professorActualCount").textContent = `${records.length} records`;
  $("#professorActualTable").innerHTML = records.map((entry) => {
    const batch = batchById(entry.batchId);
    return `<tr class="actual-record-row ${entry.id === editingActualLectureId ? "editing-row" : ""}" data-edit-actual="${escapeHtml(entry.id)}" title="Click to edit this actual lecture">
      <td>${escapeHtml(fullDateLabel(entry.date))}</td>
      <td>${escapeHtml(formatTimeRange(entry.start, entry.end))}</td>
      <td><strong>${escapeHtml(batch?.name || "")}</strong></td>
      <td>${escapeHtml(entry.topic)}</td>
      <td>${Number(entry.actualHours || 0).toFixed(1)}</td>
      <td>${escapeHtml(formatTimeRange(entry.timeIn || entry.start, entry.timeOut || entry.end))}${Number(entry.breakMinutes || 0) ? ` / Break ${Number(entry.breakMinutes)} min` : ""}</td>
      <td>${escapeHtml(entry.lectureStatus || "Completed")}</td>
      <td>${escapeHtml(entry.pendingPortion || "")}</td>
      <td>${escapeHtml(entry.remarks || "")}</td>
      <td><button class="tiny danger" data-delete-actual="${escapeHtml(entry.id)}" type="button">Delete</button></td>
    </tr>`;
  }).join("") || `<tr><td colspan="10" class="empty">No actual lecture submitted by this professor yet.</td></tr>`;
  renderProfessorNotifications(professorId);
  renderProfessorSelfTopicForm(professorId);
}

function renderWeeklyInsights(dates, visibleBatches, activeTimeSlots) {
  const panel = $("#weeklyInsights");
  if (!panel) return;
  const weekSlots = data.slots.filter((slot) =>
    dates.includes(slot.date) &&
    visibleBatches.some((batch) => batch.id === slot.batchId) &&
    (activeTimeSlots.includes("All") || activeTimeSlots.includes(`${slot.start}|${slot.end}`))
  );
  const planned = weekSlots.filter((slot) => slotProfessorId(slot));
  const noLectures = weekSlots.filter((slot) => slot.noLecture);
  const conflicts = planned.filter((slot) => slotHasProfessorConflict(slot));
  const hours = planned.reduce((sum, slot) => sum + hoursBetween(slot.start, slot.end), 0);
  const seenPairs = new Set();
  const conflictRows = conflicts.flatMap((slot) => {
    const batch = batchById(slot.batchId);
    return overlappingProfessorSlots(slot)
      .filter((other) => !conflictIsApproved(slot, other))
      .map((other) => {
        const key = conflictPairKey(slot, other);
        if (seenPairs.has(key)) return "";
        seenPairs.add(key);
        const otherBatch = batchById(other.batchId);
        return `<tr>
          <td>${escapeHtml(dayLabel(slot.date))}</td>
          <td>${escapeHtml(formatTimeRange(slot.start, slot.end))}</td>
          <td>${escapeHtml(professorName(slotProfessorId(slot)))}</td>
          <td>${escapeHtml(batch?.name || "")}</td>
          <td>${escapeHtml(otherBatch?.name || "")}</td>
          <td><button class="tiny ghost" data-approve-conflict="${escapeHtml(slot.id)}" data-other-slot="${escapeHtml(other.id)}" type="button">Approve Combined</button></td>
        </tr>`;
      });
  }).join("");
  panel.innerHTML = [
    { label: "Planned lectures", value: planned.length, note: `${hours.toFixed(1)} faculty hours` },
    { label: "No lecture", value: noLectures.length, note: "Breaks / cancelled lectures" },
    { label: "Conflicts", value: conflicts.length, note: conflicts.length ? "Click to view details" : "No same-time professor clash", conflict: true }
  ].map((item) => `<article class="insight-card ${item.conflict ? "clickable-insight" : ""}" ${item.conflict ? "data-toggle-conflicts=\"true\"" : ""}>
    <span>${escapeHtml(item.label)}</span>
    <strong>${escapeHtml(item.value)}</strong>
    <small>${escapeHtml(item.note)}</small>
  </article>`).join("") + `<div class="weekly-conflict-details hidden" id="weeklyConflictDetails">
    <strong>Conflict Details</strong>
    <div class="table-wrap mini-table-wrap">
      <table>
        <thead><tr><th>Date</th><th>Time</th><th>Professor</th><th>Batch</th><th>Also Assigned To</th><th>Action</th></tr></thead>
        <tbody>${conflictRows || `<tr><td colspan="6" class="empty">No conflicts in current weekly view.</td></tr>`}</tbody>
      </table>
    </div>
  </div>`;
}

function renderWeeklyTable() {
  $("#weekStart").value = selectedWeekStart;
  const selectedDays = selectedValues($("#dayFilter"));
  const activeDays = selectedDays.length ? selectedDays : ["All"];
  const dates = activeDays.includes("All")
    ? Array.from({ length: 7 }, (_, index) => addDays(selectedWeekStart, index))
    : activeDays.map((day) => addDays(selectedWeekStart, Number(day)));
  const visibleBatches = filteredBatches();
  const selectedTimeSlots = selectedValues($("#timeSlotFilter"));
  const activeTimeSlots = selectedTimeSlots.length ? selectedTimeSlots : ["All"];
  const selectedProfessor = $("#professorFilter").value || "All";
  const columnWidth = Number(data.settings.weeklyColumnWidth || 180);
  const columnSizeInput = $("#weeklyColumnSize");
  if (columnSizeInput) columnSizeInput.value = columnWidth;
  const weeklyTable = $(".weekly-table");
  if (weeklyTable) {
    weeklyTable.style.setProperty("--weekly-column-width", `${columnWidth}px`);
      weeklyTable.style.minWidth = `${104 + 184 + (visibleBatches.length * columnWidth)}px`;
  }
  renderWeeklyInsights(dates, visibleBatches, activeTimeSlots);
  const slotsByCell = new Map(data.slots.map((slot) => [`${slot.batchId}|${slot.date}|${slot.start}|${slot.end}`, slot]));
  const activeProfessors = activeProgramProfessors();
  const professorOptionsByLevel = new Map();
  levelsForProgram().forEach((level) => {
    const levelPapers = papersForLevel(level);
    professorOptionsByLevel.set(level, activeProfessors
      .filter((professor) => professor.levels.includes(level))
      .flatMap((professor) => {
        const papers = professor.papers.filter((paper) => levelPapers.includes(paper));
        return (papers.length ? papers : []).map((paper) => ({
          professorId: professor.id,
          professorName: professor.name,
          paper,
          label: `${professor.name} : ${paperShort(level, paper)}`
        }));
      }));
  });
  const assignmentOptions = (batch, date, timeSlot, currentSlot, selectedProfessorId = "", selectedSubject = "") => {
    const options = [
      `<option value="">Open</option>`,
      `<option value="__no_lecture__" ${currentSlot?.noLecture ? "selected" : ""}>No Lecture</option>`
    ];
    const candidateSlots = data.slots.filter((slot) =>
      slot.id !== currentSlot?.id &&
      slot.date === date &&
      slotsOverlap({ date, start: timeSlot.start, end: timeSlot.end }, slot)
    );
    (professorOptionsByLevel.get(batch.level) || [])
      .filter((option) => option.professorId === selectedProfessorId || !candidateSlots.some((slot) => slotProfessorId(slot) === option.professorId))
      .forEach((option) => {
        const value = `${option.professorId}||${option.paper}`;
        const selected = option.professorId === selectedProfessorId && option.paper === selectedSubject ? "selected" : "";
        options.push(`<option value="${escapeHtml(value)}" ${selected}>${escapeHtml(option.label)}</option>`);
      });
    return options.join("");
    };

  const slotsForBoardCell = (batchId, date, timeSlot) => slotsByCell.get(`${batchId}|${date}|${timeSlot.start}|${timeSlot.end}`);

  $("#weeklyHead").innerHTML = `<tr>
    <th class="weekly-date-col">Date</th>
    <th class="weekly-time-col">Time Slot</th>
    ${visibleBatches.map((batch) => `<th style="background:${escapeHtml(batchColor(batch))}">
      <div class="batch-heading">
        <strong>${escapeHtml(batch.name)}</strong>
        <span>${escapeHtml(batch.level)} | ${escapeHtml(batch.centre)}</span>
      </div>
    </th>`).join("")}
  </tr>`;

  if (!visibleBatches.length) {
    $("#weeklyTable").innerHTML = `<tr><td colspan="3" class="empty">Create batches first, then this weekly matrix will show them as columns.</td></tr>`;
    return;
  }

  $("#weeklyTable").innerHTML = dates.flatMap((date) => {
    const visibleTimeSlots = activeTimeSlots.includes("All")
      ? timeSlotsForDate(date)
      : timeSlotsForDate(date).filter((slot) => activeTimeSlots.includes(`${slot.start}|${slot.end}`));
    return visibleTimeSlots.map((timeSlot, slotIndex) => {
      const dateCell = slotIndex === 0 ? `<td class="weekly-date-col" rowspan="${visibleTimeSlots.length}"><strong>${dayLabel(date)}</strong><br><span class="muted">${date}</span></td>` : "";
      const cells = visibleBatches.map((batch) => {
        const slot = slotsForBoardCell(batch.id, date, timeSlot);
        const professorId = slotProfessorId(slot || { batchId: batch.id, professorId: "" });
        const subject = slot ? slotSubject(slot) : "";
        const conflict = slot && professorId && slotHasProfessorConflict(slot);
        const noLecture = slot?.noLecture;
        const filled = slot && (professorId || noLecture);
        const hiddenByProfessor = selectedProfessor !== "All" && filled && professorId !== selectedProfessor;
        const cellClass = `${hiddenByProfessor ? "hidden-by-professor" : noLecture ? "no-lecture" : conflict ? "conflict" : filled ? "filled" : ""} ${isDummy(slot) ? "dummy-weekly" : ""}`;
        const assignmentStyle = noLecture ? `style="background:#e7f0fb"` : "";
        const meta = professorId
          ? `<div class="weekly-meta assignment-chip" style="background:${escapeHtml(professorColor(professorId))}">
              <strong title="${escapeHtml(professorName(professorId))}">${escapeHtml(professorName(professorId))}</strong>
              <span title="${escapeHtml(paperShort(batch.level, subject))}">${escapeHtml(paperShort(batch.level, subject))}</span>
            </div>`
          : noLecture
            ? `<div class="weekly-meta assignment-chip no-lecture-chip"><strong>No Lecture</strong><span>${escapeHtml(batch.name)}</span></div>`
            : `<div class="weekly-meta open-meta"></div>`;
        return `<td style="background:${escapeHtml(cellTint(batchColor(batch)))}">
          <div class="weekly-cell ${cellClass}">
            ${meta}
            <select class="assignment-select" ${assignmentStyle} data-weekly-cell="1" data-field="assignment" data-batch-id="${escapeHtml(batch.id)}" data-date="${escapeHtml(date)}" data-start="${escapeHtml(timeSlot.start)}" data-end="${escapeHtml(timeSlot.end)}">
              ${assignmentOptions(batch, date, timeSlot, slot, filled ? professorId : "", subject)}
            </select>
            <div class="weekly-badges">
              ${isDummy(slot) ? dummyBadge(slot) : ""}
              ${sourceBadge(slot)}
              ${noLecture ? `<span class="status blue">No Lecture</span>` : conflict ? `<span class="status red">Same professor</span>` : filled ? `<span class="status green">Planned</span>` : ""}
            </div>
          </div>
        </td>`;
      }).join("");
      return `<tr>
        ${dateCell}
        <td class="weekly-time-col">
          <div class="weekly-time-row">
            <div class="time-editor">
              <input class="time-part" data-time-date="${escapeHtml(date)}" data-time-start="${escapeHtml(timeSlot.start)}" data-time-end="${escapeHtml(timeSlot.end)}" data-field="start" type="text" value="${escapeHtml(formatTimeShort(timeSlot.start))}">
              <span>to</span>
              <input class="time-part" data-time-date="${escapeHtml(date)}" data-time-start="${escapeHtml(timeSlot.start)}" data-time-end="${escapeHtml(timeSlot.end)}" data-field="end" type="text" value="${escapeHtml(formatTimeShort(timeSlot.end))}">
            </div>
            <button class="tiny danger" data-delete-time-slot-date="${escapeHtml(date)}" data-delete-time-slot-start="${escapeHtml(timeSlot.start)}" data-delete-time-slot-end="${escapeHtml(timeSlot.end)}" type="button">Delete</button>
            <span class="muted">${hoursBetween(timeSlot.start, timeSlot.end).toFixed(1)} hrs</span>
          </div>
        </td>
        ${cells}
      </tr>`;
    })
  }).join("");
}

function addSlot(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const candidate = {
    id: uid("s"),
    batchId: form.elements.batchId.value,
    date: form.elements.date.value,
    start: form.elements.start.value,
    end: form.elements.end.value
  };
  if (hoursBetween(candidate.start, candidate.end) <= 0) {
    alert("End time must be after start time.");
    return;
  }
  const conflicts = conflictAlerts(candidate);
  if (conflicts.some((item) => item.tone === "red") && !confirm("This slot has a hard conflict. Add it anyway?")) return;
  data.slots.push(candidate);
  saveData();
}

function addWeeklyRow() {
  const range = prompt("Enter time slot, e.g. 4pm-6pm or 16:00-18:00");
  if (!range) return;
  const parsed = parseTimeRange(range);
  if (!parsed) {
    alert("Please enter a valid time slot like 7am-10am.");
    return;
  }
  const { start, end } = parsed;
  const exists = data.timeSlots.some((slot) => slot.start === start && slot.end === end);
  if (!exists) data.timeSlots.push({ start, end });
  data.timeSlots.sort((a, b) => a.start.localeCompare(b.start));
  renderFilters();
  saveData();
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function cleanSheetText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function googleSheetIdFromLink(link) {
  const text = cleanSheetText(link);
  const match = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/) || text.match(/^([a-zA-Z0-9-_]{20,})$/);
  return match?.[1] || "";
}

function googleSheetGvizUrl() {
  const input = $("#googleSheetLinkInput");
  const link = input?.value.trim() || data.settings.googleSheetLink || "";
  const sheetId = googleSheetIdFromLink(link) || googleSheetSource.id;
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(googleSheetSource.sheet)}`;
}

function renderGoogleSheetLinkField() {
  const input = $("#googleSheetLinkInput");
  if (input) input.value = data.settings.googleSheetLink || "";
}

function loadGoogleSheetTable() {
  return new Promise((resolve, reject) => {
    const callbackName = `googleSheetImport_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Sheet did not respond in time"));
    }, 20000);
    const cleanup = () => {
      window.clearTimeout(timer);
      delete window[callbackName];
      script.remove();
    };

    window[callbackName] = (response) => {
      cleanup();
      if (!response || response.status !== "ok" || !response.table) {
        reject(new Error(response?.errors?.[0]?.detailed_message || "Google Sheet returned no table data"));
        return;
      }
      resolve(response.table);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Could not load Google Sheet"));
    };
    script.src = `${googleSheetGvizUrl()}&tqx=responseHandler:${callbackName}`;
    document.head.appendChild(script);
  });
}

function googleTableToRows(table) {
  const headers = (table.cols || []).map((col) => cleanSheetText(col?.label || ""));
  const rows = (table.rows || []).map((row) =>
    Array.from({ length: headers.length }, (_, index) => {
      const cell = (row.c || [])[index];
      return String(cell?.f ?? cell?.v ?? "");
    })
  );
  return [headers, ...rows];
}

function parseSheetDate(value) {
  const text = cleanSheetText(value).replace(/\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b\.?/gi, "").trim();
  const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  let match = text.match(/Date\((\d{4}),\s*(\d{1,2}),\s*(\d{1,2})\)/i);
  if (match) return formatDateInput(new Date(Number(match[1]), Number(match[2]), Number(match[3])));

  match = text.match(/(\d{1,2})[-\s/]([A-Za-z]{3,})[-\s,/]?(\d{2,4})/);
  if (match) {
    const day = Number(match[1]);
    const month = months[match[2].slice(0, 3).toLowerCase()];
    const year = normalizeSheetYear(match[3]);
    if (month !== undefined) return formatDateInput(new Date(year, month, day));
  }

  match = text.match(/(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})/);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]) - 1;
    const year = normalizeSheetYear(match[3]);
    if (month >= 0 && month <= 11) return formatDateInput(new Date(year, month, day));
  }

  if (/^\d+(\.\d+)?$/.test(text)) {
    const serial = Number(text);
    if (serial > 20000) {
      const date = new Date(Math.round((serial - 25569) * 86400 * 1000));
      return formatDateInput(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    }
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) return formatDateInput(parsed);
  return "";
}

function normalizeSheetYear(value) {
  const year = Number(value);
  return year < 100 ? 2000 + year : year;
}

function parseSheetTime(value) {
  const text = cleanSheetText(value);
  const dateMatch = text.match(/Date\(\d{4},\s*\d{1,2},\s*\d{1,2},\s*(\d{1,2}),\s*(\d{1,2})/i);
  if (dateMatch) return `${String(Number(dateMatch[1])).padStart(2, "0")}:${String(Number(dateMatch[2])).padStart(2, "0")}`;
  const match = text.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!match) return "";
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const meridian = match[3]?.toUpperCase();
  if (meridian === "PM" && hour < 12) hour += 12;
  if (meridian === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function fixSheetTimeRange(start, end) {
  if (!start || !end) return { start, end };
  let [sh, sm] = start.split(":").map(Number);
  let [eh, em] = end.split(":").map(Number);
  if (sh >= 20 && eh <= 13) sh -= 12;
  if ((eh * 60 + em) <= (sh * 60 + sm) && eh < 12) eh += 12;
  if (eh >= 24) eh -= 12;
  return {
    start: `${String(sh).padStart(2, "0")}:${String(sm).padStart(2, "0")}`,
    end: `${String(eh).padStart(2, "0")}:${String(em).padStart(2, "0")}`
  };
}

function rawLevelFromBatchName(batchName) {
  const text = String(batchName || "").toUpperCase();
  if (isCmaUsaText(text)) return cmaUsaLevelFromText(text);
  if (text.includes("CMA FINAL")) return "Final";
  if (text.startsWith("CMAI")) return "Inter";
  return "Foundation";
}

function normalizeGoogleSubject(subjectText, batchName) {
  const text = cleanSheetText(subjectText).toLowerCase();
  const level = rawLevelFromBatchName(batchName);
  if (!text || text.includes("no lecture")) return "No Lecture";
  if (level === "CMA USA Part 1" || level === "CMA USA Part 2") {
    const part = level === "CMA USA Part 2" ? "Part 2" : "Part 1";
    const sectionMatch = text.match(/section\s*([a-f])|\bsec\s*([a-f])|\b([a-f])\b/i);
    const section = (sectionMatch?.[1] || sectionMatch?.[2] || sectionMatch?.[3] || "").toUpperCase();
    const subject = papersForLevel(level).find((paper) => paper.includes(`${part} - Section ${section}`));
    if (subject) return subject;
    if (text.includes("external") || text.includes("financial reporting")) return "CMA USA Part 1 - Section A: External Financial Reporting Decisions";
    if (text.includes("budget") || text.includes("forecast")) return "CMA USA Part 1 - Section B: Planning, Budgeting, and Forecasting";
    if (text.includes("performance")) return level === "CMA USA Part 2" ? "CMA USA Part 2 - Section A: Financial Statement Analysis" : "CMA USA Part 1 - Section C: Performance Management";
    if (text.includes("cost")) return "CMA USA Part 1 - Section D: Cost Management";
    if (text.includes("control")) return "CMA USA Part 1 - Section E: Internal Controls";
    if (text.includes("tech") || text.includes("analytics")) return "CMA USA Part 1 - Section F: Technology and Analytics";
    if (text.includes("corporate finance")) return "CMA USA Part 2 - Section B: Corporate Finance";
    if (text.includes("decision")) return "CMA USA Part 2 - Section C: Decision Analysis";
    if (text.includes("risk")) return "CMA USA Part 2 - Section D: Risk Management";
    if (text.includes("investment")) return "CMA USA Part 2 - Section E: Investment Decisions";
    if (text.includes("ethic")) return "CMA USA Part 2 - Section F: Professional Ethics";
    return papersForLevel(level)[0];
  }
  if (level === "Foundation") {
    if (text.includes("account")) return "Fundamentals of Financial Accounting";
    if (text.includes("math") || text.includes("stat")) return "Fundamentals of Business Maths & Stats";
    if (text.includes("economic")) return "Fundamentals of Business Economics";
    if (text.includes("management")) return "Fundamentals of Business Management";
    if (text.includes("communication")) return "Business Communication";
    if (text.includes("law")) return "Fundamentals of Business Laws";
  }
  if (level === "Inter") {
    if (text.includes("direct tax") || text.includes("indirect tax")) return "Direct and Indirect Taxation";
    if (text.includes("cost")) return "Cost Accounting";
    if (text.includes("account") && !text.includes("co.") && !text.includes("as")) return "Financial Accounting";
    if (text.includes("as") && text.includes("online")) return "Financial Accounting";
    if (text.includes("law")) return "Business Laws and Ethics";
    if (text.includes("fm")) return "Business Data Analytics";
    if (/\bma\b/.test(text)) return "Management Accounting";
    if (text.includes("co. account") || text.includes("corporate account")) return "Corporate Accounting";
    if (text.includes("audit")) return "Auditing";
  }
  if (level === "Final") {
    if (text.includes("sfm")) return "Strategic Financial Management";
    if (text.includes("cost audit")) return "Cost and Management Audit";
    if (text.includes("indirect tax")) return "Indirect Tax Laws and Practice";
    if (text.includes("direct tax")) return "Direct Tax Laws & International Taxation";
    if (text.includes("cost")) return "Strategic Cost Management (SCM)";
  }
  return cleanSheetText(subjectText);
}

function isImportableSheetBatch(batchName) {
  const text = cleanSheetText(batchName);
  return text.length > 2 && !/^\d+$/.test(text);
}

function googleSheetRowsToEntries(rows, range) {
  const entries = [];
  const seen = new Set();
  rows.slice(1).forEach((row) => {
    [0, 7].forEach((offset) => {
      const date = parseSheetDate(row[offset]);
      const batchName = cleanSheetText(row[offset + 4]);
      if (!date || !isImportableSheetBatch(batchName)) return;
      if (programForLevel(rawLevelFromBatchName(batchName)) !== activeProgram()) return;
      if (date < range.from || date > range.to) return;
      const fixedTime = fixSheetTimeRange(parseSheetTime(row[offset + 1]), parseSheetTime(row[offset + 2]));
      if (!fixedTime.start || !fixedTime.end) return;
      const professorCell = String(row[offset + 3] || "");
      const noLecture = /no\s*lecture/i.test(professorCell);
      const lines = professorCell.split(/\r?\n/).map(cleanSheetText).filter(Boolean);
      const professorName = noLecture ? "" : (lines[0] || "");
      const subject = noLecture ? "No Lecture" : normalizeGoogleSubject(lines[1] || "", batchName);
      const entry = [date, fixedTime.start, fixedTime.end, professorName, subject, batchName, noLecture, `${googleSheetSource.importSource}-${range.from}-to-${range.to}`];
      const key = entry.slice(0, 7).join("|");
      if (!seen.has(key)) {
        seen.add(key);
        entries.push(entry);
      }
    });
  });
  return entries;
}

function googleSheetAvailableDates(rows) {
  return [...new Set(rows.slice(1).flatMap((row) => [parseSheetDate(row[0]), parseSheetDate(row[7])]).filter(Boolean))].sort();
}

function googleSheetImportDiagnostics(rows, range) {
  const dates = googleSheetAvailableDates(rows);
  const rowsInRange = rows.slice(1).filter((row) =>
    [parseSheetDate(row[0]), parseSheetDate(row[7])].some((date) => date >= range.from && date <= range.to)
  ).length;
  return {
    rowCount: Math.max(0, rows.length - 1),
    rowsInRange,
    dates
  };
}

function selectedGoogleSheetImportRange() {
  const from = selectedWeekStart;
  return { from, to: addDays(from, 6) };
}

function clearTimetableForGoogleImport(range) {
  const removedSlotIds = new Set(data.slots
    .filter((slot) => slot.date >= range.from && slot.date <= range.to)
    .filter((slot) => batchProgram(batchById(slot.batchId)) === activeProgram())
    .map((slot) => slot.id));
  data.slots = data.slots.filter((slot) =>
    slot.date < range.from ||
    slot.date > range.to ||
    batchProgram(batchById(slot.batchId)) !== activeProgram()
  );
  data.actualLectures = data.actualLectures.filter((entry) =>
    !removedSlotIds.has(entry.slotId) &&
    (entry.date < range.from || entry.date > range.to)
  );
  data.progress = data.progress.filter((entry) => entry.date < range.from || entry.date > range.to);
  Object.keys(data.dateTimeSlots || {}).forEach((date) => {
    if (date >= range.from && date <= range.to) delete data.dateTimeSlots[date];
  });
}

function applyGoogleSheetEntries(entries, range) {
  clearTimetableForGoogleImport(range);
  entries.forEach(([date, start, end, professorName, subject, rawBatchName, noLecture, importSource]) => {
    const batchMeta = importedBatchMeta(rawBatchName, subject);
    if (programForLevel(batchMeta.level) !== activeProgram()) return;
    if (!data.batches.some((batch) => batch.id === batchMeta.id)) {
      data.batches.push({
        ...batchMeta,
        color: paletteForLevel(batchMeta.level)[data.batches.filter((batch) => batch.level === batchMeta.level).length % paletteForLevel(batchMeta.level).length]
      });
    }
    const professor = professorName ? ensureImportedProfessor({
      name: professorName,
      levels: [batchMeta.level],
      papers: subject === "No Lecture" ? [] : [subject]
    }) : null;
    data.slots.push({
      id: uid("gs"),
      batchId: batchMeta.id,
      date,
      start,
      end,
      professorId: professor?.id || "",
      subject,
      noLecture: Boolean(noLecture),
      importSource
    });
    const dateSlots = timeSlotsForDate(date);
    if (!dateSlots.some((slot) => slot.start === start && slot.end === end)) {
      setTimeSlotsForDate(date, [...dateSlots, { start, end }]);
    }
  });
}

function splitChangesTTLine(line) {
  if (line.includes("|")) return line.split("|").map(cleanSheetText);
  if (line.includes("\t")) return line.split("\t").map(cleanSheetText);
  const csv = parseCsvRows(line);
  if (csv[0]?.length > 1) return csv[0].map(cleanSheetText);
  return line.split(/\s{2,}/).map(cleanSheetText);
}

function normalizePersonKey(value) {
  return cleanSheetText(value)
    .toLowerCase()
    .replace(/\b(sir|miss|madam|maam|prof|professor)\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function resolveProfessorForChange(rawName) {
  const key = normalizePersonKey(rawName);
  if (!key) return null;
  return data.professors.find((professor) => {
    const professorKey = normalizePersonKey(professor.name);
    return professorKey === key || professorKey.includes(key) || key.includes(professorKey);
  }) || null;
}

function parseChangesTTFreeformBlock(block, index) {
  const fields = {};
  cleanSheetText(block)
    .replace(/\s+(Batch|Date|Time|Timing|Subject|Paper|Professor|Faculty)\s*:/gi, "\n$1:")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const match = line.match(/^(batch|date|time|timing|subject|paper|professor|faculty)\s*[:\-]\s*(.+)$/i);
      if (match) {
        const key = match[1].toLowerCase();
        fields[key === "timing" ? "time" : key === "paper" ? "subject" : key === "faculty" ? "professor" : key] = cleanSheetText(match[2]);
      }
    });
  if (!fields.batch && !fields.date && !fields.time && !fields.subject && !fields.professor) return null;
  const date = parseSheetDate(fields.date || "");
  if (!date) return { ok: false, index, error: "Date not readable", line: cleanSheetText(block) };
  const timeRange = parseTimeRange(fields.time || "");
  if (!timeRange) return { ok: false, index, error: "Time not readable", line: cleanSheetText(block) };
  if (!fields.batch) return { ok: false, index, error: "Batch missing", line: cleanSheetText(block) };
  const noLecture = /no\s*lecture/i.test(`${fields.professor || ""} ${fields.subject || ""}`);
  const subject = noLecture ? "No Lecture" : normalizeGoogleSubject(fields.subject || "", fields.batch);
  return {
    ok: true,
    index,
    date,
    start: timeRange.start,
    end: timeRange.end,
    batchName: fields.batch,
    professorName: noLecture ? "" : fields.professor || "",
    subject,
    noLecture
  };
}

function parseChangesTTFreeform(text) {
  const normalized = String(text || "").replace(/\r\n/g, "\n").trim();
  if (!/\b(Batch|Date|Time|Subject|Professor)\s*:/i.test(normalized)) return [];
  const blocks = normalized
    .split(/\n\s*\n|(?=\bDear\s+Students\b)|(?=\bBatch\s*:)/i)
    .map((block) => block.trim())
    .filter((block) => /\b(Batch|Date|Time|Subject|Professor)\s*:/i.test(block));
  return blocks.map((block, index) => parseChangesTTFreeformBlock(block, index + 1)).filter(Boolean);
}

function parseChangesTTInput(text) {
  const freeformRows = parseChangesTTFreeform(text);
  if (freeformRows.length) return freeformRows;
  return String(text || "")
    .split(/\r?\n/)
    .map((line, index) => ({ line: cleanSheetText(line), index: index + 1 }))
    .filter((row) => row.line)
    .filter((row) => !/^date\s*[|,\t]/i.test(row.line))
    .map(({ line, index }) => {
      const parts = splitChangesTTLine(line).filter(Boolean);
      if (parts.length < 5) return { ok: false, index, error: "Need Date | Time | Batch | Professor | Subject", line };
      const date = parseSheetDate(parts[0]);
      if (!date) return { ok: false, index, error: "Date not readable", line };
      let start = "";
      let end = "";
      let batchName = "";
      let professorName = "";
      let subjectText = "";
      const range = parseTimeRange(parts[1]);
      if (range) {
        start = range.start;
        end = range.end;
        batchName = parts[2];
        professorName = parts[3];
        subjectText = parts.slice(4).join(" | ");
      } else if (parts.length >= 6) {
        const fixedTime = fixSheetTimeRange(parseSheetTime(parts[1]), parseSheetTime(parts[2]));
        start = fixedTime.start;
        end = fixedTime.end;
        batchName = parts[3];
        professorName = parts[4];
        subjectText = parts.slice(5).join(" | ");
      }
      if (!start || !end || hoursBetween(start, end) <= 0) return { ok: false, index, error: "Time not readable", line };
      if (!batchName) return { ok: false, index, error: "Batch missing", line };
      const noLecture = /no\s*lecture/i.test(`${professorName} ${subjectText}`);
      const subject = noLecture ? "No Lecture" : normalizeGoogleSubject(subjectText, batchName);
      return {
        ok: true,
        index,
        date,
        start,
        end,
        batchName,
        professorName: noLecture ? "" : professorName,
        subject,
        noLecture
      };
    });
}

function ensureChangesTTBatch(rawBatchName, subject) {
  const rawName = cleanSheetText(rawBatchName);
  const importedName = importedBatchName(rawName);
  const existing = data.batches.find((batch) =>
    batch.id === slug(importedName) ||
    batch.name.toLowerCase() === rawName.toLowerCase() ||
    batch.name.toLowerCase() === importedName.toLowerCase()
  );
  if (existing) return existing;
  const batchMeta = importedBatchMeta(rawName, subject === "No Lecture" ? "" : subject);
  const levelPalette = paletteForLevel(batchMeta.level);
  const batch = {
    ...batchMeta,
    color: levelPalette[data.batches.filter((item) => item.level === batchMeta.level).length % levelPalette.length]
  };
  data.batches.push(batch);
  return batch;
}

function upsertChangesTTSlot(entry) {
  const batch = ensureChangesTTBatch(entry.batchName, entry.subject);
  const professor = entry.noLecture ? null : resolveProfessorForChange(entry.professorName) || ensureImportedProfessor({
    name: entry.professorName || "Unassigned",
    levels: [batch.level],
    papers: entry.subject === "No Lecture" ? [] : [entry.subject]
  });
  const existing = data.slots.find((slot) =>
    slot.batchId === batch.id &&
    slot.date === entry.date &&
    slot.start === entry.start &&
    slot.end === entry.end
  ) || (() => {
    const sameDaySlots = data.slots.filter((slot) => slot.batchId === batch.id && slot.date === entry.date);
    return sameDaySlots.length === 1 ? sameDaySlots[0] : null;
  })();
  const next = {
    batchId: batch.id,
    date: entry.date,
    start: entry.start,
    end: entry.end,
    professorId: professor?.id || "",
    subject: entry.subject,
    noLecture: Boolean(entry.noLecture),
    importSource: changedTTSource,
    changedAt: new Date().toISOString()
  };
  if (existing) {
    const oldSlot = { ...existing };
    Object.assign(existing, next);
    if (oldSlot.professorId) notifyProfessorChange(oldSlot.professorId, existing, oldSlot, "Lecture changed");
    if (existing.professorId && existing.professorId !== oldSlot.professorId) notifyProfessorChange(existing.professorId, existing, oldSlot, "New changed lecture assigned");
  }
  else {
    const created = { id: uid("chg"), ...next };
    data.slots.push(created);
    if (created.professorId) notifyProfessorChange(created.professorId, created, null, "New changed lecture assigned");
  }
  const dateSlots = timeSlotsForDate(entry.date);
  if (!dateSlots.some((slot) => slot.start === entry.start && slot.end === entry.end)) {
    setTimeSlotsForDate(entry.date, [...dateSlots, { start: entry.start, end: entry.end }]);
  }
}

function changesTTPreviewBatch(entry) {
  const rawName = cleanSheetText(entry.batchName);
  const importedName = importedBatchName(rawName);
  return data.batches.find((batch) =>
    batch.id === slug(importedName) ||
    batch.name.toLowerCase() === rawName.toLowerCase() ||
    batch.name.toLowerCase() === importedName.toLowerCase()
  ) || importedBatchMeta(rawName, entry.subject === "No Lecture" ? "" : entry.subject);
}

function renderChangesTTBatchPreview(validRows) {
  if (!validRows.length) return "";
  const proposedSlots = validRows.map((entry) => {
    const batch = changesTTPreviewBatch(entry);
    return {
      id: `preview-${entry.index}`,
      batchId: batch.id,
      date: entry.date,
      start: entry.start,
      end: entry.end,
      professorName: entry.professorName,
      subject: entry.subject,
      noLecture: entry.noLecture,
      importSource: changedTTSource
    };
  });
  const renderSlotRows = (rows, batch, emptyText) => rows
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`))
    .map((slot) => {
      const professor = slot.noLecture ? "-" : slot.professorName || professorName(slotProfessorId(slot));
      const subject = slot.noLecture ? "No Lecture" : paperShort(batch.level, slot.subject);
      return `<tr>
        <td>${escapeHtml(dayLabel(slot.date))}</td>
        <td>${escapeHtml(formatTimeRange(slot.start, slot.end))}</td>
        <td>${escapeHtml(professor)}</td>
        <td>${escapeHtml(subject)}</td>
        <td>${sourceBadge(slot) || `<span class="status green">Existing</span>`}</td>
      </tr>`;
    }).join("") || `<tr><td colspan="5" class="empty">${escapeHtml(emptyText)}</td></tr>`;
  const batchMap = new Map(validRows.map((entry) => {
    const batch = changesTTPreviewBatch(entry);
    return [batch.id, batch];
  }));
  const dates = validRows.map((row) => row.date).sort();
  const from = dates[0];
  const to = dates[dates.length - 1];
  return `<div class="changes-tt-batch-preview">
    ${Array.from(batchMap.values()).map((batch) => {
      const changedRows = proposedSlots.filter((slot) => slot.batchId === batch.id);
      const oldRows = data.slots.filter((slot) => slot.batchId === batch.id && slot.date >= from && slot.date <= to);
      const replacedIds = new Set(changedRows.map((changed) => {
        const exact = oldRows.find((slot) => slot.date === changed.date && slot.start === changed.start && slot.end === changed.end);
        if (exact) return exact.id;
        const sameDay = oldRows.filter((slot) => slot.date === changed.date);
        return sameDay.length === 1 ? sameDay[0].id : "";
      }).filter(Boolean));
      const finalRows = [
        ...oldRows.filter((slot) => !replacedIds.has(slot.id)),
        ...changedRows
      ];
      return `<article>
        <h3>${escapeHtml(batch.name)} timetable change preview</h3>
        <div class="changes-tt-preview-grid">
          <div>
            <h4>Old TT</h4>
            <table>
              <thead><tr><th>Date</th><th>Time</th><th>Professor</th><th>Subject</th><th>Tag</th></tr></thead>
              <tbody>${renderSlotRows(oldRows, batch, "No old timetable rows for this batch in selected dates.")}</tbody>
            </table>
          </div>
          <div>
            <h4>Changed TT</h4>
            <table>
              <thead><tr><th>Date</th><th>Time</th><th>Professor</th><th>Subject</th><th>Tag</th></tr></thead>
              <tbody>${renderSlotRows(changedRows, batch, "No changed rows.")}</tbody>
            </table>
          </div>
          <div>
            <h4>Final New TT</h4>
            <table>
              <thead><tr><th>Date</th><th>Time</th><th>Professor</th><th>Subject</th><th>Tag</th></tr></thead>
              <tbody>${renderSlotRows(finalRows, batch, "No final timetable rows.")}</tbody>
            </table>
          </div>
        </div>
      </article>`;
    }).join("")}
  </div>`;
}

function renderChangesTTPreview() {
  const input = $("#changesTTInput");
  const preview = $("#changesTTPreview");
  if (!input || !preview) return;
  const rows = parseChangesTTInput(input.value);
  if (!input.value.trim()) {
    preview.textContent = "Paste timetable changes here, then apply.";
    return;
  }
  const good = rows.filter((row) => row.ok);
  const bad = rows.filter((row) => !row.ok);
  preview.innerHTML = [
    `${good.length} valid change${good.length === 1 ? "" : "s"} ready. ${bad.length ? `${bad.length} row${bad.length === 1 ? "" : "s"} need correction.` : ""}`,
    ...good.slice(0, 12).map((row) => `Line ${row.index}: ${row.date} | ${formatTimeRange(row.start, row.end)} | ${escapeHtml(row.batchName)} | ${escapeHtml(row.professorName || "No Lecture")} | <span class="changed-tag">Changed</span>`),
    ...bad.map((row) => `Line ${row.index}: ${escapeHtml(row.error)} - ${escapeHtml(row.line)}`),
    renderChangesTTBatchPreview(good)
  ].join("<br>");
}

function applyChangesTT() {
  const input = $("#changesTTInput");
  const rows = parseChangesTTInput(input?.value || "");
  const valid = rows.filter((row) => row.ok);
  const invalid = rows.filter((row) => !row.ok);
  if (!valid.length) {
    alert("No valid timetable changes found. Use: Date | Time | Batch | Professor | Subject.");
    renderChangesTTPreview();
    return;
  }
  valid.forEach(upsertChangesTTSlot);
  saveData();
  renderChangesTTPreview();
  alert(`Applied ${valid.length} Changed TT row${valid.length === 1 ? "" : "s"}.${invalid.length ? ` ${invalid.length} row${invalid.length === 1 ? "" : "s"} were skipped.` : ""}`);
}

async function importGoogleSheetTimetable() {
  const button = $("#importGoogleSheetBtn");
  const previousText = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = "Importing...";
  }
  try {
    const sheetLink = $("#googleSheetLinkInput")?.value.trim() || "";
    if (sheetLink && !googleSheetIdFromLink(sheetLink)) throw new Error("Please paste a valid Google Sheet link.");
    if (sheetLink !== data.settings.googleSheetLink) {
      data.settings.googleSheetLink = sheetLink;
      localStorage.setItem(storeKey, JSON.stringify(data));
    }
    const range = selectedGoogleSheetImportRange();
    const table = await loadGoogleSheetTable();
    const rows = googleTableToRows(table);
    const entries = googleSheetRowsToEntries(rows, range);
    if (!entries.length) {
      const diagnostics = googleSheetImportDiagnostics(rows, range);
      const availableText = diagnostics.dates.length
        ? ` Available dates in sheet: ${diagnostics.dates.slice(0, 12).join(", ")}${diagnostics.dates.length > 12 ? "..." : ""}. Rows read: ${diagnostics.rowCount}. Rows in selected week: ${diagnostics.rowsInRange}.`
        : " No valid timetable dates were readable from the sheet.";
      throw new Error(`No timetable rows found for ${range.from} to ${range.to}.${availableText}`);
    }
    applyGoogleSheetEntries(entries, range);
    data.settings.googleImportHistory.unshift({
      importedAt: new Date().toISOString(),
      program: activeProgram(),
      from: range.from,
      to: range.to,
      count: entries.length,
      sheetLink: data.settings.googleSheetLink || sheetLink
    });
    data.settings.googleImportHistory = data.settings.googleImportHistory.slice(0, 20);
    saveData();
    alert(`Imported ${entries.length} Google Sheet timetable rows for ${range.from} to ${range.to}. Existing timetable rows for this week were replaced.\n\nNow press Cloud Save and wait for "saved and verified".`);
  } catch (error) {
    alert(`Google Sheet import failed: ${error.message}. Check that the sheet link is shared as Viewer/Anyone with link.`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function updateWeeklySlot(event) {
  if (event.target.dataset.timeDate) {
    updateTimeSlot(event);
    return;
  }
  if (!event.target.dataset.weeklyCell) return;
  const batchId = event.target.dataset.batchId;
  const date = event.target.dataset.date;
  const start = event.target.dataset.start;
  const end = event.target.dataset.end;
  const fieldName = event.target.dataset.field;
  const batch = batchById(batchId);
  let slot = data.slots.find((item) =>
    item.batchId === batchId &&
    item.date === date &&
    item.start === start &&
    item.end === end
  );
  const oldSlot = slot ? { ...slot } : null;

  if (!slot) {
    slot = {
      id: uid("s"),
      batchId,
      date,
      start,
      end,
      professorId: "",
      subject: batch?.paper || ""
    };
    data.slots.push(slot);
  }

  if (fieldName === "assignment") {
    if (event.target.value === "__no_lecture__") {
      slot.noLecture = true;
      slot.professorId = "";
      slot.subject = "No Lecture";
      if (oldSlot?.professorId) notifyProfessorChange(oldSlot.professorId, slot, oldSlot, "Lecture cancelled / no lecture");
      saveData();
      return;
    }
    const [professorId, subject] = event.target.value.split("||");
    if (professorId && !professorIsAvailable(professorId, date, start, end, slot)) {
      alert(`${professorName(professorId)} is already booked in this time. Please select another available professor.`);
      renderWeeklyTable();
      return;
    }
    slot.noLecture = false;
    slot.professorId = professorId || "";
    slot.subject = subject || "";
  } else {
    slot[fieldName] = event.target.value;
  }

  if (!slot.professorId) {
    if (oldSlot?.professorId) notifyProfessorChange(oldSlot.professorId, { ...slot, professorId: "", noLecture: true, subject: "No Lecture" }, oldSlot, "Lecture removed");
    data.slots = data.slots.filter((item) => item.id !== slot.id);
  } else {
    if (oldSlot?.professorId) notifyProfessorChange(oldSlot.professorId, slot, oldSlot, "Lecture changed");
    if (slot.professorId && slot.professorId !== oldSlot?.professorId) notifyProfessorChange(slot.professorId, slot, oldSlot, "New lecture assigned");
  }
  saveData();
}

function updateTimeSlot(event) {
  const date = event.target.dataset.timeDate;
  const fieldName = event.target.dataset.field;
  const previousStart = event.target.dataset.timeStart;
  const previousEnd = event.target.dataset.timeEnd;
  const daySlots = timeSlotsForDate(date);
  const index = daySlots.findIndex((slot) => slot.start === previousStart && slot.end === previousEnd);
  const timeSlot = daySlots[index];
  if (!timeSlot) return;
  const parsedPart = parseTimePart(event.target.value);
  if (!parsedPart) {
    alert("Please enter a valid time like 7am or 10am.");
    renderWeeklyTable();
    return;
  }
  const parsed = { ...timeSlot, [fieldName]: parsedPart };
  if (hoursBetween(parsed.start, parsed.end) <= 0) {
    alert("End time must be after start time.");
    renderWeeklyTable();
    return;
  }
  daySlots[index] = parsed;
  data.slots.forEach((slot) => {
    if (slot.date === date && slot.start === previousStart && slot.end === previousEnd) {
      slot.start = parsed.start;
      slot.end = parsed.end;
    }
  });
  setTimeSlotsForDate(date, daySlots);
  saveData();
}

async function copyTextFrom(selector) {
  const text = $(selector).value;
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const field = $(selector);
    field.focus();
    field.select();
    document.execCommand("copy");
  }
}

function openTelegramShare(text) {
  const url = `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

async function postTelegramMessage(chatId, text) {
  const token = data.settings.telegramBotToken;
  if (!token || !chatId) {
    openTelegramShare(text);
    return;
  }
  const response = await fetch(`https://api.telegram.org/bot${encodeURIComponent(token)}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    })
  });
  const result = await response.json();
  if (!result.ok) throw new Error(result.description || "Telegram send failed");
}

async function sendSelectedBatchTelegram() {
  const batch = batchById($("#batchShareSelect").value);
  if (!batch) return;
  try {
    await postTelegramMessage(batch.telegramChatId, $("#batchShareText").value);
    alert(`Timetable sent to ${batch.name}.`);
  } catch (error) {
    alert(`Telegram send failed: ${error.message}`);
  }
}

function svgEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }[char]));
}

function downloadBatchImage() {
  const batch = batchById($("#batchShareSelect").value);
  if (!batch) return;
  const slots = batchSlots(batch.id);
  const width = 1092;
  const rowHeight = 85;
  const headingHeight = 78;
  const headerHeight = 54;
  const bodyRows = Math.max(slots.length, 1);
  const height = headingHeight + headerHeight + bodyRows * rowHeight;
  const columns = [0, 260, 390, 520, 1092];
  const textBlock = (lines, x, y, widthValue, lineHeight, size, weight = 700) => lines.map((line, index) =>
    `<text x="${x + widthValue / 2}" y="${y + 29 + index * lineHeight}" text-anchor="middle" font-size="${size}" font-weight="${weight}" fill="#000">${svgEscape(line)}</text>`
  ).join("");
  const rows = slots.length ? slots.map((slot, index) => {
    const y = headingHeight + headerHeight + index * rowHeight;
    const professorId = slotProfessorId(slot);
    const subject = timetableSubjectLabel(slot, batch);
    const teacher = slot.noLecture ? "No Lecture" : professorName(professorId);
    return `
      <rect x="${columns[0]}" y="${y}" width="${columns[1] - columns[0]}" height="${rowHeight}" fill="#fff"/>
      <rect x="${columns[1]}" y="${y}" width="${columns[2] - columns[1]}" height="${rowHeight}" fill="#fff"/>
      <rect x="${columns[2]}" y="${y}" width="${columns[3] - columns[2]}" height="${rowHeight}" fill="#fff"/>
      <rect x="${columns[3]}" y="${y}" width="${columns[4] - columns[3]}" height="${rowHeight}" fill="${svgEscape(timetableLectureTone(slot, professorTimetableTone(professorId)))}"/>
      <text x="12" y="${y + 53}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDateLabel(slot.date))}</text>
      <text x="${columns[1] + 12}" y="${y + 53}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDisplayTime(slot, "start"))}</text>
      <text x="${columns[2] + 12}" y="${y + 53}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDisplayTime(slot, "end"))}</text>
      ${textBlock([teacher, subject], columns[3], y, columns[4] - columns[3], 28, 22, 700)}
    `;
  }).join("") : `<text x="24" y="${headingHeight + headerHeight + 52}" font-size="26" fill="#647084">No lectures scheduled for this selection.</text>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#fff"/>
    <rect x="0" y="0" width="${width}" height="${headingHeight}" fill="${svgEscape(batchTimetableTone(batch))}"/>
    <rect x="0" y="${headingHeight}" width="${width}" height="${headerHeight}" fill="#d9e4f2"/>
    <text x="${width / 2}" y="32" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="27" font-weight="700" fill="#000">${svgEscape(batch.name)}</text>
    <text x="${(columns[0] + columns[1]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Date</text>
    <text x="${(columns[1] + columns[2]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Time In</text>
    <text x="${(columns[2] + columns[3]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Time Out</text>
    <text x="${(columns[3] + columns[4]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Lecture Details</text>
    <g font-family="'Times New Roman', Georgia, serif">${rows}</g>
    <g stroke="#000" stroke-width="2" fill="none">
      <line x1="0" y1="0" x2="0" y2="${height}"/>
      <line x1="${width}" y1="0" x2="${width}" y2="${height}"/>
      ${columns.slice(1, -1).map((x) => `<line x1="${x}" y1="${headingHeight}" x2="${x}" y2="${height}"/>`).join("")}
      <line x1="0" y1="0" x2="${width}" y2="0"/>
      <line x1="0" y1="${headingHeight}" x2="${width}" y2="${headingHeight}"/>
      <line x1="0" y1="${headingHeight + headerHeight}" x2="${width}" y2="${headingHeight + headerHeight}"/>
      ${Array.from({ length: bodyRows + 1 }, (_, index) => `<line x1="0" y1="${headingHeight + headerHeight + index * rowHeight}" x2="${width}" y2="${headingHeight + headerHeight + index * rowHeight}"/>`).join("")}
    </g>
  </svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${batch.name}_timetable.svg`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadProfessorImage() {
  const professor = data.professors.find((item) => item.id === $("#professorShareSelect").value);
  if (!professor) return;
  const slots = slotsForCurrentWeek({ applyWeeklyFilters: false })
    .filter((slot) => slotProfessorId(slot) === professor.id)
    .sort((a, b) => `${a.date} ${a.start} ${batchById(a.batchId)?.name || ""}`.localeCompare(`${b.date} ${b.start} ${batchById(b.batchId)?.name || ""}`));
  const width = 1092;
  const headingHeight = 78;
  const headerHeight = 54;
  const columns = [0, 218, 326, 432, 802, 1092];
  const rowData = slots.map((slot) => {
    const batch = batchById(slot.batchId);
    const subject = timetableSubjectLabel(slot, batch);
    const topics = professorSlotTopicLines(slot);
    const detailLines = [professor.name, subject, ...topics.map((topic) => `Topic: ${topic}`)];
    const batchLines = batchTimetableLines(batch).filter(Boolean);
    return {
      slot,
      batch,
      subject,
      detailLines,
      batchLines,
      height: Math.max(85, 42 + Math.max(detailLines.length, batchLines.length) * 22)
    };
  });
  const bodyHeight = rowData.length ? rowData.reduce((sum, row) => sum + row.height, 0) : 85;
  const height = headingHeight + headerHeight + bodyHeight;
  const textBlock = (lines, x, y, widthValue, lineHeight, size, weight = 700) => lines.map((line, index) =>
    `<text x="${x + widthValue / 2}" y="${y + 29 + index * lineHeight}" text-anchor="middle" font-size="${size}" font-weight="${weight}" fill="#000">${svgEscape(line)}</text>`
  ).join("");
  let nextY = headingHeight + headerHeight;
  const rowLines = [];
  const rows = rowData.length ? rowData.map((row) => {
    const y = nextY;
    nextY += row.height;
    rowLines.push(y);
    return `
      <rect x="${columns[0]}" y="${y}" width="${columns[1] - columns[0]}" height="${row.height}" fill="#fff"/>
      <rect x="${columns[1]}" y="${y}" width="${columns[2] - columns[1]}" height="${row.height}" fill="#fff"/>
      <rect x="${columns[2]}" y="${y}" width="${columns[3] - columns[2]}" height="${row.height}" fill="#fff"/>
      <rect x="${columns[3]}" y="${y}" width="${columns[4] - columns[3]}" height="${row.height}" fill="${svgEscape(timetableLectureTone(row.slot, professorTimetableTone(professor.id)))}"/>
      <rect x="${columns[4]}" y="${y}" width="${columns[5] - columns[4]}" height="${row.height}" fill="${svgEscape(timetableLectureTone(row.slot, batchTimetableTone(row.batch)))}"/>
      <text x="12" y="${y + Math.min(53, row.height - 28)}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDateLabel(row.slot.date))}</text>
      <text x="${columns[1] + 12}" y="${y + Math.min(53, row.height - 28)}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDisplayTime(row.slot, "start"))}</text>
      <text x="${columns[2] + 12}" y="${y + Math.min(53, row.height - 28)}" font-size="23" font-weight="700" fill="#000">${svgEscape(timetableDisplayTime(row.slot, "end"))}</text>
      ${textBlock(row.detailLines, columns[3], y, columns[4] - columns[3], 22, 18, 700)}
      ${textBlock(row.batchLines, columns[4], y, columns[5] - columns[4], 22, 18, 700)}
    `;
  }).join("") : `<text x="24" y="${headingHeight + headerHeight + 52}" font-size="26" fill="#647084">No lectures scheduled for this professor.</text>`;
  rowLines.push(headingHeight + headerHeight + bodyHeight);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#fff"/>
    <rect x="0" y="0" width="${width}" height="${headingHeight}" fill="#e7abc8"/>
    <rect x="0" y="${headingHeight}" width="${width}" height="${headerHeight}" fill="#d9e4f2"/>
    <text x="${width / 2}" y="32" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="27" font-weight="700" fill="#000">${svgEscape(professor.name)}</text>
    <text x="${width / 2}" y="60" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="22" font-weight="700" fill="#000">${svgEscape(fullDateLabel(selectedWeekStart))} to ${svgEscape(fullDateLabel(addDays(selectedWeekStart, 6)))}</text>
    <text x="${(columns[0] + columns[1]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Date</text>
    <text x="${(columns[1] + columns[2]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Time In</text>
    <text x="${(columns[2] + columns[3]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Time Out</text>
    <text x="${(columns[3] + columns[4]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Lecture Details</text>
    <text x="${(columns[4] + columns[5]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="21" font-weight="700" fill="#000">Batch Details</text>
    <g font-family="'Times New Roman', Georgia, serif">${rows}</g>
    <g stroke="#000" stroke-width="2" fill="none">
      <line x1="0" y1="0" x2="0" y2="${height}"/>
      <line x1="${width}" y1="0" x2="${width}" y2="${height}"/>
      ${columns.slice(1, -1).map((x) => `<line x1="${x}" y1="${headingHeight}" x2="${x}" y2="${height}"/>`).join("")}
      <line x1="0" y1="0" x2="${width}" y2="0"/>
      <line x1="0" y1="${headingHeight}" x2="${width}" y2="${headingHeight}"/>
      <line x1="0" y1="${headingHeight + headerHeight}" x2="${width}" y2="${headingHeight + headerHeight}"/>
      ${rowLines.map((y) => `<line x1="0" y1="${y}" x2="${width}" y2="${y}"/>`).join("")}
    </g>
  </svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${professor.name}_schedule.svg`;
  link.click();
  URL.revokeObjectURL(url);
}

function professorWeeklyPrintableRows(professorId) {
  return professorWeekSlots(professorId, selectedWeekStart)
    .map((slot) => {
      const batch = batchById(slot.batchId);
      const topics = professorSlotTopicLines(slot);
      return {
        date: timetableDateLabel(slot.date),
        start: timetableDisplayTime(slot, "start"),
        end: timetableDisplayTime(slot, "end"),
        lecture: [professorName(professorId), timetableSubjectLabel(slot, batch), ...topics.map((topic) => `Topic: ${topic}`)].filter(Boolean),
        batch: batchTimetableLines(batch).filter(Boolean)
      };
    });
}

function professorWeeklySvg(professorId) {
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) return "";
  const rows = professorWeeklyPrintableRows(professorId);
  const rowHeight = 92;
  const width = 1092;
  const headingHeight = 78;
  const headerHeight = 54;
  const bodyHeight = Math.max(rowHeight, rows.length * rowHeight);
  const height = headingHeight + headerHeight + bodyHeight;
  const columns = [0, 218, 326, 432, 802, 1092];
  const textLines = (lines, x, y, w, size = 18) => lines.slice(0, 3).map((line, index) =>
    `<text x="${x + w / 2}" y="${y + 28 + index * 22}" text-anchor="middle" font-size="${size}" font-weight="700" fill="#000">${svgEscape(line)}</text>`
  ).join("");
  const body = rows.length ? rows.map((row, index) => {
    const y = headingHeight + headerHeight + index * rowHeight;
    return `
      <rect x="0" y="${y}" width="${width}" height="${rowHeight}" fill="#fff"/>
      <rect x="${columns[3]}" y="${y}" width="${columns[4] - columns[3]}" height="${rowHeight}" fill="#d7ebff"/>
      <rect x="${columns[4]}" y="${y}" width="${columns[5] - columns[4]}" height="${rowHeight}" fill="#f4e2ca"/>
      <text x="12" y="${y + 52}" font-size="22" font-weight="700" fill="#000">${svgEscape(row.date)}</text>
      <text x="${columns[1] + 12}" y="${y + 52}" font-size="22" font-weight="700" fill="#000">${svgEscape(row.start)}</text>
      <text x="${columns[2] + 12}" y="${y + 52}" font-size="22" font-weight="700" fill="#000">${svgEscape(row.end)}</text>
      ${textLines(row.lecture, columns[3], y, columns[4] - columns[3])}
      ${textLines(row.batch, columns[4], y, columns[5] - columns[4])}`;
  }).join("") : `<text x="24" y="${headingHeight + headerHeight + 52}" font-size="26" fill="#647084">No lectures scheduled for this week.</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#fff"/>
    <rect x="0" y="0" width="${width}" height="${headingHeight}" fill="#e7abc8"/>
    <rect x="0" y="${headingHeight}" width="${width}" height="${headerHeight}" fill="#d9e4f2"/>
    <text x="${width / 2}" y="32" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="27" font-weight="700" fill="#000">${svgEscape(professor.name)}</text>
    <text x="${width / 2}" y="60" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="22" font-weight="700" fill="#000">${svgEscape(fullDateLabel(selectedWeekStart))} to ${svgEscape(fullDateLabel(addDays(selectedWeekStart, 6)))}</text>
    <text x="${(columns[0] + columns[1]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-size="21" font-weight="700">Date</text>
    <text x="${(columns[1] + columns[2]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-size="21" font-weight="700">Time In</text>
    <text x="${(columns[2] + columns[3]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-size="21" font-weight="700">Time Out</text>
    <text x="${(columns[3] + columns[4]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-size="21" font-weight="700">Lecture Details</text>
    <text x="${(columns[4] + columns[5]) / 2}" y="${headingHeight + 35}" text-anchor="middle" font-size="21" font-weight="700">Batch Details</text>
    <g font-family="'Times New Roman', Georgia, serif">${body}</g>
    <g stroke="#000" stroke-width="2" fill="none">
      <rect x="0" y="0" width="${width}" height="${height}"/>
      ${columns.slice(1, -1).map((x) => `<line x1="${x}" y1="${headingHeight}" x2="${x}" y2="${height}"/>`).join("")}
      <line x1="0" y1="${headingHeight}" x2="${width}" y2="${headingHeight}"/>
      <line x1="0" y1="${headingHeight + headerHeight}" x2="${width}" y2="${headingHeight + headerHeight}"/>
      ${Array.from({ length: rows.length + 1 }, (_, index) => `<line x1="0" y1="${headingHeight + headerHeight + index * rowHeight}" x2="${width}" y2="${headingHeight + headerHeight + index * rowHeight}"/>`).join("")}
    </g>
  </svg>`;
}

function openProfessorWeeklyImage() {
  const professorId = loggedInProfessorId() || $("#professorLoginSelect")?.value;
  const svg = professorWeeklySvg(professorId);
  if (!svg) return;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

function openProfessorWeeklyPdf() {
  const professorId = loggedInProfessorId() || $("#professorLoginSelect")?.value;
  const svg = professorWeeklySvg(professorId);
  if (!svg) return;
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`<html><head><title>Professor Weekly Timetable</title><style>body{margin:20px;font-family:Arial,sans-serif}svg{max-width:100%;height:auto}@media print{button{display:none}}</style></head><body><button onclick="window.print()">Print / Save PDF</button>${svg}</body></html>`);
  win.document.close();
}

function addProgress(event) {
  event.preventDefault();
  const form = event.currentTarget;
  data.progress.push({
    id: uid("pr"),
    batchId: form.elements.batchId.value,
    professorId: form.elements.professorId.value,
    date: form.elements.date.value,
    topic: form.elements.topic.value.trim(),
    hours: Number(form.elements.hours.value),
    remarks: form.elements.remarks.value.trim()
  });
  form.elements.topic.value = "";
  form.elements.remarks.value = "";
  saveData();
}

function addBatch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const level = form.elements.level.value || (activeProgram() === "CMA USA" ? "CMA USA Part 1" : "Foundation");
  const attempt = form.elements.attempt.value.trim();
  const centre = form.elements.centre.value;
  const section = form.elements.section.value.trim();
  const firstGroup = Object.keys(cmaPapers[level])[0];
  const firstPaper = cmaPapers[level][firstGroup][0];
  data.batches.push({
    id: uid("b"),
    name: batchCodeWithSection(level, attempt, centre, section),
    level,
    group: firstGroup,
    paper: firstPaper,
    attempt,
    centre,
    section,
    plannedHours: Number(form.elements.plannedHours.value),
    startDate: form.elements.startDate.value,
    targetDate: form.elements.targetDate.value,
    color: defaultLevelColor(level)
  });
  form.reset();
  saveData();
}

function addMaster(event) {
  event.preventDefault();
  const form = event.currentTarget;
  data.settings.telegramBotToken = form.elements.telegramBotToken.value.trim();
  data.settings.googleWebAppUrl = fixedCloudSyncUrl;
  const centre = form.elements.centre.value.trim();
  if (centre && !data.centres.includes(centre)) data.centres.push(centre);
  form.reset();
  saveData();
}

function saveTopicPlan(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const professorId = $("#professorPlanSelect").value;
  const batchId = form.elements.batchId.value;
  const paperNo = Number(form.elements.paperNo.value || 0);
  const weekStart = selectedWeekStart;
  const topicIds = Array.from(form.querySelectorAll('input[name="topicIds"]:checked')).map((input) => input.value);
  if (!professorId || !batchId || !paperNo) return;
  data.topicPlans = data.topicPlans.filter((plan) =>
    !(plan.professorId === professorId &&
      plan.batchId === batchId &&
      paperForPlan(plan) === paperNo &&
      !topicIds.includes(plan.topicId))
  );
  if (!topicIds.length) {
    saveData();
    return;
  }
  topicIds.forEach((topicId) => {
    const topic = topicById(topicId);
    if (!topic || topic.paperNo !== paperNo) return;
    const existing = data.topicPlans.find((plan) =>
      plan.professorId === professorId &&
      plan.batchId === batchId &&
      plan.topicId === topicId
    );
    const allocatedInput = form.elements[`topicHours_${topicId}`];
    const allocatedHours = Number(allocatedInput?.value || topic.standardHours || 0);
    const payload = {
      professorId,
      batchId,
      topicId,
      slotId: "",
      paperNo,
      weekStart,
      allocatedHours,
      givenHours: existing ? Number(existing.givenHours || 0) : 0,
      assignedByRole: "tt-head",
      assignedByProfessorId: ""
    };
    if (existing) {
      Object.assign(existing, payload);
    } else {
      data.topicPlans.push({ id: uid("tp"), ...payload });
    }
  });
  saveData();
}

function saveActualLecture(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const slot = data.slots.find((item) => item.id === form.elements.slotId.value);
  if (!slot) {
    alert("No lecture selected for actual entry.");
    return;
  }
  const professorId = $("#professorLoginSelect").value;
  if (isProfessorMode() && professorId !== loggedInProfessorId()) {
    alert("This login can submit only its own lecture details.");
    return;
  }
  if (isProfessorMode() && slotProfessorId(slot) !== loggedInProfessorId()) {
    alert("This lecture does not belong to your professor login.");
    return;
  }
  const topicPlanId = form.elements.topicPlanId.value;
  const topicPlan = data.topicPlans.find((plan) => plan.id === topicPlanId);
  if (isProfessorMode() && !topicPlan) {
    alert("Please select an allocated chapter. Head Professor must assign the chapter before actual lecture entry.");
    return;
  }
  if (isProfessorMode() && topicPlan?.professorId !== professorId) {
    alert("This chapter is not assigned to your professor login.");
    return;
  }
  const topic = form.elements.topic.value.trim() || (topicPlan ? plannedTopicText(topicPlan) : "");
  updateActualHoursField(form);
  const breakMinutes = Math.max(0, Number(form.elements.breakMinutes.value || 0));
  const actualHours = actualHoursFromForm(form);
  const record = {
    id: uid("al"),
    slotId: slot.id,
    batchId: slot.batchId,
    professorId,
    date: slot.date,
    start: slot.start,
    end: slot.end,
    topicPlanId,
    topic,
    timeIn: form.elements.timeIn.value,
    timeOut: form.elements.timeOut.value,
    breakMinutes,
    actualHours,
    lectureStatus: form.elements.lectureStatus.value,
    pendingPortion: form.elements.pendingPortion.value.trim(),
    remarks: form.elements.remarks.value.trim()
  };
  const formActualId = form.elements.actualLectureId?.value || "";
  const existingActual = data.actualLectures.find((entry) =>
    (formActualId && entry.id === formActualId && entry.professorId === professorId) ||
    (!formActualId && entry.slotId === slot.id && entry.professorId === professorId)
  );
  if (existingActual) {
    record.id = existingActual.id;
    Object.assign(existingActual, record);
  }
  else data.actualLectures.push(record);
  editingActualLectureId = "";
  const progressPayload = {
    id: uid("pr"),
    actualLectureId: record.id,
    batchId: record.batchId,
    professorId,
    date: record.date,
    topic: record.topic,
    hours: actualHours,
    remarks: `Actual entry: ${record.timeIn} to ${record.timeOut} | Break ${record.breakMinutes} min | ${record.lectureStatus}${record.pendingPortion ? ` | Pending: ${record.pendingPortion}` : ""}${record.remarks ? ` | ${record.remarks}` : ""}`
  };
  const existingProgress = data.progress.find((entry) => entry.actualLectureId === record.id);
  if (existingProgress) Object.assign(existingProgress, { ...progressPayload, id: existingProgress.id });
  else data.progress.push(progressPayload);
  saveData();
  if (isProfessorMode() && cloudSyncUrl()) saveCloudData({ silent: true });
}

function saveProfessorManagement(professorId) {
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) return;
  const nameInput = $(`[data-professor-name="${CSS.escape(professorId)}"]`);
  const levelSelect = $(`[data-professor-levels="${CSS.escape(professorId)}"]`);
  const paperNoSelect = $(`[data-professor-paper-nos="${CSS.escape(professorId)}"]`);
  const headPaperBox = $(`[data-professor-head-paper-nos="${CSS.escape(professorId)}"]`);
  const loginInput = $(`[data-professor-login-id="${CSS.escape(professorId)}"]`);
  const passwordInput = $(`[data-professor-password="${CSS.escape(professorId)}"]`);
  const selectedLevels = selectedValues(levelSelect);
  const selectedPaperNos = selectedValues(paperNoSelect).map((paperNo) => Number(paperNo.replace("P", "")));
  const selectedHeadPaperNos = Array.from(headPaperBox?.querySelectorAll("input:checked") || []).map((input) => Number(input.value.replace("P", "")));
  professor.name = nameInput.value.trim() || professor.name;
  professor.loginId = loginInput.value.trim() || professorLoginId(professor);
  professor.loginPassword = passwordInput.value.trim() || professorPassword(professor);
  const otherProgramLevels = (professor.levels || []).filter((level) => !levelsForProgram().includes(level));
  const programLevels = selectedLevels.length ? selectedLevels : levelsForProgram();
  professor.levels = [...otherProgramLevels, ...programLevels];
  const otherProgramPapers = (professor.papers || []).filter((paper) =>
    !levelsForPaper(paper).some((level) => levelsForProgram().includes(level))
  );
  let programPapers = papersFromLevelsAndNos(programLevels, selectedPaperNos);
  if (!programPapers.length) {
    programPapers = allPapers().filter((paper) => programLevels.some((level) => papersForLevel(level).includes(paper)));
  }
  professor.papers = [...otherProgramPapers, ...programPapers];
  const otherHeadPaperNos = (professor.headPaperNos || []).filter((paperNo) =>
    !activeProgramPaperNoOptions().includes(`P${Number(paperNo)}`)
  );
  professor.headPaperNos = activeProgram() === "CMA USA" ? otherHeadPaperNos : [...otherHeadPaperNos, ...selectedHeadPaperNos];
  saveData();
}

function addProfessorFromManagement(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  if (!name) return;
  const selectedLevels = selectedValues(form.elements.levels);
  const selectedPaperNos = selectedValues(form.elements.paperNos).map((paperNo) => Number(paperNo.replace("P", "")));
  const levels = selectedLevels.length ? selectedLevels : levelsForProgram();
  let papers = papersFromLevelsAndNos(levels, selectedPaperNos);
  if (!papers.length) {
    papers = allPapers().filter((paper) => levels.some((level) => papersForLevel(level).includes(paper)));
  }
  data.professors.push({
    id: slug(name) || uid("p"),
    name,
    speciality: selectedPaperNos.length ? `Papers ${selectedPaperNos.join(", ")}` : "New professor",
    home: "Online",
    levels,
    papers,
    headPaperNos: [],
    loginId: professorFirstNameCredential(name),
    loginPassword: professorFirstNameCredential(name),
    color: professorPalette[data.professors.length % professorPalette.length]
  });
  form.reset();
  saveData();
}

function deleteProfessor(professorId) {
  const professor = data.professors.find((item) => item.id === professorId);
  if (!professor) return;
  if (!confirm(`Delete ${professor.name} from Professor Management? Existing timetable cells for this professor will become Open.`)) return;
  data.professors = data.professors.filter((item) => item.id !== professorId);
  data.slots.forEach((slot) => {
    if (slot.professorId === professorId) {
      slot.professorId = "";
      slot.subject = "";
    }
  });
  data.topicPlans = data.topicPlans.filter((plan) => plan.professorId !== professorId);
  data.actualLectures = data.actualLectures.filter((entry) => entry.professorId !== professorId);
  data.progress.forEach((entry) => {
    if (entry.professorId === professorId) entry.professorId = "";
  });
  saveData();
}

function updateFilterVisibility(viewName = document.querySelector(".tab.active")?.dataset.view || "dashboard") {
  const usefulViews = ["dashboard", "weekly", "professorPlanning"];
  $(".filters").classList.toggle("hidden", !usefulViews.includes(viewName));
  const dashboardOnlyFilters = new Set(["centreFilter", "attemptFilter", "levelFilter"]);
  ["centreFilter", "attemptFilter", "levelFilter", "timeSlotFilter", "dayFilter", "professorFilter"].forEach((id) => {
    const label = $(`#${id}`)?.closest("label");
    if (!label) return;
    label.style.display = viewName === "dashboard" && !dashboardOnlyFilters.has(id) ? "none" : "";
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button, .file-trigger");
    if (!button || button.disabled) return;
    animateButton(button, "button-pressed", 180);
  });

  $$("[data-program]").forEach((button) => {
    button.addEventListener("click", () => setActiveProgram(button.dataset.program));
  });

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      tab.classList.add("active");
      $(`#${tab.dataset.view}View`).classList.add("active");
      updateFilterVisibility(tab.dataset.view);
    });
  });

  ["centreFilter", "attemptFilter", "levelFilter", "timeSlotFilter", "dayFilter", "professorFilter"].forEach((id) => $(`#${id}`).addEventListener("change", () => {
    renderDashboard();
    renderTables();
    renderWeeklyTable();
    renderSharePanels();
    renderProfessorPlanning();
    renderProfessorLogin();
  }));
  $("#alertTypeFilter").addEventListener("change", () => renderAlerts([]));
  if ($("#slotForm")) $("#slotForm").addEventListener("submit", addSlot);
  $("#dailyDateFilter").addEventListener("change", renderDailyTimetable);
  $("#dailyLevelFilter").addEventListener("change", renderDailyTimetable);
  $("#dailyCentreFilter").addEventListener("change", renderDailyTimetable);
  if ($("#progressForm")) $("#progressForm").addEventListener("submit", addProgress);
  $("#batchForm").addEventListener("submit", addBatch);
  $("#masterForm").addEventListener("submit", addMaster);
  $("#loginForm").addEventListener("submit", handleLogin);
  document.addEventListener("submit", (event) => {
    animateButton(event.submitter, "button-saved", 700);
  });
  $("#logoutBtn").addEventListener("click", logout);
  $("#initialCloudLoadBtn").addEventListener("click", () => {
    hideInitialCloudPrompt();
    loadCloudData();
  });
  $("#skipInitialCloudLoad").addEventListener("click", hideInitialCloudPrompt);
  $("#cloudLoadBtn").addEventListener("click", loadCloudData);
  $("#cloudSaveBtn").addEventListener("click", (event) => {
    animateButton(event.currentTarget, "button-saved", 700);
    saveCloudData();
  });
  $("#professorManagementForm").addEventListener("submit", addProfessorFromManagement);
  $("#professorManagementLevel").addEventListener("change", renderProfessorManagement);
  $("#professorManagementPaper").addEventListener("change", renderProfessorManagement);
  $("#professorManagementTable").addEventListener("change", (event) => {
    const chip = event.target.closest(".head-paper-chip");
    if (chip) chip.classList.toggle("selected", event.target.checked);
  });
  $("#topicPlanForm").addEventListener("submit", saveTopicPlan);
  $("#topicPlanForm").addEventListener("change", (event) => {
    if (["batchId", "paperNo"].includes(event.target.name)) renderTopicPlanner();
  });
  $("#professorActualForm").addEventListener("submit", saveActualLecture);
  $("#professorSelfTopicForm")?.addEventListener("submit", saveProfessorSelfTopicSelection);
  $("#professorSelfTopicForm")?.addEventListener("change", (event) => {
    if (["comboKey", "targetProfessorId"].includes(event.target.name)) renderProfessorSelfTopicForm(loggedInProfessorId() || $("#professorLoginSelect")?.value || "");
  });
  $("#batchShareSelect").addEventListener("change", renderSharePanels);
  $("#professorShareSelect").addEventListener("change", renderSharePanels);
  $("#professorAllocationLevel").addEventListener("change", renderProfessorPlanning);
  $("#professorAllocationAttempt").addEventListener("change", renderTopicPlanner);
  $("#professorPlanSelect").addEventListener("change", renderProfessorPlanning);
  $("#professorPlanPaperFilter").addEventListener("change", renderTopicPlanner);
  $("#professorTimetableLevel").addEventListener("change", renderProfessorPlanning);
  $("#professorTimetableAttempt").addEventListener("change", renderProfessorTimetableReport);
  $("#professorTimetableSelect").addEventListener("change", renderProfessorPlanning);
  $("#professorTimetablePaperFilter").addEventListener("change", renderProfessorTimetableReport);
  $("#professorHoursLevel").addEventListener("change", renderProfessorPlanning);
  $("#professorHoursAttempt").addEventListener("change", renderProfessorActualBatchHours);
  $("#professorHoursProfessorSelect").addEventListener("change", renderProfessorActualBatchHours);
  $("#professorSummaryLevel").addEventListener("change", renderProfessorPlanning);
  $("#professorSummaryProfessor").addEventListener("change", renderProfessorMonthlySummary);
  $("#professorSummaryMonth").addEventListener("change", renderProfessorMonthlySummary);
  $("#batchMasterLevel").addEventListener("change", renderProfessorPlanning);
  $("#batchMasterAttempt").addEventListener("change", renderBatchAllocationMaster);
  $("#professorHoursMonth").addEventListener("change", (event) => {
    if (event.target.value) {
      $("#professorHoursFrom").value = `${event.target.value}-01`;
      $("#professorHoursTo").value = lastDateOfMonth(event.target.value);
    }
    renderProfessorActualBatchHours();
  });
  $("#professorHoursFrom").addEventListener("change", renderProfessorActualBatchHours);
  $("#professorHoursTo").addEventListener("change", renderProfessorActualBatchHours);
  $("#professorLoginWeek")?.addEventListener("change", (event) => {
    selectedWeekStart = formatDateInput(getFriday(new Date(`${event.target.value}T00:00:00`)));
    renderProfessorLogin();
  });
  $("#professorLoginSelect").addEventListener("change", renderProfessorLogin);
  $("#professorViewImageBtn")?.addEventListener("click", openProfessorWeeklyImage);
  $("#professorPrintPdfBtn")?.addEventListener("click", openProfessorWeeklyPdf);
  $("#professorActualForm").addEventListener("change", (event) => {
    if (event.target.name === "slotId") renderProfessorLogin();
    if (event.target.name === "topicPlanId") {
      const plan = data.topicPlans.find((item) => item.id === event.target.value);
      if (plan && event.currentTarget.elements.topic) {
        event.currentTarget.elements.topic.value = plannedTopicText(plan);
      }
    }
    if (["timeIn", "timeOut", "breakMinutes"].includes(event.target.name)) updateActualHoursField(event.currentTarget);
  });
  $("#copyBatchShareBtn").addEventListener("click", () => copyTextFrom("#batchShareText"));
  $("#copyProfessorShareBtn").addEventListener("click", () => copyTextFrom("#professorShareText"));
  $("#downloadBatchImageBtn").addEventListener("click", downloadBatchImage);
  $("#downloadProfessorImageBtn").addEventListener("click", downloadProfessorImage);
  $("#telegramBatchShareBtn").addEventListener("click", sendSelectedBatchTelegram);
  $("#telegramProfessorShareBtn").addEventListener("click", () => openTelegramShare($("#professorShareText").value));
  $("#weeklyTable").addEventListener("change", updateWeeklySlot);
  $("#addWeeklyRowBtn").addEventListener("click", addWeeklyRow);
  $("#googleSheetLinkInput").addEventListener("change", (event) => {
    data.settings.googleSheetLink = event.target.value.trim();
    saveData();
  });
  $("#weeklyColumnSize").addEventListener("input", (event) => {
    data.settings.weeklyColumnWidth = Number(event.target.value || 180);
    const weeklyTable = $(".weekly-table");
    if (weeklyTable) {
      weeklyTable.style.setProperty("--weekly-column-width", `${data.settings.weeklyColumnWidth}px`);
      weeklyTable.style.minWidth = `${104 + 184 + (filteredBatches().length * data.settings.weeklyColumnWidth)}px`;
    }
  });
  $("#weeklyColumnSize").addEventListener("change", saveData);
  $("#importGoogleSheetBtn").addEventListener("click", importGoogleSheetTimetable);
  $("#changesTTInput")?.addEventListener("input", renderChangesTTPreview);
  $("#applyChangesTTBtn")?.addEventListener("click", applyChangesTT);
  $("#clearChangesTTBtn")?.addEventListener("click", () => {
    $("#changesTTInput").value = "";
    renderChangesTTPreview();
  });
  $("#weekStart").addEventListener("change", (event) => {
    selectedWeekStart = formatDateInput(getFriday(new Date(`${event.target.value}T00:00:00`)));
    if ($("#professorPlanWeek")) $("#professorPlanWeek").value = selectedWeekStart;
    renderWeeklyTable();
    renderProfessorPlanning();
    renderProfessorLogin();
  });
  $("#prevWeekBtn").addEventListener("click", () => {
    selectedWeekStart = addDays(selectedWeekStart, -7);
    if ($("#professorPlanWeek")) $("#professorPlanWeek").value = selectedWeekStart;
    renderWeeklyTable();
    renderProfessorPlanning();
    renderProfessorLogin();
  });
  $("#nextWeekBtn").addEventListener("click", () => {
    selectedWeekStart = addDays(selectedWeekStart, 7);
    if ($("#professorPlanWeek")) $("#professorPlanWeek").value = selectedWeekStart;
    renderWeeklyTable();
    renderProfessorPlanning();
    renderProfessorLogin();
  });

  document.addEventListener("click", (event) => {
    const deleteActualId = event.target.dataset.deleteActual;
    if (deleteActualId) {
      const entry = data.actualLectures.find((item) => item.id === deleteActualId);
      if (!entry) return;
      if (isProfessorMode() && entry.professorId !== loggedInProfessorId()) {
        alert("This login can delete only its own actual lecture records.");
        return;
      }
      if (confirm("Delete this actual lecture entry?")) {
        data.actualLectures = data.actualLectures.filter((item) => item.id !== deleteActualId);
        data.progress = data.progress.filter((item) => item.actualLectureId !== deleteActualId);
        if (editingActualLectureId === deleteActualId) editingActualLectureId = "";
        saveData();
        if (isProfessorMode() && cloudSyncUrl()) saveCloudData({ silent: true });
      }
      return;
    }
    const editActualId = event.target.closest("[data-edit-actual]")?.dataset.editActual;
    if (editActualId) {
      const entry = data.actualLectures.find((item) => item.id === editActualId);
      if (entry && (!isProfessorMode() || entry.professorId === loggedInProfessorId())) {
        editingActualLectureId = editActualId;
        renderProfessorLogin();
        $("#professorActualForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    if (event.target.dataset.cancelActualEdit) {
      editingActualLectureId = "";
      renderProfessorLogin();
      return;
    }
    if (event.target.closest("[data-toggle-conflicts]")) {
      $("#weeklyConflictDetails")?.classList.toggle("hidden");
      return;
    }
    const approveSlotId = event.target.dataset.approveConflict;
    const otherSlotId = event.target.dataset.otherSlot;
    if (approveSlotId && otherSlotId) {
      const first = data.slots.find((slot) => slot.id === approveSlotId);
      const second = data.slots.find((slot) => slot.id === otherSlotId);
      if (first && second) {
        const key = conflictPairKey(first, second);
        first.approvedConflicts = [...new Set([...(first.approvedConflicts || []), key])];
        second.approvedConflicts = [...new Set([...(second.approvedConflicts || []), key])];
        saveData();
      }
      return;
    }
    const slotId = event.target.dataset.deleteSlot;
    const progressId = event.target.dataset.deleteProgress;
    const batchId = event.target.dataset.deleteBatch;
    const timeSlotDate = event.target.dataset.deleteTimeSlotDate;
    const timeSlotStart = event.target.dataset.deleteTimeSlotStart;
    const timeSlotEnd = event.target.dataset.deleteTimeSlotEnd;
    const moveBatchId = event.target.dataset.moveBatch;
    const colorBatchId = event.target.dataset.batchColor;
    const deleteTopicPlanId = event.target.dataset.deleteTopicPlan;
    const saveProfessorId = event.target.dataset.saveProfessor;
    const deleteProfessorId = event.target.dataset.deleteProfessor;
    const copyProfessorLoginId = event.target.dataset.copyProfessorLogin;
    const professorView = event.target.dataset.professorView;
    if (professorView) {
      professorManagementView = professorView;
      renderProfessorManagement();
      return;
    }
    if (saveProfessorId) {
      saveProfessorManagement(saveProfessorId);
      return;
    }
    if (deleteProfessorId) {
      deleteProfessor(deleteProfessorId);
      return;
    }
    if (copyProfessorLoginId) {
      const professor = data.professors.find((item) => item.id === copyProfessorLoginId);
      if (professor) {
        navigator.clipboard?.writeText(professorLoginShareMessage(professor));
        alert(`Login message copied for ${professor.name}.`);
      }
      return;
    }
    if (deleteTopicPlanId) {
      data.topicPlans = data.topicPlans.filter((plan) => plan.id !== deleteTopicPlanId);
      saveData();
      return;
    }
    if (colorBatchId) {
      const batch = batchById(colorBatchId);
      if (batch && paletteForLevel(batch.level).includes(event.target.dataset.color)) {
        batch.color = event.target.dataset.color;
        saveData();
      }
      return;
    }
    if (moveBatchId) {
      const direction = Number(event.target.dataset.direction);
      const index = data.batches.findIndex((batch) => batch.id === moveBatchId);
      const target = index + direction;
      if (index >= 0 && target >= 0 && target < data.batches.length) {
        const [batch] = data.batches.splice(index, 1);
        data.batches.splice(target, 0, batch);
        saveData();
      }
      return;
    }
    if (slotId) data.slots = data.slots.filter((slot) => slot.id !== slotId);
    if (progressId) data.progress = data.progress.filter((entry) => entry.id !== progressId);
    if (batchId && confirm("Delete this batch and its timetable/progress entries?")) {
      data.batches = data.batches.filter((batch) => batch.id !== batchId);
      data.slots = data.slots.filter((slot) => slot.batchId !== batchId);
      data.progress = data.progress.filter((entry) => entry.batchId !== batchId);
    }
    if (timeSlotDate && confirm("Delete this time slot row for this day only? Existing classes in this slot on this date will also be removed.")) {
      const nextSlots = timeSlotsForDate(timeSlotDate).filter((slot) => !(slot.start === timeSlotStart && slot.end === timeSlotEnd));
      setTimeSlotsForDate(timeSlotDate, nextSlots);
      data.slots = data.slots.filter((slot) => !(slot.date === timeSlotDate && slot.start === timeSlotStart && slot.end === timeSlotEnd));
    }
    if (slotId || progressId || batchId || timeSlotDate) saveData();
  });

  document.addEventListener("change", (event) => {
    const topicPlanId = event.target.dataset.topicPlan;
    if (topicPlanId) {
      const plan = data.topicPlans.find((item) => item.id === topicPlanId);
      if (plan) {
        plan[event.target.dataset.field] = Number(event.target.value || 0);
        saveData();
      }
      return;
    }
    const dashboardBatchId = event.target.dataset.dashboardBatch;
    if (dashboardBatchId) {
      const batch = batchById(dashboardBatchId);
      if (!batch) return;
      if (event.target.dataset.field === "plannedHours") {
        batch.plannedHours = Number(event.target.value || 0);
      }
      if (event.target.dataset.field === "targetDate") {
        batch.targetDate = event.target.value;
      }
      saveData();
      return;
    }
    const batchChatId = event.target.dataset.batchChatId;
    if (!batchChatId) return;
    const batch = batchById(batchChatId);
    if (!batch) return;
    batch.telegramChatId = event.target.value.trim();
    saveData();
  });

  $("#exportBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cma-mumbai-planner-data.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  $("#importFile").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    data = JSON.parse(await file.text());
    saveData();
  });

}

function safeRenderStep(name, callback) {
  try {
    callback();
  } catch (error) {
    console.error(`${name} failed`, error);
  }
}

function render() {
  safeRenderStep("Program switch", renderProgramSwitch);
  safeRenderStep("Cloud status", () => updateCloudStatus());
  safeRenderStep("Filter visibility", updateFilterVisibility);
  safeRenderStep("Filters", renderFilters);
  safeRenderStep("Forms", renderForms);
  safeRenderStep("Dashboard", renderDashboard);
  safeRenderStep("Tables", renderTables);
  safeRenderStep("Weekly table", renderWeeklyTable);
  safeRenderStep("Share panels", renderSharePanels);
  safeRenderStep("Professor planning", renderProfessorPlanning);
  safeRenderStep("Professor login", renderProfessorLogin);
  safeRenderStep("Access mode", applyAccessMode);
}

try {
  bindEvents();
} catch (error) {
  console.error("Event binding failed", error);
}
render();
showLoginGate();
if (isLoggedIn()) startCloudSaveReminder();
