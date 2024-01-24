This plugin allows you to integrate your WooCommerce websites with [Firebase Analytics](https://firebase.google.com/docs/analytics/get-started?platform=web) and start generating the report of your site. 

Firebase Analytics provide **log events** and Store data in Firestore collection "events". And based on those events the report generates accordingly. Can check log events [here](https://support.google.com/firebase/answer/6317499?hl=en&ref_topic=6317484) for web.


**Setup Firebase**

1. Create a Project in Firebase Analytics.
2. Copy the scripts provided.
3. Install the plugin in your WooCommerce website.
4. Got to plugin settings page, paste the scripts there and save it.
5. Integration Completed now you can check the analytics report from your account.

**Steps to setup Firebase Analytics**

**Step 1:** From your account go to the url provided [here](https://console.firebase.google.com/).

**Step 2:** Click on **Add Project** .
* Provide name to your Project. Click Continue.
* Check if "Analytics for this Project" is enabled or not. If not then do enable it as it is a **recommended** functionality. Click Continue.
* Final Step, is to configure google analytics. Select **Default Account For Firebase** option from dropdown. Click on Create Project.

**Step 3:** Now, you will get the script url and code **Copy** them and **Paste** them to the Plugin setting section.

Your WooCommerce website is now integrated with Firebase Analytics.

**Setting Up Daily Reports**

Download the FirebaseFunctions direction and run the following commands
npm init
npm install nodemailer firebase-admin firebase-functions

firebase init
firebase functions:config:set gmail.email="youremail@gmail.com" gmail.password="apppasswrod"
firebase deploy --only functions

