set dotenv-load

default:
	just --choose

clear:
	clear

up: clear
	pulumi up

dev: clear
	pulumi up --yes