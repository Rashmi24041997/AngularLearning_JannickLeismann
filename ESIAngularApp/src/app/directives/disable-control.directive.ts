import { Directive, Input } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {

  constructor(private ngControl:NgControl) { }

  @Input() set disableControl(condition:boolean)
  {
    var ctrl = this.ngControl.control as FormControl;
    if(ctrl)
    {
      if(condition) ctrl.disable();
      else ctrl.enable();
    }
  }

}
