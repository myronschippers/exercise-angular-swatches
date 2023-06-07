import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"],
})
export class ColorPickerComponent implements OnInit {
  @Input() colorOptions: string[];
  @Input() initialColor: string;
  selectedColor: string;

  ngOnInit(): void {
    this.selectedColor = "black";
  }

  onClickSwatch(color: string): void {
    this.selectedColor = color;
  }
}
