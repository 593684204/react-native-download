package com.download;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DownloadApkPackage implements ReactPackage
{
    @Override
    public List createNativeModules(ReactApplicationContext reactContext)
    {
        List modules = new ArrayList<>();
        modules.add(new DownloadApk(reactContext));
        return modules;
    }

    // @Override
    public List createJSModules()
    {
        return Collections.emptyList();
    }

    @Override
    public List createViewManagers(ReactApplicationContext	reactContext)
    {
        return	Collections.emptyList();
    }
}
