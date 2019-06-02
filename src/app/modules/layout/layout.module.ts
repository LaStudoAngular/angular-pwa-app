import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL DESIGN
import { SharedModule } from '../shared.module';

// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
