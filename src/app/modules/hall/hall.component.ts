import { Component, OnInit, Inject } from '@angular/core';
import { RibbonService } from 'src/app/shared/services/ribbon.service';
import { Ribbon } from 'src/app/shared/models/Ribbon';
import { RibbonCategory } from 'src/app/shared/models/ribbon-category';
import { RibbonCategoryService } from 'src/app/shared/services/ribbon-category.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  private ribbons: Ribbon[] = [];
  ribbonCategories: RibbonCategory[] = [];

  constructor (
    @Inject('RibbonService') private readonly ribbonService: RibbonService,
    @Inject('RibbonCategoryService') private readonly ribbonCategoryService: RibbonCategoryService,
    // @Inject('DecorationService') private readonly decorationService: DecorationService,
    // @Inject('MedalService') private readonly medalService: MedalService
  ) {}

  ngOnInit () {
    this.loadData();
  }

  async loadData () {
    this.ribbons = await this.ribbonService.all().toPromise();
    this.ribbonCategories = await this.ribbonCategoryService.all().toPromise();
  }

  getRibbonsOfCategory (categoryId: number) {
    return this.ribbons.filter(ribbon => ribbon.categoryId === parseInt(categoryId.toString(), 10));
  }
}
