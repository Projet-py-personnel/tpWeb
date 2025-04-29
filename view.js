
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx){
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.strokeRect(this.startX, this.startY, this.width, this.height)
};

Line.prototype.paint = function(ctx){
   ctx.strokeStyle = this.color
   ctx.lineWidth = this.thickness
   ctx.beginPath();
   ctx.moveTo(this.startX , this.startY)
   ctx.lineTo(this.endX , this.endY)
   ctx.stroke();
}

//Drawing.prototype.paint = function(ctx, canvas){
  //  ctx.fillStyle = '#F0F0F0'
    //ctx.fillRect(0 , 0 , canvas.width , canvas.height)
    //this.ShapeArray.forEach(element => element.paint(ctx))
//}


Drawing.prototype.paint = function(ctx) {
    // Efface le canvas et définit la couleur de fond
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Dessine chaque forme stockée dans l'array `shapes`
    this.shapes.forEach(shape => shape.paint(ctx));
};