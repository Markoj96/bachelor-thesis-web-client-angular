import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../vehicles.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent implements OnInit {

  private vehicles = null;

  constructor(private vehiclesServices: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  public getVehicles() {
    this.vehiclesServices.getVehicles()
      .subscribe(
        response => {
          this.vehicles = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  public getVehicleName(model) {
    if (model === 400) { return 'Landstalker'; }
    else if(model === 401) { return 'Bravura'; }
    else if(model === 402) { return 'Buffalo'; }
    else if(model === 403) { return 'Linerunner'; }
    else if(model === 404) { return 'Perenail'; }
    else if(model === 405) { return 'Sentinel'; }
    else if(model === 406) { return 'Dumper'; }
    else if(model === 407) { return 'Firetruck'; }
    else if(model === 408) { return 'Trashmaster'; }
    else if(model === 409) { return 'Stretch'; }
    else if(model === 410) { return 'Manana'; }
    else if(model === 411) { return 'Infernus'; }
    else if(model === 412) { return 'Vodooo'; }
    else if(model === 413) { return 'Pony'; }
    else if(model === 414) { return 'Mule'; }
    else if(model === 415) { return 'Cheetah'; }
    else if(model === 416) { return 'Ambulance'; }
    else if(model === 417) { return 'Leviathan'; }
    else if(model === 418) { return 'Moonbeam'; }
    else if(model === 419) { return 'Esperanto'; }
    else if(model === 420) { return 'Taxi'; }
    else if(model === 421) { return 'Washington'; }
    else if(model === 422) { return 'Bobcat'; }
    else if(model === 423) { return 'Mr Whoopee'; }
    else if(model === 424) { return 'BF Injection'; }
    else if(model === 425) { return 'Hunter'; }
    else if(model === 426) { return 'Premier'; }
    else if(model === 427) { return 'S.W.A.T Truck'; }
    else if(model === 428) { return 'Securicar'; }
    else if(model === 429) { return 'Banshee'; }
    else if(model === 430) { return 'Predator'; }
    else if(model === 431) { return 'Bus'; }
    else if(model === 432) { return 'Rhino'; }
    else if(model === 433) { return 'Barracks'; }
    else if(model === 434) { return 'Hotknife'; }
    else if(model === 435) { return 'Trailer'; }
    else if(model === 436) { return 'Previon'; }
    else if(model === 437) { return 'Coach'; }
    else if(model === 438) { return 'Cabbie'; }
    else if(model === 439) { return 'Stallion'; }
    else if(model === 440) { return 'Rumpo'; }
    else if(model === 441) { return 'RC Bandit'; }
    else if(model === 442) { return 'Romero'; }
    else if(model === 443) { return 'Packer'; }
    else if(model === 444) { return 'Monster'; }
    else if(model === 445) { return 'Admiral'; }
    else if(model === 446) { return 'Squalo'; }
    else if(model === 447) { return 'Seasparrow'; }
    else if(model === 448) { return 'Pizza Boy'; }
    else if(model === 449) { return 'Tram'; }
    else if(model === 450) { return 'Trailer 2'; }
    else if(model === 451) { return 'Turismo'; }
    else if(model === 452) { return 'Speeder'; }
    else if(model === 453) { return 'Refeer'; }
    else if(model === 454) { return 'Tropic'; }
    else if(model === 455) { return 'Flatbed'; }
    else if(model === 456) { return 'Yankee'; }
    else if(model === 457) { return 'Caddy'; }
    else if(model === 458) { return 'Solair'; }
    else if(model === 459) { return 'Top Fun'; }
    else if(model === 460) { return 'Skimmer'; }
    else if(model === 461) { return 'PCJ-600'; }
    else if(model === 462) { return 'Faggio'; }
    else if(model === 463) { return 'Freeway'; }
    else if(model === 464) { return 'RC Baron'; }
    else if(model === 465) { return 'RC Raider'; }
    else if(model === 466) { return 'Glendade'; }
    else if(model === 467) { return 'Oceanic'; }
    else if(model === 468) { return 'Sanchez'; }
    else if(model === 469) { return 'Sparrow'; }
    else if(model === 470) { return 'Patriot'; }
    else if(model === 471) { return 'Quad'; }
    else if(model === 472) { return 'Coastguard'; }
    else if(model === 473) { return 'Dinghy'; }
    else if(model === 474) { return 'Hermes'; }
    else if(model === 475) { return 'Sabre'; }
    else if(model === 476) { return 'Rustler'; }
    else if(model === 477) { return 'ZR-350'; }
    else if(model === 478) { return 'Walton'; }
    else if(model === 479) { return 'Regina'; }
    else if(model === 480) { return 'Comet'; }
    else if(model === 481) { return 'BMX'; }
    else if(model === 482) { return 'Burrito'; }
    else if(model === 483) { return 'Camper'; }
    else if(model === 484) { return 'Marquis'; }
    else if(model === 485) { return 'Baggage'; }
    else if(model === 486) { return 'Dozer'; }
    else if(model === 487) { return 'Maverick'; }
    else if(model === 488) { return 'News Maverick'; }
    else if(model === 489) { return 'Rancher'; }
    else if(model === 490) { return 'Federal Rancher'; }
    else if(model === 491) { return 'Virgo'; }
    else if(model === 492) { return 'Greenwood'; }
    else if(model === 493) { return 'Jetmax'; }
    else if(model === 494) { return 'Hotring'; }
    else if(model === 495) { return 'Sandking'; }
    else if(model === 496) { return 'Blista Compact'; }
    else if(model === 497) { return 'Police Maverick'; }
    else if(model === 498) { return 'Boxville'; }
    else if(model === 499) { return 'Benson'; }
    else if(model === 500) { return 'Mesa'; }
    else if(model === 501) { return 'RC Goblin'; }
    else if(model === 502) { return 'Hotring A'; }
    else if(model === 503) { return 'Hotring B'; }
    else if(model === 504) { return 'Blooding Banger'; }
    else if(model === 505) { return 'Rancher'; }
    else if(model === 506) { return 'Super GT'; }
    else if(model === 507) { return 'Elegant'; }
    else if(model === 508) { return 'Journey'; }
    else if(model === 509) { return 'Bike'; }
    else if(model === 510) { return 'Mountain Bike'; }
    else if(model === 511) { return 'Beagle'; }
    else if(model === 512) { return 'Cropduster'; }
    else if(model === 513) { return 'Stuntplane'; }
    else if(model === 514) { return 'Petrol'; }
    else if(model === 515) { return 'Roadtrain'; }
    else if(model === 516) { return 'Nebula'; }
    else if(model === 517) { return 'Majestic'; }
    else if(model === 518) { return 'Buccaneer'; }
    else if(model === 519) { return 'Shamal'; }
    else if(model === 520) { return 'Hydra'; }
    else if(model === 521) { return 'FCR-300'; }
    else if(model === 522) { return 'NRG-500'; }
    else if(model === 523) { return 'HPV-1000'; }
    else if(model === 524) { return 'Cement Truck'; }
    else if(model === 525) { return 'Towtruck'; }
    else if(model === 526) { return 'Fortune'; }
    else if(model === 527) { return 'Cadrona'; }
    else if(model === 528) { return 'Federal Truck'; }
    else if(model === 529) { return 'Williard'; }
    else if(model === 530) { return 'Fork Lift'; }
    else if(model === 531) { return 'Tractor'; }
    else if(model === 532) { return 'Combine'; }
    else if(model === 533) { return 'Feltzer'; }
    else if(model === 534) { return 'Remington'; }
    else if(model === 535) { return 'Slamvan'; }
    else if(model === 536) { return 'Blade'; }
    else if(model === 537) { return 'Freight'; }
    else if(model === 538) { return 'Streak'; }
    else if(model === 539) { return 'Vortex'; }
    else if(model === 540) { return 'Vincent'; }
    else if(model === 541) { return 'Bullet'; }
    else if(model === 542) { return 'Clover'; }
    else if(model === 543) { return 'Sadler'; }
    else if(model === 544) { return 'Stairs Firetruck'; }
    else if(model === 545) { return 'Hustler'; }
    else if(model === 546) { return 'Intruder'; }
    else if(model === 547) { return 'Primo'; }
    else if(model === 548) { return 'Cargobob'; }
    else if(model === 549) { return 'Tampa'; }
    else if(model === 550) { return 'Sunrise'; }
    else if(model === 551) { return 'Merit'; }
    else if(model === 552) { return 'Utility Van'; }
    else if(model === 553) { return 'Nevada'; }
    else if(model === 554) { return 'Yosemite'; }
    else if(model === 555) { return 'Windsor'; }
    else if(model === 556) { return 'Monster A'; }
    else if(model === 557) { return 'Monster B'; }
    else if(model === 558) { return 'Uranus'; }
    else if(model === 559) { return 'Jester'; }
    else if(model === 560) { return 'Sultan'; }
    else if(model === 561) { return 'Stratum'; }
    else if(model === 562) { return 'Elegy'; }
    else if(model === 563) { return 'Raindance'; }
    else if(model === 564) { return 'RC Tiger'; }
    else if(model === 565) { return 'Flash'; }
    else if(model === 566) { return 'Tahoma'; }
    else if(model === 567) { return 'Savanna'; }
    else if(model === 568) { return 'Bandito'; }
    else if(model === 569) { return 'Freight Flat'; }
    else if(model === 570) { return 'Streak'; }
    else if(model === 571) { return 'Kart'; }
    else if(model === 572) { return 'Mower'; }
    else if(model === 573) { return 'Duneride'; }
    else if(model === 574) { return 'Sweeper'; }
    else if(model === 575) { return 'Broadway'; }
    else if(model === 576) { return 'Tornado'; }
    else if(model === 577) { return 'AT-400'; }
    else if(model === 578) { return 'DFT-30'; }
    else if(model === 579) { return 'Huntley'; }
    else if(model === 580) { return 'Stafford'; }
    else if(model === 581) { return 'BF-400'; }
    else if(model === 582) { return 'Raindance'; }
    else if(model === 583) { return 'News Van'; }
    else if(model === 584) { return 'Tug'; }
    else if(model === 585) { return 'Petrol Tanker'; }
    else if(model === 586) { return 'Wayfarer'; }
    else if(model === 587) { return 'Euros'; }
    else if(model === 588) { return 'Hotdog'; }
    else if(model === 589) { return 'Club'; }
    else if(model === 590) { return 'Freight Box'; }
    else if(model === 591) { return 'Trailer 3'; }
    else if(model === 592) { return 'Andromada'; }
    else if(model === 593) { return 'Dodo'; }
    else if(model === 594) { return 'RC Cam'; }
    else if(model === 595) { return 'Launch'; }
    else if(model === 596) { return 'LSPD Patrol Car'; }
    else if(model === 597) { return 'FBI Patrol Car'; }
    else if(model === 598) { return 'NG Patrol Car'; }
    else if(model === 599) { return 'LSPD Patrol Ranger'; }
    else if(model === 600) { return 'Picador'; }
    else if(model === 601) { return 'S.W.A.T Tank'; }
    else if(model === 602) { return 'Alpha'; }
    else if(model === 603) { return 'Phoenix'; }
    else if(model === 609) { return 'Boxville'; }
  }
}
