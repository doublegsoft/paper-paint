/*
**                                               _       _
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|
**
*/
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MM_TO_PX_SCALE = 3.779528; // 1mm = 3.779528px (approximate, 72dpi)
const DEFAULT_BACKGROUND_COLOR = '#FFFFFF'; // White

function mmToPx(mm: number): number {
  return mm * MM_TO_PX_SCALE;
}

export namespace PP {

  export class A4Paper {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private widthPx: number;
    private heightPx: number;
    private backgroundColor: string;

    constructor() {
      const widthMm =  A4_WIDTH_MM;
      const heightMm =  A4_HEIGHT_MM;
      this.backgroundColor = DEFAULT_BACKGROUND_COLOR;

      this.widthPx = mmToPx(widthMm);
      this.heightPx = mmToPx(heightMm);

      this.canvas = document.createElement('canvas');
      this.canvas.width = 8.27 * 72 * 2;
      this.canvas.height = 11.69 * 72 * 2;
      this.canvas.style.width = (8.27 * 72 * 2) + 'px'; // set style so it scales to the mm dimension
      this.canvas.style.height = (11.69 * 72 * 2) + 'px';
      this.ctx = this.canvas.getContext('2d')!;

      this.clear();
    }

    // Public Getters
    getCanvas(): HTMLCanvasElement {
      return this.canvas;
    }

    getContext(s: string): CanvasRenderingContext2D {
      return this.ctx;
    }

    getWidthMm(): number {
      return this.widthPx / MM_TO_PX_SCALE;
    }

    getHeightMm(): number {
      return this.heightPx / MM_TO_PX_SCALE;
    }

    getWidthPx(): number {
      return this.widthPx;
    }

    getHeightPx(): number {
      return this.heightPx;
    }

    // Drawing Methods

    clear(): void {
      this.ctx.fillStyle = this.backgroundColor;
      this.ctx.fillRect(0, 0, this.widthPx, this.heightPx);
    }

    // Drawing primitives (example: could be extended)
    drawLine(x1Mm: number, y1Mm: number, x2Mm: number, y2Mm: number, color: string = 'black', lineWidth: number = 1): void {
      const x1Px = mmToPx(x1Mm);
      const y1Px = mmToPx(y1Mm);
      const x2Px = mmToPx(x2Mm);
      const y2Px = mmToPx(y2Mm);

      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = lineWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(x1Px, y1Px);
      this.ctx.lineTo(x2Px, y2Px);
      this.ctx.stroke();
    }


    drawCircle(xMm: number, yMm: number, radiusMm: number, color: string = 'black', fill: boolean = false): void {
      const xPx = mmToPx(xMm);
      const yPx = mmToPx(yMm);
      const radiusPx = mmToPx(radiusMm);

      this.ctx.strokeStyle = color;
      this.ctx.beginPath();
      this.ctx.arc(xPx, yPx, radiusPx, 0, 2 * Math.PI); // Full circle
      this.ctx.stroke();
      if (fill) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
      }
    }

    drawText(text: string, xMm: number, yMm: number, font: string = "12px sans-serif", color: string = "black"): void {
      const xPx = mmToPx(xMm);
      const yPx = mmToPx(yMm);

      this.ctx.fillStyle = color;
      this.ctx.font = font;
      this.ctx.fillText(text, xPx, yPx);
    }

    // Export to Image
    toDataURL(type: string = 'image/png'): string {
      return this.canvas.toDataURL(type);
    }
  }

} // namespace PP

// // Example Usage
// function main(): void {
//   const canvasConfig: CanvasConfig = {
//     widthMm: 148,   // A5 width for example
//     heightMm: 210,  // A5 height for example
//     backgroundColor: '#F0F0F0',
//   };
//
//   const a4Canvas = new A4PaperCanvas(canvasConfig);
//
//   // Draw something
//   a4Canvas.drawLine(10, 10, 100, 100, 'red', 2);
//   a4Canvas.drawCircle(50, 50, 20, 'blue', true);
//   a4Canvas.drawText("Hello, A5!", 20, 120, "16px serif", "green");
//
//   // Append to the document
//   document.body.appendChild(a4Canvas.getCanvas());
//   const dataURL = a4Canvas.toDataURL();
//   console.log("dataURL", dataURL);
//
//   // You can now download the dataURL.  The `download` attribute on a link
//   // tells the browser to download instead of navigate to the link.
//   const downloadLink = document.createElement("a");
//   downloadLink.href = dataURL;
//   downloadLink.download = "a5-canvas-drawing.png";
//   downloadLink.textContent = "Download Image";
//   document.body.appendChild(downloadLink);
// }

// Run the example when the DOM is ready
// document.addEventListener('DOMContentLoaded', main);