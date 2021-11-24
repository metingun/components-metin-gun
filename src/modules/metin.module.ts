import {NgModule} from '@angular/core';
import {ContentFrameComponent} from "../app/card-team-announce/content-frame/content-frame.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ComboboxComponent} from "../app/selections/combobox/combobox.component";
import {NavbarLeftComponent} from "../app/navigation-bar/navbar-left/navbar-left.component";
import {OptionsComponent} from "../app/selections/options/options.component";
import {IconsComponent} from "../app/icons/icons.component";
import {ButtonsComponent} from "../app/buttons/buttons/buttons.component";
import {ListComponent} from "../app/card-team-announce/list/list.component";
import {StopPropagationDirective} from "../app/stopPropagationDirective";
import {ButtonMediumComponent} from "../app/buttons/button-medium/button-medium.component";
import {ContentComponent} from "../app/card-team-announce/content/content.component";
import {SelectionsComponent} from "../app/selections/selections/selections.component";
import {DatepickerComponent} from "../app/datepicker/datepicker/datepicker.component";
import {ButtonLargeComponent} from "../app/buttons/button-large/button-large.component";
import {AccountSelectionComponent} from "../app/selections/account-selection/account-selection.component";
import {InputsComponent} from "../app/inputs/inputs.component";
import {UploadFileComponent} from "../app/upload-file/upload-file.component";
import {ExampleComponent} from "../app/example/example.component";
import {TimepickerComponent} from "../app/datepicker/timepicker/timepicker.component";
import {TextMask} from "../app/helpers/text-mask";
import {LanguageSelectionComponent} from "../app/selections/language-selection/language-selection.component";
import {SearchInputComponent} from "../app/inputs/search-input/search-input.component";
import {NavbarTopComponent} from "../app/navigation-bar/navbar-top/navbar-top.component";
import {RouterModule} from "@angular/router";
import {TimePlanComponent} from "../app/time-plan-table/time-plan.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragDropDirective} from "../app/file-drag.directive";
import {ButtonFixedComponent} from "../app/buttons/button-fixed/button-fixed.component";
import {AppModule} from "../app/app.module";
import {MiniButtonsComponent} from "../app/buttons/mini-buttons/mini-buttons.component";

export function arr() {
  return [
    TextMask,
    StopPropagationDirective,
    DragDropDirective,


    ButtonFixedComponent,
    ExampleComponent,
    NavbarLeftComponent,
    ButtonMediumComponent,
    ButtonLargeComponent,
    IconsComponent,
    UploadFileComponent,
    DatepickerComponent,
    ButtonsComponent,
    ComboboxComponent,
    OptionsComponent,
    SelectionsComponent,
    NavbarTopComponent,
    AccountSelectionComponent,
    TimepickerComponent,
    LanguageSelectionComponent,
    SearchInputComponent,
    TimePlanComponent,
    InputsComponent,
    ContentComponent,
    ContentFrameComponent,
    ListComponent,
    MiniButtonsComponent
  ]
}

@NgModule({
  declarations: [
    arr()
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  exports: [
    arr()
  ],
  providers: []
})
export class MetinModule {
}
