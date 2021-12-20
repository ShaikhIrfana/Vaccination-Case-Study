import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IdcardComponent } from "../components/idcard/idcard.component";
import { PageComponent } from "../components/page/page.component";


@NgModule({

    declarations: [IdcardComponent],
  
    imports: [
  
      CommonModule,
      FormsModule,
      ReactiveFormsModule, 
    ],
  
    exports: [IdcardComponent]
  })

  export class IdcardModule { }