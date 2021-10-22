
COMPOSE_CONFIG='./docker/docker-compose.yml'
PROGECT_NAME='NestJSTest'

docker.start:
	docker-compose -f $(COMPOSE_CONFIG) -p $(PROGECT_NAME) up -d
docker.stop:
	docker-compose -f $(COMPOSE_CONFIG) -p $(PROGECT_NAME) stop
docker.restart: docker.stop docker.start