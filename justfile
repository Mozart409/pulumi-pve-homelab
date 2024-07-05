set dotenv-load

default:
	just --choose

clear:
	clear

up: clear
	pulumi up

dev: clear
	pulumi up --yes

readme: clear
	docker run -it \
		-e OPENAI_API_KEY=$OPENAI_API_KEY \
		-v "$(pwd)":/app zeroxeli/readme-ai:latest \
		-r https://github.com/mozart409/pulumi-pve-homelab