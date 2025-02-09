import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  /************************RETRIEVE DATA FROM API*****************/

  getWorldBankAPI(svgData: SVGPathElement): Observable<any> {
    const apiUrl: string = `https://api.worldbank.org/v2/country/${svgData.id}?format=json`;
    return this.http.get(apiUrl);
  }

  ngOnInit(): void {

    /************************PART C. IDENTIFY THE SIX PROPERTIES *****************/
    const countryName: string = '';
    const capitalCity: string = '';
    const region: string = '';
    const incomeLevel = '';
    const longitude: string = '';
    const latitude: string = '';

    if (isPlatformBrowser(this.platformId)) {
      const svgPaths = document.querySelectorAll<SVGPathElement>('path');

      Array.prototype.forEach.call(svgPaths, (svgData: SVGPathElement) => {

        /************************PART F. USING EVENT BINDING *****************/
        svgData.addEventListener('mouseover', (event: MouseEvent) => {
          const path = event.target as SVGPathElement;
          path.style.fill = '#c2b490';
        });

        svgData.addEventListener('mouseleave', (event: MouseEvent) => {
          const path = event.target as SVGPathElement;
          path.style.fill = '';
        });

      });
    }
  }
}



