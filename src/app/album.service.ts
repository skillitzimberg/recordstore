import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Album } from './album.model';
import { ALBUMS } from './albumFakeDB';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string) {
    return this.database.object('albums/' + albumId);
  }

  updateAlbum(localUpdatedAlbum) {
    let albumEntryinFirebase = this.getAlbumById(localUpdatedAlbum.$key);

    albumEntryinFirebase.update({
      artist: localUpdatedAlbum.artist,
      description: localUpdatedAlbum.description,
      price: localUpdatedAlbum.price,
      title: localUpdatedAlbum.title
    });
  }

  deleteAlbum(localUpdatedAlbum) {
    let albumEntryinFirebase = this.getAlbumById(localUpdatedAlbum.$key);

    albumEntryinFirebase.remove();
  }

}
