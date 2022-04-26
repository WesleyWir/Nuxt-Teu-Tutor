COMMANDS := composer app node
ifneq (filter $(COMMANDS),$(firstword $(MAKECMDGOALS)))
COMMANDS_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(COMMANDS_ARGS):;@:)
endif

.PHONY: node
node:
	docker-compose exec node $(COMMANDS_ARGS)

.PHONY: app-logs
app-logs:
	docker-compose logs app

.PHONY: node-logs
node-logs:
	docker-compose logs node

.PHONY: webserver-logs
webserver-logs:
	docker-compose logs webserver

.PHONY: database-logs
logs:
	docker-compose logs database

.PHONY: start
start:
	docker-compose start

.PHONY: stop
stop:
	docker-compose stop

.PHONY: restart
restart:
	docker-compose restart

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down