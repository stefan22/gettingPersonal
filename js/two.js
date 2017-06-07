(function(andRedEyeLikeGettingPersonal, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyeLikeGettingPersonal = {
        init: function() {
            this.pgCssDesktop();
            this.removals();
           

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = " .bannerClass {padding-bottom:7em; padding-top:20px; background:#ededed;} .heroimg {border-top:4px solid #fff; border-left:4px solid #fff; border-right:0; border-bottom:0;} .forty {margin-bottom:2.75em;}  ";

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }

            addcss(mainCss);

        }, //pgCssDesktop
  
       
        removals: function() {
            console.info('%c removals \u221a', 'background:blue;color:white;');
            //remove body class
            document.body.className = "";
            //nav-to-none 1
            console.log('removed body class 1');
            //remove modal
            var moo = document.querySelector('.modal-backdrop');
            moo.parentElement.removeChild(moo);
            //main ele event to center
            var center = document.querySelector('.center');
            center.addEventListener('DOMNodeRemoved', this.towerControl, false);
            console.log('set DOMNodeRemoved event listener 2');
            //set nav to display none
            document.querySelectorAll('.navcontainer')[0].style.display = 'none';
            console.log('nav set to display none 3');
            //rm main
            var main = document.getElementById('content');
            main.parentElement.removeChild(main);
            console.log('main removed 4');
        
            if(document.getElementById('content') === null) {
              console.log(document.getElementById('content'));
              center.removeEventListener('DOMNodeRemoved',false);
              console.log('event removed on false');
            }


        },//removals


        towerControl: function() {
            console.info('%c towerControl \u221a', 'background:blue;color:white;');
            var cards = "https://www.gettingpersonal.co.uk/cards";
            var bday = "https://www.gettingpersonal.co.uk/birthday-presents/birthday-gifts.htm";
            var anni = "https://www.gettingpersonal.co.uk/anniversary-presents/anniversary-gifts.htm";
            var him = "https://www.gettingpersonal.co.uk/gifts-for-him/personalised-gifts-for-him.htm";
            var her = "https://www.gettingpersonal.co.uk/gifts-for-her/personalised-gifts-for-her.htm";
            var pres = "https://www.gettingpersonal.co.uk/personalised-presents/personalised-gifts.htm";

            switch(window.location.href) {
                case cards:
                      SL.andRedEyeLikeGettingPersonal.addonOne();
                      break;
                case bday:
                      SL.andRedEyeLikeGettingPersonal.addonTwo();
                      break;
                case anni:
                      SL.andRedEyeLikeGettingPersonal.addonThree();
                      break;
                case him:
                      SL.andRedEyeLikeGettingPersonal.addonFour();
                      break;
                case her:
                      SL.andRedEyeLikeGettingPersonal.addonFive();
                      break;
                case pres:
                      SL.andRedEyeLikeGettingPersonal.addonSix();
                      break;

            };//switch urls


        },//towerControl

        
        addonOne: function() {
            console.info('%c addonOne \u221a', 'background:blue;color:white;');
            var addons = document.createElement('div');
            addons.id = "heroBanner";
            addons.className = 'bannerClass';
            var handle = document.getElementById('pre-footer');
            addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href="https://www.gettingpersonal.co.uk/cards/all-personalised-cards.htm " title=" Let us help you pick that perfect personalised card..."> <img class="heroimg" alt=" Let us help you pick that perfect personalised card..." src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header">  Let us help you pick that perfect personalised card...</h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>Whether you want to wish them a happy birthday, celebrate their success, or just cheer them up, we know that there\'s nothing quite like receiving a card, whatever the occasion! So why not go the extra mile and surprise them with one of our Personalised Cards?&nbsp;</p><p>Wave goodbye to generic greeting cards and say hello to a whole host of customised cards that are sure to put a smile on their face! For a football fanatic\'s big day, our <a href="https://www.gettingpersonal.co.uk/cards/football-flag-personalised-card.htm" title="" target=""><b>Personalised Football Flag Card</b></a> will help them feel like they\'ve scored the winning goal! Or for a couple who are celebrating their engagement, our <a href="https://www.gettingpersonal.co.uk/cards/tree-carving-personalised-card.htm" title="" target=""><b>Personalised Tree Carving Card</b></a> is a lovely way to commemorate their love!&nbsp;</p><p>Not only that, but you can also add a personal message of your choice to be printed inside, for a card that will stand proudly on their mantle piece. With hundreds of funny, cute and traditional cards, you\'re sure to find something for your special someone!&nbsp;</p></div></div></div></div> ';
            var par = handle.parentElement;
            par.insertBefore(addons,handle);

        },//addonOne


      addonTwo: function() {
       var addons = document.createElement('div');
       addons.id = "heroBanner";
       addons.className = 'bannerClass';
       var handle = document.getElementById('pre-footer');
       addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href="https://www.gettingpersonal.co.uk/birthday-presents/all-birthday-gifts.htm " title="Getting Personal Birthday Gifts"> <img class="heroimg" alt="Getting Personal Birthday Gifts" src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header"> Birthday Gifts &amp; Birthday Present Ideas - if you need a little inspiration... </h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>If you\'re after fabulous birthday gifts for all your friends and family then you\'ve come to the right place. We\'ve got some fantastic products to choose from so whether you\'re after smaller keepsakes or want to splash out on something really special, you\'re sure to find something fantastic in our extensive birthday collection. </p><p>Need a helpful hint? Choose them something personalised for a great birthday present. Each and every one of our personalised gifts are as unique and individual as you want them to be with your choice of name or message personalised onto the item. </p><p>Maybe you\'re after something for one of the big milestone birthdays such as a <a href="https://www.gettingpersonal.co.uk/special-birthday-presents/21st-birthday-gifts.htm" title="" target=""><b>21st</b></a> or <a href="https://www.gettingpersonal.co.uk/special-birthday-presents/40th-birthday-gifts.htm" title="" target=""><b>40th</b></a>? If so then our range covers every big birthday and you\'re sure to find something fabulous no matter what their age.</p><p>So why not delve in to our wonderful birthday gift collections and find yourself amongst hundreds of brilliant ideas. You\'re just a few clicks away from wishing someone a very happy birthday!!</p></div></div></div></div> ';
       var par = handle.parentElement;
       par.insertBefore(addons, handle);

      },

      addonThree: function() {
       var addons = document.createElement('div');
       addons.id = "heroBanner";
       addons.className = 'bannerClass';
       var handle = document.getElementById('pre-footer');
       addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href="https://www.gettingpersonal.co.uk/anniversary-presents/anniversary-gifts-all.htm" title="Wedding Anniversary Gift Ideas &amp; Presents - if you need a little inspiration..."> <img class="heroimg" alt="Wedding Anniversary Gift Ideas &amp; Presents - if you need a little inspiration..." src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header">Wedding Anniversary Gift Ideas &amp; Presents - if you need a little inspiration...</h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>Whether you\'re reaching your first anniversary or your fiftieth, we know that it\'s an occasion to celebrate with loved ones near and dear to you! Our range of Personalised Wedding Anniversary Gifts are perfect for commemorating their special day in style!&nbsp;</p><p>And if you\'re searching for a gift for your husband or wife or looking to buy the happy couple something with that personal touch, we\'ve got it covered! With a whole host of gifts for every milestone anniversary, you can choose from our range of personalised presents, including our <a href="https://www.gettingpersonal.co.uk/gifts/personalised-calendar-anniversary-couple.htm" title="" target=""><b>Anniversary Wedding Calendar</b></a> and <a href="https://www.gettingpersonal.co.uk/gifts/original-london-times-newspaper-gift-box.htm" title="" target=""><b>Original Newspaper</b></a> and take them on a trip down memory lane!&nbsp;</p><p>So whether it\'s their silver, gold or diamond wedding anniversary, we\'ve got gifts for every budget that are sure to put a smile on their face!</p></div></div></div></div> ';
       var par = handle.parentElement;
       par.insertBefore(addons, handle);

      },

      addonFour: function() {
       var addons = document.createElement('div');
       addons.id = "heroBanner";
       addons.className = 'bannerClass';
       var handle = document.getElementById('pre-footer');
       addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href=" https://www.gettingpersonal.co.uk/gifts-for-him/all-gifts-for-him.htm" title="Brilliant gifts for the difficult-to-buy-for man in your life!"> <img class="heroimg" alt="Brilliant gifts for the difficult-to-buy-for man in your life!" src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header"> Make them smile with the perfect gift, personalised just for them </h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>IMen are notoriously fickle creatures, aren\'t they? And, we have to admit that, sometimes, buying the men in our lives a gift can seem more like a chore than a pleasure!</p><p>Over the years, we\'ve bought numerous ties for dad, socks for grandpa, anything football-related for boyfriends, and novelty presents for brothers. It always seems a struggle to find the perfect present for the men in your life though, doesn\'t it? (And mum always seems so much easier to buy for!)</p><p>Well, fret no more about buying presents for the difficult-to-buy-for man in your life, we\'re here to help! Our brilliant range of personalised gifts for him includes gifts by interest, so whether he likes football or golf, cars or gadgets, you can choose something related to his hobby and personalise it just for him.&nbsp;</p></div></div></div></div> ';
       var par = handle.parentElement;
       par.insertBefore(addons, handle);

      },

      addonFive: function() {
       var addons = document.createElement('div');
       addons.id = "heroBanner";
       addons.className = 'bannerClass';
       var handle = document.getElementById('pre-footer');
       addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href=" https://www.gettingpersonal.co.uk/gifts-for-her/view-all-gifts-for-her.htm" title="Brilliant gifts for the difficult-to-buy-for woman in your life!"> <img class="heroimg" alt="Brilliant gifts for the difficult-to-buy-for woman in your life!" src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header"> Brilliant gifts for the difficult-to-buy-for woman in your life! </h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>Struggling to find the perfect gift for the most important person in your life? We know how difficult it can be to find thoughtful presents for the women in your life!</p><p>Whether you\'re searching for a present for your mum or wife, we\'re here to help! Our brilliant range of personalised gifts for her includes gifts by interest, so whether she likes a tipple of wine, is baking mad, or loves jewellery, you can choose something related to her hobby and personalise it just for your special someone.&nbsp;</p></div></div></div></div> ';
       var par = handle.parentElement;
       par.insertBefore(addons, handle);
       
      },
      addonSix: function() {
       var addons = document.createElement('div');
       addons.id = "heroBanner";
       addons.className = 'bannerClass';
       var handle = document.getElementById('pre-footer');
       addons.innerHTML = '<div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 forty"> <a class="linkbanner" href="https://www.gettingpersonal.co.uk/personalised-gifts/all-personalised-gifts.htm" title="Make them smile with the perfect gift, personalised just for them"> <img class="heroimg" alt="Make them smile with the perfect gift, personalised just for them" src="//cdn.optimizely.com/img/153957092/f78b157d173749bb845935c399be190f.png" width="100%"> </a></div><div class="col-lg-12 col-md-12 col-sm-12"> <div class="col-xs-12 superview-seo"> <h2 class="superview-header"> Make them smile with the perfect gift, personalised just for them </h2> </div><div class="col-xs-12 superview-seo-text" style="padding-bottom: 16px;"> <p>We believe, at GettingPersonal.co.uk, that a thoughtful sentiment is worth its weight in gold. We also believe mementos and keepsakes don\'t need to break the bank!&nbsp;</p><p>GettingPersonal.co.uk started over 10 years ago with a <a href="https://www.gettingpersonal.co.uk/personalised-gifts/personalised-calendars.htm" title="" target="https://www.gettingpersonal.co.uk/personalised-gifts/personalised-calendars.htm"><b>Personalised Calendar</b></a>. The excitement written all over our loved ones faces when they opened their very own bespoke calendar was the icing on the cake! Today our Personalised Calendars remain a very popular gift on our website but we\'ve grown since those early days! Nearly all our gifts can be personalised so whatever you need to say, you can be sure to find a perfect present for the right occasion.</p><p>Whether your friends are <a href="https://www.gettingpersonal.co.uk/wedding-presents/wedding-gifts.htm" title="" target="https://www.gettingpersonal.co.uk/wedding-presents/wedding-gifts.htm"><b>tying the knot</b></a>, you want to show love on <a href="https://www.gettingpersonal.co.uk/fathers-day-gifts.htm" title=""><b>Father\'s Day</b></a> or they\'re celebrating their Ruby wedding anniversary, you can be safe in the knowledge that our gifts will be one they\'ll treasure. From our professionally engraved gifts to embroidered clothing, their gift will be tailor-made exclusively for them.&nbsp;</p><p>At Christmas, we have presents personalised for those don\'t-get-me-anything friends! Surprise them with a stocking filler or make their Christmas with a bespoke gift!</p><p>Strike a pose with our fabulous photo upload gifts! From bottles of bubbly to cards printed with your favourite snaps on the front, take your gift one step further and design one that will capture your special memories together.</p><p>With thousands of perfectly personalised gifts &amp; presents, you\'ll find something unique and extra special for a loved one.<p></div></div></div></div> ';
         var par = handle.parentElement;
         par.insertBefore(addons,handle);
         
      }//addonSix


            
    };//SL.andRedEyeLikeGettingPersonal

    $(function() {
        setTimeout(function() {
            SL.andRedEyeLikeGettingPersonal.init();
        }, 100);
    });


}.call(window.andRedEyeLikeGettingPersonal || {}));