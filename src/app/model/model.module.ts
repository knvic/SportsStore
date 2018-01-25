/**
 * Created by Николай on 25.01.2018.
 */
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
