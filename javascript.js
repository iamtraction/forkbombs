setInterval(() => {
  window.open().document.write(document.documentElement.outerHTML || document.documentElement.innerHTML);
}, 10);
