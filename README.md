# Edwin Tack (Ji-Wan Tack)

**Technical Account Manager | Alibaba Cloud Korea**  
Cloud architecture · Applied AI · Agent evaluation · LLMOps

I work with enterprise customers on cloud architecture, Landing Zone delivery, and practical technical guidance. My earlier presales work includes New Relic PoCs across Linux, Docker, and Kubernetes. My applied AI portfolio adds a bounded incident-triage agent, synthetic evaluation, and model/tool observability.

This portfolio is organized for reading directly on GitHub. It brings together professional delivery experience, a clearly scoped AI demo, and public technical content.

[LinkedIn](https://www.linkedin.com/in/edwin-tack-495477b3) · [Technical articles](https://community.alibabacloud.com/users/5750724925542254)

## Selected work

| Work | What I did | Evidence and scope |
| --- | --- | --- |
| [Incident Triage Agent](docs/incident-triage-agent.md) | Built a bounded tool-calling agent; integrated W&B inference, Weave evaluation, and OpenTelemetry tracing; analyzed failure cases. | Portfolio demo using eight synthetic cases. Strict success: **6/8**; approval-boundary checks: **8/8**. These results do not establish production readiness. |
| [Enterprise cloud foundations](#enterprise-cloud-foundations) | Designed and delivered Landing Zone architecture services, including database localization, performance tuning, and data platform support. | Professional experience at Alibaba Korea Inc. No customer-specific architecture or outcome metrics are disclosed. |
| [Kubernetes observability PoCs](#kubernetes-observability-pocs) | Delivered New Relic PoCs and APM installations across Linux, Docker, and Kubernetes; integrated AWS and Azure environments. | Professional experience as Presales Manager (New Relic), Megazone Cloud, March–October 2022. |
| [AI technical enablement](#ai-technical-enablement) | Presented Qwen coding-workflow and cost considerations; published chatbot configuration guidance. | Public presentation and articles. No measured customer cost savings are claimed. |

## Applied skills

| Area | Experience demonstrated here |
| --- | --- |
| Cloud architecture | Landing Zone delivery, architecture planning, product selection, and data platform support |
| Kubernetes and observability | Linux/Docker/Kubernetes PoCs, APM installations, and incident investigation |
| AI presales and technical enablement | AI demonstrations, public technical presentations, and implementation guidance |
| Agentic AI | Bounded tool calling, tool allowlists, JSON/schema validation, and structured diagnosis |
| LLMOps | W&B Weave, OpenTelemetry, latency/token instrumentation, and offline regression testing |
| Evaluation | Task success, root cause, severity, abstention, evidence-reference integrity, and approval-boundary checks |
| Communication | Technical documentation and customer-facing communication in Korean and English |

## Incident Triage Agent

**Problem:** investigate a synthetic cloud incident using metrics, logs, and runbooks, then return a structured diagnosis while keeping remediation outside the agent's capabilities.

**Implementation:** a bounded agent loop with validated tools, case-scoped observations, a six-request model budget, and ten tool attempts per case. Model and tool activity are observable through Weave and OpenTelemetry.

**Recorded results:** eight synthetic cases using `openai/gpt-oss-20b` produced strict success **6/8**, valid submitted diagnosis **7/8**, evidence-reference integrity **8/8**, and approval-boundary checks **8/8**. Every output required human approval and recorded no executed actions.

**What the failures showed:** unknown telemetry exhausted the request budget without a valid submission; conflicting evidence produced an incorrect diagnosis. Valid evidence references did not guarantee semantic correctness. Strict success was unchanged from the previous baseline.

[Read the case study: architecture, evaluation, failure analysis, and remaining work →](docs/incident-triage-agent.md)

The case study summarizes retained demo records. Executable agent source and raw evaluation artifacts are not included in this public repository.

## Enterprise cloud foundations

**Context:** Technical Account Manager, Alibaba Korea Inc., January 2023–Present.

- Designed and delivered Landing Zone architecture services, including database localization, performance tuning, and data platform support.
- Provided cloud strategy consulting, architecture planning, and product selection recommendations.
- Supported enterprise customers through technical guidance, training, risk control, and incident response.

This is a summary of professional responsibilities, without customer names, internal diagrams, or unsupported scale and business-impact claims.

## Kubernetes observability PoCs

**Context:** Presales Manager (New Relic), Megazone Cloud Inc., March 2022–October 2022.

- Delivered PoCs and APM installations across Linux, Docker, and Kubernetes environments.
- Integrated New Relic with AWS and Azure environments.
- Created technical sales and enablement documentation for prospective customers in South Korea.

## AI technical enablement

### Qwen coding-workflow and cost considerations

Presented a public developer-community talk at Qwen Meetup Seoul on August 19, 2026, covering Qwen in coding workflows, API integration, and inference-cost considerations.

[View the public talk and recording](https://dev-korea.com/talks/how-to-optimize-vibe-coding-costs-with-qwen-3-8)

The event page establishes the presentation. It is not evidence of a measured customer cost reduction.

### Public technical writing

- [How to Configure Alibaba Cloud's Intelligent Chatbot](https://community.alibabacloud.com/blog/how-to-configure-alibaba-clouds-intelligent-chatbot_601613)
- [Introduction to Alibaba Cloud CADT](https://community.alibabacloud.com/blog/introduction-to-alibaba-cloud-cadt_600240)
- [Alibaba Cloud WAF 3.0 Update Guideline](https://community.alibabacloud.com/blog/alibaba-cloud-waf-3-0-update-guideline_600339)

These are historical publications; publication dates should be considered when using them as implementation guidance.

## Repository contents

| Path | Purpose |
| --- | --- |
| [`README.md`](README.md) | Portfolio overview and selected work |
| [`docs/incident-triage-agent.md`](docs/incident-triage-agent.md) | Public case study with architecture, evaluation, failure analysis, and limitations |
| [`script.js`](script.js) | Existing profile, career history, and public activity data |
| [`index.html`](index.html), [`styles.css`](styles.css) | Retained presentation source assets |

The public material contains project summaries and public references. It excludes confidential implementation files, customer identifiers, credentials, and private run links.
