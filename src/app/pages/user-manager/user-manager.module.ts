import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { UserManagerPage } from './user-manager';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserManagerPage,
  ],
  imports: [
    SharedModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  exports: [    
    UserManagerPage
  ],
  providers: [
    
  ]
})
export class UserManagerPageModule { }
