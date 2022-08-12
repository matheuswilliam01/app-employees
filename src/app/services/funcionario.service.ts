import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) { 
    this.firestore = firestore;
  }

  findAll(): Observable<any> {
    return this.firestore.collection("funcionarios").snapshotChanges();
  }

  insert(funcionario: Funcionario): Promise<any> {
    return this.firestore.collection("funcionarios").add(funcionario);
  }

  remove(id: string): Promise<any> {
    return this.firestore.collection('funcionarios').doc(id).delete();
  }
}
