import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ AlbumService ]
})

export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(artist: string, description: string, price: number, title: string) {
    let newAlbum: Album = new Album(artist, description, price, title);
    this.albumService.addAlbum(newAlbum);
  }

}
