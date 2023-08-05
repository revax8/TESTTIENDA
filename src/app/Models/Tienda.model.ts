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
    fecha: string;
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

  export interface ClienteArticulo {
    idCliente: number;
    idArticulo: number;
    fecha: string;
    // idArticuloNavigation: Articulo;
    // idClienteNavigation: Cliente;
  }
  export interface Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    clienteArticulos: ClienteArticulo[];
  }
   
  
  export interface TiendaXArticulo {
    idArticulo: number;
    descripcion: string;
    sucursal: string;
    idTienda: number;
    asignada: boolean;
  }

  export interface ClienteXArticulo {
    idArticulo: number;
    articulo: string;
    cliente: string;
    idCliente: number;
    asignada: boolean;
    IdTienda: number;
  }