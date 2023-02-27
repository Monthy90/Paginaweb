import { Component, Input } from '@angular/core';
import { ServicioFavoritosService } from 'src/app/servicio-favoritos.service';
interface Tarjeta{
  titulo:string;
  Descripcion:string;
  image?:string;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  public ArregloTarjetas: Tarjeta[]=[];

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";
  @Input() dataEntrante:any;
  constructor(private servicioFavorito: ServicioFavoritosService) { }


  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', Descripcion: 'Descripcion', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKEkizsVLsHlmnfwo5zwEIqDD0p8xhzddkw&usqp=CAU"
      },
      {titulo:'Video 2', Descripcion: 'Descripcion', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_2--PUgtKKlJAqLyOw1JKbL7-O0VrZwBew&usqp=CAU"
      },
      {titulo:'Video 3', Descripcion: 'Descripcion', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn45H9c_ePmcDtsDM4uL8soHTgRodiaCPHvvU5joGsvA6t3zeVmrNwViJLHzONoZiulg&usqp=CAU"
      },

     ]
     }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
      {data: this.dataEntrante}
    )
  }



}
