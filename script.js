const profileData = {
  name: "Edwin Tack (Ji-Wan Tack)",
  headline: "Technical Account Manager | Alibaba Cloud Korea | Cloud & Applied AI",
  summary:
    "Customer-facing cloud professional with experience in Landing Zone architecture, Kubernetes-based PoCs, and technical enablement. Currently Technical Account Manager at Alibaba Cloud Korea; previously Presales Manager (New Relic) at Megazone Cloud. My applied AI portfolio includes a read-only incident-triage agent, W&B Weave evaluation, and OpenTelemetry tracing.",
  about:
    "I help enterprise customers turn technical requirements into cloud architecture plans, product choices, and practical delivery steps. My professional experience covers Landing Zones, database troubleshooting and performance tuning, APM, and PoCs across Linux, Docker, and Kubernetes. My AI portfolio adds bounded agent workflows, synthetic evaluation, and failure analysis, alongside public technical education on chatbot configuration and LLM cost considerations. I communicate technical trade-offs in Korean and English.",
  links: {
    linkedin: "https://www.linkedin.com/in/edwin-tack-495477b3",
    community: "https://community.alibabacloud.com/users/5750724925542254",
    communityAlt: "https://community.alibabacloud.com/users/5755173590785132",
  },
  highlights: [
    { label: "Current Role", value: "Technical Account Manager" },
    { label: "Portfolio Focus", value: "Agent Evaluation & LLMOps" },
    { label: "Cloud Foundation", value: "Landing Zones & Kubernetes" },
  ],
  experience: [
    {
      role: "Technical Account Manager",
      company: "Alibaba Korea Inc., Seoul, Republic of Korea",
      period: "January 2023 - Present",
      details: [
        "Standardized operations management with risk control, product upgrades, and emergency failure response.",
        "Designed and delivered landing zone architecture services including database localization, performance tuning, and data platform support.",
        "Led technical support as a primary contact and provided best practices, guidance, and customer training.",
        "Delivered cloud strategy consulting, architecture planning, and product selection recommendations for long-term customer success.",
        "Built relationships with key decision-makers and supported business development through technical account engagement.",
      ],
    },
    {
      role: "Presales Manager (New Relic)",
      company: "Megazone Cloud Inc., Seoul, Republic of Korea",
      period: "March 2022 - October 2022",
      details: [
        "Provided ticket and technical support for New Relic clients.",
        "Delivered PoC and APM installations across Linux, Docker, and Kubernetes environments.",
        "Integrated New Relic with AWS and Azure environments.",
        "Created technical sales and enablement documentation for potential clients in South Korea.",
      ],
    },
    {
      role: "IT Skilled Industry Personnel (Military Service)",
      company: "CCR Inc. / The Standard Corp., Seoul & Gunpo, Republic of Korea",
      period: "February 2020 - March 2022",
      details: [
        "Managed QA for RF Online and diagnosed game server defects.",
        "Handled overseas publisher communication, technical support, and contract renewals as part of business development.",
        "Ran cross-validation across test, development, and production environments for patch releases.",
        "Managed IRE (irreversible electroporation) medical device tasks and validation.",
        "Executed IRE testing with K-Bio in Osong, South Korea and prepared scope and 3D model materials.",
      ],
    },
    {
      role: "Technical Solution Analyst",
      company: "Oracle Health (Cerner) Inc., Kansas City, USA",
      period: "September 2017 - September 2019",
      details: [
        "Supported EMR operations and technical troubleshooting across front-end workflows and back-end systems.",
        "Investigated incidents by capturing logs, querying database tables, updating fields, and cycling servers.",
        "Prioritized issue resolution based on severity and urgency while balancing client and business needs.",
      ],
    },
  ],
  education: [
    {
      degree: "B.A. Informatics",
      institution: "The University of Iowa",
      location: "Iowa City, IA, USA",
      period: "August 2012 - May 2017",
    },
  ],
  courseHighlights: [
    "Health Care Information Systems",
    "Database Management I & II",
    "Human-Computer Interaction",
    "Networking and Security for Informatics",
    "Informatics Project",
    "Programming for Informatics",
  ],
  credentials: [
    "Alibaba Cloud Expert Certification (ACE)",
    "Fluent in Korean and English",
    "Dual Citizenship: USA and Republic of Korea",
  ],
  featuredProjects: [
    {
      title: "Incident Triage Agent — Architecture & Evaluation",
      meta: "Portfolio demo | Synthetic data | Read-only tools",
      description:
        "Built a bounded incident-triage agent that reads synthetic metrics, logs, and runbooks, then submits a structured diagnosis. Integrated W&B inference, Weave evaluation, and native OpenTelemetry spans.",
      details: [
        "Architecture: tool allowlists, JSON/schema validation, case scoping, and per-case limits of six model requests and ten tool attempts. No shell or remediation tools.",
        "Evaluation: assessed root cause, severity, abstention, evidence-reference integrity, and approval boundaries on eight synthetic cases using openai/gpt-oss-20b.",
        "Recorded results (v6r2): strict success 6/8; valid submitted diagnosis 7/8; evidence-reference integrity 8/8; approval boundary 8/8. All eight outputs required human approval and recorded no executed actions.",
        "Failure analysis: unknown telemetry exhausted the request budget without a valid submission; conflicting evidence produced an incorrect database/SEV2 diagnosis. Valid evidence references did not guarantee a correct diagnosis.",
        "LLMOps: traced model and tool activity, recorded latency and token usage, and used offline regression tests to check protocol and boundary behavior.",
      ],
      note:
        "Scope: a small synthetic demo. Strict success was unchanged from v5; no accuracy improvement or production readiness is established. The approval result describes these eight cases, not a general safety guarantee.",
    },
    {
      title: "AI Technical Enablement — Qwen Cost Considerations",
      meta: "Public technical talk | August 19, 2026",
      description:
        "Presented a developer-community talk on using Qwen in coding workflows, discussing API integration and inference-cost considerations.",
      details: [
        "Communicated model capabilities and cost trade-offs through a public technical presentation at Qwen Meetup Seoul.",
      ],
      note:
        "Evidence: the public event page and recording establish the presentation, not a measured customer cost reduction.",
      link: "https://dev-korea.com/talks/how-to-optimize-vibe-coding-costs-with-qwen-3-8",
      cta: "View public talk",
    },
    {
      title: "Enterprise Cloud Foundations — Landing Zones & Data Platforms",
      meta: "Professional experience | Alibaba Korea Inc.",
      description:
        "Designed and delivered Landing Zone architecture services, including database localization, performance tuning, and data platform support.",
      details: [
        "Provided cloud strategy consulting, architecture planning, and product selection recommendations for enterprise customers.",
        "Supported customer onboarding and operations through technical guidance, training, risk control, and incident response.",
      ],
    },
    {
      title: "Kubernetes Observability PoCs — New Relic",
      meta: "Professional experience | Megazone Cloud | March–October 2022",
      description:
        "Delivered New Relic PoCs and APM installations across Linux, Docker, and Kubernetes environments as Presales Manager (New Relic).",
      details: [
        "Integrated New Relic with AWS and Azure environments and created technical sales and enablement documentation for prospective customers in South Korea.",
      ],
    },
  ],
  projects: [
    {
      title: "Premium Ticket 사용방법",
      description: "Alibaba Cloud Premium Support Plan.",
      date: "2024-12-16",
      link: "https://community.alibabacloud.com/blog/premium-ticket-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95_601859",
      cta: "Read activity post",
    },
    {
      title: "How to Configure Alibaba Cloud's Intelligent Chatbot",
      description: "Guide to Alibaba Cloud Intelligent Chatbot configuration.",
      date: "2024-09-14",
      link: "https://community.alibabacloud.com/blog/how-to-configure-alibaba-clouds-intelligent-chatbot_601613",
      cta: "Read activity post",
    },
    {
      title: "알리바바 클라우드 Intelligent Chatbot 소개 & 설정",
      description: "Korean guide for Alibaba Cloud Intelligent Chatbot.",
      date: "2024-08-30",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-intelligent-chatbot-%EC%86%8C%EA%B0%9C-%26-%EC%84%A4%EC%A0%95_601554",
      cta: "Read activity post",
    },
    {
      title: "알리바바 클라우드 Professional Service 소개",
      description: "Overview of Alibaba Cloud Professional Service.",
      date: "2024-05-13",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-professional-service-%EC%86%8C%EA%B0%9C_601151",
      cta: "Read activity post",
    },
    {
      title:
        "[알리바바 클라우드] 2024 강원 청소년 동계 올림픽 YOG 프로젝트 Part 5 : Professional Service - Event Management (이벤트 관리 & 기술지원)",
      description: "Gangwon 2024 YOG project series part 5.",
      date: "2024-02-21",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-2024-%EA%B0%95%EC%9B%90-%EC%B2%AD%EC%86%8C%EB%85%84-%EB%8F%99%EA%B3%84-%EC%98%AC%EB%A6%BC%ED%94%BD-yog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-part-5-professional-service---event-management-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B4%80%EB%A6%AC-%26-%EA%B8%B0%EC%88%A0%EC%A7%80%EC%9B%90_600868",
      cta: "Read activity post",
    },
    {
      title: "[알리바바 클라우드] 2024 강원 청소년 동계올림픽 YOG 프로젝트 Part 4 : SVM System (인력관리 시스템)",
      description: "Gangwon 2024 YOG project series part 4.",
      date: "2024-02-21",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-2024-%EA%B0%95%EC%9B%90-%EC%B2%AD%EC%86%8C%EB%85%84-%EB%8F%99%EA%B3%84%EC%98%AC%EB%A6%BC%ED%94%BD-yog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-part-4-svm-system-%EC%9D%B8%EB%A0%A5%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C_600867",
      cta: "Read activity post",
    },
    {
      title: "[알리바바 클라우드] 2024 강원 청소년 동계올림픽 YOG 프로젝트 Part 3 : VOL Portal (자원봉사자 모집)",
      description: "Gangwon 2024 YOG project series part 3.",
      date: "2024-02-21",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-2024-%EA%B0%95%EC%9B%90-%EC%B2%AD%EC%86%8C%EB%85%84-%EB%8F%99%EA%B3%84%EC%98%AC%EB%A6%BC%ED%94%BD-yog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-part-3-vol-portal-%EC%9E%90%EC%9B%90%EB%B4%89%EC%82%AC%EC%9E%90-%EB%AA%A8%EC%A7%91_600866",
      cta: "Read activity post",
    },
    {
      title: "[알리바바 클라우드] 2024 강원 청소년 동계올림픽 YOG 프로젝트 Part 2 : E-Ticket (온라인 티켓 예매)",
      description: "Gangwon 2024 YOG project series part 2.",
      date: "2024-02-21",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-2024-%EA%B0%95%EC%9B%90-%EC%B2%AD%EC%86%8C%EB%85%84-%EB%8F%99%EA%B3%84%EC%98%AC%EB%A6%BC%ED%94%BD-yog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-part-2-e-ticket-%EC%98%A8%EB%9D%BC%EC%9D%B8-%ED%8B%B0%EC%BC%93-%EC%98%88%EB%A7%A4_600865",
      cta: "Read activity post",
    },
    {
      title: "[알리바바 클라우드] 2024 강원 청소년 동계올림픽 YOG 프로젝트 Part 1 : Virtual Cauldron (디지털 성화)",
      description: "Gangwon 2024 YOG project series part 1.",
      date: "2024-02-21",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-2024-%EA%B0%95%EC%9B%90-%EC%B2%AD%EC%86%8C%EB%85%84-%EB%8F%99%EA%B3%84%EC%98%AC%EB%A6%BC%ED%94%BD-yog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-part-1-virtual-cauldron-%EB%94%94%EC%A7%80%ED%84%B8-%EC%84%B1%ED%99%94_600864",
      cta: "Read activity post",
    },
    {
      title: "Alibaba Cloud WAF 3.0 Update Guideline",
      description: "Guide for upgrading from WAF 2.0 to WAF 3.0.",
      date: "2023-08-31",
      link: "https://community.alibabacloud.com/blog/alibaba-cloud-waf-3-0-update-guideline_600339",
      cta: "Read activity post",
    },
    {
      title: "알리바바 클라우드 WAF 3.0 업그레이드 가이드라인",
      description: "Korean WAF 3.0 upgrade guideline.",
      date: "2023-08-30",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-waf-3-0-%EC%97%85%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8_600333",
      cta: "Read activity post",
    },
    {
      title: "Introduction to Alibaba Cloud CADT",
      description: "Introduction to Cloud Architect Design Tool.",
      date: "2023-07-27",
      link: "https://community.alibabacloud.com/blog/introduction-to-alibaba-cloud-cadt_600240",
      cta: "Read activity post",
    },
    {
      title: "알리바바 클라우드 After Support Plan",
      description: "Overview of Alibaba Cloud after support plans.",
      date: "2023-05-04",
      link: "https://community.alibabacloud.com/blog/%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-after-support-plan_599936",
      cta: "Read activity post",
    },
  ],
  videos: [
    {
      title: "Featured YouTube Video",
      description: "Career and project-related video highlight.",
      url: "https://www.youtube.com/watch?v=f-P8Gz-lgDE",
    },
  ],
  skills: [
    "Cloud Architecture & Landing Zone Delivery",
    "Kubernetes & Docker PoC Delivery",
    "AI Presales: Demonstrations & Technical Enablement",
    "Agentic AI: Bounded Tool Calling",
    "LLMOps: Tracing & Offline Regression Testing",
    "Agent Evaluation: Task Success, Evidence & Abstention",
    "W&B Weave & OpenTelemetry",
    "Tool Allowlists, JSON Validation & Approval Boundaries",
    "APM, Incident Investigation & Database Troubleshooting",
    "Korean–English Technical Communication",
  ],
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
};

