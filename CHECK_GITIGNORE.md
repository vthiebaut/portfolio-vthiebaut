# 🔍 Vérification des .gitignore

## ✅ Fichiers correctement ignorés

Les fichiers suivants sont bien ignorés par Git :

- `node_modules/` (racine et sous-dossiers)
- `.nuxt/`, `.output/`, `.nitro/` (builds Nuxt)
- `symfony/vendor/` (dépendances PHP)
- `.idea/`, `.vscode/` (configurations IDE)
- `.env*` (variables d'environnement)
- `*.log` (logs)
- `deploy-nuxt.tar.gz` (archives de déploiement)
- Backups serveur (`/var/www/portfolio.backup.*`)

## 📋 Commandes utiles

### Vérifier qu'un fichier est ignoré
```bash
git check-ignore -v chemin/vers/fichier
```

### Voir tous les fichiers ignorés
```bash
git status --ignored
```

### Voir les fichiers non trackés
```bash
git status --porcelain
```

### Retirer un fichier déjà tracké (si nécessaire)
```bash
# Si un fichier est déjà tracké mais devrait être ignoré
git rm --cached chemin/vers/fichier
```

## ⚠️ Si des fichiers sensibles sont trackés

Si vous voyez des fichiers `.env`, `node_modules`, etc. dans `git ls-files`, il faut les retirer :

```bash
# Retirer tous les node_modules trackés
git rm -r --cached node_modules/

# Retirer les fichiers .env trackés
git rm --cached .env .env.local

# Puis commit
git commit -m "chore: retirer les fichiers qui devraient être ignorés"
```

## 📁 Structure des .gitignore

- `.gitignore` (racine) : Patterns globaux pour tout le projet
- `nuxt/.gitignore` : Patterns spécifiques à Nuxt
- `symfony/.gitignore` : Patterns spécifiques à Symfony
