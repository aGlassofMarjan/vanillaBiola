document.getElementById('submit2').onclick = function() {
    var disabled = document.getElementById("setDate").disabled;
    
    if (disabled) {
        document.getElementById("setDate").disabled = false;
    }
    else {
        document.getElementById("setDate").disabled = true;
    }
  }