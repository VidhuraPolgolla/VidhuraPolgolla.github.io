/* ============================================================
   PROJECTS
   ------------------------------------------------------------
   Every project on the site is one block below.

   To ADD a new project, copy a whole block from { to },
   paste it where you want it to appear, and change the text.

   To REMOVE a project, delete its block from { to }.

   To REORDER, cut a block and paste it somewhere else.

   Image files go in the images folder. Write only the file
   name, for example "images/my-photo.jpg".

   Set  diagram: true  for CAD screenshots, drawings and FEA
   plots, so the whole image shows on a white background.
   Leave it out for normal photographs.

   Keep every comma, quote mark and bracket exactly as shown.
   ============================================================ */

const PROJECTS = [

{
  id: "glove",
  nav: "Glove pin-hole tester",
  tag: "Capstone",
  title: "Automated Glove Pin-Hole Detection Machine",
  sub: "Differential pressure decay testing system",
  meta: [
    ["Role", "Control system design, simulation, costing"],
    ["Partner", "Lalan Rubbers (Pvt) Ltd"],
    ["Team", "4 members"],
    ["Period", "Jan – Aug 2026"],
  ],
  lead: "An automated leak tester that replaces manual glove inspection with a repeatable pressure-decay measurement, built modular so a vision stage can be added later.",
  metrics: [
    ["4", "stations tested in parallel"],
    ["0.001 psi", "measurement accuracy"],
    ["Modbus", "station communication"],
    ["Real time", "HMI pressure monitoring"],
  ],
  hero: { src: "images/glove-machine.jpg", cap: "The completed four-station pilot machine" },
  sections: [
    { h: "The problem", p: [
      "A pinhole destroys the barrier a surgical glove exists to provide. Inspection at the plant was still manual, so it was slow, inconsistent, and hard to repeat at production volume. The brief was an industrial-grade automated tester with room to grow into a hybrid inspection system."
    ]},
    { h: "How it works", p: [
      "Gloves mount on mandrels fixed to a rotating door plate that indexes them from loading to testing to unloading. At the test station each glove is inflated and allowed to settle. The controller then takes an initial pressure reading, holds a measurement window, takes a final reading, and computes both total decay and pressure drop rate, producing a PASS or FAIL verdict for each station independently."
    ]},
    { h: "What I did", l: [
      "Designed the control system architecture and the STM32 test sequencing logic",
      "Ran structural simulations on the pilot frame and load-bearing components",
      "Developed concepts through objective tree, functional analysis and morphological chart",
      "Prepared the budget and bill of materials for the control unit and the full machine",
      "Contributed to fabrication, assembly and commissioning",
    ]},
    { h: "Control architecture", p: [
      "Four control architectures were compared. A fully PLC-based system needed expensive analog input modules. A fully microcontroller-based system gave up monitoring maturity. The selected hybrid puts sensing, sequencing and the accept or reject decision on the STM32, while the PLC layer handles HMI integration and monitoring. That removed the analog module from the bill of materials without giving up industrial-grade control."
    ]},
  ],
  results: [
    "Four gloves tested at once, with live pressure, total decay and drop rate shown on the HMI",
    "Pass and fail detection verified across all stations against defined acceptance criteria",
    "Mechanical, pneumatic, electronic and HMI subsystems validated as one integrated system",
    "DIP-switch Modbus addressing means the same board scales to a multi-station machine",
  ],
  tools: ["SolidWorks", "SolidWorks Simulation", "Embedded C (STM32)", "PCB design", "Modbus", "I²C",
          "Honeywell 24PC sensors", "HMI", "Pneumatics", "ISO 11193-1", "ASTM D5151", "EN 455-1"],
  note: "Supervised by Dr. K. C. Wickramasinghe, Department of Mechanical and Manufacturing Engineering, University of Ruhuna.",
  gallery: [
    { src: "images/glove-hmi.jpg",           cap: "HMI showing live pressure, decay and verdict" },
    { src: "images/glove-control-panel.jpg", cap: "Control circuit and panel" },
    { src: "images/glove-pcb-build.jpg",     cap: "Fabricating the custom PCB" },
    { src: "images/glove-pcb-etching.jpg",   cap: "PCB etching" },
    { src: "images/glove-team.jpg",          cap: "The project team with our supervisor" },
  ],
},

{
  id: "boxmachine",
  nav: "Box forming machine",
  tag: "Final year design",
  title: "Double-Feeding Corrugated Box Forming Machine",
  sub: "High-speed case erector for mixed-model production lines",
  meta: [
    ["Role", "Sole designer"],
    ["Partner", "Hemas Consumer Brands"],
    ["Type", "Individual final year design project"],
    ["Period", "Jan – Aug 2026"],
  ],
  lead: "A dedicated case erector that forms two preset box sizes from a dual magazine, designed to replace a shared six-axis robot arm that had become the bottleneck across two packing lines.",
  metrics: [
    ["Under 10 s", "cycle time, down from 25 s"],
    ["USD 13.9k", "total bill of materials"],
    ["59", "minimum factor of safety"],
    ["4", "concepts evaluated"],
  ],
  hero: { src: "images/box-cad-main.jpg", cap: "Rendered CAD model of the complete machine", diagram: true },
  sections: [
    { h: "The problem", p: [
      "One six-axis SZGH robot arm forms boxes for two packing lines at roughly 25 seconds per box. During high-demand runs it becomes the bottleneck, and it brings its own failure modes: misalignment, suction failures, box distortion, and stoppages that need an operator to step in."
    ]},
    { h: "Design targets", l: [
      "Above 6 boxes per minute, a 10-second cycle",
      "Box range 350–600 × 200–350 × 150–300 mm, covering four secondary pack sizes",
      "Dual magazine holding two preset sizes",
      "Footprint within 3.0 × 2.5 × 2 m",
      "Components rated for a high-dust soap environment",
      "Manufacturing cost under LKR 5 million",
    ]},
    { h: "What I did", l: [
      "Generated four full concepts via objective tree, functional analysis and morphological chart",
      "Sized servo motors, pneumatic cylinders, gearboxes and venturi vacuum ejectors by calculation",
      "Built the complete 3D CAD assembly and ran FEA on frame, sealing rails and feeding stand",
      "Designed the electrical, control and pneumatic architecture with safety interlocks",
      "Prepared the full bill of materials and costing",
    ]},
    { h: "Design rationale", p: [
      "The changeover mechanism drove everything else. A centreline-symmetrical layout keeps the centre fixed and adjusts both sides; a fixed datum line fixes one side and adjusts the other. The fixed datum line was selected, so only one conveyor moves during a size change. That single choice cut actuator count, mechanical complexity and cost across the whole machine.",
      "A weighted decision matrix, with flexibility and changeover at 30%, reliability 30%, simplicity 20%, cost 15% and throughput 5%, scored it 3.65, against 3.20 for the fully servo-driven concept and 2.45 for the fully manual one.",
    ]},
  ],
  results: [
    "Gantry kinematics: controlled forward stroke at 1 m/s, rapid return at 2 m/s and 4 m/s², meeting the 10-second cycle",
    "MJ50 linear rail: 67.36 N linear force, 4.16 Nm at the drive pulley with a 3.0 safety factor, 1091 rpm, resolved to 2182 RPM and 2.08 Nm through a 1:2 gearbox",
    "Side-drive conveyor: 122.64 N drive force, 1.84 Nm shaft torque, 128 rpm, 30.82 W, 1:10 gear head",
    "Inner flap cylinder solved in Linkage v3.16, giving a 100 mm arm, 16 mm bore and 60 mm stroke",
    "FEA minimum factors of safety: frame 59, sealing rails 48 at 0.035 mm displacement, feeding stand 15",
    "Complete BOM at USD 13,884.61 including contingency, against USD 30,000–150,000 for robotic case erectors",
  ],
  tools: ["SolidWorks", "FEA", "Kinematic analysis", "Linkage v3.16", "MJ50 servo gantry", "AC servo drives",
          "24 V DC PLC", "HMI", "VFD", "Venturi vacuum ejector", "Rodless cylinder", "6-bar FRL circuit"],
  note: "Supervised by Mr. K. M. C. Dayananda, Department of Mechanical and Manufacturing Engineering, University of Ruhuna.",
  gallery: [
    { src: "images/box-cad-alt.jpg",          cap: "Rendered CAD model, alternate view", diagram: true },
    { src: "images/box-layout.jpg",           cap: "Geometric layout and component placement", diagram: true },
    { src: "images/box-squaring.jpg",         cap: "Box squaring mechanism", diagram: true },
    { src: "images/box-flap-folding.jpg",     cap: "Bottom flap folding mechanism", diagram: true },
    { src: "images/box-sealing.jpg",          cap: "Bottom sealing unit", diagram: true },
    { src: "images/box-fea-displacement.jpg", cap: "Structural FEA, displacement plot", diagram: true },
    { src: "images/box-fea-safety.jpg",       cap: "Structural FEA, factor of safety plot", diagram: true },
  ],
},

{
  id: "sorting",
  nav: "Vision sorting system",
  tag: "Exhibition",
  title: "Automated Sorting System",
  sub: "PLC, machine vision and pneumatics",
  meta: [
    ["Role", "Controls, HMI, conveyor fabrication"],
    ["Built for", "ReXtro 2025 Exhibition"],
    ["Where", "Faculty of Engineering, University of Ruhuna"],
    ["Period", "Nov – Dec 2025"],
  ],
  lead: "A working demonstration rig that identifies cylindrical components on a moving conveyor with a Keyence vision camera and sorts them using PLC-controlled pneumatics.",
  metrics: [
    ["2", "part types identified"],
    ["1", "pneumatic reject arm"],
    ["GOT2000", "HMI developed"],
  ],
  hero: { src: "images/sorting-conveyor.jpg", cap: "The sorting conveyor with its vision station" },
  sections: [
    { h: "What it does", p: [
      "The system identifies two defined component types moving on a conveyor and sorts them automatically. Anything outside the predefined types is pushed off the line by a pneumatic reject arm. It ran continuously across the exhibition."
    ]},
    { h: "What I did", l: [
      "Programmed the control system on a Mitsubishi PLC using GX Works2",
      "Developed a Mitsubishi GOT2000 HMI in GT Designer for monitoring and control",
      "Integrated the Keyence vision system for component identification",
      "Handled mechanical design and fabrication of the conveyor structure",
      "Trained junior students on PLC operation so they could run the demonstration themselves",
    ]},
  ],
  results: [
    "Ran continuously as a live demonstration across the event",
    "Control approach drew directly on practical experience from the Hemas internship",
    "Junior students independently operated and explained the system to visitors",
  ],
  tools: ["Mitsubishi PLC", "GX Works2", "GOT2000 HMI", "GT Designer", "Keyence vision system",
          "Pneumatic actuation", "Conveyor fabrication"],
  note: "",
  gallery: [
    { src: "images/sorting-plc.jpg",  cap: "Mitsubishi L-series PLC and Keyence I/O card" },
    { src: "images/sorting-team.jpg", cap: "The team at the exhibition" },
  ],
},

{
  id: "labsa",
  nav: "LABSA dosing automation",
  tag: "Industry",
  title: "Automation of the LABSA Pumping System",
  sub: "Flow-controlled chemical dosing with PLC and HMI",
  meta: [
    ["Role", "PLC logic, HMI, instrumentation, wiring"],
    ["Company", "Hemas Consumer Brands, Sri Lanka"],
    ["Context", "Cross-functional Kaizen project"],
    ["Period", "Aug – Sep 2025"],
  ],
  lead: "Replaced manual sight-mark measurement of Linear Alkylbenzene Sulfonic Acid in the DIVA detergent line with automated, flow-based dosing.",
  metrics: [
    ["99%+", "dosing accuracy per batch"],
    ["1.2 to 0.8", "scrap factor"],
    ["LKR 1.2M", "estimated annual saving"],
    ["1st", "in the Kaizen competition"],
  ],
  hero: { src: "images/labsa-hmi.jpg", cap: "The HMI built for dosing control and monitoring" },
  sections: [
    { h: "The problem", p: [
      "LABSA transfer relied on operators reading visual level markings. That produced inaccurate dosing, quality variation between batches, and unnecessary risk during chemical handling. The goal was precise dosing, reliable repeatability, and monitoring an operator could actually see."
    ]},
    { h: "What I did", l: [
      "Developed the PLC control logic for automated pump operation",
      "Designed and configured the HMI for real-time monitoring and operator control",
      "Integrated flow meter pulse output for accurate, flow-based dosing",
      "Implemented safety interlocks and emergency stop",
      "Contributed to panel wiring, labelling and full system integration",
    ]},
  ],
  results: [
    "Over 99% dosing accuracy achieved per batch",
    "Scrap factor reduced from 1.2 to 0.8",
    "Estimated annual cost saving of LKR 1.2 million",
    "Batch-wise LABSA consumption now logged and traceable",
    "Manual intervention eliminated from the transfer process",
    "Selected as the highest-scoring project in the Engineering Department Kaizen Team Competition",
  ],
  tools: ["Mitsubishi FX5U-32M PLC", "GOT1000 HMI", "GX Works2", "GT Designer",
          "Endress+Hauser Promass F 500", "Pneumatic diaphragm pump", "Safety interlocks", "Panel wiring"],
  note: "",
  gallery: [
    { src: "images/labsa-panel.jpg",     cap: "Panel box wiring and tagging" },
    { src: "images/labsa-flowmeter.jpg", cap: "The installed Coriolis flow meter" },
  ],
},

{
  id: "changeover",
  nav: "Filling machine changeover",
  tag: "Industry",
  title: "Changeover Time Reduction in a Volumetric Filling Machine",
  sub: "Bypass reed-switch control",
  meta: [
    ["Role", "Design and implementation"],
    ["Company", "Hemas Consumer Brands, Sri Lanka"],
    ["Line", "Shampoo filling, about 120 bottles per minute"],
    ["Period", "Jul – Aug 2025"],
  ],
  lead: "Removed manual reed-switch repositioning from every product changeover on a high-speed filling line, using a bypass switching system that needed no change to the PLC program.",
  metrics: [
    ["6 min", "saved per changeover"],
    ["120", "bottles per minute"],
    ["0", "changes to the PLC program"],
  ],
  hero: { src: "images/changeover-machine.jpg", cap: "The volumetric filling machine" },
  sections: [
    { h: "The problem", p: [
      "Piston stroke sets the filling volume, and stroke is controlled by a magnetic reed switch mounted on the cylinder via an adjustable screw. At every changeover, operators physically repositioned that switch to move between full stroke and the required filling stroke, roughly 6 to 7 minutes each time, on a line running at about 120 bottles per minute."
    ]},
    { h: "What I did", l: [
      "Designed and implemented a bypass switching system that removes manual adjustment",
      "Enabled instant switching between full stroke and preset filling stroke",
      "Integrated additional reed switches to simplify cylinder control",
      "Reorganised and tagged the wiring to cut wrench time and improve access",
    ]},
    { h: "Design rationale", p: [
      "A bypass switch toggles between the adjustable reed switch and a fixed end-position reed switch, so the machine moves between two predefined stroke positions without anyone relocating a sensor. The PLC program was left completely untouched, because it responds to the input signal regardless of which physical switch produced it. Keeping the control logic out of scope is what made this cheap, robust, and deployable inside a shift."
    ]},
  ],
  results: [
    "Changeover time cut by 6 minutes per product change",
    "Machine availability improved on a high-speed line",
    "Maintenance effort reduced and operator access improved",
  ],
  tools: ["PLC-controlled systems", "Pneumatic cylinders", "Magnetic reed switches",
          "Electrical control circuits", "Changeover reduction", "SMED thinking"],
  note: "",
  gallery: [
    { src: "images/changeover-wiring.jpg", cap: "Wiring and selector switch installation" },
  ],
},

{
  id: "rolls",
  nav: "Chinese rolls line",
  tag: "Academic",
  title: "Fully Automated Chinese Rolls Production Line",
  sub: "Electro-pneumatic and PLC system design",
  meta: [
    ["Role", "Circuit design, PLC logic, documentation"],
    ["Module", "Industrial Automation"],
    ["Where", "University of Ruhuna"],
    ["Type", "Team project"],
  ],
  lead: "An end-to-end automation concept for a food production line, covering every stage from pastry sheet preparation through to final packing.",
  metrics: [
    ["Full line", "process automated"],
    ["AC16SOT/P", "Haiwell PLC selected"],
  ],
  hero: { src: "images/rolls-layout.jpg", cap: "Process layout across the full line" },
  sections: [
    { h: "The brief", p: [
      "Automate a complete Chinese rolls production line, combining mechanical systems, PLC control and electro-pneumatics, with the goal of raising efficiency, hygiene and consistency at production scale."
    ]},
    { h: "What I did", l: [
      "Mapped and configured the full process sequence",
      "Designed the electro-pneumatic control circuit in Festo FluidSim",
      "Selected the PLC, sensors and actuators for each stage",
      "Developed ladder logic in Haiwell Happy",
      "Simulated and validated system operation, and compiled the technical report and diagrams",
    ]},
  ],
  results: [
    "Validated sequence covering filling, folding, rolling, frying and batching",
    "Complete electro-pneumatic circuit and ladder logic package delivered",
    "Practical experience selecting sensors and actuators against real constraints",
  ],
  tools: ["Festo FluidSim", "Haiwell Happy", "Haiwell AC16SOT/P PLC", "Ladder logic",
          "Electro-pneumatics", "Sensor and actuator selection"],
  note: "",
  gallery: [
    { src: "images/rolls-circuit.jpg", cap: "Electro-pneumatic circuit diagram", diagram: true },
  ],
},

{
  id: "sprinkler",
  nav: "Spice sprinkler",
  tag: "Internship",
  title: "Vibrating Spice Sprinkler Machine",
  sub: "Design, fabrication and trial",
  meta: [
    ["Role", "Design contributor, CAD, trials"],
    ["Company", "Ceylon Biscuits Limited"],
    ["Requested by", "Chief Engineer"],
    ["Period", "Jun – Aug 2024"],
  ],
  lead: "A vibrating-plate spice applicator designed to replace a roller-brush system that clogged with spice clumps and distributed unevenly over the biscuit line.",
  metrics: [],
  hero: { src: "images/sprinkler-built.jpg", cap: "The fabricated vibrating conveyor under trial" },
  sections: [
    { h: "The problem and the design", p: [
      "The existing roller-brush applicator needed constant cleaning as spice clumped on the brush, and large lumps dropped onto the biscuits. The engineering team initiated a vibrating-plate alternative and I was asked to contribute.",
      "The design used a stainless-steel plate driven by a horizontal vibrator. A 2×2 steel box-bar support structure damped unwanted vibration; a triangular plate replaced the rectangular one to improve spread; two slots took an adjustable knife mechanism to control spice flow; and the plate was aligned with the vibrator direction, feeding spice at the vibrator end rather than mid-plate. The full structure was modelled in SolidWorks before fabrication.",
    ]},
    { h: "What happened in testing", p: [
      "Trials with the red spice mix initially showed uneven distribution. After iterating on vibration frequency, amplitude and plate orientation, we achieved uniform distribution.",
      "Onion powder behaved differently. It adhered to the plate and accumulated, degrading distribution over time. Despite repeated design adjustments the problem persisted, and the team reverted to the roller-brush method while tackling its clogging separately.",
    ]},
    { h: "What I took from it", p: [
      "A working understanding of how bulk solids behave under vibration, real experience of iterative design under uncertainty, and the judgement to recognise when a limitation is fundamental to the approach rather than something another iteration will fix."
    ]},
  ],
  results: [],
  tools: ["SolidWorks", "Mechanical design", "Vibration behaviour", "Fabrication", "Design iteration", "Trial and validation"],
  note: "",
  gallery: [
    { src: "images/sprinkler-cad.jpg", cap: "SolidWorks model of the plate assembly", diagram: true },
  ],
},

{
  id: "stacking",
  nav: "Biscuit stacking mechanism",
  tag: "Internship",
  title: "Sandwich Biscuit Stacking Mechanism",
  sub: "Concept design for the pile packing operation",
  meta: [
    ["Role", "CAD design under the Factory Mechanical Engineer"],
    ["Company", "Ceylon Biscuits Limited"],
    ["Status", "Concept stage"],
    ["Period", "Jun – Aug 2024"],
  ],
  lead: "A stacking mechanism able to handle premade cream sandwich biscuits for two-biscuit canteen packs, a capability the existing pile pack machine did not have.",
  metrics: [],
  hero: { src: "images/stacking-iso.jpg", cap: "Isometric view of the stacking mechanism", diagram: true },
  sections: [
    { h: "The concept", p: [
      "The existing stacking system could only handle regular biscuits. Working under Factory Mechanical Engineer Mr. Udaya Kumara, the concept separates biscuits fed into the magazine loader and opens gaps between them using conveyors running at different speeds. An inclined placement path using lugs and chain positions one biscuit on top of another, and twin chains replace a single chain to improve lug stability."
    ]},
    { h: "What I did", l: [
      "Designed the full CAD model of the stacking mechanism in SolidWorks",
      "Ran frequent design iterations to refine the mechanism geometry",
      "Modelled complex multi-part assemblies, a significant step up in CAD capability at the time",
    ]},
  ],
  results: [],
  tools: ["SolidWorks", "Mechanism design", "Conveyor systems", "Chain and lug drives", "Iterative CAD modelling"],
  note: "The machine remained at concept stage during the internship period; the design package was handed over for further development.",
  gallery: [
    { src: "images/stacking-closeup.jpg", cap: "Close-up view", diagram: true },
    { src: "images/stacking-side.jpg",    cap: "Side view", diagram: true },
    { src: "images/stacking-top.jpg",     cap: "Top view", diagram: true },
  ],
},

{
  id: "airtrap",
  nav: "Air-trapping mechanism",
  tag: "Internship",
  title: "Air-Trapping Mechanism for a Vertical Form-Fill-Seal Machine",
  sub: "Servo-driven design inside a tight envelope",
  meta: [
    ["Role", "Concept and CAD design"],
    ["Company", "Ceylon Biscuits Limited"],
    ["Constraint", "150 × 150 × 500 mm available space"],
    ["Period", "Jun – Aug 2024"],
  ],
  lead: "A compact mechanism that traps air inside biscuit packets before sealing, so packs leave the machine looking filled rather than shrunken.",
  metrics: [
    ["150×150×500", "mm design envelope"],
    ["1", "servo driving both wheels"],
  ],
  hero: { src: "images/airtrap-cad.jpg", cap: "CAD model of the air-trapping mechanism", diagram: true },
  sections: [
    { h: "The problem", p: [
      "The horizontal sealing jaws close packets without trapping air, leaving shrunken packs with poor shelf appeal. The mechanism uses rotating half-wheels driven by a servo motor through a dual-sided timing belt."
    ]},
    { h: "How it works", p: [
      "Biscuits fill the packet. The flat faces of the half-wheels sit open as the packet passes, letting it retain air. Just before sealing, the half-wheels rotate to squeeze the packet, trapping the air and shaping the pack."
    ]},
    { h: "Design features", l: [
      "Servo motor control for precise wheel rotation timed against the sealing operation",
      "Dual-sided timing belt driving both half-wheels in synchronised motion from one motor",
      "Compact mounting structure fitting the 150 × 150 × 500 mm space available",
      "Full SolidWorks model built to verify clearance against existing machine components",
    ]},
  ],
  results: [],
  tools: ["SolidWorks", "Servo motor integration", "Timing belt drives", "Packaging machinery",
          "Space-constrained design", "Motion timing"],
  note: "Not implemented during the internship period, but the design established a workable approach to a long-standing presentation issue within tight spatial constraints.",
  gallery: [
    { src: "images/airtrap-top.jpg", cap: "Top view without the motor", diagram: true },
  ],
},

{
  id: "hopper",
  nav: "Weigher hopper redesign",
  tag: "Internship",
  title: "Multihead Weigher Hopper Modification",
  sub: "Reverse engineering and design adaptation",
  meta: [
    ["Role", "Measurement, adaptation, CAD"],
    ["Company", "Ceylon Biscuits Limited"],
    ["Machines", "Simionato and ISHIDA weighers"],
    ["Period", "Jun – Aug 2024"],
  ],
  lead: "Redesigned the hopper of a Simionato multihead weigher to reduce biscuit breakage from excessive drop height, benchmarking against the plant's newer ISHIDA unit.",
  metrics: [],
  hero: { src: "images/hopper-comparison.jpg", cap: "Existing hopper against the proposed design", diagram: true },
  sections: [
    { h: "The problem", p: [
      "A multihead weigher governs precise, efficient weighing ahead of packaging. Of the plant's two units, the Simionato machine showed noticeably higher biscuit breakage than the ISHIDA machine, traced to hopper geometry and the resulting drop height."
    ]},
    { h: "What I did", l: [
      "Measured the hoppers on both machines and calculated the height differences",
      "Scaled and adapted the ISHIDA hopper geometry to the Simionato mounting requirements",
      "Modelled the modified hopper in SolidWorks against dimensional and installation constraints",
    ]},
  ],
  results: [],
  tools: ["SolidWorks", "Reverse engineering", "Design scaling", "Measurement and benchmarking", "Packaging equipment"],
  note: "The redesigned hopper was not fabricated within the internship period. The work built practical skill in measurement technique, design scaling, and adapting a proven solution to a different machine.",
  gallery: [
    { src: "images/hopper-cad.jpg", cap: "Proposed hopper CAD model", diagram: true },
  ],
},

];
