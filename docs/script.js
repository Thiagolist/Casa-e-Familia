function setActiveTab(targetSelector) {
  var panels = document.querySelectorAll('.tab-panel');
  var tabs = document.querySelectorAll('.tab');

  panels.forEach(function(panel) {
    panel.classList.remove('is-active');
  });

  tabs.forEach(function(tab) {
    tab.classList.remove('is-active');
    tab.setAttribute('aria-selected', 'false');
  });

  var target = document.querySelector(targetSelector);
  if (target) {
    target.classList.add('is-active');
  }

  var activeTab = Array.prototype.find.call(tabs, function(tab) {
    return tab.getAttribute('data-target') === targetSelector;
  });

  if (activeTab) {
    activeTab.classList.add('is-active');
    activeTab.setAttribute('aria-selected', 'true');
  }

  if (target && target.id) {
    history.replaceState(null, '', '#' + target.id);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-target');
      if (target) setActiveTab(target);
    });
  });

  var hash = window.location.hash || '#pai';
  setActiveTab(hash);
});
