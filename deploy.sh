rm -rf docs

npm run build 

cp dist/index.html dist/404.html

mv dist docs

git add .
git commit -m "deploy"
git pull
git push
