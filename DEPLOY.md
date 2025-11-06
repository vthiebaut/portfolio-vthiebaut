# 🚀 Guide de déploiement CI/CD

Ce projet utilise GitHub Actions pour le déploiement automatique.

## 📋 Configuration requise

### 1. Secrets GitHub

Ajoutez les secrets suivants dans votre dépôt GitHub :
**Settings → Secrets and variables → Actions → New repository secret**

| Secret | Description | Exemple |
|--------|-------------|---------|
| `SERVER_HOST` | IP ou hostname du serveur | `51.15.237.85` |
| `SERVER_USER` | Utilisateur SSH | `root` ou `deploy` |
| `SERVER_SSH_KEY` | Clé privée SSH (complète avec `-----BEGIN ...`) | Voir ci-dessous |
| `SERVER_PORT` | Port SSH (optionnel, défaut: 22) | `22` |
| `NUXT_PUBLIC_API_BASE` | URL de l'API (optionnel) | `https://portfolio.vthiebaut.fr/api` |
| `NUXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS Service ID | `service_anroc2d` |
| `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS Template ID | `template_rk9b4ei` |
| `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS Public Key | `zNbMtvBNYdn8k3b1l` |

### 2. Générer une clé SSH pour le déploiement

Sur votre machine locale :

```bash
# Générer une nouvelle clé SSH (si vous n'en avez pas)
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy

# Copier la clé publique sur le serveur
ssh-copy-id -i ~/.ssh/github_actions_deploy.pub root@51.15.237.85

# Afficher la clé privée (à copier dans GitHub Secrets)
cat ~/.ssh/github_actions_deploy
```

**⚠️ Important :** Copiez TOUTE la clé privée (y compris `-----BEGIN OPENSSH PRIVATE KEY-----` et `-----END OPENSSH PRIVATE KEY-----`) dans le secret `SERVER_SSH_KEY`.

### 3. Préparer le serveur

Sur le serveur (51.15.237.85) :

```bash
# Créer le dossier pour le build Nuxt
sudo mkdir -p /srv/www
sudo chown -R $USER:$USER /srv/www

# Vérifier que Docker et Docker Compose sont installés
docker --version
docker compose version

# Vérifier que le projet est cloné
cd /root/portfolio-vthiebaut  # ou /home/votre-user/portfolio-vthiebaut
git remote -v
```

## 🔄 Workflows disponibles

### 1. Déploiement Nuxt (Frontend)

**Fichier :** `.github/workflows/deploy.yml`

**Déclenchement :**
- Push sur `main` ou `master`
- Déclenchement manuel via GitHub Actions

**Actions :**
1. Build de l'application Nuxt (`npm run generate`)
2. Création d'une archive
3. Transfert sur le serveur via SCP
4. Extraction dans `/srv/www`
5. Redémarrage de Caddy

### 2. Déploiement Symfony (API)

**Fichier :** `.github/workflows/deploy-symfony.yml`

**Déclenchement :**
- Push sur `main` ou `master` avec modifications dans `symfony/`
- Déclenchement manuel

**Actions :**
1. Pull du code sur le serveur
2. Rebuild des containers Docker
3. Redémarrage des services
4. Exécution des migrations

## 🎯 Utilisation

### Déploiement automatique

1. Poussez vos modifications sur `main` :
   ```bash
   git add .
   git commit -m "feat: nouvelle fonctionnalité"
   git push origin main
   ```

2. Le workflow se déclenche automatiquement
3. Suivez la progression dans **Actions** sur GitHub

### Déploiement manuel

1. Allez sur **Actions** dans votre dépôt GitHub
2. Sélectionnez le workflow souhaité
3. Cliquez sur **Run workflow**
4. Choisissez la branche et cliquez sur **Run workflow**

## 🔍 Vérification

Après un déploiement, vérifiez :

```bash
# Sur le serveur
ssh root@51.15.237.85

# Vérifier que les fichiers sont bien déployés
ls -la /srv/www

# Vérifier les logs Docker
docker compose -f docker-compose.prod.yml logs caddy
docker compose -f docker-compose.prod.yml logs php

# Tester l'accès
curl https://portfolio.vthiebaut.fr
```

## 🐛 Dépannage

### Erreur SSH

- Vérifiez que la clé SSH est correctement configurée
- Testez la connexion manuellement : `ssh -i ~/.ssh/github_actions_deploy root@51.15.237.85`

### Erreur de permissions

```bash
# Sur le serveur
sudo chown -R $USER:$USER /srv/www
sudo chmod -R 755 /srv/www
```

### Erreur Docker

```bash
# Vérifier que Docker est en cours d'exécution
sudo systemctl status docker

# Redémarrer Docker si nécessaire
sudo systemctl restart docker
```

## 📝 Notes

- Le build Nuxt génère un site statique (SSG) pour un SEO optimal
- Les fichiers sont déployés dans `/srv/www` qui est monté en volume dans Caddy
- Les anciens builds sont sauvegardés avec un timestamp pour rollback éventuel

