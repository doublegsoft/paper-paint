/*
**                                               _       _   
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_ 
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_ 
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|      
**                
*/

namespace PP {

class A4Canvas {
  
  private paintables = [];

  private isDrawing = false;
  private lastX = 0;
  private lastY = 0;
    
  constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {
    this.setupEventListeners();
  }

  /**
   * 
   */
  public acceptPaintable(paintable: Movable): void {

  }
    
  private setupEventListeners(): void {
    this.canvas.addEventListener('mousedown', this.startDrawing);
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', this.stopDrawing);
    this.canvas.addEventListener('mouseout', this.stopDrawing);
  }
  
  private startDrawing = (e: MouseEvent): void => {
    this.isDrawing = true;
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  };
  
  private draw = (e: MouseEvent): void => {
    if (!this.isDrawing) return;
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
    this.ctx.stroke();
    
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  };
  
  private stopDrawing = (): void => {
      this.isDrawing = false;
  };
}

};