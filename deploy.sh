rm -rf docs

bun run build 

touch docs/CNAME
echo "efabvx.com" > docs/CNAME

mkdir docs/public
mv docs/qiita-reader docs/public

cp docs/index.html docs/404.html
cp public/ogp.png docs/ogp.png

git add .
git commit -m "deploy"
git pull
git push
