import React, {Component} from 'react';
import {
    Platform,
    Linking,
    Alert,
    NativeModules
} from 'react-native';
export default class DownLoadApk extends Component{
    static downLoad=(downLoadUrl,description)=>{
        if(Platform.OS==='ios'){
            Linking.canOpenURL(downLoadUrl)
                .then((supported)=>{
                    if (!supported){
                        console.log('Can\'t handle url: ' + url);
                        Alert.alert(
                            '提示',
                            'Can\'t handle url: ' + url,
                            [
                                {text: 'OK', onPress:()=>{}}
                            ]
                        );
                    }else{
                        return Linking.openURL(downLoadUrl);
                    }
                })
                .catch((err)=>{
                    console.log('An error occurred', err);
                    Alert.alert(
                        '提示',
                        'An error occurred: ' + err,
                        [
                            {text: 'OK', onPress:()=>{}}
                        ]
                    );
                });
        }else{
            NativeModules.DownloadApk.downloading(downLoadUrl,description);
        }
    }
}
