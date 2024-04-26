import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  plantsInformation: Map<string, number> = new Map<string, number>();

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.setplantsInformation(plants);
    });
  }

  ngOnInit() {
    this.getPlants();
  }

  setplantsInformation(plants: Plant[]) {
    plants.forEach(plant => {
      let plantType = plant.tipo.toLowerCase();
      if (!this.plantsInformation.has(plantType)) {
        this.plantsInformation.set(plantType, 0);
      }
      this.plantsInformation.set(plantType, this.plantsInformation.get(plantType)! + 1);
    });
  }
}