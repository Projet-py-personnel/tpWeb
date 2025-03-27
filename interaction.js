
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
        this.startX = 0; // Position initiale X
        this.startY = 0; // Position initiale Y
        this.endX = 0;   // Position finale X
        this.endY = 0;   // Position finale Y
        this.isClicked = false; // Indique si un Drag est en cours

        this.canvas = canvas; // Stocker le canvas
	// Developper les 3 fonctions gérant les événements

        this.press = this.press.bind(this);
        this.move = this.move.bind(this);
        this.release = this.release.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	    canvas.addEventListener('mousedown', this.press);
        canvas.addEventListener('mousemove', this.move);
        canvas.addEventListener('mouseup', this.release);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

DnD.prototype.press = function(evt) {
    var pos = getMousePosition(this.canvas, evt);
    this.startX = pos.x;
    this.startY = pos.y;
    this.isDragging = true;
    console.log(`Début du Drag: (${this.startX}, ${this.startY})`);
};

DnD.prototype.move = function(evt) {
    if (this.isClicked) {
        var pos = getMousePosition(this.canvas, evt);
        this.endX = pos.x;
        this.endY = pos.y;
        console.log(`En cours: (${this.endX}, ${this.endY})`);
    }
};

DnD.prototype.release = function(evt) {
    if (this.isClicked) {
        var pos = getMousePosition(this.canvas, evt);
        this.endX = pos.x;
        this.endY = pos.y;
        this.isClicked = false;
        console.log(`Fin du Drag: (${this.endX}, ${this.endY})`);
    }
};


