import { Component, Input, OnInit, forwardRef } from "@angular/core";
import { RadioOption } from "./radio-option.model";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  RadioControlValueAccessor,
} from "@angular/forms";
@Component({
  selector: "mt-radio",
  templateUrl: "./radio.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];
  value: any;
  onChange: any;
  constructor() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {}

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }
}
