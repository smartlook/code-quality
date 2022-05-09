# help: show this help
# find all lines with two # | and : | exclude fgrep | extract name and description | create table
help:
	@echo
	@fgrep -h "#" $(MAKEFILE_LIST) | fgrep : | fgrep -v fgrep | sed -e $$'s/#[[:blank:]]*\([^:]*\):\(.*\)/\\1##\\2/' | column -t -s '##'
	@echo

# install: install dependencies
install:
	@echo "Installing dependencies..."
	pnpm i