const setLink = (id, href) => {
  const node = document.getElementById(id);
  if (node) {
    node.href = href;
  }
};

const renderHighlights = () => {
  const list = document.getElementById("highlights");
  if (!list) return;
  list.innerHTML = profileData.highlights
    .map(
      (item) =>
        `<li><span class="stat-label">${item.label}</span><span class="stat-value">${item.value}</span></li>`
    )
    .join("");
};

const renderExperience = () => {
  const container = document.getElementById("experienceList");
  if (!container) return;
  container.innerHTML = profileData.experience
    .map((entry) => {
      const details = entry.details.map((detail) => `<li>${detail}</li>`).join("");
      return `
        <article class="timeline-item">
          <div class="role-row">
            <span class="role">${entry.role}</span>
            <span class="period">${entry.period}</span>
          </div>
          <div class="company">${entry.company}</div>
          <ul>${details}</ul>
        </article>
      `;
    })
    .join("");
};

const renderEducation = () => {
  const educationList = document.getElementById("educationList");
  if (!educationList) return;

  educationList.innerHTML = profileData.education
    .map(
      (entry) => `
        <article class="education-item">
          <div class="role-row">
            <span class="role">${entry.degree}</span>
            <span class="period">${entry.period}</span>
          </div>
          <div class="company">${entry.institution}, ${entry.location}</div>
        </article>
      `
    )
    .join("");

  const courseList = document.getElementById("courseList");
  if (courseList) {
    courseList.innerHTML = profileData.courseHighlights.map((course) => `<li>${course}</li>`).join("");
  }

  const credentialList = document.getElementById("credentialList");
  if (credentialList) {
    credentialList.innerHTML = profileData.credentials.map((item) => `<li>${item}</li>`).join("");
  }
};

