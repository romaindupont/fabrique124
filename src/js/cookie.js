const cookie = {
  init:function () {
    cookie.AcceptCookie();
    cookie.RefuseCookie();
  },
    AcceptCookie: function () {
      const addButton = document.querySelector('.cookieBanner-button--add');
      addButton.addEventListener('click', () => {
        const cookieBanner = document.querySelector('.cookieBanner');
        cookieBanner.style.display = 'none';
        cookie.setCookieAndLoad();
      })
    },
    
    setCookie: function (name,value,days=30) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    RefuseCookie: function () {
      const addButton = document.querySelector('.cookieBanner-button--close');
      addButton.addEventListener('click', () => {
        const cookieBanner = document.querySelector('.cookieBanner');
        cookieBanner.style.display = 'none';
        cookie.setCookie('trackMe', false, 356)
      })
    },
    setCookieAndLoad: function () {
      cookie.setCookie('trackMe', true, 356);
      cookie.loadGoogleAnalytics();
    },
    getCookie: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  },
  eraseCookie: function (name) {   
      document.cookie = name+'=; Max-Age=-99999999;';  
  },
  loadGoogleAnalytics: function () {
    var UACODE = "UA-XXXXXXX-X";
    var GTMCODE = "GTM-XXXXXXX";
	// run GA tracking scripts
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', UACODE, 'auto');
        ga('send', 'pageview');
        
        document.write('<script async src="https://www.googletagmanager.com/gtag/js?id='+UACODE+'"><\/script>');
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', UACODE);
        
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTMCODE);
        
        document.write('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RKTZZ4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
  }
}

export const cookieGoogle = document.addEventListener('DOMContentLoaded', cookie.init)