// Wrap timestamps in tag
const outline2s = document.getElementsByClassName('outline-text-2');
for (let i=0; i<outline2s.length; i++) {
    outline2s[i].innerHTML = outline2s[i].innerHTML
        .replace(/([0-9][0-9]:[0-9][0-9])/g, "<span class='timestamp'>$1</span>");
}
