# Enterprise level test framework for web applications in typescript for UI testing

<b>Application under test</b>

```
https://www.saucedemo.com
```

<b>Prerequisites</b>

```
node >=12.6.1
Google Chrome
Microsoft Edge
Safari
Mozilla Firefox
```

<b>To install dependencies</b>

```
npm install
```


<b>To run the tests</b>

```
npx wdio run ./wdio.conf.ts
```
*Some safari tests might be flaky due to wait/sync issues and need to be fixed.

<b>To run the tests in headless mode</b>

```
HEADLESS=headless npx wdio run ./wdio.conf.ts
```
*Safari does not support headless mode.

<b>Test report with screenshots as test evidence embedded beneath each test step</b>

```
open .tmp/report/index.html in a browser
```

<b>BDD</b> :heavy_check_mark:  
<b>Cross Browser</b> :heavy_check_mark:  
<b>Parallel run</b> :heavy_check_mark:  
<b>Page Object Pattern</b> :heavy_check_mark:

<b>Tech Stack</b>

```
WDIO
Cucumber
Typescript
```

<b>Sample Test Report</b>

![image](https://user-images.githubusercontent.com/5993336/160019933-bf21c22b-0a38-495e-a1f5-4d62cc5c4542.png)
![image](https://user-images.githubusercontent.com/5993336/160020105-29510577-6052-4314-a070-4d7cd98217c7.png)
![image](https://user-images.githubusercontent.com/5993336/160020219-ecfaf829-0270-4835-ae6c-734a7a452489.png)

![Uploading image.png…]()
