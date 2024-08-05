rm -rf docs

npm run build 

touch dist/CNAME
echo "efabvx.com" > dist/CNAME

rm -rf dist/qiita-reader
mkdir dist/public
cp public/qiita-reader dist/public/qiita-reader

cp dist/index.html dist/404.html

mv dist docs

git add .
git commit -m "deploy"
git pull
git push
