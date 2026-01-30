
// Custom Select Dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
  const customSelects = document.querySelectorAll('.custom-select');

  customSelects.forEach(select => {
    const trigger = select.querySelector('.select-trigger');
    // const dropdown = select.querySelector('.select-dropdown');
    const options = select.querySelectorAll('.select-option');
    const valueDisplay = select.querySelector('.select-value');

    // Toggle dropdown
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isDisabled = select.classList.contains('disabled');
      if (isDisabled) return;

      // Close other dropdowns
      document.querySelectorAll('.custom-select').forEach(s => {
        if (s !== select) s.classList.remove('open');
      });

      select.classList.toggle('open');
    });

    // Select option
    options.forEach(option => {
      option.addEventListener('click', function (e) {
        e.stopPropagation();
        // const value = this.dataset.value;
        const text = this.textContent;

        // Update selected state
        options.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');

        // Update display
        valueDisplay.textContent = text;
        valueDisplay.classList.add('has-value');

        // Close dropdown
        select.classList.remove('open');
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.custom-select').forEach(select => {
      select.classList.remove('open');
    });
  });
});