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
      e.parentNode.insertBefore(frame, e);
      e.className = "l";
      e.style.display = "none";
    } catch {
      console.log("could not embed " + e.href)
    }
  }
})