<script setup>
const profile = {
  name: "Mohammad Ali",
  role: "Senior DevOps Engineer - AWS Cloud Expert",
  location: "Kuala Lumpur, Malaysia",
  phone: "+601153816737",
  email: "alhaj.mhmd@gmail.com",
  linkedin: "LinkedIn profile available on request",
  pdf: "/Mohammad_Ali_Resume.pdf",
};

const stats = [
  { value: "6+", label: "years in DevOps and AWS" },
  { value: "15+", label: "years in IT" },
  { value: "7", label: "AWS and cloud certifications" },
  { value: "99.9%", label: "production uptime delivered" },
];

const summary =
  "Senior DevOps Engineer and AWS Cloud Architect with 6+ years of hands-on experience designing, deploying, and managing production-grade cloud infrastructure, and 15+ years in IT overall. Holds 7 AWS and cloud certifications including AWS Solutions Architect Professional, AWS Security Specialty, and HashiCorp Terraform Associate. Proven track record of cutting deployment times by about 40%, reducing infrastructure costs by up to 60%, and achieving 99.9% production uptime across fintech, IoT, and healthcare domains.";

const certifications = [
  "AWS Solutions Architect - Professional",
  "AWS Certified Security Specialty",
  "AWS Certified Developer - Associate",
  "AWS Solutions Architect - Associate",
  "AWS Cloud Practitioner",
  "AWS AI Practitioner",
  "HashiCorp Terraform Associate",
  "Pursuing: Kubernetes CKAD",
];

const skillGroups = [
  {
    name: "Cloud and IaC",
    items:
      "AWS EC2, EKS, RDS Aurora Serverless, S3, VPC, Bedrock, IoT Core, CloudFront, Route 53, CodePipeline, Lightsail, Terraform, Cloudflare",
  },
  {
    name: "Containers and Orchestration",
    items: "Kubernetes, AWS EKS, Docker, Helm",
  },
  {
    name: "CI/CD and Automation",
    items: "GitHub Actions, AWS CodePipeline, Bash scripting, YAML",
  },
  {
    name: "Observability and Security",
    items: "Grafana, Prometheus, Sentry, SonarQube, WireGuard VPN, AWS IAM, AWS Security Hub",
  },
  {
    name: "Networking",
    items: "VPC design, public/private subnets, NAT, IGW, Route 53, CCNA, Cloudflare DDoS protection",
  },
  {
    name: "Databases",
    items: "MySQL, AWS RDS, Aurora Serverless",
  },
  {
    name: "OS and Scripting",
    items: "Linux Ubuntu and CentOS, Bash, YAML",
  },
];

const achievements = [
  "Reduced deployment time by about 40% through CI/CD automation using GitHub Actions across production and staging environments.",
  "Cut infrastructure costs by about 60% through optimized AWS architecture and cost-effective staging environments using Lightsail and Docker.",
  "Maintained 99.9% uptime for production systems handling thousands of daily transactions across fintech and IoT platforms.",
  "Built and deployed an AI-powered chatbot using AWS Bedrock, automating customer support workflows and significantly reducing ticket volume.",
  "Improved system observability and reduced MTTR by about 35% using Grafana and Sentry for real-time monitoring and alerting.",
];

