using { sap.com.sapathon as my } from '../db/schema';
service CatalogService @(path:'/browse') {

  @readonly entity CO2 as SELECT from my.CO2 {*} ;
  @readonly entity Energy as SELECT from my.Energy {*} ;
}