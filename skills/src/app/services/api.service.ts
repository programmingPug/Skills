import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


	private userName: string = `watersmusic`;
	private password: string = `watersmusic`;
	private apiVersion: string = `1.12.0`;
	private appName: string = `MPlayer`;
	private dataFormat: string = `json`;
	private connectionAuth: string = `?u=${this.userName}&p=${this.password}&v=${this.apiVersion}&c=${this.appName}&f=${this.dataFormat}`;
	private baseUrl: string = `http://watersmusic.subsonic.org/rest/`;

	constructor(private http: HttpClient ) { }

	async getArtists(musicFolderId: string): Promise<any>
	{
		let apiURL = this.baseUrl.concat(`getArtists`, this.connectionAuth);
		return await this.http.get(apiURL).toPromise().then(
			res =>
			{
				return res["subsonic-response"].artists.index;
			},
			msg =>
			{
				return msg
			}
		);
	}

	async getArtist(artistId: number): Promise<any>
	{
		let apiURL = this.baseUrl.concat(`getArtist`, this.connectionAuth, `&id=${artistId}`);
		return await this.http.get(apiURL).toPromise().then(
			res =>
			{
				return res["subsonic-response"].artist;
			},
			msg =>
			{
				return msg
			}
		);
	}

	async getAlbum(albumId: number): Promise<any>
	{
		let apiURL = this.baseUrl.concat(`getAlbum`, this.connectionAuth, `&id=${albumId}`);
		return await this.http.get(apiURL).toPromise().then(
			res =>
			{
				return res["subsonic-response"].album;
			},
			msg =>
			{
				return msg
			}
		);
	}
}