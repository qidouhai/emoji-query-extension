# Emoji-zh
query emoji with simple chinese in the chrome extension

## development

1. prepare for the ui framework
```bash
npm i semantic-ui
npm run build-ui
npm run clean-ui
```
2. dev in browser
```bash
npm i
npm run dev
```
then go to localhost://3000/app/index.html

## deploy for chrome extension

1. perpare for the ui(same as above)
2. compile and package
```bash
npm run compile
gulp
```
3. go to chrome://extensions/ load the __chrome_ctx__ folder

## references:
1. https://developer.chrome.com/extensions/contentSecurityPolicy
2. http://ctheu.com/2015/12/29/webpack-hot-reloading-and-react-how/
