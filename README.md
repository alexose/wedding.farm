Wedding.farm
============

Build:
    cd wedding.farm
    npm install
    watchify -t reactify -t brfs js/* -o ./dist/app.js -d -v
