import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

	alphaArtists: any[] = [];
	artistLibrary: any = {};
	artistAlbum: any = {};

	constructor(private api: ApiService) { }

	ngOnInit()
	{
		this.getArtists();
	}

	async getArtists()
	{
		try
		{
			this.alphaArtists = await this.api.getArtists("s");
		} catch (error)
		{

		}
		console.log(this.alphaArtists)
	}

	async getArtist(artistId: number)
	{
		this.artistLibrary = [];
		try
		{
			this.artistLibrary = await this.api.getArtist(artistId);
		} catch (error)
		{

		}
		console.log(this.artistLibrary)

	}

	async getAlbum(albumId: number)
	{
		this.artistAlbum = [];
		console.log(albumId);
		try
		{
			this.artistAlbum = await this.api.getAlbum(albumId);
		} catch (error)
		{
		}
		console.log(this.artistAlbum)
	}

	isNotEmptyArray(array: any)
	{
		if (array && array.length)
		{
			return true;
		} else
		{
			return false;
		}
	}

	isNotEmptyObject(obj: any)
	{
		if (Object.keys(obj).length === 0 && obj.constructor === Object)
		{
			return false;
		} else
		{
			return true;
		}
	}

}