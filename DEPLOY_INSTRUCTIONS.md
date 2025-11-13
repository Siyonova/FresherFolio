# GitHub Pages Deployment Instructions

## Quick Setup (5 minutes)

### Step 1: Push to GitHub

In your terminal (VS Code or Command Prompt), run:

```bash
cd C:\Users\siyon\Desktop\FresherFolio\FresherFolio
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/Siyonova/FresherFolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Click **Save**

### Step 3: Wait for Deployment

1. Go to **Actions** tab: https://github.com/Siyonova/FresherFolio/actions
2. Wait 2-3 minutes for the workflow to complete (green checkmark)
3. Click on the workflow run to see the deployment URL

### Your Live Site

Once deployed, your portfolio will be live at:
**https://siyonova.github.io/FresherFolio/**

---

## Troubleshooting

### If you see 404 error:

1. Make sure you selected **GitHub Actions** as the source (not "Deploy from branch")
2. Wait a few more minutes - sometimes it takes 5-10 minutes
3. Try hard refresh: Ctrl + Shift + R

### If deployment fails:

1. Check the Actions tab for error messages
2. Make sure all files are committed and pushed
3. Verify the workflow file exists at: `.github/workflows/static.yml`

---

## Local Development

To run locally on your computer:

```bash
npx tsx server/index.ts
```

Then open: http://localhost:5003

---

## Making Updates

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The site will automatically redeploy in 2-3 minutes!
