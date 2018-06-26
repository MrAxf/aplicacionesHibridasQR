export class ScanData {
  tipo: string; 
  info: string; 

  constructor ( tipo: string, info: string) {
    this.tipo = tipo;
    this.info = info;

    this.tipo = "no definido";

    if (info.startsWith("http")) {
      this.tipo = "http";
    } else if (info.startsWith("geo")) { 
      this.tipo = "mapa"
    } else if (info.startsWith("BEGIN:VCARD")) { 
      this.tipo = "contacto";
    } else if (info.startsWith("MATMSG:TO")) { 
      this.tipo = "email";
    }
  }
}