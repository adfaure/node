#!/bin/bash

cd ..

git checkout .

webpack

git checkout gh-pages

FILES=`ls bin`

rm $FILES

mv bin/* . 

git add $FILES

git yolo 

git push origin gh-pages

git checkout master

cd scripts