import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';

const baseUrl = 'http://localhost:8080/api/operations';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<Operation[]> {
		return this.http.get<Operation[]>(baseUrl);
	}

	get(id: any): Observable<Operation> {
		return this.http.get(`${baseUrl}/${id}`);
	}

	create(data: any): Observable<any> {
		return this.http.post(baseUrl, data);
	}

	update(id: any, data: any): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	delete(id: any): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	deleteAll(): Observable<any> {
		return this.http.delete(baseUrl);
	}

	findByVille(ville: any): Observable<Operation[]> {
		return this.http.get<Operation[]>(`${baseUrl}?ville=${ville}`);
	}

	findByetat_d_avancement(etat_d_avancement: any): Observable<Operation[]> {
		return this.http.get<Operation[]>(
			`${baseUrl}?etat_d_avancement=${etat_d_avancement}`
		);
	}
}
