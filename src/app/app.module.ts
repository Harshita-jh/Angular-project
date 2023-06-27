import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeOneComponent } from './employee-one/employee-one.component';
import { EmployeeTwoComponent } from './employee-two/employee-two.component';
import { EmployeeThreeComponent } from './employee-three/employee-three.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StylesBindingComponent } from './styles-binding/styles-binding.component';
import { EventBindingAssignmentFourComponent } from './event-binding-assignment-four/event-binding-assignment-four.component';
import { FormsModule } from '@angular/forms';
import { PreDefinedDirectivesComponent } from './pre-defined-directives/pre-defined-directives.component';
import { EmployeeDirectivesAssignmentFiveComponent } from './employee-directives-assignment-five/employee-directives-assignment-five.component';
import { ProductsDirectivesAssignmentSixComponent } from './products-directives-assignment-six/products-directives-assignment-six.component';
import { AttDirComponent } from './att-dir/att-dir.component';
import { ColorDirective } from './directives/color.directive';
import { PreDefinedPipesComponent } from './pre-defined-pipes/pre-defined-pipes.component';
import { PipesEmployeeAssignmentSevenComponent } from './pipes-employee-assignment-seven/pipes-employee-assignment-seven.component';
import { MouseeventDirective } from './directives/mouseevent.directive';
import { MyTitleCasePipe } from './pipes/my-title-case.pipe';
import { PipesEmployeeSearchfilterAssignmentEightComponent } from './pipes-employee-searchfilter-assignment-eight/pipes-employee-searchfilter-assignment-eight.component';
import { EmployeesearchfilterPipe } from './pipes/employeesearchfilter.pipe';
import { PipesProductSearchfilterAssignmentNineComponent } from './pipes-product-searchfilter-assignment-nine/pipes-product-searchfilter-assignment-nine.component';
import { ProductsearchfilterPipe } from './pipes/productsearchfilter.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductsServiceAssignmentTenComponent } from './products-service-assignment-ten/products-service-assignment-ten.component';
import { EmployeesServiceAssignmentElevenComponent } from './employees-service-assignment-eleven/employees-service-assignment-eleven.component';
import { EmployeesServiceJsonAssignmentComponent } from './employees-service-json-assignment/employees-service-json-assignment.component';
import { EmployeesJsonAssignmentService } from './services/employees-json-assignment.service';
import { ProductsServiceJsonAssignmentComponent } from './products-service-json-assignment/products-service-json-assignment.component';
import { CalculatorServiceAssignmentComponent } from './calculator-service-assignment/calculator-service-assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeOneComponent,
    EmployeeTwoComponent,
    EmployeeThreeComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StylesBindingComponent,
    EventBindingAssignmentFourComponent,
    PreDefinedDirectivesComponent,
    EmployeeDirectivesAssignmentFiveComponent,
    ProductsDirectivesAssignmentSixComponent,
    AttDirComponent,
    ColorDirective,
    PreDefinedPipesComponent,
    PipesEmployeeAssignmentSevenComponent,
    MouseeventDirective,
    MyTitleCasePipe,
    PipesEmployeeSearchfilterAssignmentEightComponent,
    EmployeesearchfilterPipe,
    PipesProductSearchfilterAssignmentNineComponent,
    ProductsearchfilterPipe,
    ProductsComponent,
    ProductsServiceAssignmentTenComponent,
    EmployeesServiceAssignmentElevenComponent,
    EmployeesServiceJsonAssignmentComponent,
    ProductsServiceJsonAssignmentComponent,
    CalculatorServiceAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeesJsonAssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
