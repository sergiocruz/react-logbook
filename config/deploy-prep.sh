#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd stage/_book

git init
git config user.name "Sergio Cruz"
git config user.email "hello@sergiocruz.me"

git remote add upstream "https://$GH_TOKEN@github.com/sergiocruz/react-logbook.git"
