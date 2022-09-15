# Consent config

Cookie consent config file for [orestbida/cookieconsent](https://github.com/orestbida/cookieconsent). 

Add to Head HTML Injection:
```js
<!-- Cookie Consent https://github.com/orestbida/cookieconsent --->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.6/dist/cookieconsent.css
" media="print" onload="this.media='all'">

<script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.6/dist/cookieconsent.js"></script>

<script src="https://cdn.jsdelivr.net/gh/Imperial-Wiki/consent-config/cookieconsent-init.js"></script>
```

Add `type="text/plain"` and `data-cookiecategory="<your-category>"` to the scripts.
```js
<!-- Global site tag (gtag.js) - Google Analytics -->
<script type="text/plain" data-cookiecategory="analytics" async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script type="text/plain" data-cookiecategory="analytics">
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```
