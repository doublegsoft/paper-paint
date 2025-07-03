/**
 * 
 */

namespace PP {

export class Image implements Movable, Resizable{

  /**
   * 
   */
  data: Int8Array;

  constructor(
    public x: number = 0,
    public y: number = 0,
    public width: number = 0,
    public height: number = 0
  ) {
    this.data = new Int8Array();
  }

};

};