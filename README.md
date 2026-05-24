# Z Fam Workout

Z Fam Workout is set up like the Cyclone FT Club app: a simple static HTML app that can be hosted on GitHub Pages and saves shared family workout data to Firebase Firestore from the browser.

## Main App File

Open or host:

```text
index.html
```

The live app shell, styling, and app behavior are in `index.html`, Cyclone-style.

The workout program data is kept in:

```text
program-data.js
```

That keeps the prebuilt training plan easy to edit without turning the app into a workout builder.

## Firebase Setup

1. Create a Firebase project on the free Spark plan.
2. In Firebase, create a Web App.
3. Copy the Firebase web config object.
4. In `index.html`, paste the config values into `FIREBASE_CONFIG` near the top of the script.
5. In Firebase, go to Build > Firestore Database and create a database.
6. Start in test mode or paste the rules from `firestore-rules.txt`.
7. Open `index.html` and test saving one workout or run/bike day.

Version 1 does not use Firebase Authentication. The included Firestore rules are open read/write so the family can use the app quickly from GitHub Pages. Do not store private information in this database.

## Hosting On GitHub Pages

Upload this folder to a GitHub repository and enable GitHub Pages for the repository root.

The required files for hosting are:

```text
index.html
program-data.js
README.md
firestore-rules.txt
Images/
assets/
```

`styles.css`, `app.js`, `supabase-schema.sql`, and `supabase-seed.sql` are older setup artifacts from earlier passes. The current Cyclone-style Firebase app runs from `index.html` plus `program-data.js`.

For a clean GitHub Pages upload, include the current app files and the `Images/` folder. The `.bak-*` files are local backups and do not need to be uploaded.

## Local Testing

Double-click `index.html`, or run a local server from this folder:

```powershell
python -m http.server 8099
```

Then open:

```text
http://127.0.0.1:8099
```
