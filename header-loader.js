document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('header-container');
  if (!container) return;

  fetch('header.html')
    .then(function(response) {
      if (!response.ok) throw new Error('No se pudo cargar el header');
      return response.text();
    })
    .then(function(html) {
      container.innerHTML = html;
    })
    .catch(function(error) {
      console.error(error);
    });
});
