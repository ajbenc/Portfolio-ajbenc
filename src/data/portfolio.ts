import type {
  BlogPost,
  ContactChannel,
  HeroContent,
  Project,
  Section,
  SkillGroup,
  SocialLink,
} from '../types'

export const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const heroContent: HeroContent = {
  greeting: 'Available for new collaborations',
  name: 'Andres Benavides',
  tagline: 'Machine Learning Engineer',
  intro:
    'Hi, I’m Andres — a Machine Learning Engineer focused on deploying real-world AI solutions. I specialize in MLOps, cloud platforms, and end-to-end model deployment, blending technical precision with clear communication.',
  ctas: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/ajbenc' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/andres-julian-benavides-camayo/' },
    { id: 'resume', label: 'Resume', href: '/resume.pdf' },
  ],
  highlights: [
    {
      title: 'Deployment focus',
      detail: 'Real-time inference, retrieval-augmented search, and offering scalable AI solutions.',
    },
    {
      title: 'Availability',
      detail: 'Open to remote-first or hybrid teams. Permitted to work in Colombia on-site.',
    },
  ],
  expertise: ['ML systems', 'Type-safe APIs', 'TensorFlow', 'PyTorch', 'Kubernetes', 'AWS/GCP/Azure', 'CI/CD pipelines', 'Docker', 'TypeScript', 'Data engineering'],
}

export const projects: Project[] = [
  {
    id: 'trip-fare',
    title: 'Trip & Fare Predictor',
    description:
      'Full-stack ML platform forecasting NYC taxi trip durations and fares using 36.6M 2022 rides, 56 leakage-safe features, and LightGBM ensembles deployed behind a FastAPI service and Streamlit map UI.',
    tech: ['LightGBM', 'Python', 'FastAPI', 'Streamlit', 'GeoPandas', 'Open-Meteo API'],
    result: 'R² 0.94 fare · R² 0.88 duration',
    links: [
      { label: 'GitHub', href: 'https://github.com/ajbenc/Trip-And-Fare-Predictor' },
      { label: 'Live App', href: 'https://appapppy-bxemrhsa463vkevvpk6ntn.streamlit.app/' },
    ],
  },
  {
    id: 'multimodal-classifier',
    title: 'Multimodal Product Classifier',
    description:
      'State-of-the-art system that fuses ConvNeXtV2 image embeddings with MiniLM text vectors inside TensorFlow for robust product taxonomy classification, complete with Dockerized APIs and a Streamlit playground.',
    tech: ['ConvNeXtV2', 'MiniLM', 'TensorFlow', 'Transformers', 'Streamlit', 'Docker'],
    result: '87.56% multimodal accuracy',
    links: [
      { label: 'GitHub', href: 'https://github.com/ajbenc/Multimodal-Product-Classification-System' },
      { label: 'Live Demo', href: 'https://kqiwcxqxcduzilfmnzxzme.streamlit.app/' },
    ],
  },
  {
    id: 'blogmaster',
    title: 'BlogMaster Social CMS',
    description:
      'Full-stack blogging network blending Tumblr-style discovery with rich media creation, JWT security, and live social interactions across a dark Stream-inspired UI.',
    tech: ['React 19', 'Vite', 'React Query', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    result: 'Realtime social CMS · Tumblr API bridge',
    links: [
      { label: 'GitHub', href: 'https://github.com/ajbenc/Blog-app' },
      { label: 'Live Demo', href: 'https://blogmaster-ajbenc.vercel.app/' },
    ],
  },
  {
    id: 'image-classifier',
    title: 'Containerized Image Classifier',
    description:
      'Container-native FastAPI + TensorFlow service with Streamlit UI, Redis queues, and Postgres persistence for classifying 1k+ categories, complete with Docker Compose orchestration and automated tests.',
    tech: ['TensorFlow', 'FastAPI', 'Streamlit', 'Redis', 'PostgreSQL', 'Docker', 'Pytest'],
    result: 'Pretrained CNN · API/UI/queue coverage',
    links: [{ label: 'GitHub', href: 'https://github.com/ajbenc/Image_classifier' }],
  },
]

export const skills: SkillGroup[] = [
  {
    title: 'Modeling Core',
    items: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas'],
  },
  {
    title: 'MLOps & Automation',
    items: ['CI/CD', 'MLflow', 'Airflow', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Data & Cloud',
    items: ['BigQuery', 'Snowflake', 'Vertex AI', 'SageMaker', 'Azure ML'],
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'performance-crash-kits',
    title: 'Building Performance Crash Kits for Product Teams',
    date: 'Nov 12, 2025',
    summary: 'A practical guide on embedding performance budgets directly into CI and sprint rituals.',
    link: 'https://example.com/blog/performance-crash-kits',
  },
  {
    id: 'designops',
    title: 'DesignOps Signals Every Engineer Should Watch',
    date: 'Sep 04, 2025',
    summary: 'Translating design system telemetry into meaningful engineering workstreams.',
    link: 'https://example.com/blog/designops-signals',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yourhandle', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com/yourhandle', icon: 'dribbble' },
]

export const contactChannels: ContactChannel[] = [
  { label: 'ajbenc@gmail.com', href: 'mailto:ajbenc@gmail.com' },
  { label: '+57 312 798 9428', href: 'tel:+573127989428' },
]
