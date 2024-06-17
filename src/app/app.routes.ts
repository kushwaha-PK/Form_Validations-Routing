import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RatingComponent } from './rating/rating.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    // {path:'',component:HomeComponent},
    // {path:'about',component:AboutComponent,
    //     children:[
    //         {path:'rating',component:RatingComponent},
    //         {path:'feedback',component:FeedbackComponent}
    //     ]
    // },
    // {path:'contact',component:ContactComponent},
    // {path:'template',component:TemplateComponent},
    //  {path:'reactive-forms',component:ReactiveFormsComponent}
    {path:'',loadComponent:()=>import('./home/home.component').then((m)=>m.HomeComponent)},
    {path:'about',loadComponent:()=>import('./about/about.component').then((m)=>m.AboutComponent),
        children:[
            {path:'rating',loadComponent:()=>import('./rating/rating.component').then((m)=>m.RatingComponent)},
            {path:'feedback',loadComponent:()=>import('./feedback/feedback.component').then((m)=>m.FeedbackComponent)}
        ]
    },
    {path:'contact',loadComponent:()=>import('./contact/contact.component').then((m)=>m.ContactComponent)},
    {path:'template',loadComponent:()=>import('./template/template.component').then((m)=>m.TemplateComponent)},
    {path:'reactive',loadComponent:()=>import('./reactive-forms/reactive-forms.component').then((m)=>m.ReactiveFormsComponent)},
];
