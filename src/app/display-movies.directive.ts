import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayMovies]'
})
export class DisplayMoviesDirective {

  @Input() set appDisplayMovies(condition:boolean){
    if(condition){
      this.vwref.clear();
      
    } else{
      this.vwref.createEmbeddedView(this.tplRef);
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwref:ViewContainerRef) { }

}
