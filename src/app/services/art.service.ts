import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireUploadTask, AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Art } from '../interfaces/art';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private firestorage: AngularFireStorage, private firestore: AngularFirestore) { }
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;


  getArts() {
    return this.firestore.collection('arts').snapshotChanges();
  }

  getArt(id: string) {
    return this.firestore.collection('arts').doc(id).get();
  }

  addArt(data: Art, thumb) {
    const id = Math.random().toString(36).substring(2);
    let artItem = data;
    artItem.imgUrl = id;
    this.addThumbArt(thumb, id).subscribe(val => {

    });
    return this.firestore.collection('arts').add(data);
  }

  addThumbArt(thumb, id) {
    this.ref = this.firestorage.ref('/arts/' + id);
    this.task = this.ref.put(thumb);
    return this.task.percentageChanges() as Observable<Number>;
  }

  deleteArt(id: string, artId: string) {
    return this.firestore.collection('arts').doc(id).delete().then(
      () => {
        this.deleteArtThumb(artId);
      }
    );
  }

  editArt(data: Art) {
    return this.firestore.collection('arts').doc(data.id).set(data);
  }

  deleteArtThumb(artId: string) {
    this.firestorage.refFromURL(`gs://moya-epitafiya-shop.appspot.com/arts/${artId}`).delete();
  }

  getThumbArt(id: string) {
    return this.firestorage.refFromURL(`gs://moya-epitafiya-shop.appspot.com/arts/${id}`).getDownloadURL() as Observable<string>;
  }
}
