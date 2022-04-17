import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { IntroSampleFormComponent } from './form/intro-sample-form/intro-sample-form.component';
import { ReactiveFormValidationComponent } from './form/reactive-form-validation/reactive-form-validation.component';
import { CustomColorDirective } from './custom-directives/custom-color.directive';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GithubApiComponent } from './components/github-api/github-api.component';
import { ImplimentModelInterfaceComponent } from './components/impliment-model-interface/impliment-model-interface.component';
import { ImplimentInterfaceComponent } from './components/impliment-interface/impliment-interface.component';
import { FormWithFormbuilderComponent } from './form/form-with-formbuilder/form-with-formbuilder.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormbuilderComponent } from './form/formbuilder/formbuilder.component';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { EventComponent } from './component/event/event.component';
import { InlineStyleTemplatesComponent } from './components/inline-style-templates/inline-style-templates.component';
import { NewComponentComponent } from './new-module/new-component/new-component.component';
import { FunctionComponent } from './components/function/function.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PropertyBindignComponent } from './components/property-bindign/property-bindign.component';
import { IfElseConditionComponent } from './components/if-else-condition/if-else-condition.component';
import { SwitchComponent } from './components/switch/switch.component';
import { LoopComponent } from './components/loop/loop.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { PipesComponent } from './components/pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    IntroSampleFormComponent,
    ReactiveFormValidationComponent,
    CustomColorDirective,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GithubApiComponent,
    ImplimentModelInterfaceComponent,
    ImplimentInterfaceComponent,
    FormWithFormbuilderComponent,
    DatatableComponent,
    FormbuilderComponent,
    InterpolationComponent,
    EventComponent,
    InlineStyleTemplatesComponent,
    NewComponentComponent,
    FunctionComponent,
    TwoWayBindingComponent,
    PropertyBindignComponent,
    IfElseConditionComponent,
    SwitchComponent,
    LoopComponent,
    ToggleComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
