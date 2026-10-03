# Dhia Eddine Arfaoui | Portfolio

Personal portfolio of Dhia Eddine Arfaoui, a Machine Learning Engineer focused on predictive modeling, data pipelines, and APIs for forecasting and risk analytics. The site presents selected projects, professional experience, education, certifications, and technical skills.

Built with Next.js, React, TypeScript, MDX, and Once UI.

## Portfolio

- `/` — Introduction and selected work
- `/about` — Experience, education, certifications, and skills
- `/work` — Selected project case studies

## Selected projects

- **AI Document Q&A** — Private document question-answering with FastAPI, PostgreSQL, SQLAlchemy, and a locally hosted Ollama model.
- **Breast Cancer Prediction Project** — Classification of malignant versus benign diagnoses from clinical cell-nuclei features using scikit-learn models.

Project descriptions are maintained as MDX files in `src/app/work/projects/`, with images stored under `public/images/`.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run a production build:

```bash
npm run build
npm run start
```

## Customize

- `src/resources/content.tsx` — Personal details, page content, and social links
- `src/resources/once-ui.config.ts` — Routes, theme, fonts, and site configuration
- `src/app/work/projects/*.mdx` — Project case studies
- `public/images/` — Portfolio images and other static assets

The site URL can be set with `NEXT_PUBLIC_BASE_URL`; it defaults to `http://localhost:3000`. Blog and gallery routes are currently disabled in `src/resources/once-ui.config.ts`.

## License

This portfolio is based on Magic Portfolio and is distributed under the [CC BY-NC 4.0 license](LICENSE). See the license for attribution and non-commercial use terms.
