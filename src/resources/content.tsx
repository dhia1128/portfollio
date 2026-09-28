import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Dhia Eddine",
  lastName: "Arfaoui",
  name: "Dhia Eddine Arfaoui",
  role: "Machine Learning Engineer",
  avatar: "/images/profile/dhia-eddine-arfaoui.webp",
  email: "dhiaarfaoui32@gmail.com",
  location: "Africa/Tunis",
  locationLabel: "Ariana, Tunisia",
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Contact {person.firstName}</>,
  description: <>Get in touch by email.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dhia-edinne-arfaoui55/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dhia1128",
    essential: true,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+21629167529",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(`${person.name}'s Portfolio`)}`,
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, a ${person.role} in Tunisia.`,
  headline: <>Machine learning for real-world decisions</>,
  featured: {
    display: false,
    title: "Selected projects",
    href: "/work",
  },
  subline: (
    <>
      I'm {person.name}, a {person.role.toLowerCase()} building predictive models,
      data pipelines, and APIs for forecasting and risk analytics.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.role} based in Ariana, Tunisia.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is a {person.role.toLowerCase()} based in Ariana, Tunisia, with internship
        experience in banking and insurance. He builds predictive models, data pipelines, and APIs
        for forecasting, anomaly detection, and risk analytics, turning complex business needs into
        practical AI systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Numeryx",
        timeframe: "February 2026 - July 2026",
        role: "Data Science Intern",
        logo: "/images/companies/numeryx.webp",
        achievements: [
          <>
            Designed an AI system to forecast traffic and revenue for the TollXpress toll network,
            combining a data warehouse, machine learning models, a REST API, and an interactive
            dashboard.
          </>,
          <>
            Built a PostgreSQL star-schema warehouse and benchmarked ARIMA, Prophet, LSTM, Linear
            Regression, Random Forest, and XGBoost models, reporting over 85% model precision.
          </>,
        ],
        images: [
          {
            src: "/images/experience/numeryx-traffic-forecasting.webp",
            alt: "Numeryx project demo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "BIAT",
        timeframe: "June 2025 - July 2025",
        role: "Data and ML Intern",
        logo: "/images/companies/biat.webp",
        achievements: [
          <>
            Developed an internal API to analyze daily banking transactions and surface quantitative
            and qualitative indicators.
          </>,
          <>
            Built SQL and Oracle pipelines processing more than 100,000 transaction records per day;
            performed exploratory analysis and feature engineering.
          </>,
        ],
        images: [],
      },
      {
        company: "BIAT Assurances",
        timeframe: "June 2024 - July 2024",
        role: "Data Science Intern",
        logo: "/images/companies/biat-assurances.webp",
        achievements: [
          <>Developed a Flask API for stochastic analysis of bonus-malus insurance classes.</>,
          <>
            Prepared insurance datasets for analysis and feature engineering, and built an internal
            web interface with HTML, CSS, JavaScript, and Bootstrap.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Université Paris Dauphine–PSL, Tunis Campus",
        logo: "/images/dauphine.png",
        description: (
          <>
            Master in Artificial Intelligence, Data and Agentic (AIDA), 2026 - Present. Advanced
            study in AI, machine learning, data science, Big Data, and conversational systems.
          </>
        ),
      },
      {
        name: "ENSIT Montfleury, Tunisia",
        logo: "/images/ensit.png",
        description: (
          <>
            Engineering Degree in Industrial Engineering, 2023 - 2026. Focused on data engineering,
            machine learning, optimization, and financial technology.
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Associate Data Scientist",
        details: "DataCamp · November 2025 · Credential ID: DSA0017594101523",
        image: "/images/certifications/datacamp-associate-data-scientist.webp",
      },
      {
        name: "Data Science Certification",
        details: "CodeQuest · April 2025",
        image: "/images/certifications/codequest-data-science.webp",
      },
      {
        name: "Deep Learning with TensorFlow 2",
        details: "365 DataScience · March 21, 2026 · Credential ID: CC-C63EF92B4C",
        image: "/images/certifications/deep-learning-with-tensorflow-2.webp",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        description: <>Languages for building data and application workflows.</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL" },
          { name: "Java", icon: "java" },
          { name: "C", icon: "c" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Machine Learning and Data Science",
        description: <>Tools for data preparation, modeling, and evaluation.</>,
        tags: [
          { name: "Pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "Scikit-learn", icon: "scikitLearn" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Keras", icon: "keras" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "XGBoost" },
        ],
        images: [],
      },
      {
        title: "Generative AI and NLP",
        tags: [
          { name: "LangChain", icon: "langchain" },
          { name: "FAISS" },
          { name: "Ollama", icon: "ollama" },
          { name: "NLTK" },
        ],
        images: [],
      },
      {
        title: "Backend and Web",
        tags: [
          { name: "FastAPI", icon: "fastapi" },
          { name: "Flask", icon: "flask" },
          { name: "SQLAlchemy", icon: "sqlalchemy" },
          { name: "Streamlit", icon: "streamlit" },
          { name: "React", icon: "react" },
          { name: "Spring Boot", icon: "springBoot" },
        ],
        images: [],
      },
      {
        title: "Data Engineering and Tools",
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Oracle", icon: "oracle" },
          { name: "Hadoop", icon: "hadoop" },
          { name: "HDFS", icon: "hadoop" },
          { name: "MapReduce", icon: "hadoop" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing – ${person.name}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Selected projects",
  description: `Machine learning and data science projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Photo gallery for ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
