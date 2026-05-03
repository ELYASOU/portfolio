const translations = {
  fr: {
    "nav-about": "À Propos",
    "nav-skills": "Compétences",
    "nav-projects": "Projets",
    "nav-motivation": "Motivation",
    "nav-contact": "Contact",
    "hero-greeting": "Bonjour, je suis",
    "hero-name": "Ilyass Oufir",
    "hero-title": "Étudiant en Infrastructure Digitale | Futur Ingénieur Système & Réseau",
    "hero-typing": "Passionné par la Cybersécurité et l'Infrastructure...",
    "btn-contact": "Me Contacter",
    "btn-github": "Mon GitHub",
    "section-about": "À Propos de Moi",
    "about-text-1": "Étudiant en Infrastructure Digitale à l'OFPPT. Passionné par Linux, les Réseaux, la Cybersécurité et le DevOps.",
    "about-text-2": "Autodidacte, motivé, et toujours en train de construire des environnements de laboratoire (homelabs).",
    "about-text-3": "Reconnu pour ma capacité de résolution de problèmes et ma discipline.",
    "section-skills": "Compétences Techniques",
    "skill-sysadmin": "Administration Système",
    "skill-network": "Réseaux",
    "skill-cyber": "Cybersécurité",
    "skill-prog": "Programmation",
    "skill-tools": "Outils",
    "section-projects": "Projets Académiques & Personnels",
    "section-motivation": "Ma Vision & Motivation",
    "motivation-text": "Ma vision est de concevoir, sécuriser et maintenir les infrastructures de demain. Mon ambition est d'évoluer vers un poste d'Ingénieur Cybersécurité / DevOps, où je pourrai combiner développement, automatisation et sécurité des systèmes d'information. J'aime apprendre continuellement et relever des défis techniques.",
    "section-contact": "Me Contacter",
    "contact-phone": "Téléphone",
    "contact-linkedin": "LinkedIn",
    "contact-github": "GitHub",
    "form-name": "Votre Nom",
    "form-email": "Votre Email",
    "form-message": "Votre Message",
    "form-submit": "Envoyer le Message"
  },
  en: {
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-motivation": "Motivation",
    "nav-contact": "Contact",
    "hero-greeting": "Hello, I am",
    "hero-name": "Ilyass Oufir",
    "hero-title": "Digital Infrastructure Student | Future System & Network Engineer",
    "hero-typing": "Passionate about Cybersecurity and Infrastructure...",
    "btn-contact": "Contact Me",
    "btn-github": "My GitHub",
    "section-about": "About Me",
    "about-text-1": "Digital Infrastructure Student at OFPPT. Passionate about Linux, Networking, Cybersecurity, and DevOps.",
    "about-text-2": "Self-learner, motivated, and always building labs and projects.",
    "about-text-3": "Known for problem solving and discipline.",
    "section-skills": "Technical Skills",
    "skill-sysadmin": "System Administration",
    "skill-network": "Networking",
    "skill-cyber": "Cybersecurity",
    "skill-prog": "Programming",
    "skill-tools": "Tools",
    "section-projects": "Academic & Personal Projects",
    "section-motivation": "Vision & Motivation",
    "motivation-text": "My vision is to design, secure, and maintain tomorrow's infrastructures. My ambition is to become a Cybersecurity / DevOps Engineer, where I can combine development, automation, and information systems security. I thrive on continuous learning and technical challenges.",
    "section-contact": "Contact Me",
    "contact-phone": "Phone",
    "contact-linkedin": "LinkedIn",
    "contact-github": "GitHub",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-message": "Your Message",
    "form-submit": "Send Message"
  }
};

