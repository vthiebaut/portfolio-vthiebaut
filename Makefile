# Lancer les services backend (Docker) + frontend (Vue dev server)
start:
	docker compose up -d --build
	cd vue && npm install && npm run dev

# Arrêter les services
stop:
	docker compose down

# Rebuild sans cache
rebuild:
	docker compose build --no-cache

# Accès au conteneur PHP
bash:
	docker exec -it cleaneuse-php bash

# Lancer Symfony console
console:
	docker exec -it cleaneuse-php php bin/console

# Installer les dépendances Symfony dans le conteneur
install-back:
	docker exec -it cleaneuse-php composer install

# Installer les dépendances frontend
install-front:
	cd vue && npm install

# Variables
FRONT_DIR=vue
BACK_DIR=symfony

# 🔧 Build le front Vue
build-front:
	cd $(FRONT_DIR) && npm install && npm run build

# 📦 Copie le build dans public Symfony
copy-front:
	rm -rf $(BACK_DIR)/public/*
	cp -r $(FRONT_DIR)/dist/* $(BACK_DIR)/public/

# 🔁 Redémarre les containers
reload:
	docker compose -f docker-compose.prod.yml down
	docker compose -f docker-compose.prod.yml up -d --build

# 🚀 Tout en un
full-deploy: build-front copy-front reload

