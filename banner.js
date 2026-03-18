let created = false;

function createBanner() {
  if (created) {
    return;
  }
  if (window !== top) {
    return;
  }
  let dateStr = "";
  if (self.__wbinfo && self.__wbinfo.timestamp) {
    dateStr = " ajalta " + new Date(self.__wbinfo.timestamp).toLocaleString();
  }
  const b = document.createElement("web-archive-banner");
  b.style.position = "fixed";
  b.style.left = "0px";
  b.style.top = "0px";
  b.style.width = "100%";
  b.style.height = "30px";
  b.style.textAlign = "center";
  b.style.fontFamily = "system-ui; sans-serif";
  b.style.backgroundColor = "rgb(51, 51, 255)";
  b.style.color = "white";
  b.style.zIndex = "1000000";
  b.innerText = "Katselet tämän sivun arkistoitua versiota" + dateStr;
  const html = document.querySelector("html");
  if (html) {
    html.style.marginTop = "30px";
  }
  document.body.prepend(b);
  created = true;
}
document.addEventListener("readystatechange", () => createBanner());
