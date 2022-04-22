# Redirect Israel

Redirect Israel is a small JS that redirects your Israelis visitors to some other pages as a way to show support for Palestine 🇵🇸

___

# How to use

Go to [https://redirectrussia.org/](https://redirectrussia.org/) and configure what you want, Detect IPs only or IP and Timezones (for example) after you finish simply remove the sorce `https://redirectrussia.org/v1.js` and `integrity` and link it to my JS file

So it will be changed from: 
```
<script src="https://redirectrussia.org/v1.js" data-redirect-url="https://palestine.esmailelbob.xyz" data-hide-domain="hide" async integrity="sha384-K4/XEYup4kNv/qt2ucIwIH2wLT9I+z3s17CHQNMBB2/E8/Kw2VYsXQKB/7kylubA" crossorigin="anonymous"></script>
```
To:
```
<script src="main.js" data-redirect-url="https://palestine.esmailelbob.xyz" data-hide-domain="hide" async crossorigin="anonymous"></script>
```
