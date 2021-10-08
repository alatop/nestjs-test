
COMPOSE_CONFIG='./docker/docker-compose.yml'

docker.start:
	docker-compose -f $(COMPOSE_CONFIG) up -d
docker.stop:
	docker-compose -f $(COMPOSE_CONFIG) stop
docker.restart: docker.stop docker.start