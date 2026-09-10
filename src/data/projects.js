/**
 * Project data — the single source of truth for all portfolio projects.
 *
 * To add a project: push a new object into the array below.
 * Only the fields you provide will render; everything else is gracefully hidden.
 *
 * Fields:
 *   slug            (string)   — URL-safe identifier
 *   title           (string)   — display name
 *   shortDescription(string)   — 1–2 sentence summary
 *   category        (string)   — 'cybersecurity' | 'linux' | 'open-source' | 'programming' | 'systems' | 'networking'
 *   featured        (boolean)  — true = full-width, rich treatment
 *   role            (string)   — your specific role
 *   date            (string)   — period or date
 *   team            (boolean)  — was this a team project?
 *   github          (string)   — repo URL
 *   liveDemo        (string)   — live URL (optional)
 *   tech            (string[]) — technologies used
 *   attacks         (object[]) — { name, payload?, description? } (optional, for security projects)
 *   defense         (object[]) — { name, description? } (optional)
 *   certification   (object)   — { name, issuer, date, link? } (optional)
 *   screenshots     (string[]) — image paths (optional)
 *   story           (string)   — longer narrative (optional, for detail view)
 */

export const projects = [
  {
    slug: 'must-cpc-discord-bot',
    title: 'MUST CPC Discord Bot',
    shortDescription:
      'A Discord bot that turned a competitive-programming community into an automated contest and challenge platform.',
    category: 'systems',
    featured: true,
    chromeLabel: 'FEATURED / SYSTEMS',
    layout: 'contest-platform',
    role: 'Community Admin & Technical Lead',
    contribution: 'Developed and maintained the Python-based Discord bot used by the MUST competitive-programming community, integrating Codeforces data into contests, challenges, and leaderboards.',
    date: 'Jan 2025',
    team: false,
    github: 'https://github.com/ElBulbol/MUST-CPC-BOT',
    tech: ['Python', 'discord.py', 'asyncio', 'Codeforces API', 'SQLite', 'aiosqlite', 'aiohttp'],
    metrics: [
      ['1500+', 'community members'],
      ['21', 'slash commands'],
      ['3', 'Codeforces API endpoints'],
      ['2', 'SQLite databases'],
      ['1', 'automated contest lifecycle'],
    ],
  },
  {
    slug: 'home-soc-lab',
    title: 'Home SOC Lab',
    shortDescription:
      'An old HP Compaq 6200 turned into my personal security playground.',
    category: 'systems',
    featured: true,
    layout: 'infrastructure',
    date: 'Active',
    team: false,
    hardware: { model: 'HP Compaq 6200', cpu: 'Intel i3-3220', storage: 'HDD' },
    core: ['Proxmox', 'Debian'],
    remote: [
      { name: 'WireGuard', role: 'Primary VPN', type: 'primary' },
      { name: 'Tailscale', role: 'Backup Path', type: 'backup' }
    ],
    environments: [
      { name: 'Security Labs', desc: 'Vulnerable targets & testing grounds' },
      { name: 'SIEM', desc: 'Log aggregation & monitoring' },
      { name: 'Malware Analysis', desc: 'Isolated sandbox VMs' },
      { name: 'Research & Study', desc: 'Resource management & tools' }
    ],
    tech: ['Proxmox', 'Debian', 'WireGuard', 'Tailscale']
  },
  {
    slug: 'nti-attack-defense-lab',
    title: 'Web Attack & Defense Lab',
    shortDescription:
      'Built a deliberately vulnerable real-estate web application as part of a team-based attack simulation, then worked on hardening the environment against common web attacks.',
    category: 'cybersecurity',
    featured: true,
    layout: 'attack-defend',
    role: 'Web App Developer & Security Analyst',
    date: 'February 2025',
    team: true,
    github: 'https://github.com/ElBulbol/NTI-project',
    liveDemo: null,
    tech: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS', 'Metasploitable 2'],
    attacks: [
      {
        name: 'SQL Injection',
        payload: "' OR 1=1 --",
        description: 'Raw string formatting in login and search queries allows arbitrary SQL execution.',
      },
      {
        name: 'IDOR',
        payload: '/property/42',
        description: 'Property and admin routes accept direct object IDs without authorization checks.',
      },
      {
        name: 'XSS',
        payload: '<script>alert(1)</script>',
        description: 'Unescaped user input rendered directly in HTML templates.',
      },
      {
        name: 'CSRF',
        payload: null,
        description: 'Forms lack anti-CSRF tokens, enabling cross-site request forgery.',
      },
      {
        name: 'Plaintext Credentials',
        payload: null,
        description: 'Passwords stored and compared in plaintext, with no hashing.',
      },
    ],
    defense: [
      {
        name: 'ModSecurity',
        description: 'Web application firewall with OWASP Core Rule Set that blocks SQLi, XSS, and malicious payloads at the HTTP layer.',
      },
      {
        name: 'Suricata IDS/IPS',
        description: 'Network-level intrusion detection and prevention that inspects traffic for known attack signatures.',
      },
      {
        name: 'pfSense',
        description: 'Network firewall that controls traffic flow and enforces network-level access policies.',
      },
    ],
    certification: {
      name: 'HCIA-Security',
      issuer: 'NTI',
      date: 'February 2025',
      link: null, // Add certificate URL here when available
    },
    screenshots: null,
    story: null,
  },
];

/** Extract unique categories from projects data */
export const categories = ['all', ...new Set(projects.map((p) => p.category))];
