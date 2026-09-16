/* ============================================================
   PAGES
   ------------------------------------------------------------
   These are the non-project pages in the left menu, such as
   About. They appear above the project list.

   To ADD a page, copy a whole block from { to }, paste it
   below, and change the text. It appears in the menu on its
   own straight away.

   Each page is built from blocks. You can use these types:

     { h: "Heading", p: ["Paragraph one.", "Paragraph two."] }
     { h: "Heading", l: ["Bullet one", "Bullet two"] }
     { h: "Heading", rows: [["Left label", "Right text"]] }
     { h: "Heading", chips: ["Tag one", "Tag two"] }
     { h: "Heading", timeline: [
         { when: "2025", what: "Job title", where: "Company",
           l: ["What you did", "Another thing"] }
     ]}

   Keep every comma, quote mark and bracket exactly as shown.
   ============================================================ */

const PAGES = [

{
  id: "about",
  nav: "About",
  title: "About me",
  sub: "Mechanical and manufacturing engineer, focused on automation",
  lead: "I design machines that solve a specific production problem, and I like the part where a drawing turns into something running on a factory floor.",
  blocks: [

    { h: "Who I am", p: [
      "I am a Mechanical and Manufacturing Engineering graduate of the University of Ruhuna. My work sits where mechanical design meets control: machine design, PLC and HMI programming, instrumentation and process improvement.",
      "Most of what I have built came from real production environments. Two internships in FMCG manufacturing taught me that a design is only as good as the operator's ability to run it at three in the morning, and that a clever mechanism nobody can maintain is not a solution.",
    ]},

    { h: "What I work on", chips: [
      "Machine design", "Industrial automation", "PLC and HMI programming",
      "Pneumatic and electro-pneumatic systems", "Instrumentation and sensors",
      "CAD and FEA", "Process improvement", "Maintenance engineering",
    ]},

    { h: "Experience", timeline: [
      { when: "Aug – Nov 2025", what: "Intern, Automation Engineer", where: "Hemas Consumer Brands", l: [
        "Delivered automation and continuous-improvement projects on live FMCG production lines",
        "Developed and modified PLC and HMI control systems across Mitsubishi, Siemens and Allen-Bradley platforms",
        "Executed control panel wiring and instrumentation integration",
        "Applied TPM, RBM, CBM, Lean, TQM and 5S practices to equipment reliability",
      ]},
      { when: "May – Aug 2024", what: "Mechanical Engineering Trainee", where: "Ceylon Biscuits Limited", l: [
        "Maintained conveyors, gearboxes, boilers and packaging machines in a large-scale food plant",
        "Diagnosed pneumatic and electromechanical faults on live production lines",
        "Designed a vibrating conveyor for spice application and an air-entrapment reduction mechanism",
        "Managed maintenance planning and inventory control in SAP ERP",
      ]},
    ]},

    { h: "Education", rows: [
      ["BSc.Eng (Hons), Mechanical and Manufacturing Engineering", "University of Ruhuna, 2026"],
      ["G.C.E. Advanced Level 2020", "Physics A, Chemistry A, Combined Mathematics B"],
      ["St. Sylvester's College, Kandy", "2015 – 2020"],
    ]},

    { h: "Software", chips: [
      "SolidWorks", "AutoCAD", "SolidCAM", "Onshape", "ANSYS", "MATLAB and Simulink",
      "JMAG Designer", "Festo FluidSim", "GX Works2", "GT Designer", "Haiwell Happy",
      "Linkage", "SAP ERP", "MS Project",
    ]},

    { h: "Hardware and controls", chips: [
      "Mitsubishi PLC", "Siemens PLC", "Allen-Bradley PLC", "Haiwell PLC", "IDEC", "Delta",
      "GOT1000 and GOT2000 HMI", "AC servo drives", "VFDs", "Keyence vision systems",
      "Sensors and instrumentation", "Control panel wiring", "PCB design", "STM32",
    ]},

    { h: "Awards", l: [
      "CAD Vortex SOLIDWORKS Competition 2026, Champions",
      "Auto Mech PLC Competition 2026, Champions",
      "Lean Six Sigma Yellow Belt Certification, MF Treinamentos",
      "Highest-scoring project, Engineering Department Kaizen Team Competition, Hemas 2025",
    ]},

    { h: "Outside the workshop", l: [
      "President 2026, Vice President 2025 and Editor 2024, REF Media, Ruhuna Engineering Faculty Media Unit",
      "Editor 2024, Ruhuna Engineering Student Chapter of the IESL",
      "Student volunteer, Mehewara, Students' Union, Faculty of Engineering",
    ]},

    { h: "Get in touch", rows: [
      ["Phone", "+94 77 208 0395"],
      ["Email", "vspolgolla@icloud.com"],
      ["LinkedIn", "linkedin.com/in/vidhura-polgolla"],
      ["Location", "Dambulla, Sri Lanka"],
    ]},

  ],
},

/* ------------------------------------------------------------
   To add another page, remove the slash-star marks around the
   block below and change the text.

{
  id: "certifications",
  nav: "Certifications",
  title: "Certifications",
  sub: "Training and qualifications",
  lead: "",
  blocks: [
    { h: "Completed", l: [
      "Course name, awarding body, year",
    ]},
  ],
},

------------------------------------------------------------ */

];
