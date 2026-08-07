document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggles = document.querySelectorAll('.page-top-dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
    var dropdown = toggle.closest('.page-top-dropdown');
    if (!dropdown) return;

    toggle.addEventListener('click', function(event) {
      event.preventDefault();
      var isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.page-top-dropdown.open').forEach(function(activeDropdown) {
        if (activeDropdown !== dropdown) {
          activeDropdown.classList.remove('open');
          activeDropdown.querySelector('.page-top-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
        }
      });
      dropdown.classList.toggle('open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.page-top-dropdown')) {
      document.querySelectorAll('.page-top-dropdown.open').forEach(function(openDropdown) {
        openDropdown.classList.remove('open');
        openDropdown.querySelector('.page-top-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
