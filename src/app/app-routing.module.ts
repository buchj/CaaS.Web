import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './shop/search/search.component';


const routes: Routes = [{
  path: '',
  redirectTo:'browse',
  pathMatch:'full'
},
{
  path:'search',
  component:SearchComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
