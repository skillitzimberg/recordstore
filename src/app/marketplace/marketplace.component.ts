import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ AlbumService ]
})

export class MarketplaceComponent implements OnInit {
  currentRoute: string = this.router.url;
  albums;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit() {
    this.albumService.getAlbums()
    .subscribe((dataFromAlbumService) => {
      this.albums=dataFromAlbumService;
    });
  }

 goToDetailPage(clickedAlbum) {
   this.router.navigate(['albums', clickedAlbum.$key])
 }

}
