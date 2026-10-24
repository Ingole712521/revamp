"""Single-column, text-based resume. Dates and links sit on a shared grid."""

from fpdf import FPDF

OUTPUT = r"d:\Portfolio\Portfolio_nehalIngole\resume\Nehal_Ingole_Resume.pdf"
REGULAR = r"C:\Windows\Fonts\calibri.ttf"
BOLD = r"C:\Windows\Fonts\calibrib.ttf"

INK = (23, 23, 23)
MUTED = (55, 55, 55)
RULE = (35, 35, 35)


class Resume(FPDF):
    def __init__(self):
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=False)
        self.add_font("Body", "", REGULAR)
        self.add_font("Body", "B", BOLD)
        self.set_margins(14, 12, 14)
        self.add_page()
        self.set_text_color(*INK)

    def section(self, title: str) -> None:
        self.ln(1.7)
        self.set_x(self.l_margin)
        self.set_text_color(*INK)
        self.set_font("Body", "B", 11)
        self.cell(self.epw, 4.6, title, new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.set_draw_color(*RULE)
        self.set_line_width(0.35)
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.ln(1.4)

    def paragraph(self, text: str) -> None:
        self.set_x(self.l_margin)
        self.set_text_color(*INK)
        self.set_font("Body", "", 10.5)
        self.multi_cell(self.epw, 4.35, text, align="L")

    def skill(self, label: str, value: str) -> None:
        label_w = 36
        self.set_x(self.l_margin)
        self.set_font("Body", "B", 10.5)
        self.set_text_color(*INK)
        y = self.get_y()
        self.cell(label_w, 4.6, label)
        self.set_xy(self.l_margin + label_w, y)
        self.set_font("Body", "", 10.5)
        self.multi_cell(self.epw - label_w, 4.6, value, align="L")

    def paired(self, left: str, right: str, left_size: float = 11) -> None:
        """Left title and right-aligned date or link on one baseline."""
        self.set_font("Body", "", 10)
        right_w = self.get_string_width(right) + 1.5
        left_w = self.epw - right_w
        self.set_xy(self.l_margin, self.get_y())
        self.set_font("Body", "B", left_size)
        self.set_text_color(*INK)
        self.cell(left_w, 4.8, left)
        self.set_font("Body", "", 10)
        self.set_text_color(*MUTED)
        self.cell(right_w, 4.8, right, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(*INK)

    def meta(self, text: str) -> None:
        self.set_x(self.l_margin)
        self.set_font("Body", "", 10)
        self.set_text_color(*MUTED)
        self.multi_cell(self.epw, 4.3, text, align="L")
        self.set_text_color(*INK)

    def bullet(self, text: str) -> None:
        hang = 4.0
        self.set_font("Body", "", 10.5)
        self.set_text_color(*INK)
        y = self.get_y()
        self.set_xy(self.l_margin, y)
        self.cell(hang, 4.4, "\u2022")
        self.set_xy(self.l_margin + hang, y)
        self.multi_cell(self.epw - hang, 4.25, text, align="L")

    def job(self, title: str, dates: str, org: str) -> None:
        self.ln(1.0)
        self.paired(title, dates, left_size=11)
        self.meta(org)

    def project(self, name: str, detail: str, link: str) -> None:
        self.ln(1.0)
        self.set_x(self.l_margin)
        self.set_font("Body", "B", 11)
        self.set_text_color(*INK)
        self.cell(self.epw, 4.6, name, new_x="LMARGIN", new_y="NEXT")
        self.meta(detail)
        self.set_x(self.l_margin)
        self.set_font("Body", "", 9.5)
        self.set_text_color(*MUTED)
        self.multi_cell(self.epw, 4.1, link, align="L")
        self.set_text_color(*INK)


pdf = Resume()

pdf.set_font("Body", "B", 20)
pdf.set_text_color(*INK)
pdf.cell(pdf.epw, 8, "NEHAL INGOLE", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Body", "", 11)
pdf.cell(
    pdf.epw,
    5,
    "Full-Stack Engineer  |  React, TypeScript, and AWS",
    align="C",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.ln(0.6)
pdf.set_font("Body", "", 10)
pdf.set_text_color(*MUTED)
pdf.cell(
    pdf.epw,
    4.4,
    "Pune, Maharashtra, India   |   +91 7397966719   |   nehalingole2001@gmail.com",
    align="C",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.set_font("Body", "", 9)
pdf.set_x(pdf.l_margin)
pdf.multi_cell(
    pdf.epw,
    4.0,
    "https://www.nehalingole.in   |   https://www.linkedin.com/in/nehal-ingole   |   https://github.com/Ingole712521",
    align="C",
)
pdf.set_text_color(*INK)
y = pdf.get_y() + 0.8
pdf.set_draw_color(*RULE)
pdf.set_line_width(0.45)
pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
pdf.set_y(y)

pdf.section("PROFESSIONAL SUMMARY")
pdf.paragraph(
    "Full-stack engineer with 3+ years of experience building production web applications in React, TypeScript, and Next.js, and deploying them with Docker, GitHub Actions, and AWS. Shipped the live Alief View site, Revio (a GitHub pull-request reviewer), and AnimioUI, a React component library. Current role covers feature delivery, CI/CD, and cloud deployment through collaboration with product and engineering teammates."
)

pdf.section("TECHNICAL SKILLS")
pdf.skill("Languages", "TypeScript, JavaScript")
pdf.skill("Frontend", "React, Next.js, Tailwind CSS")
pdf.skill("Cloud / DevOps", "AWS, GCP, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD, Linux")
pdf.skill("Data / Tools", "MongoDB, Git, REST APIs")
pdf.skill("Practices", "Collaboration, communication, problem-solving, teamwork")

pdf.section("PROFESSIONAL EXPERIENCE")
pdf.job("Software Developer", "Jan 2025 - Present", "Kshan Tech Soft Pvt Ltd, Pune, India")
pdf.bullet(
    "Build and ship production web applications with React, TypeScript, and Next.js, including authentication and pre-release testing, in collaboration with product and engineering teammates."
)
pdf.bullet(
    "Configure GitHub Actions CI/CD pipelines and deploy containerized services with Docker to AWS and GCP."
)
pdf.bullet(
    "Maintain internal tools and release documentation so teamwork stays unblocked and releases go out on schedule."
)

pdf.job("Software Developer", "Apr 2023 - Dec 2024", "Alief View Media Group, Remote, India")
pdf.bullet(
    "Built and launched the company marketing site (https://alifviewmedia.com) from Figma using React, TypeScript, Tailwind CSS, and GSAP."
)
pdf.bullet(
    "Delivered responsive event pages and the contact flow for conference and corporate inquiries."
)

pdf.job("DevOps Intern", "Sep 2020 - Aug 2021", "LinuxWorld Informatics Pvt. Ltd, Remote, India")
pdf.bullet(
    "Ran containerized workloads with Docker and Kubernetes, and provisioned infrastructure with Terraform and Ansible."
)
pdf.bullet(
    "Built CI/CD pipelines on AWS, GCP, and Azure through hands-on intern projects in problem-solving and automation."
)

pdf.section("PROJECTS")
pdf.project(
    "Revio",
    "AI GitHub pull-request reviewer  |  TypeScript, Next.js, GitHub App, OpenRouter",
    "https://ai-code-reviwer-web.vercel.app    |    https://github.com/Ingole712521/AI-Code-Reviwer",
)
pdf.bullet(
    "Built a GitHub App that reviews pull requests and posts inline comments on bugs, security issues, and logic errors."
)
pdf.bullet(
    "Implemented the webhook, background worker, and comment pipeline in TypeScript and Next.js."
)

pdf.project(
    "EMQX on AWS",
    "MQTT cluster  |  Terraform, AWS, Docker, MQTT, Network Load Balancer",
    "https://github.com/Ingole712521/EMQX_autoScaling",
)
pdf.bullet(
    "Provisioned an EMQX MQTT cluster on AWS with Terraform, a network load balancer, and auto-scaling."
)
pdf.bullet("Wrote deploy, verify, and load-test scripts for the cluster.")

pdf.project(
    "AnimioUI",
    "React component library  |  React, TypeScript, Next.js, Tailwind CSS",
    "https://www.animioui.in    |    https://github.com/Ingole712521/component",
)
pdf.bullet(
    "Built and published a React and TypeScript component library with documented primitives and animation."
)
pdf.bullet("Shipped the library as a live documentation site for reuse across projects.")

pdf.project(
    "Kestra",
    "Open-source contribution",
    "https://github.com/kestra-io/kestra/pull/15043",
)
pdf.bullet(
    "Merged pull request 15043 so blueprint tag filters stay aligned with the URL in the Blueprints browser."
)

pdf.section("EDUCATION")
pdf.paired("Bachelor of Technology, Information Technology", "Aug 2019 - Jun 2023", left_size=11)
pdf.meta("Government College of Engineering, Karad")

if pdf.page_no() != 1:
    raise SystemExit(f"Resume spilled onto page {pdf.page_no()}")
if pdf.get_y() > pdf.h - 10:
    raise SystemExit(f"Content too close to the bottom: y={pdf.get_y():.1f}")

pdf.set_title("Nehal Ingole Resume")
pdf.set_author("Nehal Ingole")
pdf.set_creator("Nehal Ingole")
try:
    pdf.output(OUTPUT)
    written = OUTPUT
except PermissionError:
    written = OUTPUT.replace(".pdf", "_updated.pdf")
    pdf.output(written)
print(f"Wrote {written}")
print(f"End y={pdf.get_y():.1f} page_h={pdf.h:.1f}")
