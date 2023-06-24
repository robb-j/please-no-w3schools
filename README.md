# please-no-w3schools

Put a big red line through w3schools.com links in [duckduckgo](https://duckduckgo.com/) search results.
This browser extension only adds [no-w3schools.css](/no-w3schools.css) to the websites below.
The line and opacity of w3schools links are reset on hover if you are desperate.

![A search for css border with w3schools.com links crossed out](/screenshot.png)

## Websites

- `duckduckgo.com`
- `google.com`
- `bing.com`
- `ecosia.org`
- `yahoo.com`

## Installation

Click the browser you want to install with:

<a href="https://addons.mozilla.org/en-GB/firefox/addon/please-no-w3schools/" title="Install on Firefox">
<img width="64px" height="64px" src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_64x64.png">
</a>

<a href="https://github.com/robb-j/please-no-w3schools/releases/" title="Install on Safari">
<img width="64px" height="64px" src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_64x64.png">
</a>

<a href="https://chrome.google.com/webstore/detail/please-no-w3schools/keicipndekfhpaobbbldjbojpajdbpla" title="Install on Chrome / Edge / Brave">
<img width="64px" height="64px" src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_64x64.png">
</a>

> To install on Safari, download and unzip the app, drag it to your Applications folder and launch it.

## Release process

1. Ensure git is clean
2. Make sure [CHANGELOG.md](/CHANGELOG.md) is up to date
3. Update any documentation if needed
4. Bump the version in [manifest.json](manifest.json)
5. Run the build
6. Add change log and manifest and commit as `X.Y.Z`
7. Tag the commit as `vX.Y.Z`
8. Push the commit and tag to GitHub
9. Create a release from the tag, attach the zip and copy changes

## Safari project

```sh
# cd to/this/folder
xcrun safari-web-extension-converter --app-name PleaseNoW3Schools --bundle-identifier io.r0b.io.PleaseNoW3Schools .
```

---

> This project was set up by [puggle](https://npm.im/puggle)
