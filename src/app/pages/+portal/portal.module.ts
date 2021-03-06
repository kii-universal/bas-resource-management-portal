import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppSharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LAYOUT_CMP } from './components/index';
import { MatCustomModule } from 'kii-universal-ui';
import { NgModule } from '@angular/core';
import { PasswordChangeCmp } from './user-info.ts/password-change/password-change.component';
import { PortalCmp } from './portal.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserInfoCmp } from './user-info.ts/user-info.component';
import { LocationManagementModule } from './location-management/location-management.module';

@NgModule({
  declarations: [
    PortalCmp,
    UserInfoCmp,
    PasswordChangeCmp,
    LAYOUT_CMP,
  ],
  imports: [
    AppSharedModule,
    TranslateModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LocationManagementModule
  ],
  entryComponents: [PasswordChangeCmp],
  exports: [PortalCmp],
})
export class PortalModule {

}
