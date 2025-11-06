# 🔑 Comment récupérer SERVER_SSH_KEY

## Option 1 : Utiliser une clé SSH existante

Si vous avez déjà une clé SSH configurée pour vous connecter au serveur :

```bash
# Afficher votre clé privée (la plus courante)
cat ~/.ssh/id_rsa

# Ou si vous utilisez ed25519
cat ~/.ssh/id_ed25519

# Ou si vous avez une clé nommée différemment
ls -la ~/.ssh/
cat ~/.ssh/nom_de_votre_cle
```

**⚠️ Important :** Copiez TOUT le contenu, y compris :
- `-----BEGIN OPENSSH PRIVATE KEY-----` (ou `-----BEGIN RSA PRIVATE KEY-----`)
- Toutes les lignes au milieu
- `-----END OPENSSH PRIVATE KEY-----` (ou `-----END RSA PRIVATE KEY-----`)

## Option 2 : Créer une nouvelle clé dédiée (recommandé)

C'est plus sécurisé d'avoir une clé dédiée pour GitHub Actions :

```bash
# 1. Générer une nouvelle clé SSH
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy

# Appuyez sur Entrée pour accepter l'emplacement par défaut
# Entrez un mot de passe (ou laissez vide pour pas de mot de passe)

# 2. Copier la clé publique sur le serveur
ssh-copy-id -i ~/.ssh/github_actions_deploy.pub root@51.15.237.85

# 3. Afficher la clé privée (à copier dans GitHub Secrets)
cat ~/.ssh/github_actions_deploy
```

## 📋 Copier dans GitHub Secrets

1. Allez sur : https://github.com/vthiebaut/portfolio-vthiebaut/settings/secrets/actions
2. Cliquez sur **New repository secret**
3. Nom : `SERVER_SSH_KEY`
4. Valeur : Collez TOUT le contenu de la clé privée (avec les lignes `-----BEGIN` et `-----END`)
5. Cliquez sur **Add secret**

## ✅ Tester la connexion

Pour vérifier que la clé fonctionne :

```bash
# Avec votre clé existante
ssh -i ~/.ssh/id_rsa root@51.15.237.85

# Ou avec la nouvelle clé dédiée
ssh -i ~/.ssh/github_actions_deploy root@51.15.237.85
```

## 🔒 Sécurité

- **Ne partagez JAMAIS votre clé privée publiquement**
- La clé privée doit rester secrète
- GitHub Secrets chiffre automatiquement les secrets
- Si vous avez accidentellement exposé une clé, régénérez-la immédiatement