const renderFeaturedProjects = () => {
  const container = document.getElementById("featuredProjectList");
  if (!container) return;
  container.innerHTML = profileData.featuredProjects
    .map(
      (project) => `
      <article class="project">
        <span class="project-meta">${project.meta}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul>${project.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        ${project.note ? `<p class="note">${project.note}</p>` : ""}
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">${project.cta}</a>` : ""}
      </article>
    `
    )
    .join("");
};

const renderProjects = () => {
  const container = document.getElementById("projectList");
  if (!container) return;
  const sortedProjects = [...profileData.projects].sort((a, b) => b.date.localeCompare(a.date));
  container.innerHTML = sortedProjects
    .map(
      (project) => `
      <article class="project">
        <span class="project-meta">${project.date}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noreferrer">${project.cta || "Open link"}</a>
      </article>
    `
    )
    .join("");
};

const getYouTubeEmbedUrl = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/")[2];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
};

const renderVideos = () => {
  const container = document.getElementById("videoList");
  if (!container) return;

  container.innerHTML = profileData.videos
    .map((video) => {
      const embedUrl = getYouTubeEmbedUrl(video.url);
      return `
      <article class="video-card">
        <div class="video-frame">
          ${
            embedUrl
              ? `<iframe src="${embedUrl}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
              : `<a href="${video.url}" target="_blank" rel="noreferrer">Watch on YouTube</a>`
          }
        </div>
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <a href="${video.url}" target="_blank" rel="noreferrer">Open on YouTube</a>
      </article>
    `;
    })
    .join("");
};

const renderSkills = () => {
  const container = document.getElementById("skillList");
  if (!container) return;
  container.innerHTML = profileData.skills.map((skill) => `<li>${skill}</li>`).join("");
};

const init = () => {
  document.title = `${profileData.name} | Cloud & Applied AI Portfolio`;
  setText("heroName", profileData.name);
  setText("heroHeadline", profileData.headline);
  setText("heroSummary", profileData.summary);
  setText("aboutText", profileData.about);

  setLink("linkedinButton", profileData.links.linkedin);
  setLink("contactLinkedinButton", profileData.links.linkedin);
  setLink("communityButton", profileData.links.community);
  setLink("communityAltButton", profileData.links.communityAlt);

  renderHighlights();
  renderExperience();
  renderEducation();
  renderFeaturedProjects();
  renderProjects();
  renderVideos();
  renderSkills();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
};

init();
