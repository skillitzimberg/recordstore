import { Album } from '../album.model';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ AlbumService ]
})

export class AdminComponent implements OnInit {
  currentRoute: string = this.router.url;
  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(artist: string, description: string, price: number, title: string) {
    let newAlbum: Album = new Album(artist, description, price, title);
    this.albumService.addAlbum(newAlbum);
  }

}
