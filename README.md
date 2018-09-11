
# react-native-download

## Getting started

`$ npm install react-native-download --save`

### Mostly automatic installation

`$ react-native link react-native-download`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNDownloadPackage;` to the imports at the top of the file
  - Add `new RNDownloadPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-download'
  	project(':react-native-download').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-download/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-download')
  	```


## Usage
```javascript
import RNDownload from 'react-native-download';

// TODO: What to do with the module?
RNDownload.downLoad('apkurl','apkdescription');
```
  
