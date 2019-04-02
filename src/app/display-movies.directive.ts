import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayMovies]'
})
export class DisplayMoviesDirective {

  @Input() set appDisplayMovies(condition:boolean){
    if(condition){
      this.vwref.createEmbeddedView(this.tplRef);
    } else{
      this.vwref.clear()
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwref:ViewContainerRef) { }

}
