this.window.onscroll = function () {
    changeMenuBackround()
};

function changeMenuBackround() {
    var h = this.document.documentElement.clientHeight * 0.3;
    if (this.document.body.scrollTop > h || this.document.documentElement.scrollTop > h) {
        this.document.getElementById("menu").className = "menu-down";
    } else {
        this.document.getElementById("menu").className ="";
    }
}