const experiences = [
  {
    title: "Senior DevOps Engineer and AWS Architect",
    company: "MTM Payment - Evo Tracker",
    location: "Kuala Lumpur, Malaysia",
    dates: "Jul 2022 - Present",
    points: [
      "Architected end-to-end AWS infrastructure using Terraform IaC, including VPC with public/private subnets, EC2 auto-scaling groups, RDS Aurora Serverless, EKS clusters, and IAM roles.",
      "Designed and maintained GitHub Actions CI/CD pipelines for production and staging, reducing deployment time by about 40% and eliminating manual release errors.",
      "Deployed and managed EKS Kubernetes clusters for containerized microservices, enabling scalable workload orchestration and zero-downtime rolling deployments.",
      "Integrated AWS Bedrock to deliver an AI-powered customer service chatbot, automating routine support inquiries and reducing ticket volume.",
      "Designed a Smart Home IoT rental system using AWS with real-time device management across multiple properties.",
      "Implemented Cloudflare CDN for frontend hosting and API DDoS protection, reducing average page load time by 30%.",
      "Established cost-optimized staging environments with AWS Lightsail and Docker, cutting staging infrastructure spend by about 60%.",
      "Built an E-Invoice system and a Crypto/Tron-integrated payment platform on AWS, processing thousands of daily MasterCard transactions.",
      "Led a cross-functional engineering team, aligning sprint deliverables with business objectives and improving team velocity by about 25%.",
    ],
  },
  {
    title: "DevOps Engineer and Senior Software Engineer",
    company: "UMCHTech",
    location: "Kuala Lumpur, Malaysia",
    dates: "Oct 2019 - May 2022",
    points: [
      "Provisioned and managed AWS infrastructure, including EC2 auto-scaling, Route 53 DNS, RDS production databases, and WireGuard VPN for secure private access.",
      "Built a Grafana Cloud and Prometheus observability stack for EC2 monitoring, reducing Mean Time to Resolution by about 35%.",
      "Integrated SonarQube into the CI pipeline for automated code quality enforcement, cutting critical defects identified in CI by 60%.",
      "Leveraged Cloudflare DNS and Worker Pages for CDN acceleration across multiple client projects.",
      "Led development of a multi-module remote health monitoring system with real-time patient data, Zoom API-powered video consultations, and alert management.",
      "Managed Sentry for production error alerting, enabling proactive incident response and reduced mean time to detection.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ArchitWeb",
    location: "Kuala Lumpur, Malaysia",
    dates: "Dec 2017 - Sep 2019",
    points: [
      "Developed eCommerce and job portal web applications.",
      "Integrated PayPal and Stripe payment gateways into a SaaS live support chat platform.",
      "Managed projects in Jira and built custom PHP MVC applications with MySQL backends.",
    ],
  },
  {
    title: "Infrastructure Engineer, Servers Department",
    company: "Syrian Telecom - Tarassul ISP",
    location: "Syria",
    dates: "Nov 2008 - Aug 2017",
    points: [
      "Managed LAN infrastructure, network equipment, and hosted systems for VIP enterprise clients over a 9-year tenure.",
      "Built foundational expertise in networking, server administration, and ISP operations.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Syrian Virtual University, Syria",
    dates: "2012 - 2017",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Syrian Virtual University, Syria",
    dates: "2009 - 2011",
  },
];

const development = [
  { name: "Backend / APIs", items: "PHP Laravel, Node.js, Express.js, CodeIgniter" },
  { name: "Frontend", items: "HTML/CSS, JavaScript working knowledge" },
  { name: "Databases", items: "MySQL, Firebase, Aurora Serverless" },
];

const professionalDevelopment = [
  "AWS ML Engineer Associate",
  "AWS CloudOps Engineer Associate",
  "Kubernetes KCNA",
  "Kubernetes CKA - Certified Kubernetes Administrator",
  "Observability with Grafana",
  "Alibaba Cloud Associate",
  "Ansible Automation",
];

const languages = ["English - Professional", "Arabic - Native", "Mandarin Chinese - Pursuing HSK3"];
</script>

<template>
  <main class="min-h-screen bg-stone-50 text-zinc-900">
    <section class="border-b border-zinc-200 bg-white">
      <div class="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.9fr] lg:py-14">
        <div class="flex flex-col justify-between gap-8">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              DevOps - Cloud Architecture - Infrastructure as Code
            </p>
            <h1 class="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-6xl">
              {{ profile.name }}
            </h1>
            <p class="mt-4 max-w-3xl text-xl font-medium text-zinc-700">
              {{ profile.role }}
            </p>
            <p class="mt-5 max-w-3xl text-base leading-8 text-zinc-600">
              {{ summary }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              class="inline-flex min-h-11 items-center rounded-lg bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              :href="`mailto:${profile.email}`"
            >
              Email Mohammad
            </a>
            <a
              class="inline-flex min-h-11 items-center rounded-lg border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:border-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              :href="profile.pdf"
              download
            >
              Download PDF
            </a>
          </div>
        </div>

        <aside class="border-l-4 border-teal-700 bg-zinc-950 p-6 text-white shadow-sm">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="item in stats" :key="item.label" class="border-b border-white/15 pb-4">
              <p class="text-3xl font-semibold text-amber-300">{{ item.value }}</p>
              <p class="mt-1 text-sm leading-5 text-zinc-300">{{ item.label }}</p>
            </div>
          </div>

          <div class="mt-8 space-y-3 text-sm text-zinc-200">
            <p>{{ profile.location }}</p>
            <a class="block underline-offset-4 hover:text-amber-300 hover:underline" :href="`tel:${profile.phone}`">
              {{ profile.phone }}
            </a>
            <a class="block underline-offset-4 hover:text-amber-300 hover:underline" :href="`mailto:${profile.email}`">
              {{ profile.email }}
            </a>
            <p>{{ profile.linkedin }}</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="bg-teal-800 text-white">
      <div class="mx-auto grid max-w-6xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8">
        <p class="text-sm font-semibold">AWS Solutions Architect Professional</p>
        <p class="text-sm font-semibold">AWS Security Specialty</p>
        <p class="text-sm font-semibold">HashiCorp Terraform Associate</p>
      </div>
    </section>

    <div class="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.85fr_1.6fr]">
      <aside class="space-y-8 lg:sticky lg:top-6 lg:self-start">
        <section class="border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">Certifications</h2>
          <ul class="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
            <li v-for="certification in certifications" :key="certification" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
              <span>{{ certification }}</span>
            </li>
          </ul>
        </section>

        <section class="border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">Technical Skills</h2>
          <div class="mt-4 space-y-4">
            <div v-for="group in skillGroups" :key="group.name">
              <h3 class="text-sm font-semibold text-zinc-950">{{ group.name }}</h3>
              <p class="mt-1 text-sm leading-6 text-zinc-700">{{ group.items }}</p>
            </div>
          </div>
        </section>

        <section class="border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">Languages</h2>
          <ul class="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
            <li v-for="language in languages" :key="language">{{ language }}</li>
          </ul>
        </section>
      </aside>

      <div class="space-y-8">
        <section class="border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">Key Achievements</h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <article
              v-for="achievement in achievements"
              :key="achievement"
              class="border-l-4 border-amber-400 bg-stone-50 p-4"
            >
              <p class="text-sm leading-6 text-zinc-700">{{ achievement }}</p>
            </article>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">
            Professional Experience
          </h2>
          <article
            v-for="experience in experiences"
            :key="`${experience.company}-${experience.dates}`"
            class="border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="text-xl font-semibold text-zinc-950">{{ experience.title }}</h3>
                <p class="mt-1 text-sm font-medium text-teal-800">
                  {{ experience.company }} - {{ experience.location }}
                </p>
              </div>
              <p class="shrink-0 text-sm font-semibold text-zinc-600">{{ experience.dates }}</p>
            </div>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
              <li v-for="point in experience.points" :key="point" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </section>

        <section class="grid gap-6 md:grid-cols-2">
          <div class="border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">Education</h2>
            <div class="mt-5 space-y-5">
              <div v-for="item in education" :key="item.degree">
                <div class="flex items-start justify-between gap-4">
                  <h3 class="text-base font-semibold text-zinc-950">{{ item.degree }}</h3>
                  <p class="text-sm font-semibold text-zinc-600">{{ item.dates }}</p>
                </div>
                <p class="mt-1 text-sm text-zinc-700">{{ item.school }}</p>
              </div>
            </div>
          </div>

          <div class="border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">
              Professional Development
            </h2>
            <ul class="mt-5 space-y-2 text-sm leading-6 text-zinc-700">
              <li v-for="item in professionalDevelopment" :key="item" class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </section>

        <section class="border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-bold uppercase tracking-[0.14em] text-zinc-950">
            Development Background
          </h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-3">
            <div v-for="item in development" :key="item.name">
              <h3 class="text-sm font-semibold text-zinc-950">{{ item.name }}</h3>
              <p class="mt-1 text-sm leading-6 text-zinc-700">{{ item.items }}</p>
            </div>
          </div>
          <p class="mt-5 text-sm leading-6 text-zinc-600">
            Full-stack background supports deep collaboration with development teams and informed infrastructure
            decisions, while the primary focus remains DevOps and cloud architecture.
          </p>
        </section>
      </div>
    </div>
  </main>
</template>
