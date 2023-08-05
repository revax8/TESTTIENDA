export interface Tienda {
    id: number;
    sucursal: string;
    direccion: string;
    articuloTienda: ArticuloTiendum[];
  }

  export interface ArticuloTiendum {
    id: number;
    idArticulo: number;
    idTienda: number;
    fecha: Date;
    //  idArticuloNavigation: Articulo;
    //  idTiendaNavigation: Tienda;
  }


  export interface Articulo {
    id: number;
    codigo: string;
    descripcion: string;
    precio: number | null;
    imagen: string;
    stock: number;
    articuloTienda: ArticuloTiendum[];
    clienteArticulos: ClienteArticulo[];
  }
  // export interface ArticuloTiendum {
  //   id: number;
  //   idArticulo: number;
  //   idTienda: number;
  //   fecha: Date;
  //   idArticuloNavigation: Articulo;
  //   idTiendaNavigation: Tienda;
  // }
  export interface ClienteArticulo {
    idCliente: number;
    idArticulo: number;
    fecha: number;
    idArticuloNavigation: Articulo;
    idClienteNavigation: Cliente;
  }
  export interface Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    clienteArticulos: ClienteArticulo[];
  }
  
  // export interface ArticuloTiendum {
  //   Id: number;
  //   IdArticulo: number;
  //   IdTienda: number;
  //   Fecha: Date;
  //   IdArticuloNavigation: Articulo;
  //   IdTiendaNavigation: Tienda;
  // }
  
  
  
  