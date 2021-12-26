# help: show this help
# find all lines with two # | and : | exclude fgrep | extract name and description | create table
help:
	@echo
	@fgrep -h "#" $(MAKEFILE_LIST) | fgrep : | fgrep -v fgrep | sed -e $$'s/#[[:blank:]]*\([^:]*\):\(.*\)/\\1##\\2/' | column -t -s '##'
	@echo

# install: install dependencies
install:
	@echo "Installing dependencies..."
	npm i

# release: bump version, create new tag and push to NPM
release:
	@echo "Creating new release..."
	@echo "After specifying the version, new tag will be published to main branch and released to NPM."
	@if [[ -z "$(CI)" ]]; then \
		REPLY="" ; \
		read -p "⚠ Are you sure? [y/n] > " -r ; \
		if [[ ! $$REPLY =~ ^[Yy]$$ ]]; then \
			printf $(_ERROR) "KO" "Stopping" ; \
			exit 1 ; \
		else \
			lerna version ; \
			exit 0; \
		fi \
	fi
