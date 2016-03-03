(function() {


// View More functionality
var articleList = document.querySelectorAll('.article__list');
var sidebar = document.querySelector('.sidebar');
var view = document.querySelectorAll('.view');

if (sidebar) {
  for (var i = 0; i < view.length; i++) {

    var viewButton = view[i]
    var clicked = false;

    viewButton.addEventListener('click', function(e) {
      e.preventDefault();
      var hiddenItems = this.parentNode.parentNode.querySelectorAll('.non-featured');

      clicked = !clicked;

      if (clicked === true) {
        this.innerHTML = 'View Less';
        this.style.borderLeft = '0';
      } else {
        this.innerHTML = 'View More';
        this.style.borderLeft = '1px solid #2C3F4A';
      }

      // View more animation
      this.classList.toggle('slide');

      // Hide/Show all hiddenItems
      for (var j = 0; j < hiddenItems.length; j++) {
        hiddenItems[j].classList.toggle('hidden');
      }

    }, false);
  }
}

// Hide Nav Sections
var expander = document.querySelectorAll('.expand');

for (var c = 0; c < expander.length; c++){

  expander[c].addEventListener('click', function(e) {
    this.classList.toggle('rotate');
    e.preventDefault();
    var listSelector = this.parentNode.parentNode;
    var expandLists = listSelector.querySelectorAll('.article__list');

    for (var d = 0; d < expandLists.length; d++) {

      expandLists[d].classList.toggle('slide-up-hidden');

    }
  })
}



// Arrows on Nav Titles
var arrow = document.querySelectorAll('.expand');

for (var a = 0; a < arrow.length; a++) {
  var arrowClick = arrow[a];

  arrowClick.addEventListener('click', function(e) {
    e.preventDefault();
  })
}

// Search Box / List
var body = document.querySelector('body');
var label = document.querySelector('.search--label');
var resultsContainer = document.getElementById('results-container');
var searchBox = document.querySelector('#search-input');
var results = document.querySelector('.full-view__search');
var x = document.querySelector('.x');
var nav = document.querySelector('#nav-toggle');
var searchIcon = document.querySelector('.search-icon');

var myEvent = new CustomEvent("tagClick", {
	detail: {
		username: "davidwalsh"
	}
});

// Store current search type
var searchClass = searchBox.classList[0];

function keydownSearch() {
    if (searchClass[0] === 'search__minview') {
      searchBox.classList.remove('search__minview');
    } else {
      searchBox.classList.remove('search__minview--page');
    }
    searchBox.classList.add('search__fullview');

    label.classList.add('show');
    label.classList.remove('hide');
    results.classList.add('show');
    results.classList.remove('hide');
    x.classList.add('show');
    x.classList.remove('hide');
    body.classList.add('no-scroll');
    if (nav) {
      nav.classList.add('hide');
    }

    setTimeout(function() {
        recreateList();
    }, 100);
}

searchIcon.addEventListener('click', keydownSearch);

searchBox.addEventListener('focus', keydownSearch);

searchBox.addEventListener('keydown', keydownSearch);

searchBox.addEventListener('blur', function(e) {
  if (e) {
    return true;
  } else {

    if (searchClass === 'search__minview') {
      searchBox.classList.add('search__minview');
    } else {
      searchBox.classList.add('search__minview--page');
    }

    results.classList.add('hide');
    results.classList.remove('show');
    label.classList.add('hide');
    label.classList.remove('show');
    x.classList.add('hide');
    x.classList.remove('show');
    searchBox.classList.remove('search__fullview');
    body.classList.toggle('no-scroll');
    nav.classList.remove('hide');
  }
})

x.addEventListener('click', function(e) {
  e.preventDefault();

  if (searchClass === 'search__minview') {
    searchBox.classList.add('search__minview');
  } else {
    searchBox.classList.add('search__minview--page');
  }

  results.classList.add('hide');
  results.classList.remove('show');
  label.classList.add('hide');
  label.classList.remove('show');
  x.classList.add('hide');
  x.classList.remove('show');
  searchBox.classList.toggle('search__fullview');
  body.classList.toggle('no-scroll');
  nav.classList.remove('hide');
})

searchBox.addEventListener('input', keydownSearch);

function recreateList() {
  var destination = document.querySelector('.results--container');
  var searchItem = document.querySelectorAll('.search-item');
  var newSearchItem = '';

  for (var i = 0; i < searchItem.length; i++) {
    newSearchItem += '<li class="search--item">';
    var itemLink = searchItem[i].querySelector('.item-title');
    var title = itemLink.innerHTML;
    var link = itemLink.href;
    var newLink = '<a href="' + link + '" class="item--title">' + title;

    newSearchItem += newLink;

    var tagList = searchItem[i].querySelector('.tag--list');

    var content = tagList.innerHTML;
    var contentArray = content.split(',');
    var contentToAdd = '<ul class="tag--list">';
    if (contentArray[0] !== '{tags}') {
      for (var j = 0; j < contentArray.length; j++) {
        contentToAdd += '<li class="tag">' + contentArray[j] + '</li>';
      }
    }

    newSearchItem += contentToAdd + '</ul></a></li>';

   }
  destination.innerHTML = newSearchItem;
}

// TAG test
var tag = document.querySelectorAll('.tag p');

for (var t = 0; t < tag.length; t++) {
  tag[t].addEventListener('click', function() {
    textToSearch = this.innerHTML;
    searchBox.value = textToSearch;
    searchBox.focus();
  })
};

// // Card flip
// var cards = document.querySelectorAll('.flip-container');
//
// for (var c = 0; c < cards.length; c++) {
//   var card = cards[c];
//   card.addEventListener('click', function(e) {
//     e.preventDefault();
//     card.classList.toggle('flip');
//   })
// }


// NAV TOGGLE

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

if (sidebar) {
  addEvent(window, "resize", function(event) {
    if (window.innerWidth < 768) {
      sidebar.classList.add('sidebar--toggled');

    } else {
      sidebar.classList.remove('sidebar--toggled');
      sidebar.classList.remove('sidebar--mobile');
    }

    if (sidebar.classList.contains('sidebar--toggled')) {
      body.classList.remove('no-scroll');
      nav.classList.remove('active');
    }

    if (sidebar.classList.contains('sidebar--mobile')) {
      body.classList.remove('no-scroll');
    }

  });

  if (window.innerWidth < 768) {
    sidebar.classList.add('sidebar--toggled');
  } else {
    sidebar.classList.add('sidebar');
    sidebar.classList.remove('sidebar--toggled');
  }
}

if (sidebar) {
  if (nav.classList.contains('sidebar--toggled')) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}


if (nav) {
  nav.addEventListener('click', function() {
    this.classList.toggle('active');


    if (window.innerWidth < 768) {
      if ( sidebar.classList.contains('sidebar--toggled') ) {
        sidebar.classList.remove('sidebar--toggled');
        sidebar.classList.add('sidebar--mobile');
        body.classList.add('no-scroll');
      } else {
        sidebar.classList.add('sidebar--toggled');
        body.classList.remove('no-scroll');
      }
    } else {
      if ( sidebar.classList.contains('sidebar--toggled') ) {
        sidebar.classList.remove('sidebar--toggled');
      } else {
        sidebar.classList.add('sidebar--toggled');
      }
    }
  })
}


})()
