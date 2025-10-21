# Git History Cleanup - Remove Exposed API Key

**Created:** October 21, 2025
**Purpose:** Permanently remove exposed Google Maps API key from git history
**Repository:** https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1

---

## ⚠️ CRITICAL WARNINGS

**THIS IS A DESTRUCTIVE OPERATION!**

- 🔴 **Rewrites entire git history** - All commit hashes will change
- 🔴 **Requires force push** - Can break clones and forks
- 🔴 **Cannot be undone** - Make backups first!
- 🔴 **Collaborators affected** - Anyone who cloned must re-clone
- 🔴 **Only do this if you understand git internals**

**BEFORE YOU START:**
- ✅ Make sure no one else has cloned your repository
- ✅ Create a complete backup
- ✅ Understand you'll need to force push
- ✅ Read all instructions before executing ANY command

---

## 📋 Prerequisites

### 1. Verify Your Repository Status

```bash
# Check current branch
git branch

# Check remote
git remote -v

# Should show:
# origin  https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git (fetch)
# origin  https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git (push)
```

### 2. Check for Collaborators

```bash
# Check if anyone has forked or cloned
gh repo view eesb99/kl-traffic-viewer-asean-summit-v3.1 --json forkCount

# If forkCount > 0, those forks will be out of sync after rewrite
```

---

## 🔧 Method 1: Using git-filter-repo (RECOMMENDED)

**Why Recommended:** Faster, safer, and officially recommended by Git over filter-branch.

### Step 1: Install git-filter-repo

**macOS:**
```bash
brew install git-filter-repo
```

**Verify installation:**
```bash
git-filter-repo --version
```

### Step 2: Create Backup

```bash
# Navigate to project
cd ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1

# Create backup
cd ..
cp -r kl-traffic-viewer-asean-summit-v3.1 kl-traffic-viewer-asean-summit-v3.1-BACKUP

# Verify backup
ls -la kl-traffic-viewer-asean-summit-v3.1-BACKUP/

echo "✅ Backup created at: ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1-BACKUP"
```

### Step 3: Create Replacement File

Create a text file with the sensitive content you want to remove:

```bash
cd ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1

# Create expressions file
cat > /tmp/git-filter-expressions.txt <<'EOF'
AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk==>YOUR_ACTUAL_API_KEY_HERE
EOF

echo "✅ Replacement expressions created"
```

### Step 4: Run git-filter-repo

```bash
# DESTRUCTIVE OPERATION - Make sure backup exists first!
git filter-repo --replace-text /tmp/git-filter-expressions.txt --force

# This will:
# 1. Scan entire git history
# 2. Replace the exposed API key in ALL commits
# 3. Rewrite commit hashes
# 4. Update all references
```

### Step 5: Re-add Remote

git-filter-repo removes remotes for safety. Re-add it:

```bash
git remote add origin https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git

# Verify
git remote -v
```

### Step 6: Force Push to GitHub

**⚠️ THIS OVERWRITES GITHUB HISTORY - POINT OF NO RETURN!**

```bash
# Force push to rewrite GitHub history
git push origin --force --all

# Also force push tags if you have any
git push origin --force --tags
```

### Step 7: Verify Cleanup

```bash
# Search git history for the old API key
git log --all -p -S "AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk"

# Should return NOTHING if successful
```

---

## 🔧 Method 2: Using git filter-branch (ALTERNATIVE)

**Use this if git-filter-repo is not available.**

### Step 1: Create Backup (Same as Method 1)

```bash
cd ~/Claude/projects
cp -r kl-traffic-viewer-asean-summit-v3.1 kl-traffic-viewer-asean-summit-v3.1-BACKUP
```

### Step 2: Run filter-branch

```bash
cd ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1

# This removes NODE_SETUP.md from ALL commits in history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch NODE_SETUP.md" \
  --prune-empty --tag-name-filter cat -- --all
```

### Step 3: Clean Up

```bash
# Remove backup refs
rm -rf .git/refs/original/

# Garbage collect
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### Step 4: Restore NODE_SETUP.md

```bash
# Copy cleaned version back
git checkout HEAD NODE_SETUP.md

# Or restore from backup
cp ../kl-traffic-viewer-asean-summit-v3.1-BACKUP/NODE_SETUP.md .

# Commit the clean version
git add NODE_SETUP.md
git commit -m "Restore NODE_SETUP.md without exposed API key"
```

### Step 5: Force Push

```bash
git push origin --force --all
git push origin --force --tags
```

---

## 🔧 Method 3: Complete Repository Reset (NUCLEAR OPTION)

**When to use:** If you want to start completely fresh with no history.

### Step 1: Backup Current Files

```bash
cd ~/Claude/projects
cp -r kl-traffic-viewer-asean-summit-v3.1 kl-traffic-viewer-asean-summit-v3.1-BACKUP
cd kl-traffic-viewer-asean-summit-v3.1
```

### Step 2: Delete Git History

```bash
# Remove all git history
rm -rf .git

