# Design Tokens
Tokens are predefined CSS variables which store style values, such as colors, fonts, etc. These values can be applied consistently across design, code, tools, and platforms.
With design tokens, you can capture low-level values and then use them to create the styles for your product or app. You can maintain a scalable and consistent visual system for UI development.

###### We are using Style Dictionary to maintain the design tokens
### Style Dictionary
A Style Dictionary is a system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, etc.

All the source design tokens are stored in JSON file inside `src/TokensOld/src/` folder and the build tokens are stored in `src/TokensOld/build/` folder. 

If any new tokens are added/modified in the source, the command below will generate the tokens file to consume.
```bash
npm run style-dictionary
// or
yarn run style-dictionary
```

You should see something like this output:
```
scss
✔︎ src/TokensOld/build/scss/variables.scss

web/json
✔︎ src/TokensOld/build/json/TokensOld.json

android
✔︎ src/TokensOld/build/android/font_dimens.xml
✔︎ src/TokensOld/build/android/colors.xml

compose
✔︎ src/TokensOld/build/compose/StyleDictionaryColor.kt
✔︎ src/TokensOld/build/compose/StyleDictionarySize.kt

ios
✔︎ src/TokensOld/build/ios/StyleDictionaryColor.h
✔︎ src/TokensOld/build/ios/StyleDictionaryColor.m
✔︎ src/TokensOld/build/ios/StyleDictionarySize.h
✔︎ src/TokensOld/build/ios/StyleDictionarySize.m

ios-swift
✔︎ src/TokensOld/build/ios-wift/StyleDictionary+Class.swift
✔︎ src/TokensOld/build/ios-wift/StyleDictionary+Enum.swift
✔︎ src/TokensOld/build/ios-wift/StyleDictionary+Struct.swift

ios-swift-separate-enums
✔︎ src/TokensOld/build/ios-wift/StyleDictionaryColor.swift
✔︎ src/TokensOld/build/ios-wift/StyleDictionarySize.swift
```

Take a look at what it has built. This should have created a `build` inside `src/TokensOld/` directory and it should look like this:
```
src/TokensOld/
├── src
│    ├── border
│    │   └── border.json
│    ├── color
│    │   ├── base.json
│    │   └── button.json
│    ├── layout
│    │   └── layout-token.json
│    ├── shadow
│    │   └── shadow-token.json
│    └── typography
│        └── typography-token.json
│
└── build
    ├── android
    │   ├── colors.xml
    │   └── font_dimens.xml
    ├── compose
    │   ├── StyleDictionaryColor.kt
    │   └── StyleDictionarySize.kt
    ├── ios
    │   ├── StyleDictionaryColor.h
    │   ├── StyleDictionaryColor.m
    │   ├── StyleDictionarySize.h
    │   └── StyleDictionarySize.m
    ├── ios-wift
    │   ├── StyleDictionary+Class.swift
    │   ├── StyleDictionaryColor.swift
    │   ├── StyleDictionary+Enum.swift
    │   ├── StyleDictionarySize.swift
    │   └── StyleDictionary+Struct.swift
    ├── json
    │   └── tokens.json
    └── scss
        └── variables.scss
 ```

If you open `scrips/style-dictionary.js` you will see there are 6 platforms defined: scss, json, android, compose, ios, and ios-swift. Each platform has a transformGroup, buildPath, and files. The buildPath and files of the platform should match up to the files what were built. The files built should look like these:


**SCSS**
```scss
// variables.scss

// Do not edit directly
// Generated on Tue, 21 Jun 2022 18:43:04 GMT

$color-none: #000000;
$color-primitive-white: #ffffff;
$color-primary-50: #fff8f5;
$color-primary-100: #fee2d6;
$color-primary-200: #f58857;
$color-primary-300: #e45913;
$color-primary-400: #c74900;
$color-primary-500: #9e4100;
$color-primary-600: #873b00;
$color-secondary-0: #fcfcfd;
$color-secondary-50: #f6f6f9;
$color-secondary-100: #f2f2f8;
...
```


**JSON**
```scss
// tokens.json
{
  "color-none": "#000000",
  "color-primitive-white": "#ffffff",
  "color-primary-50": "#fff8f5",
  "color-primary-100": "#fee2d6",
  "color-primary-200": "#f58857",
  "color-primary-300": "#e45913",
  "color-primary-400": "#c74900",
  "color-primary-500": "#9e4100",
  "color-primary-600": "#873b00",
  ...
}
```

The build system does a deep merge of all the token JSON files defined in the `source` attribute of `scripts/style-dictionary.js`. This allows you to split up the token JSON files however you want.
