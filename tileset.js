function createTilesetModule(idNum, image) {
  return {
    module: null,
    canvas: null,
    id: idNum,
    tileset: image,
    currentSelection: null,
    startCoordinates: [-1,-1],
    
    getCurrentSelection: function() { //returns {i,x,y,l,h}
      return {
        i: id,
        x: currentSelection.x,
        y: currentSelection.y,
        l: currentSelection.l,
        h: currentSelection.h
      };
    },
    
    startSetSelection: function(event) {
      //set startCoords to current coords (32px squares, we want 1-8th square number)
      var coords = getCursorPosition(canvas, event);
      startCoordinates[0] = coords.x/32;
      startCoordinates[1] = coords.y/32;
    },
    
    finishSetSelection: function(event) {
      //if start is -1 -1, leave current and print error
      if(startCoordinates[0] == -1 && startCoordinates[1] == -1) {
        console.log("finished Set Selection flow without starting coordinates");
        return;
      }
      //otherwise, calculate current selection and reset start coords
      var coords = getCursorPosition(canvas, event);
      coords.x = coords.x/32;
      coords.y = coords.y/32;
      currentSelection = {
        x: coords.x,
        y: coords.y,
        w: coords.x - startCoordinates[0],
        h: coords.y - startCoordinates[1],
      };
      startCoordinates = [-1, -1];
    },
    
    terminateSetSelection: function(event) {
      startCoordinates = [-1, -1];
    },
    
    render: function() {
      //create html
    }
  };
}
