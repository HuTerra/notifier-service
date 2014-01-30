(function () {
    // JSON2
    if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
    // jx
    jx={getHTTPObject:function(){var A=false;if(typeof ActiveXObject!="undefined"){try{A=new ActiveXObject("Msxml2.XMLHTTP")}catch(C){try{A=new ActiveXObject("Microsoft.XMLHTTP")}catch(B){A=false}}}else{if(window.XMLHttpRequest){try{A=new XMLHttpRequest()}catch(C){A=false}}}return A},load:function(url,callback,format){var http=this.init();if(!http||!url){return }if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!format){var format="text"}format=format.toLowerCase();var now="uid="+new Date().getTime();url+=(url.indexOf("?")+1)?"&":"?";url+=now;http.open("GET",url,true);http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}if(callback){callback(result)}}else{if(error){error(http.status)}}}};http.send(null)},init:function(){return this.getHTTPObject()}}

    this.Notifier = {
        img: function() {
            var img = document.createElement('img');
            img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUFEQUU3MzNEQTAxMUUzQTI0N0I5MEM3NzNBNzFGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUFEQUU3NDNEQTAxMUUzQTI0N0I5MEM3NzNBNzFGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxQURBRTcxM0RBMDExRTNBMjQ3QjkwQzc3M0E3MUY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxQURBRTcyM0RBMDExRTNBMjQ3QjkwQzc3M0E3MUY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q+ocMgAABM9JREFUeNrMmn9kVlEYx8/uMsYSLyPGeLOU8lKWKKWUJkqJsixlaYqUYqQ/piwl6p9lkdI0RaQ0W6VEs2yaUprSL6bxMka8ilcjRs/jfa6u273nPOe+59z3PHxte+99zz2fnXPPeZ7nPFVfHq0WTKsDXQRtA2VBE6BZ0DPQAOijqLwtAPWAtoBqQC9BJ0HT/g1VTOBq0ChojeQeBD5L8JWwRupjY+jzAqgF9A7/8JiNtStg0XKgh6BBmg0uwKJlQM9BzTrAzRoP3wF6FfPwtGHD0A1c4IJmJ3C0X9CDKg0bhO7hAt8B/dHsTBPoPr3/lYb1bSsX+BvoIKio2alNoMOOwAqddxjtLmgxgV8FjTNHvdvCInY74Rox5Gl+YQbUDzoOWgtaSnudzOpBrYaB8Z+e1/wO3t/pBfbZVtq0T4OWMBuZAm1k7L27DAPjc9drQOfp/hl0POpoyQ7us+hBddA05hiO4if6GWXY3nzQXAXe5Xzwn4MjfD7CqagFXScXkmM/QH2S67Vl7Mv4vWMcGM51BG6T+M7bNDo2pri+MCHsCKgXdEYTOvJzT+EcNGh0TrVizyWEzQZWey507Mh7Ci8qp9HBZQa9tTCs0IAek01zBJ5UOA71zE7ul1ybpZW1HFiRYKQjgccUi00Po5OHFQHGOHNKq2A50EpP64ninjZaNGpirh+i6zK7ZxC2LGg/AfAetIKxeQ9QIF2kEcXMAieD4DsK04Zgg4YZjSu6wLj9PLYcysVBlwObJ09vSmdKC5rWQ5aBsxFeUaqw4WjpAIWBtqFHCDR12DDwL9D2BFFI0pFOHTYqHsY9eSUj5DPh9KcOG5cAQI9oM+gIxb+uWNmwsowHOgk3QIsI/Bl5S1H34WzolGw5zsAGtyWuZUJTcSLgQTXRe9ngKizaPM37C5IgYJI6ZhLaKKxsSic1H3raRVgbwKagrcDaAjYBPSfM57+sApcLnbW0AFoFNgE9ahraJPCCFKFzFJ42S55rFbiRYuozFqc3ZlXwRPI36APoLeknffZUlM6xa006HpzgHasAzsXca8s5Ca/w+Pw+GyMcFeJ1WxppnT7dFKXTlIxJYFk8W2loNEw/vQ73z7MA6xI0vkKDwYXNswTrEnSOpngi4CRpGRegd9MU1wIuJwd1SMSfYelCYz3YKdBO8a8agZOouKQDbCLhVlB4ZJcV7eBhXZcopaDwXsyy9otSNcIi+l1mmHdf46UEy4l62hXXcX+/EBNUzNJoDyva2OE5Alsj5CeVE4wZgNYholNRvm3wHID13UdZPVcfM1ycUoxyk+cArBDqir1JjbZkVb0ZzwFYjulU88lW+4LnCKxqW1mn0Raek8VVDN71HBnZvGKx2S/4harYh6MR7b3Bbc1zZBrjgiSrRMBwslejvTu0X3eRY7JPlCoHi/Mcemcf+O5fjLXRKHcwvbJvtG//lwD47sgChXVhXxnJAZyq7wIa1vHFPYdW42LUiERYLS1iJ0Spqva7kFcQlZ0AsJYkF6UDPN2jWvTSbgl1nVgiYJuw/uK1J0H71SK+hDIxsG1Y37BQtUXTu0KrNwmcFmzQlVwl1DVk4X3WCHDasL75NSd7QZ8ZsP0mgCsFGzSs4ltOI4755vFAgID9uyZKJRqsw7e/AgwAxal0HswtmroAAAAASUVORK5CYII=');
            return img;
        },
        getBaseUrl: function() {
            return _bconf['_baseUrl'] || '//dcnotifier.herokuapp.com';
        },
        getCssUrl: function() {
            return this.getBaseUrl() + '/notifier.css';
        },
        injectCss: function() {
            var css = document.createElement('link');
            css.setAttribute('href', this.getCssUrl());
            css.setAttribute('rel', 'stylesheet');
            css.setAttribute('type', 'text/css');
            document.getElementsByTagName('head')[0].appendChild(css);
        },
        getCampaignKey: function() {
            return _bconf['_key'];
        },
        getJsonUrl: function() {
            return this.getBaseUrl() + '/campaigns/' + this.getCampaignKey() + '.json';
        },
        getNotifications: function(callback) {
            jx.load(this.getJsonUrl(), function(data) {
                data = JSON.parse(data);
                callback(data.notifications);
            });
        },
        getNoteId: function() {
            return _bconf['_note'] || false;
        },
        getHeading: function(img, title) {
            var heading = document.createElement("h4");
            heading.innerHTML = title;
            heading.insertBefore(img, heading.firstChild);
            return heading;
        },
        getContainer: function(message) {
            var container = document.createElement("div");
            container.setAttribute('id', 'container');
            container.innerHTML = message + '<a href="#" id="bannerClose">x</a>';
            return container;
        },
        getBanner: function() {
            var banner = document.getElementById('banner') || document.createElement("div");
            banner.setAttribute('id', 'banner');
            banner.setAttribute('class', 'banner');
            return banner;
        },
        injectBanner: function(body, note) {
            var h = this.getHeading(this.img().cloneNode(true), note.title);
            var c = this.getContainer(note.message);
            var b = this.getBanner();

            c.insertBefore(h, c.firstChild);
            b.insertBefore(c, b.firstChild);
            body.insertBefore(b, body.firstChild);
        },
        setupCloseClick: function(body) {
            var self = this;
            var body = document.getElementsByTagName('body')[0];
            var close = document.getElementById('bannerClose');
            close.onclick = function(e) {
                body.removeChild(self.getBanner());
            };
        },
        notify: function() {
            var self = this;
            self.injectCss();
            self.getNotifications(function(notifications) {
                var body = document.getElementsByTagName('body')[0];
                var noteId = self.getNoteId();

                for(var i = 0; i < notifications.length; i++) {
                    var note = notifications[i];
                    if (noteId != note.id) {
                        continue;
                    } else if (!noteId && !note.active) {
                        continue;
                    }
                    self.injectBanner(body, note);
                    self.setupCloseClick(body);
                }
            });
        }
    }
    this.Notifier.notify();
}).call(this);
