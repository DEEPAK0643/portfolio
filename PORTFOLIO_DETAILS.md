# Portfolio Details

## Overview

This project is a personal portfolio for **Deepakraja S**. It presents his cybersecurity interests, selected project concepts, skills, certificates, and ways to get in touch. The home page describes him as a second-year Cyber Security student, aspiring ethical hacker, and someone interested in offensive security.

The portfolio is a client-side React application built with Vite. It is a showcase website, not a backend application or a cybersecurity service platform.

## What visitors can do

### Home

The home section introduces Deepakraja and includes an **Enter the Lab** button that navigates to the Projects section.

Implementation: `src/pages/Home.jsx`

### Projects

The project cards describe five concepts:

1. **Iris Scanner for Secure Money Transfers** — iris recognition and biometrics to verify identity for safer transfers.
2. **AI in Cybersecurity** — AI concepts for phishing email detection and deepfake voice identification.
3. **Autonomous Delivery Truck** — a concept for long-distance road delivery.
4. **GeoSense** — safer route guidance that considers conditions such as rain and heavy traffic.
5. **Signal Guard** — a concept for protecting radio-frequency communications between a drone and its controller.

The cards currently provide descriptions and tags; they are not linked to live demos or source repositories.

Implementation: `src/pages/Projects.jsx`

### Skills

The current page lists:

- Technical skills: Python, C / C++, and HTML, with proficiency percentages displayed by the UI.
- Soft skills: problem solving, team collaboration, and adaptability.

Implementation: `src/pages/Skills.jsx`

### Languages and percentages

There are two different kinds of percentages to distinguish:

1. **Skill percentages shown on the Skills page** are the values currently configured in the portfolio:

   | Language / skill | Displayed percentage | How it relates to this portfolio |
   | --- | ---: | --- |
   | Python | 90% | Listed as a technical skill, but not used in the current website source. |
   | C / C++ | 80% | Listed as a technical skill, but not used in the current website source. |
   | HTML | 55% | Listed as a technical skill. The site also has a small `index.html` entry document, but its React pages are written as JSX. |

   These are display values from the Skills page; the project does not define what assessment or measurement method produced them.

2. **Language share of the application source** was measured by counting lines in `.jsx` and `.css` files under `src/`:

   | Source file type | Share of measured lines | Why it is used |
   | --- | ---: | --- |
   | JSX (JavaScript with React markup) | 94.7% | Builds the pages and reusable components, handles navigation and form state, and describes the UI alongside JavaScript behavior. |
   | CSS | 5.3% | Provides global page styles, scrollbar styling, and glass-panel effects. Tailwind utility classes are written in JSX, so this line-count share does not include all styling rules. |

   The share is based on 661 source lines in `src/` at the time this guide was updated (626 JSX lines and 35 CSS lines). It describes the current source layout, not execution time or the amount of functionality written in each language. The root `index.html` is the browser entry shell and is not included in this calculation.

The website itself is built with JavaScript/JSX and CSS. Python and C/C++ appear as listed skills, not as languages used to implement this portfolio.

### Certificates

The certificates section displays certificate and achievement images with their names, issuers, and dates. Visitors can select a card to open its certificate image.

Implementation: `src/pages/Certificates.jsx`  
Images: `public/certificates/`

### Contact

The contact menu is available from both the header and sidebar. It contains:

- An inline message form
- A LinkedIn link
- A phone link

The form asks for the visitor's name, email address, subject, and message. It shows a sending state while the request is in progress, then displays success or error feedback. It does not open a mail application.

Implementation: `src/components/ContactDetails.jsx`  
Contact menu locations: `src/components/Header.jsx` and `src/components/Sidebar.jsx`

## How the application works

`src/App.jsx` stores the currently selected section in React state. The header and sidebar let visitors change sections. The selected page is rendered inside the shared layout, with Framer Motion providing transitions between sections and for page content.

The application uses static files from `public/` for assets such as the resume, certificate images, and hawk logo. Vite copies these assets into the production build.

## Contact form email delivery

The form submits to **FormSubmit** using the random endpoint configured in `src/components/ContactDetails.jsx`. The React submit handler prevents a regular browser navigation and sends the form data with a POST request to FormSubmit's AJAX endpoint. The form's declared action is:

```text
https://formsubmit.co/c08752beaad657d9ddf2cd7ea4a91c68
```

The submitted data includes the visitor's name, email, subject, and message, along with FormSubmit options for the email subject and table template. The visitor's email is also sent as `_replyto` so the recipient can reply directly. A hidden honeypot field is included as a basic spam deterrent.

FormSubmit is an external email delivery service; this project does not include its own mail server or email credentials. The endpoint token is embedded in client-side code and can be visible to visitors. Do not treat it as a password or secret. If it is abused, rotate or replace the endpoint through FormSubmit.

To test delivery:

1. Open the deployed portfolio and choose **Contact**, then **Email**.
2. Fill in all four fields and submit the form.
3. Confirm the form displays its success message.
4. Check the destination inbox, including spam/junk, for the submitted message.
5. Reply to the message to verify that the visitor's email is used as the reply address.

## Technologies used

Dependencies are defined in `package.json`.

- **React 18** — component-based user interface and state.
- **Vite 5** — local development server and production bundler.
- **Tailwind CSS 3** — utility-based styling.
- **Custom CSS** — global styles, scrollbar, and glass-panel effects.
- **Framer Motion** — interface and page transitions.
- **Lucide React** — interface icons.
- **FormSubmit** — external delivery of contact form submissions.
- **Three.js and React Three Fiber packages** — present among the dependencies.

Although `src/components/Background3D.jsx` is named as a 3D background, it currently renders a remote city image with gradient overlays; it does not create a Three.js scene.

The visual design uses a dark background, purple and cyan accents, translucent panels, and a white hawk logo with a transparent background.

## Main project structure

```text
src/
  App.jsx
  index.css
  components/
    Background3D.jsx
    ContactDetails.jsx
    Header.jsx
    Sidebar.jsx
  pages/
    Home.jsx
    Projects.jsx
    Skills.jsx
    Certificates.jsx
public/
  RESUME.pdf
  hawk-logo-white.png
  certificates/
```

## Running and building

Install dependencies once, then use:

```bash
npm run dev
```

This starts the Vite development server. To create a production build:

```bash
npm run build
```

The output is written to `dist/`. Deploy the contents of that directory to a static hosting provider. Keep the `public/` assets in the project so they are included in the build.

## Current scope and possible next steps

The current portfolio focuses on presenting information. Potential future improvements include linking project cards to repositories or live demos, adding a dedicated About section, and moving the remote background image to a local optimized asset. The contact form relies on FormSubmit and an internet connection for delivery.
