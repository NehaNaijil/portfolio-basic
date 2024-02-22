document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact_form_handler.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        document.getElementById("response").innerHTML = xhr.responseText;
      }
    };
    xhr.send(formData);
  });
  