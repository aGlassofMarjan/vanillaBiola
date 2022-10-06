document.getElementById('btnmedia').onclick = function() {
    var disabled = document.getElementById("fileinput").disabled;

    if (disabled) {
      document.getElementById("fileinput").disabled = false;
    }
    else {
        document.getElementById("fileinput").disabled = true;
    }
  }


  document.getElementById('submit2').onclick = function() {
    var disabled = document.getElementById("setDate").disabled;
    var disabledd = document.getElementById("endDate").disabled;
    
    if (disabled) {
        document.getElementById("setDate").disabled = false;
    }
    else {
        document.getElementById("setDate").disabled = true;
    }

    if (disabledd) {
        document.getElementById("endDate").disabled = false;
    }
    else {
        document.getElementById("endDate").disabled = true;
    }

  }