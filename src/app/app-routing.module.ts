import { HomeVaccineComponent } from './components/home-vaccine/home-vaccine.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/authentication/admin-login/admin-login.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { GetAppointmentComponent } from './components/getByIdComponents/get-appointment/get-appointment.component';
import { IdcardComponent } from './components/idcard/idcard.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MemberComponent } from './components/member/member.component';
import { PageNotFoundComponent } from './components/authentication/page-not-found/page-not-found.component';
import { PageComponent } from './components/page/page.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { VaccinationCenterComponent } from './components/vaccination-center/vaccination-center.component';
import { VaccineFormComponent } from './components/vaccine-form/vaccine-form.component';
import { VaccineRegistrationFormComponent } from './components/vaccine-registration-form/vaccine-registration-form.component';
import { FamilyPicComponent } from './components/family-pic/family-pic.component';
import { AdminFromComponent } from './components/admin-from/admin-from.component';
import { VaccineInventoryFormComponent } from './components/vaccine-inventory-form/vaccine-inventory-form.component';
import { GetVaccineidComponent } from './components/getByIdComponents/get-vaccineid/get-vaccineid.component';
import { UpdateVaccineComponent } from './components/updateComponents/update-vaccine/update-vaccine.component';
import { UpdateAppointmentComponent } from './components/updateComponents/update-appointment/update-appointment.component';
import { GetDetailsComponent } from './components/getByIdComponents/get-details/get-details.component';
import { GetmemberComponent } from './components/getByIdComponents/getmember/getmember.component';
import { UpdatedetailsComponent } from './components/updateComponents/updatedetails/updatedetails.component';
import { UpdatememberComponent } from './components/updateComponents/updatemember/updatemember.component';
import { GetVaccinationcenterComponent } from './components/getByIdComponents/get-vaccinationcenter/get-vaccinationcenter.component';
import { UpdateVaccinationcenterComponent } from './components/updateComponents/update-vaccinationcenter/update-vaccinationcenter.component';
import { GetRegistrationComponent } from './components/getByIdComponents/get-registration/get-registration.component';
import { UpdateRegistrationComponent } from './components/updateComponents/update-registration/update-registration.component';
import { UpdateInventoryComponent } from './components/updateComponents/update-inventory/update-inventory.component';
import { GetInventoryComponent } from './components/getByIdComponents/get-inventory/get-inventory.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { HomeVaccineInventoryComponent } from './components/home-vaccine-inventory/home-vaccine-inventory.component';
import { HomeVcComponent } from './components/home-vc/home-vc.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'homeAdmin', component: AdminHomeComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'admin',component:AdminFromComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  {path: 'homeVaccine', component: HomeVaccineComponent},
  {path:'addVaccine',component:VaccineFormComponent},
  {path:'getVaccine',component:GetVaccineidComponent},
  {path:'updateVaccine',component:UpdateVaccineComponent},

  {path: 'homeVaccinationCenter', component: HomeVcComponent},
  {path:'addVaccinationCenter',component:VaccinationCenterComponent},
  {path:'getVaccinationCenter',component:GetVaccinationcenterComponent},
  {path:'updateVaccinationCenter',component:UpdateVaccinationcenterComponent},

  {path: 'homeVaccineRegistration', component:HomeFormComponent},
  {path:'addVaccineRegistration',component:VaccineRegistrationFormComponent},
  {path:'getVaccineRegistration',component:GetRegistrationComponent},
  {path:'updateVaccineRegistration',component:UpdateRegistrationComponent},

  
  // {path:'fetchById', component :GetAppointmentComponent},
  // {path:'updateapp',component:UpdateAppointmentComponent},
  // {path:'appointment',component:AppointmentFormComponent},
  {path: 'homeAppointment', component: AppHomeComponent},
  {path: 'addAppointment', component :AppointmentFormComponent},
  {path: 'getAppointment', component :GetAppointmentComponent},
  {path: 'updateAppointment', component: UpdateAppointmentComponent},
  
  {path:'familypic',component:FamilyPicComponent},

  {path: 'homeVaccineInventory', component: HomeVaccineInventoryComponent},
  {path:'addVaccineInventory',component:VaccineInventoryFormComponent},
  {path:'getVaccineInventory',component:GetInventoryComponent},
  {path:'updateVaccineInventory',component:UpdateInventoryComponent},

  {path:'homeAddIdCard', component: PageComponent},

  {path:'addIdCard', component:IdcardComponent},
  {path:'getIdCard', component:GetDetailsComponent },
  {path:'updateIdCard', component:UpdatedetailsComponent},

  {path:'addStatus', component: MemberComponent},
  {path:'getMemberDetails', component:GetmemberComponent},
  {path:'updateMemberDetails', component:UpdatememberComponent},
  
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
