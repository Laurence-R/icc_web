# Professor Academic Website

This is the personal academic website of a professor in the Department of Computer Science and Information Engineering at National Changhua University of Education (NCUE). The site presents research activities, publications, teaching courses, lab information, and academic service records.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, Lucide React
- **Animation**: Motion (Framer Motion)
- **Runtime**: Node.js

## Pages

| Path                     | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| `/`                      | Homepage with research overview and selected publications |
| `/about`                 | Biography, education timeline, and contact information    |
| `/research/areas`        | Research areas and focus topics                           |
| `/research/publications` | Full publication list with filtering                      |
| `/research/projects`     | Funded research projects                                  |
| `/research/awards`       | Honors and awards                                         |
| `/research/lab`          | Laboratory introduction                                   |
| `/research/services`     | Academic and professional services                        |
| `/teaching`              | Current and past courses                                  |

## Local Development

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd prof-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the development server with hot reload |
| `npm run build` | Build the production bundle                  |
| `npm run start` | Start the production server                  |
| `npm run lint`  | Run ESLint                                   |

## Updating Content

All site content is managed through TypeScript data files located in `src/data/`:

| File              | Content                                     |
| ----------------- | ------------------------------------------- |
| `courses.ts`      | Current semester courses and course history |
| `publications.ts` | Research publications                       |
| `projects.ts`     | Research projects                           |
| `awards.ts`       | Awards and honors                           |
| `services.ts`     | Academic and professional services          |

## Deployment

For instructions on deploying this site to a school server, refer to [DEPLOYMENT.md](DEPLOYMENT.md).
