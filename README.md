# VirasatSetu

### Preserve • Learn • Connect

VirasatSetu is a beginner-friendly digital cultural heritage platform designed to preserve, promote and showcase India’s rich cultural traditions.

The initial prototype focuses on the cultural heritage of Punjab and can later be expanded to other Indian states.

---

## Problem Statement

India has a diverse cultural heritage consisting of traditional crafts, folk dances, festivals, food, music, stories and heritage locations.

However:

- Many traditions are poorly documented digitally.
- Young people are becoming disconnected from their cultural heritage.
- Artisans and folk artists have limited digital visibility.
- Cultural information is scattered across different platforms.
- Traditional knowledge may disappear if it is not preserved and shared with future generations.

---

## Proposed Solution

VirasatSetu provides a single digital platform where users can:

- Explore Indian cultural heritage.
- Learn about traditional crafts, dances and festivals.
- Discover artisans and their stories.
- Find cultural locations through an interactive map.
- Take quizzes to learn about Indian culture.
- Ask questions through a cultural assistant.
- Submit cultural information for verification.

The platform begins with Punjab as a pilot region and is designed to scale to all Indian states.

---

## Key Features

### 1. Cultural Heritage Library

Users can explore information about:

- Phulkari
- Thathera craft
- Bhangra
- Giddha
- Punjabi folk instruments
- Vaisakhi
- Traditional food
- Cultural stories

### 2. Heritage Details

Each cultural item includes:

- Name
- Region
- Category
- History
- Cultural importance
- Materials or performance style
- Present-day challenges
- Related cultural items

### 3. Artisan Profiles

The platform provides demo profiles for artisans and folk artists.

Each profile includes:

- Artisan name
- Craft or art form
- Location
- Experience
- Cultural story
- Product or craft details
- Inquiry option

### 4. Cultural Map

The map helps users discover cultural locations such as:

- Amritsar
- Ludhiana
- Patiala
- Jandiala Guru
- Anandpur Sahib

Each location is associated with a cultural tradition, craft, festival or heritage place.

### 5. Virasat Mitra

Virasat Mitra is a prototype cultural assistant that answers basic questions about:

- Phulkari
- Thathera craft
- Bhangra
- Giddha
- Punjab’s cultural heritage

The current version uses predefined responses. An AI-powered multilingual assistant can be added in future versions.

### 6. Cultural Quiz

Users can take a quiz about Punjab’s culture and receive a score after submitting their answers.

### 7. Community Contribution

Users can submit information about cultural traditions. All submissions are planned to go through admin or expert verification before publication.

---

## Target Users

- Students
- Tourists
- Artisans
- Folk artists
- Researchers
- Cultural organizations
- Government departments
- Educational institutions
- General public

---

## Technology Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend and Data

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Hosting

### Additional Tools

- Figma for UI and wireframe design
- Leaflet for the cultural map
- GitHub for source-code management
- Canva for presentation and visual design

The current prototype is designed to run with local demo data and does not require API keys.

---

## Project Architecture

```text
User
  |
  v
Web Interface
  |
  v
HTML, CSS and JavaScript
  |
  v
Firebase Authentication
  |
  v
Cloud Firestore Database
  |
  v
Cultural Content, Artisan Profiles and Quiz Data
```

---

## User Workflow

```text
Open VirasatSetu
        |
        v
Select a state or category
        |
        v
Explore cultural heritage
        |
        v
Read a cultural story or view an artisan
        |
        v
Explore the cultural map
        |
        v
Take a quiz or ask Virasat Mitra
        |
        v
Send an inquiry or submit feedback
```

---

## Project Structure

```text
virasatsetu/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

If the project uses React, the structure may be:

```text
virasatsetu/
│
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── components/
└── README.md
```

---

## How to Run the Prototype

### Method 1: Open directly in a browser

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The prototype will open in your browser.

### Method 2: Use VS Code

1. Install Visual Studio Code.
2. Open the project folder.
3. Install the Live Server extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

### Method 3: Clone using Git

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
cd virasatsetu
```

Then open `index.html` in a browser.

---

## Demo Data Notice

This is an SIH demo prototype.

The artisan profiles, locations and cultural entries used in the prototype may contain sample or placeholder data. They are included only to demonstrate the working flow.

Real cultural data should be added after:

- Verification through reliable sources.
- Permission from artists or artisans.
- Review by cultural experts.
- Confirmation of image and media rights.

---

## Future Scope

The following features can be added in future versions:

- Support for all Indian states.
- Hindi, Punjabi and other regional languages.
- Voice search and audio storytelling.
- AI-powered multilingual cultural assistant.
- Augmented reality heritage experiences.
- Verified artisan marketplace.
- Cultural event registration.
- Digital certificates for learning.
- Museum and government partnerships.
- Offline access for low-connectivity areas.
- Analytics dashboard for cultural organizations.

---

## Expected Impact

### Social Impact

- Preserves cultural identity and traditional knowledge.
- Connects young people with Indian heritage.
- Promotes regional languages and cultural diversity.
- Encourages intergenerational knowledge sharing.

### Economic Impact

- Improves digital visibility for artisans.
- Supports traditional livelihoods.
- Promotes cultural tourism.
- Creates opportunities for workshops and product inquiries.

### Environmental Impact

- Promotes locally made traditional products.
- Encourages sustainable craft practices.
- Reduces paper-based cultural documentation.
- Supports low-waste traditional skills.

---

## Challenges and Mitigation

| Challenge | Mitigation |
|---|---|
| Incorrect cultural information | Verify content through official sources and experts |
| Copyright issues | Use original, permission-based or open-license media |
| Low artisan participation | Collaborate with colleges, NGOs and cultural groups |
| Regional language diversity | Add multilingual support |
| Fake community submissions | Use admin verification before publication |
| Internet connectivity | Use lightweight pages and compressed media |

---

## Research References

- UNESCO Intangible Cultural Heritage - India  
  https://ich.unesco.org/en/state/india-IN

- Ministry of Culture, Government of India  
  https://www.indiaculture.gov.in/

- Punjab Tourism Department  
  https://punjabtourism.punjab.gov.in/

- Incredible India  
  https://www.incredibleindia.gov.in/

- BHASHINI - Digital India  
  https://bhashini.gov.in/

---

## SIH Presentation

This project is prepared for the Smart India Hackathon problem statement related to showcasing India’s rich cultural heritage and traditions.

### SIH Slides

1. Title Page
2. Idea Title
3. Technical Approach
4. Feasibility and Viability
5. Impact and Benefits
6. Research and References

---

## Team

- Team Name: AlgoRhythm
- Team Leader: Soniya
- Team Members: Vanshika, Priya, Sneha, Lucky, Prachi
- College: Bhagat Phool Singh Mahila Vishwavidyala
- Department: BTech CSE
- City and State: Faridabad, Haryana

---

## Project Status

Current status:

- Concept finalized.
- Initial UI prototype prepared.
- Punjab selected as the pilot region.
- Demo cultural content added.
- Further backend and verification features are under development.

---

## Disclaimer

VirasatSetu is an educational and demonstration prototype. It does not claim to represent all Indian cultural traditions. Cultural information will be reviewed and verified before being used in a production version.

---

## License

This project is created for educational and hackathon purposes.

