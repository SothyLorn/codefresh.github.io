(self.webpackChunkcodefresh=self.webpackChunkcodefresh||[]).push([[306],{58:function(s,e,i){var t=i(9755);function a(s,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}new(function(){function s(e){!function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this.target=e,this.searchBox=t("".concat(this.target)),this.resultsWrapper=t("".concat(this.target," .search__results")),this.resultsDiv=t("".concat(this.target," .search-results-inner")),this.searchIcon=t("".concat(this.target," .search__icon--search")),this.searchField=t("".concat(this.target," .search__input")),this.clearIcon=t("".concat(this.target," .search__icon--clear")),this.window=t(window),this.isSpinnerVisible=!1,this.isClearVisible=!1,this.isSearchOn=!1,this.maxPosts=30,this.IconSearch='<i class="fas fa-search"></i>',this.IconSpiner='<i class="fas fa-spinner-third fa-spin"></i>',this.previousValue,this.typingTimer,this.events()}var e,i,n;return e=s,(i=[{key:"events",value:function(){this.searchField.on("keyup",this.typingLogic.bind(this)),this.searchField.on("keydown",this.navStart.bind(this)),this.window.on("keydown",this.navList.bind(this)),this.window.on("keyup",this.closeSearchEsc.bind(this)),this.clearIcon.on("click",this.clear.bind(this)),this.window.on("click",this.closeResults.bind(this))}},{key:"closeSearchEsc",value:function(s){27==s.keyCode&&this.isSearchOn&&this.clear()}},{key:"navList",value:function(s){if(-1!=[38,40].indexOf(s.keyCode))switch(s.keyCode){case 40:s.preventDefault(),s.stopPropagation(),t(".search__minilist li:last a").is(":focus")?this.searchField.focus():t(":focus").parent().next().find("a").focus();break;case 38:s.preventDefault(),s.stopPropagation(),t(".search__minilist li:first a").is(":focus")?this.searchField.focus():t(":focus").parent().prev().find("a").focus()}}},{key:"navStart",value:function(s){var e=t(".search__minilist");if(-1!=[38,40].indexOf(s.keyCode)&&this.isSearchOn&&this.searchField.is(":focus"))switch(s.keyCode){case 40:s.preventDefault(),s.stopPropagation(),e.children().first().find("a").focus();break;case 38:s.preventDefault(),s.stopPropagation(),e.children().last().find("a").focus()}}},{key:"typingLogic",value:function(){this.searchField.val()!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisible||(this.searchIcon.html(this.IconSpiner),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),200)):(this.searchIcon.html(this.IconSearch),this.isSpinnerVisible=!1,this.resultsWrapper.removeClass("block")),this.isClearVisible||(this.clearIcon.addClass("block"),this.isClearVisible=!0),this.isClearVisible&&""===this.searchField.val()&&(this.clearIcon.removeClass("block"),this.isClearVisible=!1)),this.previousValue=this.searchField.val()}},{key:"getResults",value:function(){var s=this,e=this.searchField.val(),i=new XMLHttpRequest;i.open("../events/post-kubecon-2018-debrief-roundtable-la/index.html",ajax_object.ajax_url),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"),i.onreadystatechange=function(){4===i.readyState&&200===i.status&&(s.resultsDiv.html(i.responseText),s.searchIcon.html(s.IconSearch),s.isSpinnerVisible=!1,s.isSearchOn=!0,s.resultsWrapper.addClass("block"))},i.send("action=cf_search_events&query="+e)}},{key:"closeResults",value:function(s){(!this.isSearchOn||s.target.classList.contains("search__icon--clear")||s.target.classList.contains("search__input")||s.target.classList.contains("btn-search"))&&"a"!==!s.target.tagName.toLowerCase()||t(".search__results").removeClass("block")}},{key:"clear",value:function(){t(".search__results").removeClass("block"),this.isClearVisible=!1,this.searchField.val(""),this.searchField.focus(),this.clearIcon.removeClass("block")}},{key:"failedToFetchPosts",value:function(){this.resultsWrapper.addClass("block"),this.resultsDiv.html('<span class="search__no-results">Something went wrong. Please try again :(</span>'),this.searchIcon.html(this.IconSearch),this.isSpinnerVisible=!1}}])&&a(e.prototype,i),n&&a(e,n),s}())("#search")}},function(s){"use strict";s.O(0,[898],(function(){return e=58,s(s.s=e);var e}));s.O()}]);
//# sourceMappingURL=search-events.js.map