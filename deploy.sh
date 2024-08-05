rm -rf docs

npm run build 

touch dist/CNAME
echo "efabvx.com" > dist/CNAME

mkdir dist/public
mv dist/qiita-reader dist/public

cp dist/index.html dist/404.html
cp public/ogp.png dist/ogp.png

mv dist docs

git add .
git commit -m "deploy"
git pull
git push
