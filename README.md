FCM NOTIFICAITON

Step - 1 :
        Create project using – npx react-native init AppName
Step – 2 :
        Add this line in …android/build.gradle :
         dependencies {
                classpath("com.android.tools.build:gradle:7.0.4")
                classpath("com.facebook.react:react-native-gradle-plugin")
                classpath("de.undercouch:gradle-download-task:4.1.2")
              + classpath 'com.google.gms:google-services:4.3.3' // add this line
            }

        Add this line in …android/app/build.gradle :
        apply plugin: 'com.google.gms.google-services' // add on top of the app

        dependencies {
            implementation fileTree(dir: "libs", include: ["*.jar"])

            //noinspection GradleDynamicVersion
            implementation "com.facebook.react:react-native:+"  // From node_modules

            implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"
            implementation 'com.google.firebase:firebase-core:16.0.0'// add this line
            …
        … 
        }     


        Add these lines in …android/app/src/main/AndroidManifest.xml
           <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
           <uses-permission android:name="android.permission.INTERNET" />
           <uses-permission android:name="android.permission.WAKE_LOCK" />
           <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/> 
           <uses-permission android:name="android.permission.VIBRATE" />

Step – 3 :
        Create firebase project 
        Then go to Engage->Cloud Messaging-> click on android symbol->  
        First fille will be 
        <manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.activity"> // copy com.activity and paste in first field

        then download json file and paste it in android/app/
        then next, next and continue to console.
Step – 4 :
        Follow https://rnfirebase.io/messaging/notifications  -> Handling Interaction
Step – 5 : 
        in firebase console Go to Engage->Cloud Messaging-> click on Send your first message->  
        Follow the given instruction and you will get your notification 






























