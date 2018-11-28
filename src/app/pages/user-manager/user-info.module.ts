import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { UserInfoPage } from './user-info';
import { SharedModule } from '../../shared/shared.module';
import {UserManagerService} from './user-manager.service';
@NgModule({
  declarations: [
    UserInfoPage,
  ],
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  exports: [    
    UserInfoPage  
  ],
  providers: [
    UserManagerService
  ]
})
export class UserInfoPageModule { }
