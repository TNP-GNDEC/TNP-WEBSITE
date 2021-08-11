<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="icon" href="{{asset('images/logo2.png')}}"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="This is official application of Training and Placement Cell, GNDEC, Ludhiana.">
    <meta name="keywords" content="gndec,gne,t&p,cell,training and placement,placement cell,placement training,GNDEC,Ludhiana,job,company,camups placement, off campus, gne college,training and placement cell,courses with placement,javascript training,training and placement companies,training and placement officer,job training and placement,training and placement cell project">

        <title>Training and Placement Cell</title>

        <!-- One Signal -->
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script>
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
            appId: "9e3fe13d-b637-46b4-b2a8-9041cbf72e03",
            autoRegister: true,
            notifyButton: {
                enable: true,
            },
            });
            OneSignal.registerForPushNotifications();
        });
        </script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Quicksand|Lato:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />
    </head>
    <body>
        <div id = "example"></div>
        <script src= "{{asset('js/app.js')}}"></script>
    </body>
</html>
