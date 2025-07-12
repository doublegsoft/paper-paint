
  
export class Paper {

  drawDotBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {

    const gridConfig = {
      dotColor: '#dddddd',
      accentColor: '#aaaaaa',
      dotRadius: 1.5,
      accentRadius: 2,
      spacing: 20,
      accentEvery: 5,  
      offset: { x: 20, y: 20 } 
    };

    const dotsX = Math.ceil(width / gridConfig.spacing);
    const dotsY = Math.ceil(height / gridConfig.spacing);
    
    for (let x = 0; x <= dotsX; x++) {
      for (let y = 0; y <= dotsY; y++) {
        const posX = x * gridConfig.spacing + gridConfig.offset.x;
        const posY = y * gridConfig.spacing + gridConfig.offset.y;
        
        // Determine if this is an accent dot
        const isAccent = (x % gridConfig.accentEvery === 0 && 
                         y % gridConfig.accentEvery === 0);
        
        ctx.beginPath();
        ctx.arc(
          posX, 
          posY, 
          isAccent ? gridConfig.accentRadius : gridConfig.dotRadius, 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = isAccent ? gridConfig.accentColor : gridConfig.dotColor;
        ctx.fill();
      }
    }
  }
} 