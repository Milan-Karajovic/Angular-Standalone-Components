import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router) {}

  goToTechnologiesWhichIAmUsing(){
    this.router.navigate(['/about/details']);
    window.scrollTo(0, 0);
  }

}
