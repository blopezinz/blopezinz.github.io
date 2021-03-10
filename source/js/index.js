function panel() {
    const panel = document.getElementById('panel');
    const status = panel.style.display;
    console.log(status);

    if(status === "" || status === "none"){
        panel.style.display = "block";
        for(i = 0; i <= 300 ; i++){
            setTimeout(function() {
                panel.style.width = i + "px";
                panel.style.height = i + "px";
            }, 500);
        }
    }else{
        for(i = 300; i <= 0 ; i--){
            setTimeout(function() {
                panel.style.width = i + "px";
                panel.style.height = i + "px";
            }, 1000);
        }
        panel.style.display = "none";
    }
}