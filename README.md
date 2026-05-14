# Zen Waves

Zen Waves is a static ambient sound mixer for relaxing, studying, or background focus. It lets you blend nature sounds like rain, waves, forest ambience, thunder, wind, fire, birds, water, and wind chimes over changing calm backgrounds.

## Live Site

After GitHub Pages is enabled, the site will be available at:

```text
https://deepanbiswas07.github.io/Zen-Waves/
```

## Project Structure

```text
Zen-Waves/
├── index.html
├── css/
├── javascript/
├── images/
└── sounds/
```

## Important Upload Note

This project contains audio files larger than GitHub's browser upload limit of 25 MiB. Do not upload this project by dragging files into the GitHub website.

Use GitHub Desktop or Git command line instead. The large audio files in this project are still below GitHub's regular Git file limit, so they can be committed and pushed normally.

## Publish With GitHub Desktop

1. Install GitHub Desktop from <https://desktop.github.com/>.
2. Open GitHub Desktop and sign in.
3. Clone this repository:

   ```text
   https://github.com/DeepanBiswas07/Zen-Waves
   ```

4. Copy the full project files into the cloned repository folder.
5. In GitHub Desktop, review the changed files.
6. Add a commit message, for example:

   ```text
   Add complete Zen Waves static site
   ```

7. Click **Commit to main**.
8. Click **Push origin**.

## Publish With Git Command Line

Run these commands from the folder that contains the project files:

```bash
git init
git branch -M main
git remote add origin https://github.com/DeepanBiswas07/Zen-Waves.git
git add .
git commit -m "Add complete Zen Waves static site"
git push -u origin main
```

If the remote repository already has commits, clone it first instead:

```bash
git clone https://github.com/DeepanBiswas07/Zen-Waves.git
```

Then copy this project's files into the cloned folder, commit, and push.

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Click **Save**.

GitHub Pages may take a few minutes to publish the first time.

## Local Preview

Open `index.html` directly in a browser. No build step, package install, or server is required.
