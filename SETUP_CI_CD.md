# 🚀 Configuration CI/CD - Guide rapide

## ⚡ Configuration en 5 minutes

### 1. Générer la clé SSH (sur votre machine locale)

```bash
# Générer une clé SSH dédiée
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy

# Copier la clé publique sur le serveur
ssh-copy-id -i ~/.ssh/github_actions_deploy.pub root@51.15.237.85

# Afficher la clé privée (à copier dans GitHub)
cat ~/.ssh/github_actions_deploy
```

### 2. Configurer les secrets GitHub

Allez sur : **https://github.com/vthiebaut/portfolio-vthiebaut/settings/secrets/actions**

Ajoutez ces secrets :

| Nom | Valeur |
|-----|--------|
| `SERVER_HOST` | `51.15.237.85` |
| `SERVER_USER` | `root` (ou votre utilisateur) |
| `SERVER_SSH_KEY` | Contenu complet de `~/.ssh/github_actions_deploy` |
| `SERVER_PORT` | `22` (optionnel) |
| `NUXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_anroc2d` |
| `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_rk9b4ei` |
| `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `zNbMtvBNYdn8k3b1l` |

### 3. Préparer le serveur

Connectez-vous au serveur :

```bash
ssh root@51.15.237.85
```

Puis exécutez :

```bash
# Créer le dossier pour le build Nuxt
mkdir -p /srv/www
chmod 755 /srv/www

# Vérifier que le projet est cloné
cd /root/portfolio-vthiebaut  # ou le chemin où se trouve votre projet
git remote -v

# Si le projet n'est pas cloné :
# git clone git@github.com:vthiebaut/portfolio-vthiebaut.git /root/portfolio-vthiebaut
```

### 4. Tester le déploiement

1. Faites un commit et poussez sur `main` :
   ```bash
   git add .
   git commit -m "ci: configuration CI/CD"
   git push origin main
   ```

2. Allez sur **Actions** dans GitHub pour voir le workflow s'exécuter

3. Vérifiez le déploiement :
   ```bash
   ssh root@51.15.237.85
   ls -la /srv/www
   ```

## 📋 Workflows disponibles

- **`deploy.yml`** : Déploie uniquement le frontend Nuxt
- **`deploy-symfony.yml`** : Déploie uniquement l'API Symfony
- **`deploy-full.yml`** : Déploie tout (Nuxt + Symfony)

## ✅ C'est prêt !

À chaque push sur `main`, le déploiement se fera automatiquement.

