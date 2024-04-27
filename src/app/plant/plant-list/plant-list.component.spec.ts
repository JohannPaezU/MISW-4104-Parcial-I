/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantListComponent } from './plant-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Plant } from '../plant';
import { faker } from '@faker-js/faker';


describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.word.sample(),
        faker.number.int(),
        faker.word.sample(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }

    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    expect(debug.queryAll(By.css('div table.table'))).toBeTruthy();
  });

  it('should have a thead tr', () => {
    expect(debug.queryAll(By.css('thead tr'))).toBeTruthy()
  });

  it('should have 3 tbody tr elements', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3)
  });

  it('should have 4 td in tbody tr elements', () => {
    debug.queryAll(By.css('tbody tr')).forEach((tr, i)=>{
      expect(tr.queryAll(By.css('td'))).toHaveSize(4)
    });
  });

  it('should display correct data in the table', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(component.plants.length);
    component.plants.forEach((plant, index) => {
      const rowCells = tableRows[index].queryAll(By.css('td'));
      expect(rowCells).toHaveSize(4);
      expect(rowCells[0].nativeElement.textContent.trim()).toEqual(plant.id.toString());
      expect(rowCells[1].nativeElement.textContent.trim()).toEqual(plant.nombre_comun.toString());
      expect(rowCells[2].nativeElement.textContent.trim()).toEqual(plant.tipo.toString());
      expect(rowCells[3].nativeElement.textContent.trim()).toEqual(plant.clima.toString());
    });
  });
});
