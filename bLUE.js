const links = document.querySelectorAll("div.message-contents p a");
links.forEach((e) => {
  if (e.href.indexOf("twitter.com") >= 0) {
    try {
      let frame = document.createElement("iframe");
      frame.setAttribute("data-s9e-mediaembed", "twitter");
      frame.allow = "autoplay *";
      frame.setAttribute("scrolling", "no");
      frame.src = `https://s9e.github.io/iframe/2/twitter.min.html#${e.href.match(/status\/(\d+)/)[1]}${"d"}`;
      frame.style = "background:url(https://abs.twimg.com/favicons/favicon.ico) no-repeat 50% 50%;border:0;height:250px;max-width:500px;width:100%";
      frame.setAttribute("onload", "var c=new MessageChannel;c.port1.onmessage=function(e){style.height=e.data+'px'};contentWindow.postMessage('s9e:init','https://s9e.github.io',[c.port2])");
      var s = document.createElement("br");
      e.parentNode.insertBefore(frame, e.nextSibling);
      e.parentNode.insertBefore(s, e.nextSibling);
      e.className = "l";
    } catch {
      console.log("could not embed " + e.href)
    }
  } else if (e.href.indexOf("streamable.com") >= 0) {
    try {
      debugger;   
      var streamSpan = document.createElement("span");
			streamSpan.style.display = "inline"; 
      streamSpan.style.position = "absolute";
      // streamSpan.style.backgroundColor = s,

      streamSpan.style.fontWeight = "bold";
      streamSpan.style.textDecoration = "underline";
      streamSpan.style.cursor = "pointer";
      streamSpan.style.zIndex = 1;
      streamSpan.className = "hide"; 
      streamSpan.id = e; 
      
      streamSpan.innerHTML = "&nbsp[Hide]";
      var s = document.createElement("br");
			var a = document.createElement("div");
			a.className = "streamable";
			var i = document.createElement("iframe");
      i.src = "https://www.streamable.com/e/" + e.href.match(/streamable.com\/(.*).*/)[1];
      i.setAttribute("type", "text/html");
      // i.setAttribute("width", 640);
      i.setAttribute("height", 390);
      i.setAttribute("autoplay", 0);
      i.setAttribute("frameborder", 0);
      i.setAttribute("allowfullscreen", "allowfullscreen")
      var container = document.createElement('div')
      e.parentNode.insertBefore(i, e.nextSibling);
      e.parentNode.insertBefore(s, e.nextSibling);
    } catch (error) {
      console.log("could not embed " + e.href)
      console.log(error)
    }
  }
})