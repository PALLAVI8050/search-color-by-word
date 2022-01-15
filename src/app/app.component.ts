import { Component } from '@angular/core';
import { TinyColor } from '@ctrl/tinycolor';
import { names } from '@ctrl/tinycolor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  public inputValue = '';
  public colorShades: string[] = [];
  public availableColors: string[] = [];

  public getColorHexValue(value: string) {
    const c = new TinyColor(value);
    return c.toHexString();
  }

  public onColorChange() {
    this.availableColors=[]
    if(this.inputValue){
        this.availableColors = Object.keys(names).filter((key) =>
          key.includes(this.inputValue)
        );
    this.colorShades = this.computeColors();
    }
  }

  public computeColors(): string[] {
    const tiny_color = new TinyColor(this.inputValue);
    if (!tiny_color.isValid) {
      return [];
    }
    return [
      this.getColorHexValue(tiny_color.lighten(45).toString()),
      this.getColorHexValue(tiny_color.lighten(36).toString()),
      this.getColorHexValue(tiny_color.lighten(28).toString()),
      this.getColorHexValue(tiny_color.lighten(19).toString()),
      this.getColorHexValue(tiny_color.lighten(13).toString()),
      this.getColorHexValue(tiny_color.lighten(7).toString()),
      this.getColorHexValue(tiny_color.lighten(4).toString()),
      this.getColorHexValue(tiny_color.toString()),
      this.getColorHexValue(tiny_color.darken(18).toString()),
      this.getColorHexValue(tiny_color.darken(24).toString()),
      this.getColorHexValue(tiny_color.darken(30).toString()),
      this.getColorHexValue(tiny_color.lighten(20).toString()),
      this.getColorHexValue(tiny_color.lighten(10).saturate(15).toString()),
      this.getColorHexValue(tiny_color.lighten(5).saturate(5).toString()),
    ];
  }
  
}
