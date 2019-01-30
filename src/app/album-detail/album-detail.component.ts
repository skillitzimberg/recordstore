import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FirebaseObjectObservable } from 'angularfire2/database';

import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [ AlbumService ]
})

export class AlbumDetailComponent implements OnInit {

  albumId: string = null;
  albumToDisplay;

  constructor(
    private albumService: AlbumService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    })

    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
