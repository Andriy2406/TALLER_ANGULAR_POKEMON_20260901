import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component'; 
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component'; 
import { MewtwoComponent } from './components/mewtwo/mewtwo.component';
import { LucarioComponent } from './components/lucario/lucario.component';
import { ZeraoraComponent } from './components/zeraora/zeraora.component';
import { DarkraiComponent } from './components/darkrai/darkrai.component';
import { CeruledgeComponent } from './components/ceruledge/ceruledge.component';
import { ArceusComponent } from './components/arceus/arceus.component';

export const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full'},
    { path: 'registro', component: RegistroUsuarioComponent},
    { path: 'buscador', component: BuscadorPokemonComponent},
    { path: 'pokemon/mewtwo', component: MewtwoComponent },
    { path: 'pokemon/lucario', component: LucarioComponent },
    { path: 'pokemon/zeraora', component: ZeraoraComponent },
    { path: 'pokemon/darkrai', component: DarkraiComponent },
    { path: 'pokemon/ceruledge', component: CeruledgeComponent },
    { path: 'pokemon/arceus', component: ArceusComponent },
    { path: '**', redirectTo: 'registro'}
];