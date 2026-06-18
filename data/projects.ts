export const projects = [
  {
    id: "p7",
    title: "Real Estate Broker Website & CRM",
    summary:
      "Designed and built a full-featured broker platform for a real estate company — covering property listings, unit management, lead tracking, document generation, and a client-facing inquiry portal. The system streamlines the full sales cycle from listing to closing.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Dynamic property & unit listings with media uploads",
      "CRM with lead, broker, and transaction management",
      "Role-based access for brokers, admins, and developers",
      "Automated document generation and e-signature support",
      "Client inquiry portal with real-time status tracking",
      "Commission tracking and audit logs",
    ],
    impact:
      "Replaced manual spreadsheet workflows with a centralized, role-based platform — reducing admin overhead and enabling the team to manage dozens of active transactions simultaneously.",
  },
  {
    id: "p8",
    title: "E-Commerce Store & Marketplace",
    summary:
      "Built a premium e-commerce marketplace from the ground up, featuring product catalogs, seller dashboards, buyer authentication, and a full order management pipeline. Designed with a luxury aesthetic targeting collectors and high-value product segments.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Multi-role authentication: Admin, Seller, and Buyer",
      "Seller dashboard for listing, pricing, and inventory management",
      "Product catalog with search, filtering, and category browsing",
      "Order lifecycle management from cart to fulfillment",
      "Admin panel for user management and platform oversight",
      "Premium dark-mode UI with glassmorphism and smooth animations",
    ],
    impact:
      "Delivered a production-ready marketplace with secure role-based access, enabling sellers to independently manage their storefronts while giving admins full platform visibility.",
  },
  {
    id: "p1",
    title: "Smart Rover & Companion App",
    summary:
      "Developed a single autonomous rover with onboard perception and a companion mobile app for control, telemetry, and field diagnostics.",
    tech: ["C++", "ROS", "OpenCV", "Python", "React Native"],
    impact:
      "Delivered a deployable prototype that simplified manual inspection tasks and reduced operator time in the field.",
  },
  {
    id: "p2",
    title: "Drone-Based Inspection & App",
    summary:
      "Built a single drone sensing and processing pipeline with an accompanying app for mission setup and results review.",
    tech: ["PX4", "TensorFlow Lite", "OpenCV", "Python", "React Native"],
    impact:
      "Enabled faster area surveys and automated detection of target features, reducing manual post-processing.",
  },
  {
    id: "p3",
    title: "IoT Prototypes & Integrations",
    summary:
      "Designed and delivered multiple IoT prototypes and integrations for sensing, local processing, and cloud reporting (prototype scale, not fleet management).",
    tech: ["ESP32", "MQTT", "C", "Node.js", "Postgres"],
    features: [
      "Sensor data acquisition and local edge processing",
      "MQTT-based pub/sub messaging for real-time telemetry",
      "Cloud reporting dashboard for aggregated device data",
      "Low-power firmware optimized for ESP32 hardware",
      "Modular integration layer for third-party APIs and services",
    ],
    impact:
      "Rapid prototypes enabled proof-of-concept deployments and accelerated product decision cycles.",
  },
  {
    id: "p4",
    title: "Kiosk & Business Solutions",
    summary:
      "Delivered kiosk software and integrated backend solutions for point-of-service deployments, focused on reliability and UX.",
    tech: ["React", "Electron", "Node.js", "Postgres"],
    features: [
      "Touch-friendly kiosk UI built with React and Electron",
      "Offline-capable mode with local data sync on reconnect",
      "Backend API for transaction processing and reporting",
      "Remote configuration and software update management",
      "Integrated receipt printing and peripheral device support",
    ],
    impact:
      "Improved transaction reliability and simplified remote maintenance across deployed kiosks.",
  },
  {
    id: "p5",
    title: "Predictive ML Models",
    summary:
      "Built predictive models for forecasting and anomaly detection used internally to inform decisions and automate alerts.",
    tech: ["Python", "scikit-learn", "TensorFlow", "Pandas"],
    features: [
      "Time-series forecasting models for business metric prediction",
      "Anomaly detection pipeline with configurable alert thresholds",
      "Feature engineering and data preprocessing workflows",
      "Model evaluation and validation reporting",
      "Automated alert system for surfacing critical anomalies",
    ],
    impact:
      "Provided actionable predictions that reduced manual review and surfaced important anomalies earlier.",
  },
  {
    id: "p6",
    title: "Websites & Desktop Applications",
    summary:
      "Developed multiple websites and web applications using a variety of frameworks, and desktop applications for internal tools and client demos.",
    tech: ["React", "Next.js", "Vue", "Angular", "Node.js", "C#", ".NET", "Java", "JavaFX", "Electron"],
    features: [
      "Responsive web apps built with React, Next.js, Vue, and Angular",
      "RESTful and server-side APIs with Node.js and .NET backends",
      "Desktop applications using Electron and JavaFX",
      "Internal tooling for workflow automation and data management",
      "Client-facing demos and presentation-ready prototypes",
    ],
    impact:
      "Delivered responsive web experiences and desktop tools that improved internal workflows and client integrations.",
  },
];

