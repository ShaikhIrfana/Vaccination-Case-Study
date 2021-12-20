import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AdminsService } from './service/admins.service';
import { VaccinesService } from './service/vaccines.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/authentication/page-not-found/page-not-found.component';
import { AdminLoginComponent } from './components/authentication/admin-login/admin-login.component';
import { VaccineRegistrationModule } from './modules/vaccine-registration.module';
import { AdminModule } from './modules/admin.module';
import { VaccineModule } from './modules/vaccine.module';
import { VaccineRegistrationService } from './service/vaccine-registration.service';
import { IdcardModule } from './modules/idcard.module';
import { MemberModule } from './modules/member.module';
import { AppointmentService } from './service/appointment.service';
import { IdcardService } from './service/idcard.service';
import { MemberService } from './service/member.service';
import { VaccinationCenterService } from './service/vaccinationcenter.service';
import { VaccinationCenterModule } from './modules/vaccination-center.module';
import { AppointmentModule } from './modules/appointment.module';
import { FamilyPicComponent } from './components/family-pic/family-pic.component';
import { AuthService } from './service/auth.service';
import { VaccineInventoryService } from './service/vaccine-inventory.service';
import { VaccineInventoryModule } from './modules/vaccine-inventory.module';
import { GetDetailsComponent } from './components/getByIdComponents/get-details/get-details.component';
import { GetmemberComponent } from './components/getByIdComponents/getmember/getmember.component';
import { PageComponent } from './components/page/page.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { HomeVaccineInventoryComponent } from './components/home-vaccine-inventory/home-vaccine-inventory.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { HomeVcComponent } from './components/home-vc/home-vc.component';
import { HomeVaccineComponent } from './components/home-vaccine/home-vaccine.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    HomeVaccineComponent,
    FamilyPicComponent,
    PageComponent,
    AppHomeComponent,
    HomeVcComponent,
    HomeVaccineInventoryComponent,
    HomeFormComponent,
    HomeVaccineComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    VaccineModule,
    VaccineRegistrationModule,
    IdcardModule,
    MemberModule,
    ApplicationModule,
    AppointmentModule,
    VaccinationCenterModule,
    VaccineInventoryModule,
    ReactiveFormsModule
  ],
  providers: [AdminsService,VaccinesService,VaccineRegistrationService,
    AppointmentService,IdcardService,MemberService,VaccinationCenterService,AuthService
  ,VaccineInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