const projects = [
  {
    id: 1,
    title: { fr: "Installation & Configuration Serveur Linux", en: "Linux Server Installation & Configuration" },
    desc: {
      fr: "Déploiement complet d'un serveur Linux avec configuration des services de base (SSH, Web, BDD).",
      en: "Full Linux server deployment with basic services configuration (SSH, Web, DB)."
    },
    tech: ["Linux", "Bash", "Systemd"],
    skills: { fr: "Administration Serveur, Sécurité de base", en: "Server Admin, Basic Security" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 2,
    title: { fr: "Configuration Personnalisée Arch Linux", en: "Arch Linux Custom Setup" },
    desc: {
      fr: "Installation et personnalisation d'Arch Linux (dotfiles, gestionnaire de fenêtres, optimisation).",
      en: "Installation and customization of Arch Linux (dotfiles, window manager, optimization)."
    },
    tech: ["Arch Linux", "Bash", "i3/bspwm"],
    skills: { fr: "Maîtrise de l'OS, Personnalisation", en: "OS Mastery, Customization" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 3,
    title: { fr: "Simulation Réseau (Cisco Packet Tracer)", en: "Network Lab Simulation (Cisco Packet Tracer)" },
    desc: {
      fr: "Conception et simulation d'une architecture réseau d'entreprise complète.",
      en: "Design and simulation of a complete enterprise network architecture."
    },
    tech: ["Packet Tracer", "Cisco IOS"],
    skills: { fr: "Routage, Commutation, Conception", en: "Routing, Switching, Design" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 4,
    title: { fr: "Configuration VLAN", en: "VLAN Configuration Lab" },
    desc: {
      fr: "Mise en place de VLANs pour la segmentation du réseau et sécurité.",
      en: "Implementation of VLANs for network segmentation and security."
    },
    tech: ["Cisco Switches", "802.1Q"],
    skills: { fr: "Segmentation Réseau, Sécurité L2", en: "Network Segmentation, L2 Security" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 5,
    title: { fr: "Gestion des Utilisateurs Active Directory", en: "Active Directory Users Management" },
    desc: {
      fr: "Création et gestion des politiques de groupe (GPO) et des utilisateurs sous Windows Server.",
      en: "Creation and management of Group Policies (GPO) and users on Windows Server."
    },
    tech: ["Windows Server", "Active Directory", "GPO"],
    skills: { fr: "Administration Windows, IAM", en: "Windows Admin, IAM" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 6,
    title: { fr: "Scripts d'Automatisation PowerShell", en: "PowerShell Automation Scripts" },
    desc: {
      fr: "Développement de scripts pour automatiser les tâches d'administration quotidiennes.",
      en: "Development of scripts to automate daily administration tasks."
    },
    tech: ["PowerShell", "Windows"],
    skills: { fr: "Automatisation, Scripting", en: "Automation, Scripting" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 7,
    title: { fr: "Scanner Réseau Python", en: "Python Network Scanner (basic)" },
    desc: {
      fr: "Création d'un outil en Python pour scanner les ports ouverts et les hôtes actifs.",
      en: "Creation of a Python tool to scan open ports and active hosts."
    },
    tech: ["Python", "Sockets"],
    skills: { fr: "Programmation, Découverte Réseau", en: "Programming, Network Discovery" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 8,
    title: { fr: "Configuration Firewall", en: "Firewall Configuration Project" },
    desc: {
      fr: "Mise en place de règles de pare-feu strictes pour sécuriser un réseau d'entreprise.",
      en: "Implementation of strict firewall rules to secure an enterprise network."
    },
    tech: ["iptables", "ufw", "pfSense"],
    skills: { fr: "Sécurité Périmétrique, Filtrage", en: "Perimeter Security, Filtering" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 9,
    title: { fr: "Analyse de Trafic Wireshark", en: "Wireshark Traffic Analysis Lab" },
    desc: {
      fr: "Capture et analyse de trames réseau pour identifier des anomalies ou vulnérabilités.",
      en: "Capture and analysis of network frames to identify anomalies or vulnerabilities."
    },
    tech: ["Wireshark", "TCP/IP"],
    skills: { fr: "Analyse de paquets, Troubleshooting", en: "Packet Analysis, Troubleshooting" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 10,
    title: { fr: "Configuration Serveur SSH Sécurisé", en: "Secure SSH Server Setup" },
    desc: {
      fr: "Renforcement de la sécurité SSH (clés, désactivation root, fail2ban).",
      en: "Hardening SSH security (keys, disable root, fail2ban)."
    },
    tech: ["Linux", "OpenSSH", "Fail2Ban"],
    skills: { fr: "Hardening, Cryptographie de base", en: "Hardening, Basic Cryptography" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 11,
    title: { fr: "Script d'Automatisation des Sauvegardes", en: "Backup Automation Script" },
    desc: {
      fr: "Script Bash utilisant cron et rsync pour des sauvegardes automatiques.",
      en: "Bash script using cron and rsync for automatic backups."
    },
    tech: ["Bash", "Cron", "Rsync"],
    skills: { fr: "Planification, Résilience", en: "Scheduling, Resilience" },
    github: "https://github.com/ELYASOU"
  },
  {
    id: 12,
    title: { fr: "Environnement Homelab Personnel", en: "Personal Homelab Environment" },
    desc: {
      fr: "Création d'un environnement de virtualisation complet pour tester des technologies.",
      en: "Creation of a full virtualization environment to test technologies."
    },
    tech: ["VirtualBox", "VMware", "Proxmox"],
    skills: { fr: "Virtualisation, Déploiement", en: "Virtualization, Deployment" },
    github: "https://github.com/ELYASOU"
  }
];
