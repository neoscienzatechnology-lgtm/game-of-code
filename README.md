# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Learning system (Lessons + Exercises)

This repo now includes a lightweight learning engine with:
- Lesson/Exercise data model
- Local JSON seed + persistence in localStorage
- Exercise validation (JS tests and HTML/CSS structural checks)
- Spaced repetition and quick review

### Data model

Lesson fields (required):
- id
- language
- concept
- title
- content (microlicao curta)
- order
- tags

Exercise fields (required):
- id
- lesson_id
- type (blank | bugfix | code)
- prompt
- starter_code
- validations
- hints[]
- solution
- difficulty
- estimated_time

### Seed data

Seed JSON lives in:
- public/seed/learning.json

The app also has a TS fallback seed used if JSON is unavailable:
- src/data/learningSeed.ts

### Persistence

Learning progress is stored in localStorage under:
- learning-db

### Add a new lesson or exercise

1. Edit public/seed/learning.json and add your lesson/exercise.
2. Mirror the same change in src/data/learningSeed.ts (fallback).
3. Keep ids unique and reference lesson_id on exercises.
4. Reload the app after clearing localStorage key learning-db to re-seed.

### Validation types

blank:
- starter_code contains {{blank1}} markers
- validations.type = "blank" with blanks list

js-tests:
- validations.type = "js-tests"
- tests is an array of { name, code } using assert(...)

js-output:
- validations.type = "js-output"
- define functionName + cases with inputs/expected

html-structure:
- requiredTags, requiredClasses, requiredAttributes, requiredCss
- checks are minimal and structural (no layout evaluation)

### Spaced repetition rules

- Correct:
  interval_days = max(1, round(interval_days * ease))
  ease += 0.05 (cap 3.0)
  due_at = now + interval_days
- Wrong:
  interval_days = 1
  ease -= 0.2 (floor 1.3)
  due_at = now + 1 day

### Run tests

```sh
npm run test
```

### Add a new language/concept

1. Add a new module in public/seed/learning.json with language and tags.
2. Add lessons referencing that module_id.
3. Add exercises with validations for that language.
4. Update UI labels if needed (LearningPanel).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
