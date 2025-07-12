/*
**                                               _       _   
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_ 
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_ 
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|      
**                
*/
import { Movable } from './pp_movable';
import { Resizable } from './pp_resizable';

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