# Initialize new repository
git init

# Configure git
git config user.email "eesb99@gmail.com"
git config user.name "eesb99"
```

### Step 3: Create Clean Initial Commit

```bash
# Stage all current files (which are already clean)
git add .

# Create new initial commit
git commit -m "Initial commit: KL Traffic Viewer v3.1 - ASEAN Summit Edition

Real-time traffic monitoring for Kuala Lumpur with:
- ASEAN Summit road closure monitoring
- Smart convoy detection system
- Secure API key handling via Node.js backend
- Complete MIT license and security documentation

🚦 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 4: Force Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git

# Force push (overwrites entire GitHub history)
git push origin main --force
```

---

## ✅ Verification Steps

After any method, verify the API key is gone:

### 1. Check Local Git History

```bash
# Search all commits for the exposed key
git log --all -p -S "AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk"

# Should return: (nothing)
```

### 2. Check GitHub Web Interface

```
https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1/commits/main

1. Click on each commit
2. View commit diff
3. Verify NO API key visible
```

### 3. Use GitHub API

```bash
# Check commit bb48a63 no longer exists
gh api repos/eesb99/kl-traffic-viewer-asean-summit-v3.1/commits/bb48a63 2>&1

# Should return: 404 Not Found (good!)
```

### 4. Search GitHub Code

```
https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1/search?q=AIzaSyCWsN7vjMN

Should return: "We couldn't find any code matching 'AIzaSyCWsN7vjMN'"
```

---

## 🔄 After Cleanup - Collaborator Actions

If anyone has cloned your repository, they MUST:

```bash
# Delete their local clone
rm -rf kl-traffic-viewer-asean-summit-v3.1

# Re-clone from GitHub
git clone https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git
```

**DO NOT** have them pull - history has been rewritten, pull won't work correctly.

---

## 📊 Method Comparison

| Feature | git-filter-repo | filter-branch | Nuclear Option |
|---------|----------------|---------------|----------------|
| **Speed** | ⚡ Fastest | 🐢 Slow | ⚡ Instant |
| **Safety** | ✅ Safest | ⚠️ Risky | 🔴 Total reset |
| **Preserves history** | ✅ Yes | ✅ Yes | ❌ No |
| **Preserves commits** | ✅ Yes (cleaned) | ✅ Yes (cleaned) | ❌ No |
| **Difficulty** | ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Advanced |
| **Recommended for** | Most cases | If no filter-repo | Fresh start only |

---

## 🎯 Recommended Approach

**For your situation:**

**Use Method 3 (Nuclear Option)** because:
- ✅ Your repo is brand new (created today)
- ✅ No collaborators yet
- ✅ No forks exist
- ✅ Simplest and cleanest solution
- ✅ No complex history to preserve
- ✅ Only 4 commits total

**Command Summary:**
```bash
# 1. Backup
cd ~/Claude/projects
cp -r kl-traffic-viewer-asean-summit-v3.1 kl-traffic-viewer-asean-summit-v3.1-BACKUP

# 2. Reset git
cd kl-traffic-viewer-asean-summit-v3.1
rm -rf .git
git init
git config user.email "eesb99@gmail.com"
git config user.name "eesb99"

# 3. Clean commit
git add .
git commit -m "Initial commit: KL Traffic Viewer v3.1 - ASEAN Summit Edition

Real-time traffic monitoring for Kuala Lumpur with ASEAN Summit features.

🚦 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Force push
git remote add origin https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git
git push origin main --force
```

---

## 🆘 Troubleshooting

### Error: "failed to push some refs"
```bash
# Use --force to overwrite
git push origin main --force
```

### Error: "refusing to update checked out branch"
```bash
# This shouldn't happen with GitHub, but if it does:
git push origin +main:main
```

### Want to undo the rewrite?
```bash
# Delete current repo
rm -rf ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1

# Restore from backup
cp -r ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1-BACKUP \
      ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1

cd ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1
```

---

## 📞 Support

**Questions?** Email: eesb99@gmail.com

**Resources:**
- [Git Filter-Repo Docs](https://github.com/newren/git-filter-repo/)
- [GitHub: Removing Sensitive Data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [Git Filter-Branch Manual](https://git-scm.com/docs/git-filter-branch)

---

## ✅ Final Checklist

After completing the cleanup:

- [ ] Verify API key not in git history (search returns nothing)
- [ ] Check GitHub commits - no key visible
- [ ] New API key generated in Google Cloud Console
- [ ] Old API key revoked/deleted
- [ ] ~/.env updated with new key
- [ ] Application tested with new key
- [ ] Backup stored safely
- [ ] Delete backup after 7 days if all is well

---

**REMEMBER:** After rewriting history:
1. ✅ Revoke old API key immediately
2. ✅ Generate new API key
3. ✅ Never commit API keys again
4. ✅ Always use ~/.env for secrets

---

*This guide created for emergency API key removal*
*Use responsibly and always backup first!*
