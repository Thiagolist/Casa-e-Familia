(function(){
  function setFilter(filter){
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
      var cat = card.getAttribute('data-category');
      var show = (filter === 'all') || (cat === filter);
      card.style.display = show ? '' : 'none';
    });

    document.querySelectorAll('.nav-item').forEach(function(el){
      el.classList.toggle('is-active', el.getAttribute('data-filter') === filter);
      el.setAttribute('aria-pressed', el.classList.contains('is-active'));
    });

    history.replaceState(null, '', '#' + filter);
  }

  function bindControls(){
    document.querySelectorAll('.nav-item').forEach(function(el){
      el.addEventListener('click', function(){
        var f = el.getAttribute('data-filter') || 'all';
        setFilter(f);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    bindControls();
    var initial = (window.location.hash || '#all').replace('#','');
    setFilter(initial);
  });
})();
