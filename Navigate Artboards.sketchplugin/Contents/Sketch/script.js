var onRun = function(doc, direction) {
  var page = doc.currentPage()

  var max = page.artboards().count()
  var currentArtboard = page.artboards().indexOfObject(page.currentArtboard())

  page.deselectAllLayers()

  var newSelection = currentArtboard + direction

  // Create a new index based on the direction
  if(newSelection == max) {
    newSelection = 0
  } else if(newSelection == -1) {
    newSelection = max - 1
  }

  var artboard = page.artboards()[newSelection]

  // Select and center the new artboard
  artboard.select_byExpandingSelection(true, false)
  var view = doc.currentView()
  var viewRect = artboard.rect();
  view.centerRect(viewRect)
};

var nextArtboard = function(context) {
  var doc = context.document
  onRun(doc, 1)
};

var previousArtboard = function(context) {
  var doc = context.document
  onRun(doc, -1)
};

