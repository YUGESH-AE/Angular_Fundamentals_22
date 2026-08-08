import {Routes} from '@angular/router';
import {DataBinding1} from './data-binding-1/data-binding-1';
import {StructuralDirectives2} from './structural-directives-2/structural-directives-2';
import {AttributeDirective3} from './attribute-directive-3/attribute-directive-3';
import {Signals4} from './signals-4/signals-4';
import {Maintenance} from './maintenance/maintenance';
import {TemplateForm} from './template-form/template-form';
import {ReactiveForm} from './reactive-form/reactive-form';
import {GetApi} from './api/get-api/get-api';
import {CrudApi} from './api/crud-api/crud-api';
import {LifeCycleHooks} from './life-cycle-hooks/life-cycle-hooks';

export const routes: Routes = [
  {
    path: "binding1",
    component: DataBinding1
  },
  {
    path: "directives2",
    component: StructuralDirectives2
  }, {
    path: "attribute-directives3",
    component: AttributeDirective3
  },
  {
    path: "signals",
    component: Signals4
  },
  {
    path:"maintenance",
    redirectTo:"maintenance",
    pathMatch:"full",
  },
  {
    path:"maintenance",
    component: Maintenance
  },
  {
    path:"template-from",
    component: TemplateForm
  },
  {
    path:"reactive-form",
    component:ReactiveForm
  },
  {
    path:"api/get",
    component:GetApi
  },
  {
    path:"api/crud",
    component:CrudApi
  },
  {
    path:"life-cycle-hooks",
    component:LifeCycleHooks
  }
];
